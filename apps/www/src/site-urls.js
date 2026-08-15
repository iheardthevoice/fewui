export const KIT_DOCS_ORIGIN =
  import.meta.env.VITE_KIT_DOCS_ORIGIN ||
  (import.meta.env.DEV ? 'http://localhost:5174' : 'https://fewui-kit.pages.dev')

export const PLAYGROUND_ORIGIN =
  import.meta.env.VITE_PLAYGROUND_ORIGIN ||
  (import.meta.env.DEV ? 'http://localhost:5175' : 'https://fewui-docs.pages.dev')

export const KIT_DOCS_URL = `${KIT_DOCS_ORIGIN}/kit/`
export const PLAYGROUND_EMBED_URL = `${PLAYGROUND_ORIGIN}/?embed=1`
