<template>
  <Row :class="{ 'row--right' : rightAlign }" v-editable="blok">
    <h2 v-if="heading" class="text-block__heading">{{ heading }}</h2>
    <p class="text-block__copy">{{ copy }}</p>
  </Row>
</template>

<script>
import Row from "@/components/project/Row";
import storyblokLivePreview from "@/mixins/storyblokLivePreview";

export default {
  props: {
    heading: {
      type: String
    },
    copy: {
      type: String,
      required: true
    },
    rightAlign: {
      type: Boolean
    },
    blok: {
      type: Object
    }
  },
  components: {
    Row
  },
  mixins: [storyblokLivePreview]
};
</script>

<style lang="scss" scoped>
.text-block {
  &__heading {
    @include hd-c(-color(abyss));

    margin-bottom: 0.4rem;

    @include for-tablet-portrait-up {
      margin-bottom: 1.6rem;
    }
  }

  &__copy {
    @include p-a(-color(abyss));
  }
}
</style>
