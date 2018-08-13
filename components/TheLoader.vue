<template>
  <transition name="loader">
    <div class="loader" v-if="loading">
      <p class="loader__text" v-if="showingText">{{ messages[index] }}</p>
    </div>
  </transition>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    messages: ["Aligning pixels...", "Arranging grids...", "Making it pop..."],
    index: 0,
    showingText: false
  }),
  methods: {
    start() {
      this.loading = true;

      this.delay = setTimeout(() => {
        this.showingText = true;
      }, 1500);
    },
    finish() {
      setTimeout(() => {
        this.loading = false;
        clearTimeout(this.delay);
        this.showingText = false;
        this.changeMessage();
      }, 500);
    },
    changeMessage() {
      const messagesLength = this.messages.length - 1;

      if (this.index === messagesLength) {
        this.index = 0;
      } else {
        this.index++;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@keyframes flash {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
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

  &__text {
    @include p-a(-color(white));

    font-weight: -weight(black);
    text-transform: uppercase;
    animation: flash 0.4s linear infinite;
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
