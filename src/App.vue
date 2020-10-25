<template>
  <div id="app" >
    <Menu :menuOptions="menuScreens" />
    <transition
        name="fade"
        mode="out-in"
    >
      <router-view id="router" />
    </transition>
  </div>
</template>

<script>
import Menu from './components/Menu.vue';
import menuScreens from './data/menu_screens.json';

export default {
  name: 'App',
  components: {
    Menu
  },
  data() {
    return {
      menuScreens
    }
  }
}
</script>

<style>
@import './styles/colors.scss';
@import './styles/typography.scss';
@import './styles/spacings.scss';
@import './styles/responsive.scss';
@import './styles/elements.scss';
@import './styles/transitions.scss';

body {
    margin: 0px;
    padding: 0px;
}

#app {
  background-color: var(--background-white);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  min-height: 100vh;
  height: 100%;
}

#router {
  padding-top: 60px;
  padding-bottom: 60px;
  padding-left: 10vw;
  padding-right: 10vw;
}
</style>
