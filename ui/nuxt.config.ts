import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { viteSingleFile } from "vite-plugin-singlefile"
export default defineNuxtConfig({
  ssr: true,

  app: {
    // baseURL: './',
    // buildAssetsDir: '/',
    head: {
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      charset: 'utf-8',
      meta: [
        { name: 'description', content: '' },
        { name: 'viewport', content: 'width=device-width' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      script: [
        { src: 'https://cdn.tailwindcss.com', defer: true }
      ]
    }
  },

  typescript: { shim: false, strict: true },
  modules: [
    'vuetify-nuxt-module',
    '@nuxt/icon',
    '@nuxt/eslint',
    '@formkit/auto-animate/nuxt'
  ],
  vite: {
    plugins: [vanillaExtractPlugin({}), viteSingleFile()],
    build: {
      assetsInlineLimit: 0
    }
  },
  runtimeConfig: {
    app: {
      name: 'Nuxt',
      version: '1.0.0',
      baseURL: './',
      host: 'localhost',
      port: 3000
    }
  },

  devtools: { enabled: true },

  eslint: {
    checker: true,
    config: {
      stylistic: {
        commaDangle: 'never'
      }
    }
  },

  icon: {
    customCollections: [
      {
        prefix: 'custom-icon',
        dir: './assets/icons'
      }
    ]
  },

  compatibilityDate: '2024-08-05',

  experimental: {
    payloadExtraction: false,
  },
})
