<template>
  <nuxt-link :to="href" class="tout" :style="{ background: `linear-gradient(45deg, #${color1 || '32199C'} 0%, #${color2 || '5737E1'} 100%)` }">
    <div class="tout__ratio">
      <div class="tout__inner">
        <div class="tout__summary">
          <p class="tout__type">{{ type }}</p>
          <h1 class="tout__title">{{ title }}</h1>
          <p class="tout__dek">{{ dek }}</p>
          <p class="tout__action" v-if="!hideButton">View Case Study</p>
        </div>
        <div :class="['tout__image', imagePosition]">
          <img v-if="imageUrl" :src="imageUrl" :alt="title" />
        </div>
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
    imagePosition: {
      type: String
    },
    href: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    dek: {
      type: String
    },
    color1: {
      type: String
    },
    color2: {
      type: String
    },
    hideButton: {
      type: Boolean
    }
  }
};
</script>

<style lang="scss" scoped>
.tout {
  width: 100%;
  border-radius: 1.2rem;
  overflow: hidden;
  background: -color(abyss);
  display: block;

  &__ratio {
    position: relative;
    padding-top: 100%;

    @include for-tablet-landscape-up {
      height: 0;
      padding-top: 50%;
    }
  }

  &__inner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;

    @include for-tablet-portrait-down {
      flex-direction: column;
      justify-content: flex-end;
    }

    @include for-tablet-landscape-up {
      align-items: center;
    }
  }

  &__summary {
    z-index: -z(content);

    @include for-tablet-portrait-down {
      padding: 6rem 4rem;
    }

    @include for-tablet-landscape-up {
      width: 60rem;
      padding-left: 10%;
      margin-right: 10%;
    }
  }

  &__type {
    @include eyebrow(-color(white));

    opacity: 0.7;
  }

  &__title {
    @include hd-c(-color(white));

    margin-top: 0.2rem;
  }

  &__dek {
    @include p-a(-color(white));

    line-height: 1.4;
    margin-top: 1rem;
  }

  &__image {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;

      @include for-tablet-portrait-down {
        opacity: 0.1;
      }
    }

    @include for-tablet-portrait-down {
      position: absolute;
      bottom: 0;
      left: 0;
    }

    @include for-tablet-landscape-up {
      &.left img {
        object-position: left;
      }

      &.right img {
        object-position: right;
      }
    }
  }

  &__action {
    font-family: $primary-font;
    font-size: 1.6rem;
    color: -color(white);
    text-transform: uppercase;
    font-weight: -weight(black);
    padding-bottom: 0.4rem;
    display: inline-block;
    border-bottom: 2px solid -color(white);
    margin-top: 3rem;
  }
}
</style>
