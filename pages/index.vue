<template>
  <div>
    <Landing />
    <div class="py-12 bg-white">
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
    </div>

    <section id="portfolio" class="lg:text-center bg-gray-50 pt-16">
      <div class="mb-12">
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
    <CTASection />
    <section id="about-me" class="border-b border-gray-200">
      <div class="relative bg-white overflow-hidden py-16">
        <div class="max-w-screen-xl mx-auto flex justify-around ">
          <div
            class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
          >
            <div class="pt-6 px-4 sm:px-6 lg:px-8"></div>

            <div
              class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
            >
              <div class="sm:text-center lg:text-left">
                <h2
                  class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"
                >
                  The man, the myth
                  <br class="xl:hidden" />
                  <span class="text-bvRed">THE LEGEND</span>
                </h2>
                <p
                  class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                >
                  ven·ture /ˈven(t)SHər/
                </p>
                <div
                  class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
                >
                  <div class="rounded-md shadow">
                    <a
                      href="#"
                      class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-bvRed hover:bg-bvRed focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                    >
                      Personal blog
                    </a>
                  </div>
                  <div class="mt-3 sm:mt-0 sm:ml-3">
                    <nuxt-link
                      to="/resume"
                      class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-bvBlue bg-indigo-100 hover:text-bvRed hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                    >
                      GitHub
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              :src="landingImg"
              class="w-full"
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Kristian Elset Bø</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 py-4">
              <SocialIcons />
            </div>
          </div>
        </div>
        <!-- <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            :src="landingImg"
            class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            alt=""
          />
        </div> -->
      </div>
    </section>
  </div>
</template>

<script>
import Landing from '@/components/Landing'
import Portfolio from '@/components/Portfolio'
import CTASection from '@/components/CTASection'
import SocialIcons from '@/components/SocialIcons'

import KristianSmall from '@/assets/images/kristian_small.jpeg'

export default {
  components: {
    Landing,
    Portfolio,
    CTASection,
    SocialIcons
  },
  data() {
    return {
      landingImg: KristianSmall
    }
  }
}
</script>

<style></style>
