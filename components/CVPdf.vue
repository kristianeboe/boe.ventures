<template>
  <client-only>
    <pdf :page="1" src="/Kristian-Elset-Boe-Resume-CV.pdf"> </pdf>
  </client-only>
</template>

<script>
// import pdf from 'pdfvuer'

export default {
  components: {
    pdf: () => import('pdfvuer')
  }
}
</script>
