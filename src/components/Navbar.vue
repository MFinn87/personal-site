<template>
    <div class="navbar-container">
        <a v-for="option in menuOptions" @click="onMenuOptionClick(option)" :key="option.id"> 
            <span class="navbar-item">{{option.caption}}</span>
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
        justify-content: space-between;
        align-items: center;
        background-color: #101010;
        height: 3em;
        padding-left: 10vw;
        padding-right: 10vw;
    }

    .navbar-item {
        text-decoration: none;
        color: #fafafa;
        font-weight: 800;
        width: 300px;
        padding-top: .5em;
        padding-bottom: .5em;
        cursor: pointer;
    }

    .navbar-item:hover {
        /* background-color: #303030; */
    }
</style>