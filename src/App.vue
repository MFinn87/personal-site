<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
@import './styles/typography.scss';
@import './styles/spacings.scss';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 60px;
  padding-left: 45px;
  padding-right: 45px;
}
</style>
