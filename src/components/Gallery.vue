<template>
    <div>
        <div class="gallery-grid">
            <GalleryItem
                v-for="(picture) in pictures"
                :key="picture.id"
                :imageSource="picture.src"
                :imageAlt="picture.description"
                :caption="picture.caption"
                :description="picture.description"
                class="gallery-grid-item"
                @onGalleryItemClick="showLightbox"
            />
        </div>
        <LightBox :media="media" ref="lightbox" :show-caption="true" :show-thumbs="false" :auto-play="false" :interface-hide-time="lightboxHideDelay"></LightBox>
    </div>
</template>
<script>
import LightBox from 'vue-it-bigger';
import GalleryItem from './GalleryItem.vue';
import utils from '../utils/index.js';

const { getImage } = utils;

export default {
    name: 'Gallery',
    components: {
        LightBox,
        GalleryItem
    },
    props: {
        pictures: Array,
        lightboxHideDelay: Number
    },
    data() {
        return {
            media: []
        }
    },
    methods: {
        showLightbox(image) {
            this.media = [{
                    thumb: getImage(image.src),
                    src: getImage(image.src),
                    caption: image.description,
                    srcset: getImage(image.src) // Optional for displaying responsive images
            }];
            this.$refs.lightbox.showImage(0);
        },
        initializeLightbox() {
            this.media = [];
            this.$refs.lightbox.closeLightBox();
        }
    },
    mounted() {
        this.initializeLightbox();
    }
}
</script>
<style>
@import '../../node_modules/vue-it-bigger/dist/vue-it-bigger.min.css';

@media only screen and (min-width: 1436px) {
    .gallery-grid {
        display: grid;
        align-items: center;
        grid-template-columns: minmax(240px, 1fr) minmax(240px, 1fr) minmax(240px, 1fr) minmax(240px, 1fr);
        grid-gap: 4em;
    }
}

@media screen and (max-width: 1435px) {
    .gallery-grid {
        display: grid;
        align-items: center;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        grid-gap: 4em;
    }
}

.gallery-grid-item {
    color: #121212;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    text-align: center;
}

.vib-footer, .vib-close {
    background: rgba(0,0,0,.7);
}
</style>
