<template>
  <div class="app">
    <TheHeader />
    <main class="main">
      <nuxt/>
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";

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
          (this.$route.path.startsWith("/work/") &&
            this.$route.path !== "/work/") ||
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
    TheHeader,
    TheFooter
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/reset.scss";
@import "@/assets/styles/transitions.scss";

html {
  font-size: 50%;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;

  @include for-tablet-portrait-up {
    font-size: 62.5%;
  }

  @include for-big-desktop-up {
    font-size: 75%;
  }
}

body {
  font-size: 1rem;
  font-family: $primary-font;
  width: 100%;
  height: 100%;
  background-color: -color(abyss);
  overflow-y: scroll;

  &.body--light {
    background-color: -color(pillow);
  }
}

.main {
  margin-top: 14rem;

  @include for-tablet-portrait-up {
    margin-top: 20rem;
  }
}
</style>
