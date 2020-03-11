<template>
  <footer class="bg-white">
    <div
      class="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8"
    >
      <nav class="-mx-5 -my-2 flex flex-wrap justify-center">
        <div class="px-5 py-2">
          <a
            href="#"
            class="text-base leading-6 text-gray-500 hover:text-gray-900"
          >
            Portfolio
          </a>
        </div>
        <div class="px-5 py-2">
          <nuxt-link
            to="/resume"
            class="text-base leading-6 text-gray-500 hover:text-gray-900"
          >
            Resume
          </nuxt-link>
        </div>
        <div class="px-5 py-2">
          <a
            href="https://calendly.com/boe-ventures/initial-contract-meeting"
            class="text-base leading-6 text-gray-500 hover:text-gray-900"
          >
            Contact
          </a>
        </div>
      </nav>
      <div class="mt-8 flex flex-col items-center">
        <img :src="logoPath" class="w-24" alt="Company name" />
        <p class="mt-8 text-gray-500 text-base leading-6">
          Technology should be the path to freedom, not frustration.
        </p>
      </div>
      <SocialIcons class="justify-center" />
      <div class="mt-8">
        <p class="text-center text-base leading-6 text-gray-400">
          &copy; 2020 Boe Ventures AS. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import LogoWhiteBG from '@/assets/logo/logoWhiteBg.svg'
import SocialIcons from '@/components/SocialIcons'

export default {
  components: {
    SocialIcons
  },
  data() {
    return {
      logoPath: LogoWhiteBG
    }
  }
}
</script>

<style></style>
