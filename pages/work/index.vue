<template>
  <section class="work">
    <ul class="tout-list">
      <li class="tout-list__item" v-for="project in projects" :key="project.title">
        <Tout
              :title="project.title"
              :imageUrl="project.imageUrl"
              :href="'/work/' + project.href"
               />
      </li>
    </ul>
  </section>
</template>

<script>
import Tout from "@/components/work/Tout";

export default {
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories", {
        version: context.isDev ? "draft" : "published",
        starts_with: "work/"
      })
      .then(res => {
        return {
          projects: res.data.stories.map(project => {
            return {
              href: project.slug,
              title: project.content.title,
              imageUrl: project.content.image
            };
          })
        };
      });
  },
  components: {
    Tout
  }
};
</script>

<style lang="scss" scoped>
.tout-list {
  &__item {
    display: flex;

    &:nth-child(even) {
      justify-content: flex-end;
    }

    & + * {
      margin-top: 6rem;
    }
  }
}
</style>
