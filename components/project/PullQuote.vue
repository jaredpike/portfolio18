<template>
  <aside class="pullquote">
    <blockquote class="pullquote__quote">{{ text }}</blockquote>
  </aside>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.pullquote {
  @include hd-b(-color(abyss));
}
</style>