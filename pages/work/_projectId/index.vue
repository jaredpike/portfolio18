<template>
  <section class="project" v-editable="blok">
    <div class="hero">
      <div class="hero__inner">
        <h1 class="hero__title">{{ title }}</h1>
        <p class="hero__dek">{{ dek }}</p>
        <Button v-if="url" :href="url" text="View Project" />
      </div>
    </div>
    <ul class="blocks">
      <li v-for="block in body" :key="block._uid">
        <FullImage v-if="block.component === 'full-image'" :src="block.image" />
        <TextBlock v-if="block.component === 'text-block'" :copy="block.body" :heading="block.heading" :rightAlign="block.right" />
        <PullQuote v-if="block.component === 'pull-quote'" :text="block.text" />
      </li>
    </ul>
  </section>
</template>

<script>
import FullImage from "@/components/project/FullImage";
import Button from "@/components/common/Button";
import PullQuote from "@/components/project/PullQuote";
import TextBlock from "@/components/project/TextBlock";

export default {
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories/work/" + context.params.projectId, {
        version: context.isDev ? "draft" : "published"
      })
      .then(res => {
        return {
          title: res.data.story.content.title,
          dek: res.data.story.content.dek,
          url: res.data.story.content.url,
          body: res.data.story.content.body,
          blok: res.data.story.content
        };
      });
  },
  components: {
    FullImage,
    Button,
    PullQuote,
    TextBlock
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
  &__inner {
    @include for-small-desktop-up {
      max-width: 70rem;
      width: 60%;
    }
  }

  &__title {
    @include hd-a(-color(abyss));
  }

  &__dek {
    @include p-a(-color(abyss));

    margin-top: 2rem;

    @include for-tablet-portrait-up {
      margin-top: 4rem;
    }
  }

  .button {
    margin-top: 4rem;
  }
}
</style>