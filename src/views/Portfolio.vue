<template>
    <div>
        <div class="text-segment">
            <h3>
                Portfolio
            </h3>
        </div>
        <Gallery :pictures="portfolioData" :lightboxHideDelay="99999999" />
        <div class="next">
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