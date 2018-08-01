<template>
  <figure class="full-image" v-editable="blok">
    <img :src="src" :alt="alt">
    <Caption v-if="caption" :text="caption" />
  </figure>
</template>

<script>
import storyblokLivePreview from "@/mixins/storyblokLivePreview";
import Caption from "@/components/project/Caption";

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
  components: {
    Caption
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
}
</style>
