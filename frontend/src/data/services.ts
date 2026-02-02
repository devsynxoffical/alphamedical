export interface Service {
  id: string
  name: string
  shortDescription: string
  description: string
  features: string[]
  benefits: string[]
  metrics: {
    label: string
    value: string
  }[]
  process: {
    step: number
    title: string
    description: string
  }[]
  icon?: string
}

export const services: Service[] = [
  {
    id: 'medical-billing',
    name: 'Medical Billing Services',
    shortDescription: 'Complete claim cycle management, denial reduction, and AR optimization.',
    description: 'Our comprehensive medical billing services ensure maximum revenue recovery with 92% first-pass rate and 72-hour claim turnaround. We handle the entire billing cycle from charge entry to payment posting.',
    icon: '/src/Images/medical-expanse.png',
    features: [
      'Complete claim cycle management',
      'Denial reduction and management',
      'AR optimization and follow-up',
      'Real-time reporting and analytics',
      'HIPAA-compliant processes'
    ],
    benefits: [
      '92% first submission pass rate',
      '72-hour claim turnaround',
      'Up to 10% revenue increase',
      'Reduced administrative burden',
      'Improved cash flow'
    ],
    metrics: [
      { label: 'First Pass Rate', value: '92%' },
      { label: 'Claim Turnaround', value: '72 Hours' },
      { label: 'Revenue Increase', value: 'Up to 10%' }
    ],
    process: [
      {
        step: 1,
        title: 'Charge Entry',
        description: 'Accurate entry of patient charges and procedures into billing system'
      },
      {
        step: 2,
        title: 'Claim Submission',
        description: 'Electronic submission of claims to insurance providers'
      },
      {
        step: 3,
        title: 'Denial Management',
        description: 'Proactive follow-up on denied or rejected claims'
      },
      {
        step: 4,
        title: 'Payment Posting',
        description: 'Reconciliation and posting of payments received'
      }
    ]
  },
  {
    id: 'virtual-assistant',
    name: 'Virtual Medical Assistant',
    shortDescription: 'Remote staff for scheduling, claims follow-up, and documentation.',
    description: 'Our virtual medical assistants provide comprehensive remote support for your practice, handling scheduling, patient communication, and administrative tasks with HIPAA compliance.',
    features: [
      'Patient scheduling and appointment management',
      'Claims follow-up and status checking',
      'Medical documentation support',
      'Patient communication and reminders',
      'Administrative task management'
    ],
    benefits: [
      'Cost-effective staffing solution',
      '24/7 availability',
      'Reduced administrative burden',
      'Improved patient satisfaction',
      'Scalable support'
    ],
    metrics: [
      { label: 'Cost Savings', value: 'Up to 60%' },
      { label: 'Response Time', value: '< 2 Hours' },
      { label: 'Patient Satisfaction', value: '95%' }
    ],
    process: [
      {
        step: 1,
        title: 'Assessment',
        description: 'Evaluate your practice needs and requirements'
      },
      {
        step: 2,
        title: 'Matching',
        description: 'Match you with qualified virtual assistants'
      },
      {
        step: 3,
        title: 'Training',
        description: 'Train assistants on your specific processes'
      },
      {
        step: 4,
        title: 'Integration',
        description: 'Seamless integration with your existing systems'
      }
    ]
  },
  {
    id: 'medical-coding',
    name: 'Medical Coding Services',
    shortDescription: 'ICD-10 and CPT coding compliance with accuracy guarantees.',
    description: 'Expert medical coding services ensuring accurate ICD-10 and CPT coding for maximum reimbursement and compliance with healthcare regulations.',
    icon: '/src/Images/brain.png',
    features: [
      'ICD-10 and CPT coding',
      'Coding accuracy review',
      'Compliance monitoring',
      'Coding education and training',
      'Audit support'
    ],
    benefits: [
      'Improved coding accuracy',
      'Reduced audit risk',
      'Maximum reimbursement',
      'Compliance assurance',
      'Expert coding support'
    ],
    metrics: [
      { label: 'Coding Accuracy', value: '99%' },
      { label: 'Audit Risk Reduction', value: '85%' },
      { label: 'Reimbursement Increase', value: '12%' }
    ],
    process: [
      {
        step: 1,
        title: 'Document Review',
        description: 'Thorough review of medical documentation'
      },
      {
        step: 2,
        title: 'Code Assignment',
        description: 'Accurate assignment of ICD-10 and CPT codes'
      },
      {
        step: 3,
        title: 'Quality Check',
        description: 'Multi-level quality assurance review'
      },
      {
        step: 4,
        title: 'Submission',
        description: 'Final coding submission with documentation'
      }
    ]
  },
  {
    id: 'payment-posting',
    name: 'Medical Payment Posting Services',
    shortDescription: 'Reconciliation and transparent AR management.',
    description: 'Comprehensive payment posting services ensuring accurate reconciliation of payments and transparent accounts receivable management.',
    icon: '/src/Images/card-payment.png',
    features: [
      'Payment reconciliation',
      'AR management and reporting',
      'Payment posting accuracy',
      'Denial tracking and analysis',
      'Financial reporting'
    ],
    benefits: [
      'Accurate payment posting',
      'Improved cash flow visibility',
      'Reduced payment errors',
      'Better financial reporting',
      'Enhanced revenue tracking'
    ],
    metrics: [
      { label: 'Posting Accuracy', value: '99.5%' },
      { label: 'Processing Time', value: '24 Hours' },
      { label: 'Error Reduction', value: '90%' }
    ],
    process: [
      {
        step: 1,
        title: 'Payment Receipt',
        description: 'Receipt and verification of payment information'
      },
      {
        step: 2,
        title: 'Reconciliation',
        description: 'Matching payments to corresponding claims'
      },
      {
        step: 3,
        title: 'Posting',
        description: 'Accurate posting to patient accounts'
      },
      {
        step: 4,
        title: 'Reporting',
        description: 'Detailed reporting and analysis'
      }
    ]
  },
  {
    id: 'virtual-receptionist',
    name: 'Virtual Medical Receptionist Services',
    shortDescription: 'HIPAA-compliant virtual reception and patient coordination.',
    description: 'Professional virtual receptionist services providing HIPAA-compliant patient communication, appointment scheduling, and front desk support.',
    features: [
      'Patient appointment scheduling',
      'HIPAA-compliant communication',
      'Insurance verification',
      'Patient registration support',
      'Call handling and routing'
    ],
    benefits: [
      '24/7 patient support',
      'Reduced phone wait times',
      'Improved patient experience',
      'Cost-effective solution',
      'Professional service delivery'
    ],
    metrics: [
      { label: 'Call Answer Rate', value: '99%' },
      { label: 'Average Wait Time', value: '< 30 sec' },
      { label: 'Patient Satisfaction', value: '98%' }
    ],
    process: [
      {
        step: 1,
        title: 'Call Handling',
        description: 'Professional call reception and routing'
      },
      {
        step: 2,
        title: 'Appointment Scheduling',
        description: 'Efficient appointment booking and management'
      },
      {
        step: 3,
        title: 'Patient Support',
        description: 'Comprehensive patient assistance and information'
      },
      {
        step: 4,
        title: 'Follow-up',
        description: 'Appointment reminders and confirmations'
      }
    ]
  },
  {
    id: 'healthcare-seo',
    name: 'Healthcare SEO',
    shortDescription: 'Grow online visibility for clinics and practitioners.',
    description: 'Specialized healthcare SEO services designed to improve your practice\'s online visibility and attract more patients through strategic digital marketing.',
    features: [
      'Healthcare-specific SEO strategy',
      'Local search optimization',
      'Content marketing for healthcare',
      'Online reputation management',
      'Patient acquisition optimization'
    ],
    benefits: [
      'Increased online visibility',
      'More qualified patient leads',
      'Improved search rankings',
      'Better online reputation',
      'Measurable ROI'
    ],
    metrics: [
      { label: 'Search Ranking Improvement', value: '300%' },
      { label: 'Website Traffic Increase', value: '250%' },
      { label: 'Patient Lead Generation', value: '180%' }
    ],
    process: [
      {
        step: 1,
        title: 'SEO Audit',
        description: 'Comprehensive analysis of current online presence'
      },
      {
        step: 2,
        title: 'Strategy Development',
        description: 'Custom SEO strategy for healthcare practice'
      },
      {
        step: 3,
        title: 'Implementation',
        description: 'Technical and content optimization'
      },
      {
        step: 4,
        title: 'Monitoring',
        description: 'Ongoing monitoring and optimization'
      }
    ]
  },
  {
    id: 'credentialing',
    name: 'Medical Credentialing Services',
    shortDescription: 'Provider enrollment, CAQH management, and payer verification.',
    description: 'Comprehensive medical credentialing services handling provider enrollment, CAQH management, and payer network verification to expand your practice reach.',
    icon: '/src/Images/credential.png',
    features: [
      'Provider enrollment and credentialing',
      'CAQH ProView management',
      'Payer network verification',
      'License and certification tracking',
      'Credentialing compliance'
    ],
    benefits: [
      'Expanded payer networks',
      'Reduced credentialing time',
      'Compliance assurance',
      'Increased revenue opportunities',
      'Expert credentialing support'
    ],
    metrics: [
      { label: 'Credentialing Time', value: '50% Faster' },
      { label: 'Approval Rate', value: '95%' },
      { label: 'Network Expansion', value: '200%' }
    ],
    process: [
      {
        step: 1,
        title: 'Application Preparation',
        description: 'Complete credentialing application preparation'
      },
      {
        step: 2,
        title: 'Submission',
        description: 'Submission to multiple payer networks'
      },
      {
        step: 3,
        title: 'Follow-up',
        description: 'Proactive follow-up on application status'
      },
      {
        step: 4,
        title: 'Verification',
        description: 'Final verification and network activation'
      }
    ]
  }
]
