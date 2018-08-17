<template>
  <div class="button">
    <a class="button__inner" :href="href" :target="hrefTarget" v-if="!isInternal"><slot></slot></a>
    <nuxt-link class="button__inner" :to="href" v-if="isInternal"><slot></slot></nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true
    },
    newWindow: {
      type: Boolean
    },
    isInternal: {
      type: Boolean
    }
  },
  computed: {
    hrefTarget() {
      return this.newWindow ? "_blank" : "_self";
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  &__inner {
    @include link;

    font-family: $primary-font;
    font-size: 1.8rem;
    color: $default-font-color;
    text-transform: uppercase;
    font-weight: -weight(black);
    padding-bottom: 0.4rem;
    display: inline-block;
    border-bottom: 2px solid -color(abyss);
  }
}
</style>
