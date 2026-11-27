// Browser-safe route lookups backed by the generated src/seo/routeIndex.json
// (see scripts/route-index.mjs). Same answers as findRoute/breadcrumbTrail in
// routes.ts, without bundling all page data.
import routeIndex from './routeIndex.json'
import type { RouteKind } from './routes'

interface RouteMeta {
  path: string
  kind: RouteKind
  label: string
  serviceType?: string
  areaServed?: string
}

type IndexEntry = Omit<RouteMeta, 'path'> & { trail: { name: string; path: string }[] }
const index = routeIndex as Record<string, IndexEntry>

const normalize = (path: string) => (path !== '/' ? path.replace(/\/+$/, '') : path)

export const findRoute = (path: string): RouteMeta | undefined => {
  const p = normalize(path)
  const hit = index[p]
  if (!hit) return undefined
  const { trail: _trail, ...meta } = hit
  void _trail
  return { path: p, ...meta }
}

export const breadcrumbTrail = (path: string): { name: string; path: string }[] => index[normalize(path)]?.trail ?? []
