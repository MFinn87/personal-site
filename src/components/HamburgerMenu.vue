<template>
    <Slide right>
        <a v-for="option in menuOptions" :href="option.href" :key="option.id"> 
            <span><font-awesome-icon class="icon" :icon="getIcon(option.icon)" size="1x" inverse/>  {{option.caption}}</span>
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
    menuOptions: Array
  },
  methods: {
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
</style>