<template>
 <figcaption class="caption">{{ text }}</figcaption>
</template>

<script>
export default {
  props: {
    text: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.caption {
  @include p-a();

  margin-top: 1.6rem;
}
</style>