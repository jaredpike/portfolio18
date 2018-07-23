<template>
  <aside class="pullquote" v-editable="blok">
    <blockquote class="pullquote__quote">{{ text }}</blockquote>
  </aside>
</template>

<script>
import { isEditMode } from "@/plugins/helper";

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
  mounted() {
    isEditMode(this);
  }
};
</script>

<style lang="scss" scoped>
.pullquote {
  @include hd-b(-color(abyss));
}
</style>