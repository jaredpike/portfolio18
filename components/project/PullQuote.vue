<template>
  <aside class="pullquote" v-editable="blok">
    <blockquote class="pullquote__quote">{{ text }}</blockquote>
  </aside>
</template>

<script>
import storyblokLivePreview from "@/mixins/storyblokLivePreview";

export default {
  props: {
    text: {
      type: String,
      required: true
    },
    blok: {
      type: Object
    }
  },
  mixins: [storyblokLivePreview]
};
</script>

<style lang="scss" scoped>
.pullquote {
  font-family: $secondary-font;
  font-size: 5.4rem;
  line-height: 1.3;

  @include for-small-desktop-up {
    max-width: 80%;
  }
}
</style>
