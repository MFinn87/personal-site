<template>
  <div>
    <HamburgerMenu :menuOptions="menuOptions" class="mobile-only" />
    <Navbar :currentRoute="currentRoute" :menuOptions="menuOptions" :style="navbarStyle" class="desktop-only" />
  </div>
</template>
<script>
import { useRoute } from 'vue-router'
import HamburgerMenu from './mobile/HamburgerMenu.vue';
import Navbar from './desktop/Navbar.vue';

export default {
  name: 'Menu',
  props: {
    menuOptions: Array,
    navbarStyle: String,
  },
  methods: {
    
  },
  setup() {
    const route = useRoute();

    return {
      currentRoute: route
    }
  },
  components: {
    HamburgerMenu,
    Navbar
  }
}
</script>
<style>
</style>