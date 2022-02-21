<template>
  <div class="site-header">
      <img
        @click="goHome()"
        :src="getImage(logo)"
        width="63"
        height="38.2"
        alt="logo"
        class="site-header-logo desktop-only"
      >
      <div
        v-if="isOnHomeScreen()"
        class="site-header__mobile-placeholder mobile-only"
      >
      </div>
      <img
        @click="goHome()"
        v-if="!isOnHomeScreen()"
        :src="getImage(logo)"
        width="63"
        height="38.2"
        alt="logo"
        class="site-header-logo mobile-only"
      >
    <div>
      <Menu :menuOptions="menuScreens" :navbarStyle="''" />
    </div>
  </div>
</template>
<script>
import { useRoute, useRouter } from 'vue-router'
import Menu from '../menu/Menu.vue';
import utils from '../../utils/index.js';

const { getImage } = utils;

export default {
  components: {
    Menu
  },
  props: {
    menuScreens: Array,
    logo: String,
  },
  setup() {
    const currentRoute = useRoute()
    const router = useRouter()

    return {
      router,
      currentRoute
    }
  },
  methods: {
    goHome() {
      this.router.push('/');
    },
    isOnHomeScreen() {
      return (this.currentRoute.path === '/');
    },
    getImage
  }
}
</script>
<style lang="scss">
  .site-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    background-color: var(--background-black);

    padding-left: 3em;
    padding-right: 3em;

    .site-header__mobile-placeholder {
      height: 38.2px;
      width: 63px;
    }

    .site-header-logo {
      margin-top: 2em;
      margin-bottom: 2em;
      cursor: pointer;
    }
  }
</style>
