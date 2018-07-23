<template>
  <figure class="image--full" v-editable="blok">
    <img :src="src" :alt="alt">
  </figure>
</template>

<script>
import { isEditMode } from "@/plugins/helper";

export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String
    },
    blok: {
      type: String
    }
  },
  mounted() {
    isEditMode(this);
  }
};
</script>

<style lang="scss" scoped>
.image--full {
  img {
    border-radius: $border-radius;
    width: 100%;
    max-width: 100%;
  }
}
</style>
