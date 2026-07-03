import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'FewUI Kit',
  description: 'AI-oriented UI framework — components, tokens, rules, and skills.',
  base: '/',
  ignoreDeadLinks: [/^http:\/\/localhost:5175/],
  themeConfig: {
    nav: [
      { text: 'Kit', link: '/kit/' },
      { text: 'Playground', link: 'http://localhost:5175', target: '_blank' },
    ],
    sidebar: [
      {
        text: 'Kit',
        items: [
          { text: 'Introduction', link: '/kit/' },
          { text: 'Getting started', link: '/kit/getting-started' },
          { text: 'Theming', link: '/kit/theming' },
          { text: 'Skills & rules', link: '/kit/skills-and-rules' },
          { text: 'Components', link: '/kit/components' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/iheardthevoice/fewui' },
    ],
  },
})
