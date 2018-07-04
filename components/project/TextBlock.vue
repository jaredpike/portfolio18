<template>
  <Row :class="{ 'row--right' : rightAlign }">
    <h2 v-if="heading" class="text-block__heading">{{ heading }}</h2>
    <p class="text-block__copy">{{ copy }}</p>
  </Row>
</template>

<script>
import Row from "@/components/project/Row";

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
    }
  },
  components: {
    Row
  }
};
</script>

<style lang="scss" scoped>
.text-block {
  &__heading {
    @include hd-c(-color(abyss));

    margin-bottom: 1.6rem;
  }

  &__copy {
    @include p-a(-color(abyss));
  }
}
</style>