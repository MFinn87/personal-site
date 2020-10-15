<template>
    <div>
        <div class="text-segment">
            <h3>
                Portfolio
            </h3>
            <hr>
        </div>
        <Gallery :pictures="portfolioData" />
        <div class="next">
            <!-- <h4><a href="/contact">Let's work together</a></h4> -->
            <button @click="goToContact()">Let's work together</button>
        </div>
    </div>
</template>
<script>
import portfolioData from "../data/portfolio.json";
import Gallery from "../components/Gallery.vue";

export default {
    components: {
        Gallery
    },
    data() {
        return {
            portfolioData
        }
    },
    methods: {
        goToContact: function() {
            this.$router.push('/contact');
        }
    }
}
</script>
<style>
    
</style>