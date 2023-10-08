// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    plugins: [
      require('vite-plugin-inspect')()
    ]
  },
  app: {
    head: {
      // title: 'nuxt-vite-inspect',
      titleTemplate: 'Mastering Nuxt Three BnB: %s',
      htmlAttrs: {
        lang: 'en',
      },
      bodyAttrs: {
        class: ['my-style'],
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' },
        {  name: 'description', content: 'nuxt-vite-inspect' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    },
  },
})
