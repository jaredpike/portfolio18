<template lang="md">
  <div class="markdown-content" v-html="$md.render(content)"></div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
.markdown-content {
  h1 {
    @include hd-a(-color(abyss));
  }

  h2 {
    @include hd-b(-color(abyss));
  }

  h3 {
    @include hd-c(-color(abyss));
  }

  p {
    @include p-a(-color(abyss));
  }
}
</style>