import { createElement, lazy, type ComponentType } from 'react'

export type PreloadablePage<P extends object = object> = ComponentType<P> & {
  preload: () => Promise<void>
}

/**
 * Route-level code splitting that stays compatible with build-time prerendering
 * and hydration. Once `preload()` has resolved (the prerender script preloads every
 * page; the browser preloads the current page before hydrating), the page renders
 * synchronously, so the static HTML and the first client render match. Before that,
 * it falls back to React.lazy inside the surrounding <Suspense>.
 */
export function lazyPage<P extends object = object>(
  load: () => Promise<{ default: ComponentType<P> }>,
): PreloadablePage<P> {
  let Loaded: ComponentType<P> | null = null
  let pending: Promise<void> | null = null
  const preload = () =>
    (pending ??= load().then((m) => {
      Loaded = m.default
    }))
  const Lazy = lazy(() => preload().then(() => ({ default: Loaded as ComponentType<P> })))
  const Page = ((props: P) => createElement((Loaded ?? Lazy) as ComponentType<P>, props)) as PreloadablePage<P>
  Page.preload = preload
  return Page
}
