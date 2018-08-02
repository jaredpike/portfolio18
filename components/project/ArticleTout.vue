<template>
  <a class="article-tout" :href="url" target="_blank" v-editable="blok">
    <div class="article-tout__inner">
      <div class="article-tout__section">
        <div class="article-tout__content">
          <div class="article-tout__author">
              <img :src="authorPhoto" />
              <p>{{ authorName }}</p>
          </div>
          <h1 class="article-tout__title">{{ title }}</h1>
          <p class="article-tout__date" v-if="date">{{ date }}</p>
          <p class="article-tout__dek">{{ dek }}</p>
          <div class="article-tout__action">{{ buttonText }}</div>
        </div>
      </div>
      <div class="article-tout__section">
        <div class="article-tout__image">
          <img :src="image" />
        </div>
      </div>
    </div>
  </a>
</template>

<script>
import storyblokLivePreview from "@/mixins/storyblokLivePreview";

export default {
  props: {
    title: {
      type: String
    },
    dek: {
      type: String
    },
    url: {
      type: String
    },
    image: {
      type: String
    },
    buttonText: {
      type: String
    },
    authorName: {
      type: String
    },
    authorPhoto: {
      type: String
    },
    date: {
      type: String
    },
    blok: {
      type: Object
    }
  },
  mixins: [storyblokLivePreview]
};
</script>

<style lang="scss" scoped>
.article-tout {
  display: block;
  position: relative;
  border: solid -color(abyss);
  border-width: 1px 0 1px 0;
  align-self: flex-end;

  &__inner {
    display: flex;
  }

  &__section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
  }

  &__content {
    padding: 8rem 2rem 8rem 0;
  }

  &__author {
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    position: absolute;
    top: 2rem;
    left: 0;

    p {
      @include p-a();
    }

    img {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      margin-right: 1rem;
    }
  }

  &__image {
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__title {
    @include hd-b();
  }

  &__dek {
    @include p-a();

    margin-top: 0.8rem;
  }

  &__date {
    font-family: $primary-font;
    font-size: 1.6rem;
    line-height: 1.3;
    color: -color(woodsmoke);
    margin-top: 0.6rem;
  }

  &__action {
    @extend %action;

    color: -color(abyss);
    border-color: -color(abyss);
  }
}
</style>