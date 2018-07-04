<template>
  <nuxt-link :to="href" class="button">{{ text }}</nuxt-link>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  @include p-a();

  color: -color(abyss);
  padding-bottom: 0.4rem;
  display: inline-block;
  border-bottom: 2px solid -color(abyss);
}
</style>