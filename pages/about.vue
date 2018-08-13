<template>
  <section class="about" v-editable="blok">
    <div class="about__inner">
      <div class="about__photo">
        <img :src="image" alt="Jared Pike" />
        <div class="social">
          <ul class="social__list">
            <li class="social__item" v-if="dribbble">
              <a class="social__link" :href="dribbble" target="_blank">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 256 256" style="enable-background:new 0 0 256 256;" xml:space="preserve">
                <g>
                  <path d="M128,255.7c-70.6,0-128-57.3-128-127.8C0,57.3,57.4,0,128,0s128,57.3,128,127.8S198.6,255.7,128,255.7L128,255.7L128,255.7
                    z M235.9,145.3c-3.7-1.2-33.8-10.1-68.1-4.7c14.3,39.2,20.1,71.2,21.2,77.8C213.6,201.9,231.1,175.7,235.9,145.3L235.9,145.3
                    L235.9,145.3z M170.7,228.5c-1.6-9.6-8-43-23.3-82.8c-0.2,0.1-0.5,0.2-0.7,0.2c-61.7,21.5-83.8,64.2-85.8,68.2
                    c18.5,14.4,41.8,23,67.1,23C143.1,237.2,157.6,234.1,170.7,228.5L170.7,228.5L170.7,228.5z M46.8,201c2.5-4.2,32.5-53.8,88.9-72.1
                    c1.4-0.5,2.9-0.9,4.3-1.3c-2.7-6.2-5.7-12.4-8.9-18.5c-54.6,16.3-107.6,15.6-112.4,15.5c0,1.1-0.1,2.2-0.1,3.3
                    C18.7,156,29.3,181.6,46.8,201L46.8,201L46.8,201z M21,105.6c4.9,0.1,49.9,0.3,101.1-13.3C104,60.1,84.4,33.1,81.6,29.2
                    C50.9,43.6,28.1,71.8,21,105.6L21,105.6L21,105.6z M102.4,21.8c3,4,22.9,31,40.8,63.9c38.9-14.6,55.3-36.6,57.3-39.4
                    c-19.3-17.1-44.7-27.5-72.5-27.5C119.2,18.8,110.6,19.9,102.4,21.8L102.4,21.8L102.4,21.8z M212.6,58.9c-2.3,3.1-20.6,26.6-61,43.1
                    c2.5,5.2,5,10.5,7.3,15.8c0.8,1.9,1.6,3.8,2.4,5.6c36.4-4.6,72.5,2.8,76.1,3.5C237.1,101.2,227.9,77.5,212.6,58.9L212.6,58.9
                    L212.6,58.9z"/>
                </g>
                </svg>
              </a>
              <a class="social__link" :href="linkedin" target="_blank">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" viewBox="0 0 512 512">
                  <path d="M29.675 177.275l92.784-1.157v303.831l-92.784 1.178v-303.851z" />
                  <path d="M200.141 177.275l88.658-1.126v38.646l0.021 10.947c26.255-25.744 53.32-45.2 96.563-45.2 51.016 0 100.362 21.381 100.362 91.034v208.435l-90 1.341v-159.232c0-35.103-8.796-57.733-50.719-57.733-36.935 0-52.398 6.615-52.398 55.214v160.399l-92.478 1.116v-303.841z" />
                  <path d="M127.836 81.449c0 28.051-22.74 50.79-50.79 50.79s-50.791-22.739-50.791-50.791c0-28.051 22.739-50.791 50.791-50.791 28.051 0 50.791 22.739 50.791 50.791z" />
                </svg>
              </a>
              <a class="social__link" :href="github" target="_blank">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 32.6 31.8" style="enable-background:new 0 0 32.6 31.8;" xml:space="preserve">
                <style type="text/css">
                  .st0{fill-rule:evenodd;clip-rule:evenodd;}
                </style>
                <path class="st0" d="M16.3,0C7.3,0,0,7.3,0,16.3c0,7.2,4.7,13.3,11.1,15.5c0.8,0.1,1.1-0.4,1.1-0.8c0-0.4,0-1.4,0-2.8
                  c-4.5,1-5.5-2.2-5.5-2.2c-0.7-1.9-1.8-2.4-1.8-2.4c-1.5-1,0.1-1,0.1-1c1.6,0.1,2.5,1.7,2.5,1.7c1.5,2.5,3.8,1.8,4.7,1.4
                  c0.1-1.1,0.6-1.8,1-2.2c-3.6-0.4-7.4-1.8-7.4-8.1c0-1.8,0.6-3.2,1.7-4.4C7.4,10.7,6.8,9,7.7,6.8c0,0,1.4-0.4,4.5,1.7
                  c1.3-0.4,2.7-0.5,4.1-0.5c1.4,0,2.8,0.2,4.1,0.5c3.1-2.1,4.5-1.7,4.5-1.7c0.9,2.2,0.3,3.9,0.2,4.3c1,1.1,1.7,2.6,1.7,4.4
                  c0,6.3-3.8,7.6-7.4,8c0.6,0.5,1.1,1.5,1.1,3c0,2.2,0,3.9,0,4.5c0,0.4,0.3,0.9,1.1,0.8c6.5-2.2,11.1-8.3,11.1-15.5
                  C32.6,7.3,25.3,0,16.3,0z"/>
                </svg>
              </a>
              <a class="social__link" :href="medium" target="_blank">
                <svg width="100%" height="100%" viewBox="0 0 131 104" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
                  <g transform="matrix(1,0,0,1,-31,-44)">
                      <path d="M46.534,65.216C46.697,63.608 46.084,62.018 44.883,60.936L32.651,46.201L32.651,44L70.63,44L99.986,108.381L125.795,44L162,44L162,46.201L151.542,56.228C150.64,56.915 150.193,58.045 150.38,59.163L150.38,132.837C150.193,133.955 150.64,135.085 151.542,135.772L161.755,145.799L161.755,148L110.383,148L110.383,145.799L120.963,135.527C122.003,134.488 122.003,134.182 122.003,132.593L122.003,73.042L92.586,147.755L88.611,147.755L54.362,73.042L54.362,123.116C54.077,125.221 54.776,127.341 56.258,128.863L70.019,145.554L70.019,147.755L31,147.755L31,145.554L44.761,128.863C46.232,127.338 46.89,125.204 46.534,123.116L46.534,65.216Z" style="fill-rule:nonzero;"/>
                  </g>
              </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="about__content">
        <div class="about__section">
          <MarkdownContent :content="intro" class="about__intro"/>
          <Button href="mailto: jaredpike92@gmail.com">Email me</Button>
        </div>

        <div class="about__section">
          <h2 class="about__heading">Experience</h2>
          <ul class="experience">
            <li class="experience__item">
              <div class="experience__time">January 2016 - Present</div>
              <p class="experience__title">Interactive Designer, Ronik</p>
            </li>
            <li class="experience__item">
              <div class="experience__time">Sept 2015 - Dec 2015</div>
              <p class="experience__title">Designer, Scout</p>
            </li>
            <li class="experience__item">
              <div class="experience__time">July 2014 - Dec 2014</div>
              <p class="experience__title">Design Co-op, Ronik</p>
            </li>
            <li class="experience__item">
              <div class="experience__time">July 2013 - May 2014</div>
              <p class="experience__title">Design Co-op, Boundless Learning</p>
            </li>
          </ul>
        </div>

        <!-- <div class="about__section">
          <h2 class="about__heading">Awards</h2>
          <ul class="experience">
            <li class="experience__item">
              <div class="experience__time">Communications Arts</div>
              <div class="experience__title">Award of Excellence, JFK T4</div>
              <div class="experience__studio">Ronik Design</div>
            </li>
          </ul>
        </div> -->

        <div class="about__section">
          <MarkdownContent :content="footnote" classes="small"/>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import MarkdownContent from "@/components/common/MarkdownContent";
