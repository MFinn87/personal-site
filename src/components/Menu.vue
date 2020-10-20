<template>
    <div class="menu">
        <HamburgerMenu :menuOptions="menuOptions" class="mobile-only" />
        <Navbar :menuOptions="menuOptions" class="desktop-only" />
    </div>
</template>
<script>
import HamburgerMenu from './HamburgerMenu.vue';
import Navbar from './Navbar.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import * as icons from '@fortawesome/free-solid-svg-icons';

export default {
  name: 'Menu',
  props: {
    menuOptions: Array
  },
  components: {
    HamburgerMenu,
    Navbar
  },
  methods: {
    getIcon(name) {
        library.add(icons[name]);
        return icons[name];
    }
  },
  data() {
      return {
          
      }
  }
}
</script>
<style>
    .menu {
        position: sticky;
        position: -webkit-sticky;
        top: 0;
    }
</style>