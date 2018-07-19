<template>
  <div class="mockup">
    <div class="mockup__inner">
      <ul class="mockup__list">
        <li class="mockup__item"><img class="mockup__image" src="https://i.imgur.com/UyWIjLC.png" /></li>
        <li class="mockup__item"><img class="mockup__image" src="https://i.imgur.com/UyWIjLC.png" /></li>
        <li class="mockup__item"><img class="mockup__image" src="https://i.imgur.com/UyWIjLC.png" /></li>
      </ul>   
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mockup {
  margin-top: 4rem;
  background: -color(picton);
  padding-top: 65%;
  height: 0;
  position: relative;
  overflow: hidden;

  &__inner {
    padding-left: 10vw;
    padding-right: 10vw;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
  }

  &__list {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__item {
    // transform: translateY(50%);
    transition: transform 0.5s $ease-in-out-quart;

    &:hover {
      transform: translateY(-5rem);
    }
  }

  &__image {
    transform: rotateX(25deg) rotateY(10deg) rotateZ(-20deg);
    transition: transform 2s $ease-in-out-quart;
    box-shadow: -10px 20px 35px 0px rgba(0, 0, 0, 0.2),
      -2px 2px 10px 0px rgba(0, 0, 0, 0.1);
  }
}
</style>