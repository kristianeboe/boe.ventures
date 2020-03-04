<template>
  <section class="landing flex min-h-screen">
    <div class="w-full md:w-1/2 p-12 flex items-center">
      <img :src="logoPath" class="w-full h-auto" alt="Logo" />
    </div>
    <div class="w-full md:w-1/2 p-64">
      <div class="menu">
        <ul>
          <li>Portfolio</li>
          <li>Me</li>
        </ul>
        <button>
          Hire me
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import LogoWhiteBG from '@/assets/logo/logoWhiteBg.svg'

export default {
  data() {
    return {
      logoPath: LogoWhiteBG
    }
  }
}
</script>

<style></style>
