<template>
    <div class="menu">
        <HamburgerMenu :menuOptions="menuOptions" :onMenuOptionClick="routeToMenuOption" class="mobile-only" />
        <Navbar :menuOptions="menuOptions" :onMenuOptionClick="routeToMenuOption" :style="navbarStyle" class="desktop-only" />
    </div>
</template>
<script>
import HamburgerMenu from './HamburgerMenu.vue';
import Navbar from './Navbar.vue';

export default {
    name: 'Menu',
    props: {
        menuOptions: Array,
        navbarStyle: String
    },
    methods: {
        routeToMenuOption: function(menuOption) {
            if (menuOption.type === 'file') {
                window.open(menuOption.href, "_blank")
            }
            else if (menuOption.type === 'view'){
                this.$router.push(menuOption.href);
            }
        }
    },
    components: {
        HamburgerMenu,
        Navbar
    }
}
</script>
<style>
    .menu {
        position: sticky;
        position: -webkit-sticky;
        top: 0;
    }
</style>