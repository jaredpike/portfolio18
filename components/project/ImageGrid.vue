<template>
  <div :class="['image-grid', removePadding ? 'no-padding' : '']" :style="{ backgroundColor: color }" v-editable="blok">
    <div class="image-grid__inner">
      <ul class="image-grid__list">
        <li class="image-grid__item" v-for="image in images" :key="image.filename" style="opacity: 0">
          <img :class="['image-grid__image', hideShadows ? '' : 'has-shadow']" :src="image.filename" />
        </li>
      </ul>
    </div>
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
    hideShadows: {
      type: Boolean
    },
    removePadding: {
      type: Boolean
    },
    blok: {
      type: Object
    }
  },
  mounted() {
    this.targets = this.$el.querySelectorAll(".image-grid__item");
    this.watch();
    isEditMode(this);
  },
  methods: {
    watch() {
      const watchTargets = this.$el.querySelectorAll(".image-grid__item");
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
        translateY: [100, 0],
        delay: function(el, i) {
          return i * 200;
        },
        elasticity: 350,
        opacity: 1
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.image-grid {
  margin-top: 4rem;
  position: relative;
  overflow: hidden;
  border-radius: $border-radius;

  &.no-padding {
    overflow: visible;

    .image-grid__inner {
      padding: 0;
    }
  }

  &__inner {
    padding: 3rem;

    @include for-tablet-landscape-up {
      padding: 6rem;
    }
  }

  &__list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row wrap;
  }

  &__item {
    width: 100%;
    opacity: 0;

    & + * {
      margin-top: 2rem;
    }

    @include for-tablet-portrait-up {
      width: 48%;

      & + * {
        margin-top: 2rem;
      }

      &:nth-child(2) {
        margin-top: 0;
      }
    }

    @include for-small-desktop-up {
      width: 31.5%;

      &:nth-child(3) {
        margin-top: 0;
      }
    }
  }

  &__image {
    &.has-shadow {
      box-shadow: -10px 20px 35px 0px rgba(0, 0, 0, 0.10),
        -20px 30px 35px 20px rgba(0, 0, 0, 0.05),
        -2px 2px 10px 0px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
