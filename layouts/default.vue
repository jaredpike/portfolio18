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
  components: {
    TheHeader,
    TheFooter
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/reset.scss";
@import "@/assets/styles/transitions.scss";
@import "@/assets/styles/fonts.scss";

html {
  font-size: 50%;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;

  @include for-tablet-portrait-up {
    font-size: 55%;
  }

  @include for-tablet-landscape-up {
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
  background-color: -color(pillow);
  overflow-y: scroll;
}

.main {
  margin-top: 12rem;

  @include for-tablet-portrait-up {
    margin-top: 20rem;
  }
}

* {
  &::selection,
  &::-moz-selection {
    background-color: -color(picton);
  }
}
</style>
