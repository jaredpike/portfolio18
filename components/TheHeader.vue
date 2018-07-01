<template>
  <header class="page-header">
    <div class="page-header__inner">
      <nuxt-link to="/" class="page-header__logo">Jared Pike</nuxt-link>
      <nav class="page-header__nav">
        <ul class="page-header__list">
          <nuxt-link to="/work" tag="li" class="page-header__item"><a class="page-header__link">Work</a></nuxt-link>
          <nuxt-link to="/about" tag="li" class="page-header__item"><a class="page-header__link">About</a></nuxt-link>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.page-header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 6rem 8rem;
  pointer-events: none;

  a {
    pointer-events: initial;
  }

  &__inner {
    display: flex;
    justify-content: space-between;
  }

  &__list {
    display: flex;
  }

  &__item {
    & + * {
      margin-left: 4rem;
    }

    &.nuxt-link-active {
      text-decoration: underline;
    }
  }

  &__link {
    font-size: 1.6rem;
  }

  &__logo {
    font-size: 1.6rem;
  }
}
</style>