<template>
    <div>
        <div class="center-vertically">
            <h5>
                <strong>FULL-STACK SOFTWARE ENGINEER</strong>
            </h5>
            <h1>
                MIKE FINNEGAN
            </h1>
            <div class="next">
                <button @click="goToExplore()">EXPLORE</button>
            </div>
            <h6>
                Boulder / Denver
            </h6>
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
