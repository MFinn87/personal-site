<template>
  <div class="fancy-gallery-item">
    <div v-if="orientation === 'left'" class="fancy-gallery-item-left">
      <img
        @click="onImageClick"
        :alt="imageAlt"
        :src="getImage(imageSource)"
        height="520"
        class="fancy-gallery-item-thumb"
      >
      <div class="fancy-gallery-item-text">
        <h3>{{caption}}</h3>
        <p><strong>{{description}}</strong></p>
      </div>
      <div class="negative-space-column">
      </div>
    </div>
    <div v-if="orientation === 'right'" class="fancy-gallery-item-right">
      <div class="negative-space-column">
      </div>
      <div class="fancy-gallery-item-text">
        <h3>{{caption}}</h3>
        <p>{{description}}</p>
      </div>
      <img
        @click="onImageClick"
        :alt="imageAlt"
        :src="getImage(imageSource)"
        height="520"
        class="fancy-gallery-item-thumb"
      >
    </div>
  </div>
</template>
<script>
import utils from '../../../utils/index.js';

const { getImage } = utils;

export default {
  name: 'FancyGalleryItem',
  props: {
    caption: String,
    description: String,
    imageAlt: String,
    imageSource: String,
    orientation: String
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
  .fancy-gallery-item {
    margin-bottom: 6em;

    img {
      cursor: pointer;
    }

    h3, h4 {
      color: var(--white);
      width: 50%;
      margin-bottom: 1em;
    }

    .fancy-gallery-item-left {
      display: flex;
      flex-direction: row;
      align-items: center;
      border-left-color: var(--green);
      border-left-width: 1px;
      border-left-style: double;

      img {
        margin-left: 2em;
        margin-right: 2em;
        width: calc(50% - 3em);
      }

      .fancy-gallery-item-text {
        text-align: left;
        width: calc(50% - 3em);
      }
    }

    .fancy-gallery-item-right {
      display: flex;
      flex-direction: row;
      align-items: center;
      border-right-color: var(--green);
      border-right-width: 1px;
      border-right-style: double;

      img {
        margin-left: 2em;
        margin-right: 2em;
        width: calc(50% - 3em);
      }

      .fancy-gallery-item-text {
        text-align: left;
        width: calc(50% - 3em);
      }
    }

    .fancy-gallery-item-thumb {
      object-fit: cover;
    }
  }
</style>
