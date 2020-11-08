<template>
    <div class="navbar-container">
        <a v-for="option in menuOptions" @click="onMenuOptionClick(option)" :key="option.id"> 
            <span class="navbar-item">{{option.caption.toUpperCase()}}</span>
        </a>
    </div>
</template>
<script>
export default {
    props: {
        menuOptions: Array,
        onMenuOptionClick: Function
    }
}
</script>
<style>
    .navbar-container {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-end;
        align-items: center;
        height: 3em;
        padding-top: var(--navbar-height);
        padding-left: 5vw;
        padding-right: calc(5vw - 1.5em);
        opacity: 100%;
        background-color: inherit;
    }

    .navbar-item {
        text-decoration: none;
        cursor: pointer;
        margin-left: 1.5em;
        margin-right: 1.5em;
    }

    .navbar-item:hover {
        /* background-color: #303030; */
    }
</style>