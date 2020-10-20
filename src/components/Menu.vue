<template>
    <div class="menu">
        <HamburgerMenu :menuOptions="menuOptions" class="mobile-only" />
        <Navbar :menuOptions="menuOptions" class="desktop-only" />
    </div>
</template>
<script>
import HamburgerMenu from './HamburgerMenu.vue';
import Navbar from './Navbar.vue';

export default {
    name: 'Menu',
    props: {
        menuOptions: Array
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