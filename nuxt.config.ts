// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@vueuse/nuxt'],
  app: {
    head: {
      title: 'YouTube Music',
      script: [{ src: 'https://www.youtube.com/iframe_api' }],
    },
  },
});
