<template>
    <div class="grid-item">
        <font-awesome-icon class="icon" v-bind:style="{ color: solution.color }" :icon="getIcon(solution.icon)" size="3x"/>
        <p>
            {{solution.description}}
        </p>
    </div>
</template>
<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import * as icons from '@fortawesome/free-solid-svg-icons';

export default {
    props: {
        solution: Object
    },
    methods: {
        getIcon(name) {
            if (name) {
                library.add(icons[name]);
                return icons[name];
            }
            else {
                return "";
            }
        }
    }
}
</script>
<style>
/*
1) No sharp corners on anything
2) Layer the elements, from dark to light. So, create a gradient where you add the lightest items to the front.
    The front-most child elements should be lighter than their parent elements. You can separate the child elements contextually with a border-radius and a box shadow.

3) The grid items faces should be lighter than the background colors.
4) Slight linear-gradient on button faces n stuff.
*/


    .grid-item {
        /* color: #121212; */
        border-radius: 5px;
        padding: 20px;
        text-align: center;
    }
</style>
