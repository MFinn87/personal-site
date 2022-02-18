<template>
  <div class="simple-gallery-item" @click="onClick">
    <img
      @click="onImageClick"
      :alt="imageAlt"
      :src="getImage(imageSource)"
      height="240"
      class="simple-gallery-item-thumb"
    >
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
    onImageClick() {
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
