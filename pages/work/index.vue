<template>
  <section class="work">
    <ul class="tout-list">
      <li class="tout-list__item" v-for="project in projects" :key="project.title">
        <Tout
              :title="project.title"
              :imageUrl="project.imageUrl"
              :href="project.href"
               />
      </li>
    </ul>
  </section>
</template>

<script>
import Tout from "@/components/work/Tout";

export default {
  data() {
    return {
      projects: [
        {
          title: "Village",
          imageUrl:
            "https://static1.squarespace.com/static/561ac1b7e4b01839b1c0c319/t/5a374d8a9140b764370474f7/1513573846612/village+perspective+mockup.png?format=2000w",
          href: "/work/project"
        },
        {
          title: "TakeShape",
          imageUrl:
            "https://takeshape-prod.imgix.net/f7640501-2997-427e-b82e-ce0b3bd0b37e/dev/947ba772-03bd-4d0e-a8c7-d3c59240bb04/TakeShape.png?auto=compress%2Cformat",
          href: "/work/project"
        }
      ]
    };
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
