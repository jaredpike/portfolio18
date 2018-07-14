<template>
  <header class="page-header">
    <div class="page-header__inner">
      <nuxt-link to="/" class="page-header__logo"><TheLogo/></nuxt-link>
      <nav class="page-header__nav">
        <ul class="page-header__list">
          <nuxt-link to="/work" tag="li" class="page-header__item"><a class="page-header__link">Work</a></nuxt-link>
          <nuxt-link to="/about" tag="li" class="page-header__item"><a class="page-header__link">About</a></nuxt-link>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import TheLogo from "@/components/TheLogo";

export default {
  components: {
    TheLogo
  }
};
</script>

<style lang="scss" scoped>
.page-header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 3rem 3.2rem;
  pointer-events: none;
  z-index: -z(header);

  @include for-tablet-portrait-up {
    padding: 6rem 8rem;
  }

  a {
    pointer-events: initial;
  }

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__list {
    display: flex;
  }

  &__item {
    & + * {
      margin-left: 4rem;
    }

    &.nuxt-link-exact-active {
      .page-header__link {
        &:after {
          transform: scaleX(1);
          transform-origin: left;
        }
      }
    }
  }

  &__link {
    font-size: 1.8rem;
    font-weight: -weight(black);
    color: -color(white);
    height: 100%;
    position: relative;
    text-transform: uppercase;
    transition: color 0.6s $ease-in-out-quart 0.1s;
    font-family: $primary-font;

    .body--light & {
      color: -color(abyss);

      &:after {
        background-color: -color(abyss);
      }
    }

    &:after {
      content: "";
      position: absolute;
      top: 48%;
      left: -0.5rem;
      right: -0.5rem;
      height: 1px;
      background-color: -color(white);
      transition: transform 0.6s $ease-in-out-quart 0.1s,
        background-color 0.6s $ease-in-out-quart 0.1s;
      transform: scaleX(0);
      transform-origin: right;
    }
  }
}
</style>
