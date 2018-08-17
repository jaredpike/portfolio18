<template>
  <div class="error">
    <div class="error__inner">
      <h1 class="error__heading" v-if="error.statusCode === 404">Page not found.</h1>
      <h1 class="error__heading" v-else>A server error has occured.</h1>
      <Button href="/" :isInternal="true">Return home</Button>
    </div>
  </div>
</template>

<script>
import Button from "@/components/common/Button";

export default {
  props: ["error"],
  components: {
    Button
  }
};
</script>

<style lang="scss" scoped>
.error {
  @extend %container;

  &__inner {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__heading {
    @include hd-a();

    margin-bottom: 8rem;
  }
}
</style>
