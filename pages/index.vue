<template>
  <div>
    <div class="container">
      <div>
        <logo />
        <h1 class="title">Boe Ventures</h1>
        <h2 class="subtitle">By Kristian Elset Boe</h2>
        <div class="links">
          <nuxt-link to="/resume" class="button--green">
            Resume
          </nuxt-link>
          <a href="https://nuxtjs.org/" target="_blank" class="button--green"
            >Documentation</a
          >
          <a
            href="https://github.com/kristianeboe/boe.ventures"
            target="_blank"
            class="button--grey"
            >GitHub</a
          >
        </div>
      </div>
    </div>
    <Landing />
    <Portfolio />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Landing from '@/components/Landing'
import Portfolio from '@/components/Portfolio'

export default {
  components: {
    Logo,
    Landing,
    Portfolio
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Avenir', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
