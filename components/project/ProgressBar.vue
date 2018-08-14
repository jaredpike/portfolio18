<template>
  <div class="progress-bar" :style="{ width: progress }"></div>
</template>

<script>
export default {
  data() {
    return {
      progress: 0,
      docHeight: 0,
      winHeight: 0,
      max: 0
    };
  },

  methods: {
    onScroll() {
      const scrollPos = window.scrollY;
      this.progress = scrollPos / this.max * 100 + "%";
    },
    onWindowResize() {
      this.calculateDimensions();
      this.onScroll();
    },
    calculateDimensions() {
      this.docHeight = document.body.scrollHeight;
      this.winHeight = window.innerHeight;
      this.max = this.docHeight - this.winHeight;
    }
  },

  mounted() {
    this.onWindowResize();

    window.onscroll = () => {
      this.onScroll();
      this.calculateDimensions();
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
  transition: 0.2s width ease;
}
</style>