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
  border-radius: $border-radius;
  overflow: hidden;
  background: -color(abyss);
  display: block;

  @include for-hover {
    .tout__image img {
      transform: scale(1.05);
    }
  }

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
    flex-grow: 0;

    @include for-tablet-portrait-down {
      padding: 4rem;
      background-color: white;
      order: 2;
    }

    @include for-tablet-landscape-up {
      width: 28rem;
      margin-left: 6%;
    }

    @include for-small-desktop-up {
      margin-left: 10%;
    }
  }

  &__type {
    @include eyebrow(-color(white));

    opacity: 0.7;
  }

  &__title {
    @include hd-b(-color(white));

    margin-top: 0.2rem;
  }

  &__dek {
    font-family: $primary-font;
    font-size: 1.8rem;
    color: -color(white);
    line-height: 1.4;
    margin-top: 1rem;

    @include for-small-desktop-down {
      font-size: 1.8rem;
    }
  }

  &__type,
  &__title,
  &__dek {
    @include for-tablet-portrait-down {
      color: -color(abyss);
    }
  }

  &__image {
    position: relative;
    flex: 1;
    width: 90%;
    margin-left: auto;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s $ease-bounce;

      @include for-tablet-portrait-down {
        position: absolute;
        object-position: left;
      }
    }

    @include for-tablet-landscape-up {
      width: 56%;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;

      &.left img {
        object-position: left;
      }

      &.right img {
        object-position: right;
      }
    }

    @include for-tablet-portrait-down {
      &.center img {
        object-position: center;
      }
    }
  }

  &__action {
    @extend %action;

    @include for-tablet-portrait-down {
      display: none;
    }
  }
}
</style>
