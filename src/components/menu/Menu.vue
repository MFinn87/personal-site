<template>
  <div>
    <HamburgerMenu :menuOptions="menuOptions" :onMenuOptionClick="routeToMenuOption" class="mobile-only" />
    <Navbar :currentRoute="currentRoute" :menuOptions="menuOptions" :onMenuOptionClick="routeToMenuOption" :style="navbarStyle" class="desktop-only" />
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
    routeToMenuOption: function(menuOption) {
      if (menuOption.type === 'file') {
        window.open(menuOption.href, "_blank")
      } else if (menuOption.type === 'view'){
        this.$router.push(menuOption.href);
      }
    }
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