import VWave from 'v-wave';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VWave, {
    colors: 'white',
    initialOpacity: 0.2,
    easing: 'ease-in',
  });
});
