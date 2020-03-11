<template>
  <div>
    <Landing />
    <section id="specialities" class="py-12 bg-white hidden">
      <div class="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
        <div class="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <div
              class="flex items-center justify-center h-12 w-12 rounded-md bg-bvRed text-white"
            >
              <svg
                class="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </div>
            <div class="mt-5">
              <h5 class="text-lg leading-6 font-medium text-gray-900">
                Full-stack web development
              </h5>
              <p class="mt-2 text-base leading-6 text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>
            </div>
          </div>
          <div class="mt-10 lg:mt-0">
            <div
              class="flex items-center justify-center h-12 w-12 rounded-md bg-bvRed text-white"
            >
              <svg
                class="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                />
              </svg>
            </div>
            <div class="mt-5">
              <h5 class="text-lg leading-6 font-medium text-gray-900">
                Product management
              </h5>
              <p class="mt-2 text-base leading-6 text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>
            </div>
          </div>
          <div class="mt-10 lg:mt-0">
            <div
              class="flex items-center justify-center h-12 w-12 rounded-md bg-bvRed text-white"
            >
              <svg
                class="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div class="mt-5">
              <h5 class="text-lg leading-6 font-medium text-gray-900">
                Remote management consulting
              </h5>
              <p class="mt-2 text-base leading-6 text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="portfolio" class="lg:text-center bg-gray-50 pt-16">
      <div class="mb-12 px-4">
        <p
          class="text-base leading-6 text-bvRed font-semibold tracking-wide uppercase"
        >
          Portfolio
        </p>
        <h3
          class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
        >
          Actions speak louder than words
        </h3>
        <p class="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
          An overview of projects and profiles
        </p>
      </div>
      <Portfolio />
    </section>
    <CTASection cta-id="home" />
    <About />
  </div>
</template>

<script>
import Landing from '@/components/Landing'
import Portfolio from '@/components/Portfolio'
import CTASection from '@/components/CTASection'
import About from '@/components/About'

export default {
  components: {
    Landing,
    Portfolio,
    CTASection,
    About
  },
  data() {
    return {}
  }
}
</script>

<style></style>
