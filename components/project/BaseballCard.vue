<template>
  <div class="baseball-card">
    <ul class="baseball-card__list">
      <li class="baseball-card__item" v-if="client">
        <p class="baseball-card__eyebrow">For</p>
        <p class="baseball-card__value">{{ client }}</p>
      </li>
      <li class="baseball-card__item" v-if="role">
        <p class="baseball-card__eyebrow">Role</p>
        <p class="baseball-card__value">{{ role }}</p>
      </li>
      <li class="baseball-card__item" v-if="agency">
        <p class="baseball-card__eyebrow">Agency</p>
        <p class="baseball-card__value">{{ agency }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    client: {
      type: String
    },
    role: {
      type: String
    },
    agency: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.baseball-card {
  width: 25rem;

  @include for-tablet-landscape-up {
    display: flex;
    justify-content: flex-end;
  }

  &__value {
    @include p-a(-color(abyss));
  }

  &__item {
    & + * {
      margin-top: 2rem;
    }
  }

  &__eyebrow {
    @include eyebrow(-color(abyss));
  }
}
</style>