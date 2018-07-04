<template>
  <div class="app" :class="{ 'app--light' : isLight }">
    <TheHeader />
    <main class="main">
      <nuxt/>
    </main>
    <TheThree />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheThree from "@/components/TheThree";

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
      if (
        this.$route.path.startsWith("/work/") ||
        this.$route.path.startsWith("/about")
      ) {
        this.isLight = true;
      } else {
        this.isLight = false;
      }
    }
  },
  components: {
    TheHeader,
    TheThree
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
}

.app {
  background-color: -color(abyss);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  transition: background-color 0.6s $ease-in-out-quart;

  &.app--light {
    background-color: -color(pillow);
  }
}

.main {
  @extend %container;

  margin-top: 20rem;
}
</style>
