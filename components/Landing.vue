<template>
  <section id="landing">
    <div x-data="{ open: false }" class="relative bg-white overflow-hidden">
      <div class="max-w-screen-xl mx-auto ">
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
                Independent
                <br class="hidden md:block" />
                <span class="text-bvRed">CTO for hire</span>
              </h2>
              <p
                class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
                Boe Ventures exists to help people and companies use techonlogy
                as a path to freedom, not frustration.
              </p>
              <div
                class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
              >
                <div class="rounded-md shadow">
                  <a
                    href="https://calendly.com/boe-ventures/initial-contract-meeting"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-bvRed hover:bg-bvRed focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Venture with me
                  </a>
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-3">
                  <nuxt-link
                    to="/resume"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-bvBlue bg-indigo-100 hover:text-bvRed hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Resume
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
          <svg
            class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        </div>
      </div>
      <div
        class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-black p-16 lg:pl-48 lg:pr-16"
      >
        <img
          :src="landingImg"
          class="h-56 w-full object-contain sm:h-72 md:h-96 lg:w-full lg:h-full"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script>
import LogoWhiteBG from '@/assets/logo/logoWhiteBg.svg'
import LogoWhite from '@/assets/logo/boeVenturesLogoWhite.svg'
// import KristianSmall from '@/assets/images/kristian_small.jpeg'

export default {
  data() {
    return {
      logoPath: LogoWhiteBG,
      landingImg: LogoWhite
    }
  }
}
</script>

<style></style>
