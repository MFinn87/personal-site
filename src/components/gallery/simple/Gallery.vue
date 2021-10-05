<template>
  <div>
    <div class="simple-gallery">
      <SimpleGalleryItem
          v-for="(picture, index) in pictures"
          :key="picture.id"
          :imageSource="picture.src"
          :imageAlt="picture.description"
          :caption="picture.caption"
          :description="picture.description"
          :orientation="getOrientation(index)"
          class="simple-gallery-grid-item"
          @onGalleryItemClick="showLightbox"
      />
    </div>
    <!-- <LightBox :media="media" ref="lightbox" :show-caption="true" :show-thumbs="false" :auto-play="false" :interface-hide-time="lightboxHideDelay"></LightBox> -->
  </div>
</template>
<script>
import SimpleGalleryItem from './GalleryItem.vue';
import utils from '../../../utils/index.js';

const { getImage } = utils;

export default {
    name: 'SimpleGallery',
    components: {
        SimpleGalleryItem
    },
    props: {
        pictures: Array
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
@media only screen and (min-width: 1436px) {
    .simple-gallery {
        display: grid;
        align-items: center;
        grid-template-columns: minmax(240px, 1fr) minmax(240px, 1fr) minmax(240px, 1fr) minmax(240px, 1fr);
        grid-gap: 4em;
    }
}

@media screen and (max-width: 1435px) {
    .simple-gallery {
        display: grid;
        align-items: center;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        grid-gap: 4em;
    }
}

.simple-gallery-grid-item {
    /* color: #121212; */
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
