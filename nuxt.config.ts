// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/image-edge"],
  postcss: {
    plugins: {
      "postcss-import": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    compressPublicAssets: true,
  },
  typescript: {
    strict: true,
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
    },
  },
  debug: false,
  app: {
    head: {
      title: "MoovieTime",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [{ rel: "icon", href: "/new-favicon.svg" }],
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  sourcemap: true,
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
    presets: {
      default: {
        modifiers: {
          format: "webp",
        },
        provider: "static",
      },
    },
  },
});
