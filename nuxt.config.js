const pkg = require("./package");
const axios = require("axios");

module.exports = {
  mode: "universal",

  /*
  ** Headers of the page
  */
  head: {
    title: "Jared Pike",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:400,400i,700"
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: "~/components/TheLoader.vue",

  /*
  ** Global CSS
  */
  css: ["@/assets/styles/main.scss"],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{ src: "~plugins/three", ssr: false }, "plugins/directives/reveal"],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios",
    [
      "storyblok-nuxt",
      {
        accessToken:
          process.env.NODE_ENV == "production"
            ? "kr2RQ5qwoCNn5nQ1L7oaDAtt"
            : "Ngt7vpTcG6oeQSfII63q9gtt",
        cacheProvider: "memory"
      }
    ],
    [
      "nuxt-sass-resources-loader",
      {
        resources: "@/assets/styles/main.scss"
      }
    ],
    ["@nuxtjs/markdownit", { linkify: true }]
  ],
  markdownit: {
    injected: true
  },
  generate: {
    routes: function() {
      return axios
        .get(
          "https://api.storyblok.com/v1/cdn/stories?version=published&token=kr2RQ5qwoCNn5nQ1L7oaDAtt&starts_with=work&cv=" +
            Math.floor(Date.now() / 1e3)
        )
        .then(res => {
          const caseStudies = res.data.stories.map(cs => cs.full_slug);
          return ["/", "/work", "/about", ...caseStudies];
        });
    }
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    postcss: [require("autoprefixer")()],
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
