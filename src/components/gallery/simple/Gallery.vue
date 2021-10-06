<template>
  <div class="simple-gallery">
    <SimpleGalleryItem
      v-for="(picture) in pictures"
      :key="picture.id"
      :imageSource="picture.src"
      :imageAlt="picture.description"
      :caption="picture.caption"
      :description="picture.description"
      class="simple-gallery-grid-item"
      @onGalleryItemClick="onGalleryItemClick"
    />
  </div>
</template>
<script>
import SimpleGalleryItem from './GalleryItem.vue';

export default {
  name: 'SimpleGallery',
  components: {
    SimpleGalleryItem
  },
  props: {
    pictures: Array
  },
  methods: {
    onGalleryItemClick(image) {
      this.$emit('onGalleryItemClick', image);
    }
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
