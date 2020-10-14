<template>
    <div>
        <LightBox :media="media" ref="lightbox" :show-caption="true" :show-thumbs="false" :auto-play="false" :auto-play-time="9999999"></LightBox>
        <div class="text-segment">
            <h3>
                Portfolio
            </h3>
            <hr>
        </div>
        <div class="screenshot-grid">
            <div v-for="(screenshot, index) in portfolio" :key="index" class="screenshot-item">
                <img :src="getImage(screenshot.src)" width="240" v-on:click="showLightbox(screenshot)">
                <p class="screenshot-caption">{{screenshot.caption}}</p>
            </div>
        </div>
        <div class="next">
            <h4>Like what you see? <a href="/contact">Let's work together ></a></h4>
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
    methods: {
        getImage(image) {
            return require(`@/${image}`);
        },
        showLightbox(image) {
            console.log(image);
            console.log(LightBox);

            this.media = [{
                    thumb: this.getImage(image.src),
                    src: this.getImage(image.src),
                    caption: image.description,
                    srcset: this.getImage(image.src) // Optional for displaying responsive images
            }];
            this.$refs.lightbox.showImage(0);
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
    }

    .screenshot-caption {
        text-align: center;
    }

    .vib-footer {
        background: rgb(0, 0, 0);
    }

    .vib-hidden {
        opacity: 100%;
    }
</style>