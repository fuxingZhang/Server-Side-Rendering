const resolve = require('path').resolve

module.exports = {
  router: {
    base: '/',
    mode: 'history',
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    },
    middleware: 'user-agent',
    extendRoutes (routes) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue')
      })
    }
  },
  transition: {
    name: 'page',
    mode: 'out-in',
    beforeEnter (el) {
      console.log('Before enter...');
    }
  },
  css: [
    'assets/main.css'
  ],
  head: {
    title: 'Foo Bar',
    titleTemplate: '%s - Nuxt.js',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', href: 'favicon.ico', sizes: '128x128', typ: "image/x-icon" }
    ]
  }
}