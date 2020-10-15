<template>
    <div>
        <div class="text-segment">
            <h3>
                Portfolio
            </h3>
            <hr>
        </div>
        <LightBox :media="media" ref="lightbox" :show-caption="true" :show-thumbs="false" :auto-play="false" :auto-play-time="9999999"></LightBox>
        <div class="screenshot-grid">
            <div v-for="(screenshot, index) in portfolio" :key="index" class="screenshot-item">
                <img class="screenshot-thumb" :src="getImage(screenshot.src)" height="240" v-on:click="showLightbox(screenshot)">
                <p class="screenshot-caption">{{screenshot.caption}}</p>
            </div>
        </div>
        <div class="next">
            <!-- <h4><a href="/contact">Let's work together</a></h4> -->
            <button @click="goToContact()">Let's work together</button>
        </div>
    </div>
</template>
<script>
import portfolio from "../data/portfolio.json";
import LightBox from 'vue-it-bigger';
require('vue-it-bigger/dist/vue-it-bigger.min.css');

export default {
    components: {
        LightBox
    },
    data() {
        return {
            portfolio,
            media: []
        }
    },
    mounted() {
        this.closeLightbox();
    },
    methods: {
        getImage(image) {
            return require(`@/${image}`);
        },
        showLightbox(image) {
            this.media = [{
                    thumb: this.getImage(image.src),
                    src: this.getImage(image.src),
                    caption: image.description,
                    srcset: this.getImage(image.src) // Optional for displaying responsive images
            }];
            this.$refs.lightbox.showImage(0);
        },
        closeLightbox() {
            this.media = [];
            this.$refs.lightbox.closeLightBox();
        },
        goToContact: function() {
            this.$router.push('/contact');
        }
    }
}
</script>
<style>
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
        cursor: pointer;
        text-align: center;
    }

    .screenshot-thumb {
        object-fit: cover;
    }

    .screenshot-caption {
        text-align: center;
    }

    .vib-footer {
        background: rgb(0, 0, 0);
    }

    .vib-hidden {
        opacity: 100% !important;
    }
</style>