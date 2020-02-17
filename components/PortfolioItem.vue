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
        <h3>
          {{ title }}
        </h3>
        <br />
        <p>
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
