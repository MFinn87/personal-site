<template>
  <div class="gallery-grid">
    <FancyGalleryItem
      v-for="(picture, index) in pictures"
      :key="picture.id"
      :imageSource="picture.src"
      :imageAlt="picture.description"
      :caption="picture.caption"
      :description="picture.description"
      :orientation="getOrientation(index)"
      @onGalleryItemClick="onGalleryItemClick"
    />
  </div>
</template>
<script>
import FancyGalleryItem from './GalleryItem.vue';

export default {
  name: 'FancyGallery',
  components: {
    FancyGalleryItem
  },
  props: {
      pictures: Array,
  },
  methods: {
    isEven(index) {
      return (index % 2 === 0);
    },
    getOrientation(index) {
      return this.isEven(index)
        ? 'left'
        : 'right'
    },
    onGalleryItemClick(image) {
      this.$emit('onGalleryItemClick', image);
    }
  }
}
</script>
<style>

</style>
