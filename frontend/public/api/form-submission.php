<?php
// Lead form endpoint for the static site on cPanel hosting.
// Replaces the Node mail server (server.js), which was never deployed:
// before this file existed, every form POST to /api/form-submission returned 404.
//
// POST JSON {source, payload} -> emails the lead to MAIL_TO.
// GET ?healthcheck=1 -> {"ok":true,...} (no email sent; used by the deploy check).

const MAIL_TO = 'web@alphamediassist.com';          // inbox that receives leads
const MAIL_FROM = 'web@alphamediassist.com';        // must be a mailbox on this domain (SPF)
const ALLOWED_SOURCES = ['Contact Form', 'Free Consultation Form', 'Book Appointment Form'];
const MAX_FIELDS = 30;
const MAX_VALUE_LENGTH = 4000;
const RATE_LIMIT = 5;            // submissions per IP...
const RATE_WINDOW = 600;         // ...per 10 minutes

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function respond(int $status, array $body): void {
  http_response_code($status);
  echo json_encode($body);
  exit;
}

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

if ($method === 'GET' && isset($_GET['healthcheck'])) {
  respond(200, ['ok' => true, 'endpoint' => 'form-submission', 'mail' => function_exists('mail')]);
}
if ($method === 'OPTIONS') {
  header('Allow: POST, OPTIONS');
  respond(204, []);
}
if ($method !== 'POST') {
  header('Allow: POST');
  respond(405, ['ok' => false, 'message' => 'Method not allowed.']);
}

// Simple per-IP rate limit (file based, no database needed).
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateFile = sys_get_temp_dir() . '/ama_form_' . md5($ip);
$now = time();
$hits = [];
if (is_readable($rateFile)) {
  $hits = array_filter(array_map('intval', explode(',', (string) file_get_contents($rateFile))), fn ($t) => $t > $now - RATE_WINDOW);
}
if (count($hits) >= RATE_LIMIT) {
  respond(429, ['ok' => false, 'message' => 'Too many submissions. Please call us instead.']);
}

$raw = file_get_contents('php://input');
if ($raw === false || strlen($raw) > 50000) {
  respond(400, ['ok' => false, 'message' => 'Invalid request.']);
}
$data = json_decode($raw, true);
$source = is_array($data) ? ($data['source'] ?? null) : null;
$payload = is_array($data) ? ($data['payload'] ?? null) : null;

if (!is_string($source) || !in_array($source, ALLOWED_SOURCES, true) || !is_array($payload) || count($payload) > MAX_FIELDS) {
  respond(400, ['ok' => false, 'message' => 'Invalid request payload.']);
}

// Honeypot: real visitors never fill this hidden field.
if (!empty($payload['company_website'])) {
  respond(200, ['ok' => true]);
}
unset($payload['company_website']);

$clean = [];
foreach ($payload as $key => $value) {
  $k = preg_replace('/[^A-Za-z0-9 _-]/', '', (string) $key);
  if ($k === '') continue;
  if (is_bool($value)) $value = $value ? 'Yes' : 'No';
  if (!is_scalar($value)) continue;
  $v = trim(substr((string) $value, 0, MAX_VALUE_LENGTH));
  $clean[$k] = $v;
}

$email = isset($clean['email']) && filter_var($clean['email'], FILTER_VALIDATE_EMAIL) ? $clean['email'] : '';
if ($email === '' && empty($clean['phone'])) {
  respond(400, ['ok' => false, 'message' => 'Please provide an email address or phone number.']);
}

$submittedAt = gmdate('Y-m-d H:i:s') . ' UTC';
$lines = ["New {$source} submission", "Submitted: {$submittedAt}", "Page: " . substr((string) ($_SERVER['HTTP_REFERER'] ?? '-'), 0, 300), ''];
$rows = '';
foreach ($clean as $k => $v) {
  $lines[] = "{$k}: {$v}";
  $rows .= '<tr><td style="padding:6px 10px;border:1px solid #ddd"><strong>' . htmlspecialchars($k) . '</strong></td>'
         . '<td style="padding:6px 10px;border:1px solid #ddd">' . nl2br(htmlspecialchars($v)) . '</td></tr>';
}
$text = implode("\n", $lines);
$html = '<h2>New ' . htmlspecialchars($source) . ' submission</h2><p>Submitted: ' . $submittedAt . '</p>'
      . '<table style="border-collapse:collapse">' . $rows . '</table>';

$boundary = 'ama' . bin2hex(random_bytes(8));
$headers = [
  'From: Alpha Medi Assist Website <' . MAIL_FROM . '>',
  'MIME-Version: 1.0',
  'Content-Type: multipart/alternative; boundary="' . $boundary . '"',
];
if ($email !== '') {
  $headers[] = 'Reply-To: ' . $email;
}
$body = "--{$boundary}\r\nContent-Type: text/plain; charset=UTF-8\r\n\r\n{$text}\r\n"
      . "--{$boundary}\r\nContent-Type: text/html; charset=UTF-8\r\n\r\n{$html}\r\n--{$boundary}--";

$subject = 'New website lead: ' . $source;
$sent = function_exists('mail') && mail(MAIL_TO, $subject, $body, implode("\r\n", $headers), '-f' . MAIL_FROM);

if (!$sent) {
  respond(500, ['ok' => false, 'message' => 'We could not send your request. Please call +1 424-542-7170.']);
}

$hits[] = $now;
@file_put_contents($rateFile, implode(',', $hits));
respond(200, ['ok' => true]);
