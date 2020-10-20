<template>
    <div>
        <div class="center-vertically">
            <h2>
                Mike Finnegan
            </h2>
            <h4>
                Full-Stack Software Engineer
            </h4>
            <h4>
                Boulder / Denver
            </h4>
            <div class="next">
                <button @click="goToExplore()">Explore solutions</button>
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
<style>
</style>