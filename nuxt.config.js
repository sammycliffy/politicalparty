export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  head: {
    title: 'politicalparty',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", type: "text/css", href: '/styles.css' },
      { rel: "stylesheet", type: "text/css", href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css' },

    ],
    script: [
      {
        type: 'text/javascript',
        src: 'https://cdn.jsdelivr.net/npm/simple-datatables@latest',
      },
      {
        type: 'text/javascript',
        src: '/datatables-simple-demo.js',
      },
    ]
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
    '@nuxtjs/apollo',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://phdpolitical.herokuapp.com',
    // baseURL: 'http://localhost:8000', 
    
  },
  // https://djangograph.herokuapp.com/graphql
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://djangograph.herokuapp.com/graphql',
      }
    },
  

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    }
  }
  
}
