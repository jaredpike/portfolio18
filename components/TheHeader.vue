<template>
  <header class="page-header">
    <div class="page-header__inner">
      <nuxt-link to="/" class="page-header__logo"><TheLogo/></nuxt-link>
      <nav class="page-header__nav">
        <ul class="page-header__list">
          <nuxt-link to="/" tag="li" class="page-header__item"><a class="page-header__link">Work</a></nuxt-link>
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

<style lang="scss">
.page-header {
  width: 100%;
  position: absolute;
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
          transform: scaleX(1) translateY(-50%);
          transform-origin: left;
        }

        &:hover {
          color: -color(abyss) !important;
        }
      }
    }
  }

  &__link {
    @include link;

    font-size: 1.8rem;
    font-weight: -weight(black);
    color: -color(abyss);
    height: 100%;
    position: relative;
    text-transform: uppercase;
    font-family: $primary-font;
    line-height: 1;

    .body--light & {
      color: -color(abyss);

      &:after {
        background-color: -color(abyss);
      }
    }

    &:after {
      content: "";
      position: absolute;
      top: 50%;
      left: -0.5rem;
      right: -0.5rem;
      height: 2px;
      background-color: -color(abyss);
      transition: transform 0.6s $ease-in-out-quart 0.3s;
      transform: scaleX(0) translateY(-50%);
      transform-origin: right;
    }
  }

  &__logo {
    @include for-hover {
      svg {
        transform: scale(1.1);

        .j {
          transform: translateY(-3rem);
        }

        .p {
          transform: translateY(3rem);
        }
      }
    }
  }
}
</style>
