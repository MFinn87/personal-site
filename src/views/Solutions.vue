<template>
    <div>
        <div class="text-segment">
            <h3>What Can I Do For Your Business?
            </h3>
            <hr>
            <p>
                I've launched several successful SaaS products and developed custom software for clients in the marketing, manufacturing, food/beverage, and pharmaceutical verticals. I've developed, extended, and maintained complex ERP, CRM, and Inventory Management systems.
            </p>
            <p>
                I'd be eager to learn more about your software needs, and conduct a feasibility analysis.
            </p>
            <p>
                Some of the more common software development work I do is listed below:
            </p>
        </div>
        <SolutionGrid :items="solutions">
        </SolutionGrid>
        <div class="next">
            <button @click="goToPortfolio()">Explore portfolio</button>
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
<style>
</style>
