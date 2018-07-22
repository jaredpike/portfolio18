<template>
  <figure class="image--full">
    <img :src="src" :alt="alt">
  </figure>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.image--full {
  img {
    border-radius: $border-radius;
    width: 100%;
    max-width: 100%;
  }
}
</style>
