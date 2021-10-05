<template>
  <div>
    <div class="gallery-grid">
      <FancyGalleryItem
        v-for="(picture, index) in pictures"
        :key="picture.id"
        :imageSource="picture.src"
        :imageAlt="picture.description"
        :caption="picture.caption"
        :description="picture.description"
        :orientation="getOrientation(index)"
        @onGalleryItemClick="showLightbox"
      />
    </div>
    <!-- <LightBox :media="media" ref="lightbox" :show-caption="true" :show-thumbs="false" :auto-play="false" :interface-hide-time="lightboxHideDelay"></LightBox> -->
  </div>
</template>
<script>
import FancyGalleryItem from './GalleryItem.vue';
import utils from '../../../utils/index.js';

const { getImage } = utils;

export default {
    name: 'FancyGallery',
    components: {
        FancyGalleryItem
    },
    props: {
        pictures: Array,
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
        },
        initializeLightbox() {
            this.media = [];
        },
        isEven(index) {
          return (index % 2 === 0);
        },
        getOrientation(index) {
          return this.isEven(index)
            ? 'left'
            : 'right'
        }
    },
    mounted() {
        this.initializeLightbox();
    }
}
</script>
<style>

</style>
