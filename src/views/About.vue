<template>
  <div class="about">
    <div class="about-desktop desktop-only">
      <h5>
        <strong>FULL-STACK SOFTWARE ENGINEER</strong>
      </h5>
      <h1>
        MIKE FINNEGAN
      </h1>
      <div class="negative-space-row">
      </div>
      <div class="next-desktop-right">
        <button @click="goToExplore()">EXPLORE</button>
      </div>
      <h6>
        Boulder / Denver
      </h6>
    </div>
    <div class="about-mobile mobile-only">
      <img src="../assets/logos/logo2.svg"/>
      <h4>
        <strong>MIKE FINNEGAN</strong>
      </h4>
      <p>
        FULL-STACK SOFTWARE ENGINEER
      </p>
      <div class="next-mobile">
        <button @click="goToExplore()">EXPLORE</button>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  methods: {
    goToExplore: function() {
      this.$router.push('/solutions');
    }
  }
}
</script>
<style lang="scss">
  .about {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;

    .about-desktop {
      flex-grow: 1;
    }

    .about-mobile {
      flex-grow: 1;
      text-align: center;

      img {
        width: 18em;
        max-width: 100%;
      }
    }
  }
</style>
