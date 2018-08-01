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
            <p class="hero__dek">{{ project.intro }}</p>
            <Button v-if="project.url" :href="project.url" :newWindow="true">Launch Site</Button>
          </div>
        </div>
      </div>
    </div>
    <ul class="blocks">
      <li v-for="block in project.body" :key="block._uid">
        <FullImage v-if="block.component === 'full-image'" :src="block.image" :caption="block.caption" :blok="block" />
        <TextBlock v-if="block.component === 'text-block'" :copy="block.body" :heading="block.heading" :rightAlign="block.right" :blok="block"/>
        <PullQuote v-if="block.component === 'pull-quote'" :text="block.text" :blok="block" />
        <Mockup v-if="block.component === 'mockup'" :images="block.images" :color="block.color.color" :blok="block" :caption="block.caption" />
        <ImageGrid v-if="block.component === 'image-grid'" :images="block.images" :color="block.color.color" :hideShadows="block.hide_shadows" :removePadding="block.remove_padding" :caption="block.caption" :blok="block" />
      </li>
    </ul>
    <div class="next-project">
        <Tout
          :title="nextProject.content.title"
          :imageUrl="nextProject.content.image"
          :imagePosition="nextProject.content.image_position"
          :href="'/' + nextProject.full_slug"
          :color1="nextProject.content.color1"
          :color2="nextProject.content.color2"
          :type="'Up Next'"
          :hideButton="true"
        />
    </div>
  </section>
</template>

<script>
import FullImage from "@/components/project/FullImage";
import Button from "@/components/common/Button";
import PullQuote from "@/components/project/PullQuote";
import TextBlock from "@/components/project/TextBlock";
import BaseballCard from "@/components/project/BaseballCard";
import Mockup from "@/components/project/Mockup";
import ImageGrid from "@/components/project/ImageGrid";
import Tout from "@/components/work/Tout";

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
        intro: data.story.content.intro,
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
    BaseballCard,
    Tout,
    Mockup,
    ImageGrid
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
    @include hd-a();
  }

  &__dek {
    @include p-b();

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
  margin-top: 8rem;
}
</style>
