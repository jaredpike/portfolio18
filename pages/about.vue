<template>
  <section class="about" v-editable="blok">
    <h1 class="title">{{ title }}</h1>
    <MarkdownContent :content="intro"/>
  </section>
</template>

<script>
import MarkdownContent from "@/components/common/MarkdownContent";

export default {
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories/about", {
        version: context.isDev ? "draft" : "published"
      })
      .then(res => {
        return {
          title: res.data.story.content.title,
          intro: res.data.story.content.intro,
          blok: res.data.story.content
        };
      });
  },
  mounted() {
    this.$storyblok.init();
    this.$storyblok.on("change", () => {
      location.reload(true);
    });
  },
  components: {
    MarkdownContent
  }
};
</script>

<style lang="scss" scoped>
.about {
  @extend %container;
}

.title {
  @include hd-a(-color(abyss));

  margin-bottom: 4rem;
}
</style>
