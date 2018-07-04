<template>
  <section class="project">
    <div class="hero">
      <div class="hero__inner">
        <h1 class="hero__title">Village</h1>
        <p class="hero__dek">Village provides substance abuse therapists to talk to and guided exercises/resources to walk through. Because although there are tons of resources for substance abusers, none exist for the friends and family of abusers. Our loved ones often feel extremely lost and helpless when they see us in suffering and don't know how to help. Village seeks to fulfill this need.</p>
        <Button href="#" text="View Project" />
      </div>
    </div>
    <FullImage src="https://static1.squarespace.com/static/561ac1b7e4b01839b1c0c319/t/5a374d8a9140b764370474f7/1513573846612/village+perspective+mockup.png?format=2000w"/>
    <Row class="row--right">
      <h1 class="hero__title">Village</h1>
      <p class="hero__dek">Village provides substance abuse therapists to talk to and guided exercises/resources to walk through. Because although there are tons of resources for substance abusers, none exist for the friends and family of abusers. Our loved ones often feel extremely lost and helpless when they see us in suffering and don't know how to help. Village seeks to fulfill this need.</p>
    </Row>
  </section>
</template>

<script>
import FullImage from "@/components/project/FullImage";
import Button from "@/components/common/Button";
import Row from "@/components/project/Row";

export default {
  components: {
    FullImage,
    Button,
    Row
  }
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;

  &--right {
    justify-content: flex-end;
  }

  .row__content {
    @include for-small-desktop-up {
      max-width: 70rem;
      width: 60%;
    }
  }
}

.project {
  & > * + * {
    margin-top: 8rem;
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

    margin-top: 4rem;
  }

  .button {
    margin-top: 4rem;
  }
}
</style>