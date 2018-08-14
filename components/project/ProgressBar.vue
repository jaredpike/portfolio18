<template>
  <div class="progress-bar" :style="{ width: indicatorString }"></div>
</template>

<script>
export default {
  data() {
    return {
      progress: 0,
      docHeight: 0,
      winHeight: 0,
      indicatorPosition: 0,
      indicatorString: ""
    };
  },

  methods: {
    onScroll() {
      const scrollPos = window.scrollY;
      this.progress = scrollPos / this.max * 100;
    },
    onWindowResize() {
      this.calculateDimensions();
      this.onScroll();
    },
    calculateDimensions() {
      this.docHeight = document.body.scrollHeight;
      this.winHeight = window.innerHeight;
      this.max = this.docHeight - this.winHeight;
    },
    loop() {
      this.indicatorPosition += (this.progress - this.indicatorPosition) * 0.1;
      this.indicatorString = `${this.indicatorPosition}%`;
      requestAnimationFrame(this.loop);
    }
  },
  mounted() {
    this.loop();

    this.$nextTick(() => {
      this.calculateDimensions();
    });

    window.onscroll = () => {
      this.onScroll();
    };

    window.onresize = () => {
      this.onWindowResize();
    };
  }
};
</script>

<style lang="scss" scoped>
.progress-bar {
  z-index: 12;
  height: 0.4rem;
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  background-color: -color(picton);
}
</style>