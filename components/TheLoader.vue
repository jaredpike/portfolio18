<template>
  <transition name="loader">
    <div class="loader" v-if="loading">
      <div class="loader__logo" v-if="showingLogo">
        <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
        <g class="stem">
          <path d="M0 16V0H4V16H0Z" transform="translate(112) scale(16)"/>
        </g>
        <g class="j">
          <path d="M0 0C0 3.31329 2.68671 6 6 6V0H0Z" transform="translate(0 160) scale(16)"/>
        </g>
        <g class="p">
          <path d="M4 4.19048C4.0032 1.78971 2.2096 0 0 0V8C2.2096 8 4 6.21029 4 4.19048Z" transform="translate(192) scale(16)"/>
        </g>
      </svg>
    </div>
    </div>
  </transition>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    showingLogo: false
  }),
  methods: {
    start() {
      this.loading = true;

      this.delay = setTimeout(() => {
        this.showingLogo = true;
      }, 1000);
    },
    finish() {
      this.loading = false;
      clearTimeout(this.delay);
      this.showingLogo = false;
    }
  }
};
</script>

<style lang="scss" scoped>
$distance: 8rem;
$rotation: 30deg;
$speed: 1.2s;
$timing: $ease-in-out-cubic;

@keyframes fly {
  0% {
    transform: translateY($distance) rotateX($rotation);
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translateY(-$distance) rotateX(-$rotation);
  }
}

.loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: -color(picton);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -z(loader);

  &__logo {
    width: 4.8rem;
    height: 4.8rem;
    fill: #fff;
    overflow: visible;

    svg {
      overflow: visible;
      perspective: 800px;
    }

    .j,
    .p,
    .stem {
      animation: fly $speed $timing infinite;
    }

    .j {
      animation-delay: 0.07s;
    }

    .stem {
      animation-delay: 0.05s;
    }
  }
}
.loader-enter-active,
.loader-leave-active {
  transition: all 0.5s $ease-in-out-quart;
}

.loader-enter {
  transform: translateX(-100%);
}

.loader-leave-active {
  transform: translateX(100%);
}
</style>
