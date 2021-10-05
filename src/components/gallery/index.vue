<template>
  <div>
    <FancyGallery class="desktop-only" :pictures="pictures" />
    <SimpleGallery class="mobile-only" :pictures="pictures" />
  </div>
</template>

<script>
import SimpleGallery from './simple/Gallery.vue';
import FancyGallery from './fancy/Gallery.vue';

export default {
  components: {
    FancyGallery,
    SimpleGallery
  },
  props: {
    pictures: Array,
  },
}
</script>
