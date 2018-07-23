<template>
  <Row :class="{ 'row--right' : rightAlign }" v-editable="blok">
    <h2 v-if="heading" class="text-block__heading">{{ heading }}</h2>
    <p class="text-block__copy">{{ copy }}</p>
  </Row>
</template>

<script>
import Row from "@/components/project/Row";
import { isEditMode } from "@/plugins/helper";

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
      type: String
    }
  },
  components: {
    Row
  },
  mounted() {
    isEditMode(this);
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