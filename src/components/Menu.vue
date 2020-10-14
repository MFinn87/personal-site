<template>
    <div>
        <Slide right class="mobile-only">
            <a v-for="screen in menuScreens" :href="screen.href" :key="screen.caption"> 
                <span><font-awesome-icon class="icon" :icon="getIcon(screen.icon)" size="1x" inverse/>  {{screen.caption}}</span>
            </a>
        </Slide>
        <div class="desktop-only navbar-container">
            <a class="navbar-item" v-for="screen in menuScreens" :href="screen.href" :key="screen.caption"> 
            {{screen.caption}}
        </a>
        </div>
    </div>
</template>
<script>
import { Slide } from 'vue-burger-menu'  // import the CSS transitions you wish to use, in this case we are using `Slide`
import menuScreens from '../data/menu_screens.json';
import { library } from '@fortawesome/fontawesome-svg-core';
import * as icons from '@fortawesome/free-solid-svg-icons';

export default {
  name: 'Menu',
  components: {
    Slide,

  },
  methods: {
    getIcon(name) {
        library.add(icons[name]);
        return icons[name];
    }
  },
  data() {
      return {
          menuScreens
      }
  }
}
</script>
<style>
    .icon {
        min-width: 30px;
    }

    .navbar-container {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: center;
        background-color: #101010;
        height: 3em;
    }

    .navbar-item {
        text-decoration: none;
        color: #fafafa;
        font-weight: 800;
        width: 300px;
        text-align: center;
    }

    .navbar-item:hover {
        background-color: #303030;
    }
</style>