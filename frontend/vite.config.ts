import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Pages are code-split (src/lazyPage.ts), but all CSS stays in one file linked
    // from the prerendered HTML. Per-page CSS chunks would only arrive with the page's
    // JS, so the static HTML would paint unstyled first (layout shift).
    cssCodeSplit: false,
  },
})
