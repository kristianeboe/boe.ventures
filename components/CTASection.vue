<template>
  <section :id="`cta-${ctaId}`" class="bg-gray-50">
    <div
      class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
    >
      <h2
        class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
      >
        Want to work together?
        <br />
        <span class="text-bvRed">Let's talk!</span>
      </h2>
      <div class="mt-8 flex lg:flex-shrink-0 lg:mt-0">
        <div class="inline-flex rounded-md shadow">
          <a
            href="https://calendly.com/boe-ventures/initial-contract-meeting"
            class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-bvRed hover:bg-bvRed focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
          >
            Book a meeting
          </a>
        </div>
        <div class="ml-3 inline-flex rounded-md shadow">
          <nuxt-link
            to="/resume"
            class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-bvRed bg-white hover:text-bvRed focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
          >
            View resume
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    ctaId: {
      type: String,
      default: ''
    }
  }
}
</script>

<style></style>
