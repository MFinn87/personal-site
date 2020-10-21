<template>
    <Slide right :closeOnNavigation="true">
        <a v-for="option in menuOptions" @click="onHamburgerMenuOptionClick(option)" :key="option.id"> 
            <span class="menu-option"><font-awesome-icon class="icon" :icon="getIcon(option.icon)" size="1x" inverse/>  {{option.caption}}</span>
        </a>
    </Slide>
</template>
<script>
import { Slide } from 'vue-burger-menu'  // import the CSS transitions you wish to use, in this case we are using `Slide`
import { library } from '@fortawesome/fontawesome-svg-core';
import * as icons from '@fortawesome/free-solid-svg-icons';

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
    },
    getIcon(name) {
        library.add(icons[name]);
        return icons[name];
    }
  }
}

</script>
<style>
    .icon {
        min-width: 30px;
    }

    .menu-option {
        cursor: pointer;
    }
</style>