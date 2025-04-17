<template>
  <Slide class="hamburger-menu" right :closeOnNavigation="true">
    <a
      v-for="option in menuOptions"
      :href="option.href"
      :target="getAnchorTarget(option)"
      :key="option.id"
      class="menu-option">
      {{ option.caption.toUpperCase() }}
    </a>
  </Slide>
</template>
<script>
import { Slide } from 'vue3-burger-menu'  // import the CSS transitions you wish to use, in this case we are using `Slide`

export default {
  name: 'HamburgerMenu',
  components: {
    Slide,
  },
  props: {
    menuOptions: Array,
  },
  methods: {
    getAnchorTarget(menuOption) {
      return (menuOption.type === 'view')
        ? '_self'
        : '_blank'
    }
  }
}

</script>
<style lang="scss">
  .hamburger-menu {
    height: 94px;
  }

  /* Burger menu when open */
  body.bm-overlay {
    .bm-menu {
      width: 100% !important;
      background-color: var(--background-black);

      .bm-cross-button {
        margin: .5em;
      }

      .bm-cross {
        height: 2em !important;
      }

      .bm-item-list {
        margin-right: 10%;
      }
    }
  }
  

  /* Burger menu when closed */
  .bm-burger-bars {
    background-color: var(--white) !important;
    height: 3px !important;
  }

  /* Burger menu when closed */
  .bm-burger-button {
    /* left: calc(100% - 36px) !important; */
    position: relative !important;
    /* left: calc(100vw - 36px - 6em) !important; */ /* burger bars are 36px wide, global app side-padding is 3em; */
    margin-right: 36px; /* burger bars are 36px */
    /* top: calc(19px + 1em) !important; */
    top: 2em !important;
  }

  .icon {
    min-width: 30px;
  }

  .menu-option {
    background-color: var(--green);
    border-bottom: solid 1px #111;
    color: #fff;
    cursor: pointer;
  }
</style>