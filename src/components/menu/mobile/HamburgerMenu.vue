<template>
  <Slide class="hamburger-menu" right :closeOnNavigation="true">
    <div v-for="option in menuOptions" :key="option.id" @click="onHamburgerMenuOptionClick(option)" class="menu-option"> 
      {{ option.caption.toUpperCase() }}
    </div>
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
    onMenuOptionClick: Function
  },
  methods: {
    onHamburgerMenuOptionClick(menuOption) {
      this.onMenuOptionClick(menuOption);
    }
  }
}

</script>
<style lang="scss">
  .hamburger-menu {
    height: 102px;
  }

  /* Burger menu when open */
  body.bm-overlay {
    .bm-menu {
      width: 100vw !important;
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
    position: relative;
    /* left: calc(100vw - 36px - 6em) !important; */ /* burger bars are 36px wide, global app side-padding is 3em; */
    margin-right: 36px; /* burger bars are 36px */
    /* top: calc(19px + 1em) !important; */
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