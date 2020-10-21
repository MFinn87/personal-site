<template>
    <div class="navbar-container">
        <a class="navbar-item" v-for="option in menuOptions" @click="onMenuOptionClick(option)" :key="option.id"> 
            {{option.caption}}
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
        cursor: pointer;
    }
</style>