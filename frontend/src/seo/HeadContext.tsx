import { createContext } from 'react'

export interface HeadData {
  title: string
  description?: string
  canonical: string
  robots: string
  ogType: string
  image: string
  jsonLd: Record<string, unknown>[]
}

/**
 * During build-time prerendering a collector object is provided so that
 * <PageTitle> can hand its head tags to scripts/prerender.mjs.
 * In the browser the context is null and <PageTitle> updates document.head.
 */
export interface HeadCollector {
  data?: HeadData
}

export const HeadContext = createContext<HeadCollector | null>(null)
