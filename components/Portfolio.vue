<template>
  <section
    class="min-h-screen grid grid-cols-1 grid-flow-row  md:grid-cols-2 xl:grid-cols-3 "
  >
    <PortfolioItem
      v-for="item in portfolioItems"
      :key="item.title"
      :title="item.title"
      :description="item.description"
      :background="item.background"
      :link="item.link"
      class="overflow-hidden"
    />
  </section>
</template>

<script>
import PortfolioItem from '@/components/PortfolioItem'
export default {
  components: {
    PortfolioItem
  },
  data() {
    return {
      portfolioItems: [
        {
          title: 'YAPS.life',
          description: 'A matchmaking system for roommates',
          background: { image: 'yaps.jpg', position: 'bg-center' },
          link: 'https://yaps.life/'
        },
        {
          title: 'Github / Code',
          description: 'See the source code behind my projects',
          background: { image: 'coding.jpg', position: 'bg-center' },
          link: 'https://github.com/kristianeboe'
        },
        {
          title: 'kristianeboe.me',
          description:
            'My own little piece of the web. Travel blog and musings on leadership.',
          background: { image: 'kristianeboe.jpg', position: 'bg-center' },
          link: 'https://kristianeboe.me/'
        },
        {
          title: 'LinkedIn',
          description: 'Professional profile',
          background: { image: 'linkedIn.jpg', position: 'bg-top' },
          link: 'https://www.linkedin.com/in/kristianeboe/'
        },
        {
          title: 'Swipestats.io',
          description: 'Visualize your dating data',
          background: { image: 'swipestats.jpg', position: 'bg-center' },
          link: 'https://swipestats.io/'
        },
        {
          title: 'My next project',
          description: 'Will we be working together?',
          background: { image: 'boostamins.jpg', position: 'bg-center' },
          link: 'mailto:kristian@boe.ventures'
        }
      ]
    }
  }
}
</script>

<style scoped>
.projects-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(33vw, 1fr));
  grid-template-rows: 50vh 50vh;
}

/* @media only screen and (max-width: 1001px) {
  grid-template-columns: repeat(auto-fill, minmax(50vw, 1fr));
  grid-template-rows: 50vh 50vh 50vh;
}
@media only screen and (max-width: 501px) {
  grid-template-columns: repeat(auto-fill, minmax(100vw, 1fr));
  grid-template-rows: repeat(6, 25vh);
} */
</style>
