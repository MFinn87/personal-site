<template>
    <div class="grid-wrapper">
        <div class="grid">
            <TextGridItem v-for="(solution) in items" :key="solution.id" :text="solution">
            </TextGridItem>
        </div>
    </div>
</template>
<script>
import TextGridItem from "../components/TextGridItem.vue";

export default {
    components: {
        TextGridItem
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

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        grid-gap: 10px;
        background-color: #fff;
        margin-top: 2em;
    }
</style>