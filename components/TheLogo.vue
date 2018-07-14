<template>
  <svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 16V0H4V16H0Z" transform="translate(112) scale(16)"/>
    <path d="M0 0C0 3.31329 2.68671 6 6 6V0H0Z" transform="translate(0 160) scale(16)"/>
    <path d="M4 4.19048C4.0032 1.78971 2.2096 0 0 0V8C2.2096 8 4 6.21029 4 4.19048Z" transform="translate(192) scale(16)"/>
  </svg>
</template>

<style lang="scss" scoped>
svg {
  width: 3.6rem;
  height: 3.6rem;
  fill: -color(picton);

  @include for-tablet-portrait-up {
    width: 4.8rem;
    height: 4.8rem;
  }
}
</style>
