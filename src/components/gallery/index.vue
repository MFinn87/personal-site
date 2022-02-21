<template>
  <div>
    <LightBox @onLightBoxExit="closeLightBox" :source="lightBoxImageSrc" :alt="lightBoxImageAlt" v-if="isLightBoxOpen" />
    <FancyGallery class="desktop-only" :pictures="pictures" @onGalleryItemClick="openLightBox"/>
    <SimpleGallery class="mobile-only" :pictures="pictures" @onGalleryItemClick="openLightBox"/>
  </div>
</template>

<script>
import { ref } from 'vue';
import LightBox from '../lightbox/LightBox.vue';
import SimpleGallery from './simple/Gallery.vue';
import FancyGallery from './fancy/Gallery.vue';
import utils from '../../utils/index.js';

const { getImage } = utils;

export default {
  components: {
    FancyGallery,
    LightBox,
    SimpleGallery
  },
  props: {
    pictures: Array,
  },
  setup() {
    const isLightBoxOpen = ref(false);
    const lightBoxImageSrc = ref('');
    const lightBoxImageAlt = ref('');

    return {
      lightBoxImageSrc,
      lightBoxImageAlt,
      isLightBoxOpen
    };
  },
  methods: {
    openLightBox(image) {
      console.log('DEBUG IMAGE: ', image)
      this.lightBoxImageSrc = getImage(image.src);
      this.lightBoxImageAlt = image.alt;
      this.isLightBoxOpen = true;
    },
    closeLightBox() {
      this.isLightBoxOpen = false
    },
  }
}
</script>
