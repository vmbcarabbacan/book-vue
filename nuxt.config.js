import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - book',
    title: 'book',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '@/plugin/forward-set-cookies.js', mode: 'server' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components',
    { path: '~/components/modals', extensions: ['vue'] },
    { path: '~/components/forms', extensions: ['vue'] },
    { path: '~/components/tables', extensions: ['vue'] },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/composition-api/module', // composition api https://composition-api.nuxtjs.org/getting-started/setup
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next', // authentication https://auth.nuxtjs.org/guide/setup/
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth', methods: 'post', propertyName: 'token', credentials: 'includes' },
          logout: { url: "/auth/logout", method: "delete" },
          user: { url: '/users/current-user', methods: 'get', propertyName: 'users' }
        },

        tokenType: ''
      },
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.BASE_URL,
    proxyHeaders: false,
    credentials: true
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // set auth in middle; if not logged in redirect to /login
  router: {
    middleware: ['auth', 'bearer']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: { extend (config, { isDev, isClient }) {
    config.node = {
      fs: 'empty'
    }
  
  }},
}
