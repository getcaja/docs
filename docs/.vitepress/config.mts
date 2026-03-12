import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Caja',
  description: 'A design tool built for the AI era. No middleware, no translation layers. Design by hand, delegate to AI, or both.',
  lang: 'en-US',
  appearance: 'dark',

  vite: {
    server: {
      port: 4000,
    },
  },

  head: [
    ['link', { rel: 'icon', href: '/caja-symbol.png' }],
  ],

  themeConfig: {
    logo: '/caja-symbol.png',
    nav: [
      { text: 'Guide', link: '/guide/what-is-caja' },
      { text: 'MCP', link: '/mcp/overview' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'What is Caja?', link: '/guide/what-is-caja' },
          { text: 'Installation', link: '/guide/installation' },
        ],
      },
      {
        text: 'Interface',
        items: [
          { text: 'Overview', link: '/interface/overview' },
          { text: 'Left Panel', link: '/interface/layers-panel' },
          { text: 'Canvas', link: '/interface/canvas' },
          { text: 'Properties Panel', link: '/interface/properties-panel' },
          { text: 'Toolbar', link: '/interface/toolbar' },
        ],
      },
      {
        text: 'Core Concepts',
        items: [
          { text: 'Frames & Elements', link: '/concepts/frames' },
          { text: 'Layout (Flex & Grid)', link: '/concepts/layout' },
          { text: 'Responsive Design', link: '/concepts/responsive' },
          { text: 'Tailwind Tokens', link: '/concepts/tokens' },
          { text: 'Components', link: '/concepts/components' },
          { text: 'Component Libraries', link: '/concepts/libraries' },
          { text: 'Pages & Routing', link: '/concepts/pages' },
          { text: 'Export', link: '/concepts/export' },
        ],
      },
      {
        text: 'MCP Integration',
        items: [
          { text: 'Overview', link: '/mcp/overview' },
          { text: 'Connecting an Agent', link: '/mcp/connecting' },
          { text: 'Tools Reference', link: '/mcp/tools' },
        ],
      },
      {
        text: 'Libraries',
        items: [
          { text: 'Import & Export', link: '/libraries/import-export' },
          { text: 'Radix', link: '/libraries/radix' },
          { text: 'shadcn/ui', link: '/libraries/shadcn' },
        ],
      },
      {
        text: 'Reference',
        items: [
          { text: 'Keyboard Shortcuts', link: '/reference/shortcuts' },
          { text: 'File Format (.caja)', link: '/reference/file-format' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/getcaja/caja' },
    ],
  },
})
