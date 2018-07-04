<template>
  <div class="row">
    <div class="row__content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.row {
  display: flex;

  &--right {
    justify-content: flex-end;
  }

  .row__content {
    @include for-small-desktop-up {
      max-width: 70rem;
      width: 60%;
    }
  }
}
</style>