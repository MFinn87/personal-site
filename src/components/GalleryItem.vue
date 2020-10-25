<template>
    <div @click="onClick">
        <img :alt="imageAlt" class="gallery-item-thumb" height="240" :src="getImage(imageSource)">
        <p class="gallery-item-caption">{{caption}}</p>
    </div>
</template>
<script>
import utils from '../utils/index.js';
const { getImage } = utils;

export default {
    name: 'GalleryItem',
    props: {
        caption: String,
        description: String,
        imageAlt: String,
        imageSource: String
    },
    methods: {
        getImage,
        onClick() {
            this.$emit('onGalleryItemClick', {
                src: this.imageSource,
                description: this.description,
                caption: this.caption,
                alt: this.imageAlt
            });
        }
    }
}
</script>
<style>
.gallery-item-thumb {
    object-fit: cover;
}

.gallery-item-caption {
    text-align: center;
}
</style>
