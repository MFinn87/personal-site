<template>
  <div class="portfolio">
    <div class="portfolio-header">
      <h3>
        PORTFOLIO
      </h3>
    </div>
    <Gallery :pictures="portfolioData" />
    <div class="next-desktop-center">
      <button class="mobile-full-width" @click="goToContact()">CONTACT</button>
    </div>
  </div>
</template>
<script>
import portfolioData from "../data/portfolio.json";
import Gallery from "../components/gallery/index.vue";

export default {
  components: {
    Gallery
  },
  data() {
    return {
      portfolioData
    }
  },
  methods: {
    goToContact: function() {
      this.$router.push('/contact');
    }
  }
}
</script>
<style lang="scss">
  .portfolio {
    width: 100%;

    .portfolio-header {
      margin-bottom: 2em;
    }
  }
</style>