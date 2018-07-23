<template>
  <div class="mockup" :style="{ backgroundColor: color }" v-editable="blok">
    <div class="mockup__inner">
      <ul class="mockup__list">
        <li class="mockup__item" v-for="image in images" :key="image.filename" style="opacity: 0">
          <img class="mockup__image" :src="image.filename" />
        </li>
      </ul>
    </div>
    <div class="mockup__trigger"></div>
  </div>
</template>

<script>
import anime from "animejs";
import scrollMonitor from "scrollmonitor";
import { isEditMode } from "@/plugins/helper";

export default {
  props: {
    images: {
      type: Array,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    blok: {
      type: String
    }
  },
  mounted() {
    this.targets = this.$el.querySelectorAll(".mockup__item");
    this.watch();
    isEditMode(this);
  },
  methods: {
    watch() {
      const watchTargets = this.$el.querySelectorAll(".mockup__trigger");
      const watcher = scrollMonitor.create(watchTargets);
      watcher.enterViewport(() => {
        watcher.destroy();
        this.animateIn();
      });
    },
    animateIn() {
      anime({
        targets: this.targets,
        duration: 2000,
        translateY: ["100vh", 0],
        delay: function(el, i) {
          return i * 200;
        },
        elasticity: 350,
        opacity: 1,
        rotateX: ["-25deg", "25deg"],
        rotateY: ["-90deg", "10deg"],
        rotateZ: ["-60deg", "-20deg"]
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.mockup {
  margin-top: 4rem;
  padding-top: 65%;
  height: 0;
  position: relative;
  overflow: hidden;
  border-radius: $border-radius;

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

  &__image {
    box-shadow: -10px 20px 35px 0px rgba(0, 0, 0, 0.2),
      -20px 30px 55px 20px rgba(0, 0, 0, 0.15),
      -2px 2px 10px 0px rgba(0, 0, 0, 0.1);
  }

  &__trigger {
    position: absolute;
    top: 75%;
    left: 0;
    width: 100%;
    height: 2px;
    z-index: -z(overlay);
    transform: translateX(-50%);
  }
}
</style>
