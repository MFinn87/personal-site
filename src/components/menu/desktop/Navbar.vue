<template>
  <div class="navbar-container">
    <a
      v-for="option in menuOptions"
      :href="option.href"
      :target="getAnchorTarget(option)"
      :key="option.id"
      class="navbar-item"
    >
      <span
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
  },
  methods: {
    isCurrentRoute(menuOption) {
      return this.currentRoute.path === menuOption.href
    },
    getAnchorTarget(menuOption) {
      return (menuOption.type === 'view')
        ? '_self'
        : '_blank'
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

    a:link {
      color: var(--white);
      text-decoration: none;
    }

    a:visited {
      color: var(--white);
      text-decoration: none;
    }

    a:hover {
      color: var(--white);
      text-decoration: none;
    }

    a:active {
      color: var(--white);
      text-decoration: none;
    }

    .navbar-item {
      text-decoration: none;
      margin-left: 1.5em;
      margin-right: 1.5em;
    }

    .navbar-item:last-child {
      margin-right: 0em;
    }

    .selected {
      color: var(--green);
    }
  }
</style>