<template lang="md">
  <div :class="['markdown-content', classes]" v-html="$md.render(content)"></div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true
    },
    classes: {
      type: String
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

  &.small {
    p {
      @include small;
    }
  }

  p {
    @include p-a(-color(abyss));
  }

  a {
    @include link;

    color: -color(abyss);
    border-bottom: 1px solid -color(abyss);
  }

  > * + * {
    margin-top: 4rem;
  }
}
</style>
