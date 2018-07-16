<template>
  <section class="project" v-editable="project.blok">
    <div class="hero">
      <div class="hero__inner">
        <h1 class="hero__title">{{ project.title }}</h1>
        <div class="hero__intro">
          <div class="hero__section">
            <BaseballCard :client="project.client" :role="project.role" :agency="project.agency" />
          </div>
          <div class="hero__section">
            <p class="hero__dek">{{ project.dek }}</p>
            <Button v-if="project.url" :href="project.url" :newWindow="true">View Project</Button>
          </div>
        </div>
      </div>
    </div>
    <ul class="blocks">
      <li v-for="block in project.body" :key="block._uid" v-reveal>
        <FullImage v-if="block.component === 'full-image'" :src="block.image" />
        <TextBlock v-if="block.component === 'text-block'" :copy="block.body" :heading="block.heading" :rightAlign="block.right" />
        <PullQuote v-if="block.component === 'pull-quote'" :text="block.text" />
      </li>
    </ul>
    <div class="next-project">
      <nuxt-link class="next-project__link" :to="'/' + nextProject.full_slug">{{ nextProject.content.title }}</nuxt-link>
    </div>
  </section>
</template>

<script>
import FullImage from "@/components/project/FullImage";
import Button from "@/components/common/Button";
import PullQuote from "@/components/project/PullQuote";
import TextBlock from "@/components/project/TextBlock";
import BaseballCard from "@/components/project/BaseballCard";

export default {
  async asyncData(context) {
    let { data } = await context.app.$storyapi.get(
      "cdn/stories/work/" + context.params.projectId,
      {
        version: context.isDev ? "draft" : "published"
      }
    );

    let nextProject = await context.app.$storyapi
      .get("cdn/stories", {
        version: context.isDev ? "draft" : "published",
        starts_with: "work/"
      })
      .then(res => {
        const matchedRoute = res.data.stories.find(el => {
          return el.content._uid === data.story.content._uid;
        });
        const projectIndex = res.data.stories.indexOf(matchedRoute);
        const totalProjects = res.data.stories.length - 1;
        let nextProjectIndex = projectIndex + 1;

        if (nextProjectIndex > totalProjects) {
          nextProjectIndex = 0;
        }

        return res.data.stories[nextProjectIndex];
      });
    return {
      project: {
        title: data.story.content.title,
        dek: data.story.content.dek,
        url: data.story.content.url,
        body: data.story.content.body,
        id: data.story.content._uid,
        client: data.story.content.client,
        agency: data.story.content.agency,
        role: data.story.content.role,
        blok: data.story.content
      },
      nextProject
    };
  },
  components: {
    FullImage,
    Button,
    PullQuote,
    TextBlock,
    BaseballCard
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
.project {
  @extend %container;
}

.blocks,
.blocks li + li {
  margin-top: 6rem;

  @include for-tablet-portrait-up {
    margin-top: 12rem;
  }
}

.hero {
  &__title {
    @include hd-a(-color(abyss));
  }

  &__dek {
    @include p-a(-color(abyss));

    @include for-small-desktop-up {
      max-width: 70rem;
    }
  }

  &__intro {
    margin-top: 2rem;

    @include for-tablet-landscape-up {
      display: flex;
      margin-top: 4rem;
      justify-content: space-between;
    }
  }

  &__section {
    &:first-child {
      @include for-tablet-landscape-up {
        order: 2;
        margin-left: 4rem;
      }

      @include for-tablet-portrait-down {
        margin-bottom: 3rem;
      }
    }
  }

  .button {
    margin-top: 4rem;
  }
}

.next-project {
  text-align: center;
  margin-top: 8rem;

  &__link {
    @include hd-c(-color(abyss));

    padding-bottom: 0.4rem;
    display: inline-block;
    border-bottom: 2px solid -color(abyss);
  }
}
</style>