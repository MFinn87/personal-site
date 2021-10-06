<template>
  <div class="navbar-container">
    <a v-for="option in menuOptions" @click="onMenuOptionClick(option)" :key="option.id"> 
      <span
        class="navbar-item"
        :class="isCurrentRoute(option) ? 'selected' : ''"
      >
        {{option.caption.toUpperCase()}}
      </span>
    </a>
  </div>
</template>
<script>
export default {
  props: {
    currentRoute: Object,
    menuOptions: Array,
    onMenuOptionClick: Function
  },
  methods: {
    isCurrentRoute(menuOption) {
      return this.currentRoute.path === menuOption.href
    }
  }
}
</script>
<style lang="scss">
  .navbar-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    flex-wrap: nowrap;
    align-items: center;
    height: 4em;
  }

  .navbar-item {
    text-decoration: none;
    cursor: pointer;
    margin-left: 3em;
  }

  .navbar-item:hover {
    /* background-color: #303030; */
  }

  .selected {
    color: var(--green);
  }
</style>