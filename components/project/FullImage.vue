<template>
  <figure class="full-image" v-editable="blok">
    <img :src="src" :alt="alt">
    <figcaption class="full-image__caption" v-if="caption">{{ caption }}</figcaption>
  </figure>
</template>

<script>
import storyblokLivePreview from "@/mixins/storyblokLivePreview";

export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String
    },
    caption: {
      type: String
    },
    blok: {
      type: Object
    }
  },
  mixins: [storyblokLivePreview]
};
</script>

<style lang="scss" scoped>
.full-image {
  img {
    border-radius: $border-radius;
    width: 100%;
    max-width: 100%;
  }

  &__caption {
    @include p-a();

    margin-top: 1.6rem;
  }
}
</style>
