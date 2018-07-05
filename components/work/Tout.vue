<template>
  <nuxt-link :to="href" class="tout">
    <div class="tout__ratio">
      <div class="tout__content">
        <h1 class="tout__title">{{ title }}</h1>
        <img class="tout__image" :src="imageUrl" :alt="title" />
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    href: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.tout {
  display: block;
  width: 90%;

  &:hover {
    .tout__image {
      transform: scale(1);
      opacity: 0.4;
    }

    .tout__title {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @include for-small-desktop-up {
    width: 70%;
  }

  &__ratio {
    height: 0;
    padding-top: 56.25%;
    position: relative;
    overflow: hidden;
  }

  &__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -z(background);
    transform: scale(1.05);
    transition: all 0.4s $ease-in-out-cubic;
  }

  &__title {
    @include hd-a();

    position: relative;
    z-index: -z(content);
    transform: translateY(1rem);
    opacity: 0;
    transition: all 0.2s $ease-in-out-quart;
  }
}
</style>