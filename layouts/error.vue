<template>
  <div class="error">
    <div class="error__inner">
      <h1 class="error__heading" v-if="error.statusCode === 404">Page not found.</h1>
      <h1 class="error__heading" v-else>Something went wrong.</h1>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['error'],
  }
</script>

<style lang="scss" scoped>
  .error {
    @extend %container;

    &__inner {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__heading {
      @include hd-a();
    }
  }
</style>
