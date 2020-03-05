<template>
  <div class="calendly-embed"></div>
</template>

<script>
export default {
  head() {
    return {
      link: [
        {
          href: 'https://assets.calendly.com/assets/external/widget.css',
          rel: 'stylesheet'
        }
      ],
      script: [
        {
          type: 'text/javascript',
          src: 'https://assets.calendly.com/assets/external/widget.js'
        },
        {
          type: 'text/javascript',
          src: 'https://assets.calendly.com/assets/external/widget.js'
        }
      ]
    }
  },
  mounted() {
    setTimeout(() => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: 'https://calendly.com/boe-ventures/initial-contract-meeting',
          text: 'Book a meeting',
          color: '#00a2ff',
          textColor: '#ffffff',
          branding: true
        })
      }
    }, 3000)
  }
}
</script>

<style></style>
