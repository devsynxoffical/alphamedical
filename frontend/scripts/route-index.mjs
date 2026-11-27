// Writes src/seo/routeIndex.json: a small path -> {kind, label, breadcrumb trail}
// index of every indexable URL, built from src/seo/routes.ts.
//
// The browser uses this index (src/seo/routeMeta.ts) to build page schema, so it
// does not have to download every page's content just to know a page's label and
// breadcrumbs. It runs before the client build (see "build" in package.json), so the
// index always matches the route registry.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const { siteRoutes, breadcrumbTrail } = await import(pathToFileURL(path.join(root, 'dist-routes', 'routes.js')).href)

const index = {}
for (const r of siteRoutes) {
  index[r.path] = {
    kind: r.kind,
    label: r.label,
    ...(r.serviceType ? { serviceType: r.serviceType } : {}),
    ...(r.areaServed ? { areaServed: r.areaServed } : {}),
    trail: breadcrumbTrail(r.path),
  }
}

const out = path.join(root, 'src', 'seo', 'routeIndex.json')
const json = JSON.stringify(index, null, 1) + '\n'
if (!fs.existsSync(out) || fs.readFileSync(out, 'utf8') !== json) fs.writeFileSync(out, json)
console.log(`routeIndex.json: ${siteRoutes.length} routes`)
