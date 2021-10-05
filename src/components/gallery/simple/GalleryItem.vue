<template>
  <div class="simple-gallery-item" @click="onClick">
    <img :alt="imageAlt" class="simple-gallery-item-thumb" height="240" :src="getImage(imageSource)">
    <h6 class="simple-gallery-item-caption">{{caption.toUpperCase()}}</h6>
  </div>
</template>
<script>
import utils from '../../../utils/index.js';
const { getImage } = utils;

export default {
  name: 'SimpleGalleryItem',
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
<style lang="scss">
.simple-gallery-item {
  h6 {
    font-weight: 800;
  }

  .simple-gallery-item-thumb {
    margin-bottom: 1em;
    object-fit: cover;
  }

  .simple-gallery-item-caption {
    text-align: center;
  }
}
</style>
