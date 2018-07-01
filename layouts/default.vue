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

html {
  font-size: 62.5%;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

body {
  font-size: 1rem;
  font-family: Helvetica;
  overflow-y: scroll;
}

.main {
  @extend %container;

  margin-top: 10rem;
}
</style>
