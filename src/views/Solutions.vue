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
    <div class="grid-wrapper">
        <div class="solution-grid">
            <div v-for="(solution, index) in solutions" :key="index" class="solution-item">
                {{solution}}
            </div>
        </div>
    </div>
    <div class="next">
        <!-- <h4><a href="/portfolio">Explore portfolio</a></h4> -->
        <button @click="goToPortfolio()">Explore portfolio</button>
    </div>
</div>
</template>
<script>
import solutions from "../data/solutions.json";

export default {
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
<style scoped>
    .grid-wrapper {
        margin-top: 40px;
    }

    .solution-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        grid-gap: 10px;
        background-color: #fff;
        margin-top: 2em;
    }
    
    .solution-item {
        background-color: #fafafa;
        color: #121212;
        border-radius: 5px;
        padding: 20px;
        text-align: center;
    }
</style>