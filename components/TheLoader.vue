<template>
  <transition name="loader">
    <div class="loader" v-if="loading">
      <transition name="logo">
        <div class="loader__logo">
          <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
            <g class="stem">
              <path d="M0 16V0H4V16H0Z" transform="translate(112) scale(16)"></path>
            </g>
            <g class="j">
              <path d="M0 0C0 3.31329 2.68671 6 6 6V0H0Z" transform="translate(0 160) scale(16)"></path>
            </g>
            <g class="p">
              <path
                d="M4 4.19048C4.0032 1.78971 2.2096 0 0 0V8C2.2096 8 4 6.21029 4 4.19048Z"
                transform="translate(192) scale(16)"
              ></path>
            </g>
          </svg>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    }
  }
};
</script>

<style lang="scss" scoped>
$speed: 1s;
$timing: $ease-in-out-cubic;

@keyframes fly {
  0% {
    transform: scale(0.7);
    opacity: 0;
  }

  50% {
    opacity: 1;
    transform: scale(1);
  }

  100% {
    opacity: 0;
    transform: scale(0.7);
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
      transform-origin: center;
    }

    .j {
      animation-delay: 0.2s;
    }

    .stem {
      animation-delay: 0.1s;
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
