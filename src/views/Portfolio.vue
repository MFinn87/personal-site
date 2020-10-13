<template>
    <div class="text-segment">
        <h4>
            Portfolio
        </h4>
        <hr>
        <div class="screenshot-grid">
            <div v-for="(screenshot, index) in portfolio" :key="index" class="screenshot-item">
                <img :src="getImage(screenshot.src)" width="240">
                <p class="screenshot-caption">{{screenshot.caption}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import portfolio from "../data/portfolio.json";

export default {
    data() {
        return {
            portfolio
        }
    },
    methods: {
        getImage(image) {
            return require(`@/${image}`);
        }
    }
}
</script>
<style scoped>
    .screenshot-grid {
        display: grid;
        align-items: center;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        grid-gap: 30px;
        margin-top: 2em;
    }
    
    .screenshot-item {
        color: #121212;
        border-radius: 5px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .screenshot-caption {
        text-align: center;
    }
</style>