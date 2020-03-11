<template>
  <div class="layout">
    <Nav />
    <main>
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default {
  components: {
    Nav,
    Footer
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
