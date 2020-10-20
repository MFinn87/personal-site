<template>
    <div class="grid-item">
        {{text}}
    </div>
</template>
<script>
export default {
    props: {
        text: String
    }
}
</script>
<style>
    .grid-item {
        /* background-color: white; */
        background: linear-gradient(to bottom, var(--white), var(--eggshell));
        border: 1px solid rgba(18, 18, 18, .3);
        color: #121212;
        border-radius: 5px;
        padding: 20px;
        text-align: center;
    }
</style>
