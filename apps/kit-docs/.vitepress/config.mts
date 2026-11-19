import { defineConfig } from 'vitepress'
import componentsSidebar from './components-sidebar.json'

/** Bileşen sayfaları ve `components-sidebar.json` üretilir: `pnpm --filter fewui run build:meta`. */
export default defineConfig({
  title: 'FewUI Kit',
  description: 'AI-oriented UI framework — components, tokens, rules, and skills.',
  base: '/',
  ignoreDeadLinks: [
    /^http:\/\/localhost:5175/,
    /^https:\/\/fewui-docs\.pages\.dev/,
  ],
  themeConfig: {
    search: { provider: 'local' },
    nav: [
      { text: 'Guide', link: '/kit/' },
      { text: 'Components', link: '/kit/components/' },
      { text: 'Playground', link: 'https://fewui-docs.pages.dev', target: '_blank' },
    ],
    sidebar: {
      '/kit/components/': [
        { text: 'Components', items: [{ text: 'Overview', link: '/kit/components/' }] },
        ...componentsSidebar,
      ],
      '/kit/': [
        {
          text: 'Guide',
          items: [
            { text: 'Introduction', link: '/kit/' },
            { text: 'Getting started', link: '/kit/getting-started' },
            { text: 'Theming', link: '/kit/theming' },
            { text: 'Localization & RTL', link: '/kit/localization' },
            { text: 'Accessibility', link: '/kit/accessibility' },
            { text: 'TypeScript & tooling', link: '/kit/tooling' },
            { text: 'Skills & rules', link: '/kit/skills-and-rules' },
            { text: 'Components', link: '/kit/components/' },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/iheardthevoice/fewui' },
    ],
  },
})
