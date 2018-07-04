<template>
  <div class="app">
    <TheHeader />
    <main class="main">
      <nuxt/>
    </main>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";

export default {
  data() {
    return {
      isLight: false
    };
  },
  created() {
    this.routeChanged();
  },
  watch: {
    $route: "routeChanged"
  },
  methods: {
    routeChanged() {
      if (process.browser) {
        const body = document.querySelector("body");
        if (
          this.$route.path.startsWith("/work/") ||
          this.$route.path.startsWith("/about")
        ) {
          body.classList.add("body--light");
        } else {
          body.classList.remove("body--light");
        }
      }
    }
  },
  components: {
    TheHeader
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/reset.scss";
@import "@/assets/styles/transitions.scss";

html {
  font-size: 62.5%;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

body {
  font-size: 1rem;
  font-family: "IBM Plex Sans", "Helvetica", sans-serif;
  width: 100%;
  height: 100%;
  background-color: -color(abyss);
  transition: background-color 0.6s $ease-in-out-quart;
  overflow-y: scroll;

  &.body--light {
    background-color: -color(pillow);
  }
}

.main {
  @extend %container;

  margin-top: 20rem;
}
</style>
