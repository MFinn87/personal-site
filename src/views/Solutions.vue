<template>
  <div class="solutions">
    <div class="solutions-text">
      <div class="solutions-text-question">
        <h3>WHAT CAN I DO FOR YOU?
        </h3>
      </div>
      <div class="solutions-text-detail">
        <p>
          I'm a versatile full stack software developer with extensive experience building web applications, APIs, automation, integrations, and reporting for businesses across the manufacturing, transportation, food/beverage, and pharmaceutical verticals.
        </p>
        <p>
          With expertise in TypeScript, JavaScript, Go, SQL, Python, HTML, and CSS, I've consistently delivered robust solutions for complex business needs.
        </p>
        <p>
          Some of the more common software development work I do is listed below:
        </p>
      </div>
    </div>
    <div class="desktop-only negative-space-row">
    </div>
    <div class="desktop-only negative-space-row">
    </div>
    <SolutionGrid :items="solutions">
    </SolutionGrid>
    <div class="next-desktop-center">
      <button class="mobile-full-width" @click="goToPortfolio()">PORTFOLIO</button>
    </div>
  </div>
</template>
<script>
import solutions from "../data/solutions.json";
import SolutionGrid from "../components/SolutionGrid.vue";

export default {
  components: {
    SolutionGrid
  },
  data() {
    return {
      solutions
    };
  },
  methods: {
    goToPortfolio: function() {
      this.$router.push('/portfolio');
    }
  }
}
</script>
<style lang="scss">
  .solutions {
    width: 100%;

    .solutions-text {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      width: 100%;

      .solutions-text-question {
        flex: 6;
        margin-right: 1em;
      }

      .solutions-text-detail {
        flex: 4;
        margin-left: 1em;
      }

      @media only screen and (max-width: 800px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .solutions-text-question {
          width: 100%;
          margin-right: 0px;
        }

        .solutions-text-detail {
          width: 100%;
          margin-top: 3em;
          margin-left: 0px;
        }
      }
    }
  }
</style>
