export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Rin's Portfolio Website",
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'WebコーダーRinのポートフォリオサイト' },
      { name: 'keywords', content: '' },
      { property: 'og:title', content: "Rin's Portfolio Website" },
      { property: 'og:description', content: 'WebコーダーRinのポートフォリオサイト' },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: 'https://www.webcreatorrin.com/' },
      { property: 'og:image', content: 'https://www.webcreatorrin.com/ogp.jpg' },
      { property: 'og:site_name', content: "Rin's Portfolio Website" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://unpkg.com/ress/dist/ress.min.css' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&family=Noto+Sans+JP:wght@100..900&family=Outfit&display=swap' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/style/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: '/assets/',
  }
}
