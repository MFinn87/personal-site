<template>
  <div>
    <div class="mobile-only grid-wrapper">
      <div class="mobile-grid">
        <SolutionItem v-for="(solution) in items" :key="solution.id" :solution="solution">
        </SolutionItem>
      </div>
    </div>
    <div class="desktop-only grid-wrapper">
      <div class="desktop-grid">
        <SolutionItem v-for="(solution) in items" :key="solution.id" :solution="solution">
        </SolutionItem>
      </div>
    </div>
  </div>
</template>
<script>
import SolutionItem from "../components/SolutionItem.vue";

export default {
  components: {
    SolutionItem
  },
  props: {
    items: Array
  }
}
</script>
<style>
  .grid-wrapper {
    margin-top: 40px;
  }

  .mobile-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 10px;
    margin-top: 2em;
  }

  .desktop-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1.25fr));
    justify-content: center;
    grid-gap: 10px;
    margin-top: 2em;
  }
</style>