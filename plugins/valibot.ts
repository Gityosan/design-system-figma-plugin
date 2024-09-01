import '@valibot/i18n/ja'
import * as v from 'valibot'

export default defineNuxtPlugin(() => {
  v.setGlobalConfig({ lang: 'ja' })
})
