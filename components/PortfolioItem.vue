<template>
  <a :href="link">
    <article
      :style="{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(' +
          require('@/assets/images/portfolioItems/' + background.image) +
          ')'
      }"
      :class="`portfolioItem flex flex-col bg-cover ${background.position}`"
    >
      <div class="">
        <h3
          class=" text-3xl leading-8 font-extrabold tracking-tight text-gray-300 sm:text-4xl sm:leading-10"
        >
          {{ title }}
        </h3>
        <br />
        <p class="mt-2 text-base leading-6 text-gray-100">
          {{ description }}
        </p>
      </div>
    </article>
  </a>
</template>

<script>
export default {
  props: ['title', 'background', 'description', 'link']
}
</script>

<style>
.portfolioItem {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 100%;
  color: white;
  transition: all 0.5s;
}
.portfolioItem:hover {
  transform: scale(1.2);
}
</style>
