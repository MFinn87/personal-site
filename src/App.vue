<template>
  <div id="app">
    <Menu />
    <router-view id="router" />
  </div>
</template>

<script>
import Menu from './components/Menu.vue';


export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style>
@import './styles/typography.scss';
@import './styles/spacings.scss';
@import './styles/responsive.scss';
@import './styles/elements.scss';

body {
    margin: 0px;
    padding: 0px;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

#router {
  padding-top: 60px;
  padding-bottom: 60px;
  padding-left: 10vw;
  padding-right: 10vw;
}
</style>
