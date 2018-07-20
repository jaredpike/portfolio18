<template>
  <section class="work">
    <ul class="tout-list">
      <li class="tout-list__item" v-for="project in projects" :key="project.title">
        <Tout
              :title="project.title"
              :imageUrl="project.imageUrl"
              :href="'/' + project.href"
              :color1="project.color1"
              :color2="project.color2"
              :type="project.type"
              :dek="project.dek"
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
              href: project.full_slug,
              title: project.content.title,
              dek: project.content.dek,
              type: project.content.type,
              imageUrl: project.content.image,
              color1: project.content.color1,
              color2: project.content.color2
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
  @extend %container;

  &__item {
    display: flex;

    &:nth-child(even) {
      justify-content: flex-end;
    }

    & + * {
      margin-top: 2.4rem;

      @include for-tablet-landscape-up {
        margin-top: 4rem;
      }
    }
  }
}
</style>
