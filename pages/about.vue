<template>
  <section class="about" v-editable="blok">
    <h1 class="title">{{ title }}</h1>
    <div class="content">
      {{ intro }}
    </div>
  </section>
</template>

<script>
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
  }
};
</script>

<style lang="scss" scoped>
.about {
  @extend %container;
}

.content {
  @include p-a(-color(abyss));

  margin-top: 4rem;
}

.title {
  @include hd-a(-color(abyss));
}
</style>
