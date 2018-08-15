<template> 
  <div v-editable="blok">
    <div class="mockup" :style="{ backgroundColor: color }">
      <div class="mockup__inner">
        <ul class="mockup__list">
          <li class="mockup__item" v-for="image in images" :key="image.filename">
            <img class="mockup__image" :src="image.filename" />
          </li>
        </ul>
      </div>
      <div class="mockup__trigger"></div>
    </div>
    <Caption v-if="caption" :text="caption"/>
  </div>
</template>

<script>
import anime from "animejs";
import scrollMonitor from "scrollmonitor";
import storyblokLivePreview from "@/mixins/storyblokLivePreview";
import Caption from "@/components/project/Caption";

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
      type: Object
    },
    caption: {
      type: String
    }
  },
  components: {
    Caption
  },
  mixins: [storyblokLivePreview]
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
    transform: rotateX(25deg) rotateY(10deg) rotateZ(-20deg);
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
