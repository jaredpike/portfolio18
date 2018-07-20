<template>
  <section class="homepage" v-editable="homepage.blok">
    <div class="homepage__intro">
      <h1 class="homepage__title">{{ homepage.intro }}</h1>
    </div>
    <ul class="tout-list">
      <li class="tout-list__item" v-for="project in projects.projects" :key="project.title">
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
  async asyncData(context) {
    let homepage = await context.app.$storyapi
      .get("cdn/stories/home", {
        version: context.isDev ? "draft" : "published"
      })
      .then(res => {
        return {
          intro: res.data.story.content.intro,
          blok: res.data.story.content
        };
      });

    let projects = await context.app.$storyapi
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
    return {
      homepage: {
        intro: homepage.intro,
        blok: homepage.blok
      },
      projects: projects
    };
  },
  mounted() {
    this.$storyblok.init();
    this.$storyblok.on("change", () => {
      location.reload(true);
    });
  },
  components: {
    Tout
  }
};
</script>

<style lang="scss" scoped>
.homepage {
  &__intro {
    @extend %container;
  }

  &__title {
    @include hd-a();

    margin-bottom: 8rem;
    max-width: 120rem;

    @include for-tablet-landscape-up {
      margin-bottom: 12rem;
    }
  }
}

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
