<template>
  <div class="app-content">
    <SiteHeader
      :menuScreens="menuScreens"
      logo="assets/logos/logo2.svg"
    />
    <div class="router-container">
      <router-view id="router" />
    </div>
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

html {
  background-color: var(--background-black);
}

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
  display: flex;
  flex-direction: column;
}

.app-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: stretch;

  .router-container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;

    padding-left: 3em;
    padding-right: 3em;
    padding-top: 3em;
    padding-bottom: 2em;

    #router {
      flex-grow: 1;
      /* max-width: 2200px; */
    }
  }
}

</style>
