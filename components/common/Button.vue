<template>
  <a :href="href" class="button" :target="hrefTarget"><slot></slot></a>
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
  @include p-a(-color(abyss));

  text-transform: uppercase;
  font-weight: -weight(black);
  padding-bottom: 0.4rem;
  display: inline-block;
  border-bottom: 2px solid -color(abyss);
}
</style>
