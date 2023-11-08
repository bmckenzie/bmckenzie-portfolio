import { UniqIdsPlugin } from 'vue-uniq-ids'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(UniqIdsPlugin);
})
