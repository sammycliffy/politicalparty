export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-secentry',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    script: [
  
      {
        type: 'text/javascript',
        src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js',
      },
      
       ],
       link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: "stylesheet", type: "text/css", href: '/css/styles.css' },
        { rel: "stylesheet", type: "text/css", href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css' },
  
      ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
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
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://ugokingsley.pythonanywhere.com/', 
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
