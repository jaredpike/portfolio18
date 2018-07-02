<template>
  <div>
    <TheHeader />
    <main class="main">
      <nuxt/>
    </main>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";

export default {
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
  overflow-y: scroll;
  background-color: -color(abyss);
}

.main {
  @extend %container;

  margin-top: 20rem;
}
</style>
