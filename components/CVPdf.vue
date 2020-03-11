<template>
  <client-only>
    <pdf src="/Kristian-Elset-Boe-Resume-CV.pdf"></pdf>
  </client-only>
</template>

<script>
// import pdf from 'pdfvuer'
// import pdf from 'vue-pdf'

export default {
  components: {
    pdf: () => import('pdfvuer')
    // pdf
  }
}
</script>

<style>
.textLayer {
  display: none;
}
</style>
