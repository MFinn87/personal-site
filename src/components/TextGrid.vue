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
    
</style>