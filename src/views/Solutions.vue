<template>
<div>
    <div class="text-segment">
        <h3>What Can I Do For Your Business?
        </h3>
        <hr>
        <h4>
            I've launched several successful SaaS products and developed custom software for clients in the marketing, manufacturing, food/beverage, and pharmaceutical verticals. I've developed, extended, and maintained complex ERP, CRM, and Inventory Management systems.
        </h4>
        <h4>
            I'd be eager to learn more about your software needs, and conduct a feasibility analysis.
        </h4>
        <h4>
            Some of the more common software development work I do is listed below:
        </h4>
    </div>
    <div class="grid-wrapper">
        <div class="solution-grid">
            <div v-for="(solution, index) in solutions" :key="index" class="solution-item">
                {{solution}}
            </div>
        </div>
    </div>
    <div class="next">
        <h4><a href="/portfolio">Explore portfolio</a></h4>
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