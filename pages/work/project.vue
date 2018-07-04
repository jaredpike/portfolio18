<template>
  <section class="project">
    <div class="hero">
      <div class="hero__inner">
        <h1 class="hero__title">Project Title</h1>
        <p class="hero__dek">Lorem ipsum dolor sit amet</p>
      </div>
    </div>
    <div class="row">

    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero__title {
  @include hd-a(-color(abyss));
}

.hero__dek {
  @include p-a(-color(abyss));

  margin-top: 4rem;
}
</style>