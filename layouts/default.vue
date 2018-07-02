<template>
  <div>
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
  overflow-y: scroll;
  background-color: -color(abyss);
}

.main {
  @extend %container;

  margin-top: 20rem;
}
</style>