import Button from "@/components/common/Button";

export default {
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories/about", {
        version: context.isDev ? "draft" : "published"
      })
      .then(res => {
        const content = res.data.story.content;
        return {
          title: content.title,
          intro: content.intro,
          image: content.image,
          linkedin: content.linkedin,
          twitter: content.twitter,
          github: content.github,
          medium: content.medium,
          footnote: content.footnote,
          blok: content
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
    MarkdownContent,
    Button
  }
};
</script>

<style lang="scss" scoped>
.about {
  @extend %container;

  &__intro {
    margin-bottom: 3rem;
  }

  &__inner {
    @include for-tablet-landscape-up {
      display: flex;
    }
  }

  &__content {
    @include for-tablet-landscape-up {
      flex: 1 1 66%;
      margin-left: 12rem;
    }
  }

  &__photo {
    @include for-tablet-landscape-up {
      flex: 1 1 33%;
    }

    @include for-tablet-portrait-down {
      max-width: 24rem;
      margin-bottom: 4rem;
    }

    img {
      width: 100%;
      border-radius: 50%;
    }
  }

  &__section {
    & + * {
      margin-top: 8rem;
    }
  }

  &__heading {
    @include hd-d;

    margin-bottom: 2.4rem;
  }
}

.social {
  @include for-tablet-landscape-up {
    display: flex;
    justify-content: center;
  }

  &__list {
    display: flex;
    align-items: center;
    margin-top: 2.4rem;
  }

  &__link {
    svg {
      width: 2.4rem;
      height: 2.4rem;
      fill: -color(abyss);
      transition: fill 0.1s ease;
    }

    & + * {
      margin-left: 1.6rem;
    }

    &:hover {
      svg {
        fill: -color(picton);
      }
    }
  }
}

.experience {
  &__time {
    @include eyebrow;

    margin-bottom: 0.2rem;
  }

  &__title,
  &__studio {
    @include p-a();
  }

  &__item {
    & + * {
      margin-top: 2.4rem;
    }
  }
}
</style>
