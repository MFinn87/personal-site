<template>
  <div class="app-content">
    <SiteHeader
      :menuScreens="menuScreens"
      logo="assets/logos/logo2.svg"
    />
    <router-view id="router" />
  </div>
</template>

<script>
import SiteHeader from './components/header/SiteHeader.vue'
import menuScreens from './data/menu_screens.json';

export default {
  name: 'App',
  components: {
    SiteHeader
  },
  setup() {
    return {
      menuScreens
    };
  }
}
</script>

<style lang="scss">
@import './styles/colors.scss';
@import './styles/typography.scss';
@import './styles/spacings.scss';
@import './styles/responsive.scss';
@import './styles/elements.scss';

body {
  height: 100%;
  margin: 0px;
  padding: 0px;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  min-height: 100%;
  background-color: var(--background-black);
  color: var(--white);
  /*
    padding-top: env(safe-area-inset-top, 0px);
    padding-right: env(safe-area-inset-right, 3em);
    padding-bottom: env(safe-area-inset-bottom, 0px);
    padding-left: env(safe-area-inset-left, 3em);
  */
  padding-left: 3em;
  padding-right: 3em;
  display: flex;
  flex-direction: column;
}

#router {
  flex-grow: 1;
  padding-top: 3em;
  padding-bottom: 2em;
}

.app-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>
