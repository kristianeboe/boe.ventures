<template>
  <div>
    <nav
      class="relative max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6 py-6"
    >
      <div class="flex items-center flex-1">
        <nuxt-link to="/">
          <img :src="logoPath" class="h-24 w-auto sm:h-10" alt="logo" />
        </nuxt-link>
        <div class="flex items-center justify-between w-full md:w-auto">
          <div class="-mr-2 flex items-center flex md:hidden">
            <button
              @click="open = true"
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="hidden md:flex flex-1 md:mr-10 justify-end">
          <nuxt-link
            v-for="link in navLinks"
            :key="link.url"
            :to="link.url"
            class="ml-10 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
          >
            {{ link.text }}
          </nuxt-link>
        </div>
      </div>
      <div class="hidden md:block text-right">
        <span class="inline-flex rounded-md shadow-md">
          <span class="inline-flex rounded-md shadow-xs">
            <nuxt-link
              to="/contact"
              class="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-bvRed bg-white hover:bg-gray-50 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >
              Get in touch
            </nuxt-link>
          </span>
        </span>
      </div>
    </nav>

    <div
      :class="{ block: open, hidden: !open }"
      class="absolute top-0 inset-x-0 p-2 hidden md:hidden"
    >
      <div
        v-if="open"
        x-transition:enter="duration-150 ease-out"
        x-transition:enter-start="opacity-0 scale-95"
        x-transition:enter-end="opacity-100 scale-100"
        x-transition:leave="duration-100 ease-in"
        x-transition:leave-start="opacity-100 scale-100"
        x-transition:leave-end="opacity-0 scale-95"
        class="rounded-lg shadow-md transition transform origin-top-right"
      >
        <div class="rounded-lg bg-white shadow-xs overflow-hidden">
          <div class="px-5 pt-4 flex items-center justify-between">
            <div>
              <img
                class="h-8 w-auto"
                src="/img/logos/workflow-mark-on-white.svg"
                alt=""
              />
            </div>
            <div class="-mr-2">
              <button
                @click="open = false"
                type="button"
                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="px-2 pt-2 pb-3">
            <a
              href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
              >Product</a
            >
            <a
              href="#"
              class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
              >Features</a
            >
            <a
              href="#"
              class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
              >Marketplace</a
            >
            <a
              href="#"
              class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
              >Company</a
            >
          </div>
          <div>
            <a
              href="#"
              class="block w-full px-5 py-3 text-center font-medium text-bvRed bg-gray-50 hover:bg-gray-100 hover:text-bvBlue focus:outline-none focus:bg-gray-100 focus:text-bvBlue transition duration-150 ease-in-out"
            >
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/assets/logo/logoWhiteBg.svg'

export default {
  data() {
    return {
      open: false,
      logoPath: Logo,
      navLinks: [
        {
          text: 'Portfolio',
          url: '/#portfolio'
        },
        {
          text: 'Resume',
          url: '/resume'
        }
      ]
    }
  }
}
</script>

<style></style>