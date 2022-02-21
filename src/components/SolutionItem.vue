<template>
  <div class="grid-item">
    <img
      :alt="solution.description"
      :src="getImage(solution.imagePath)"
      class="grid-item__image"
    />
    <p class="grid-item__paragraph">
      {{solution.description}}
    </p>
  </div>
</template>
<script>
import utils from '../utils/index.js';
const { getImage } = utils;

export default {
  props: {
    solution: Object
  },
  methods: {
    getImage
  }
}
</script>
<style lang="scss">

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

    .grid-item__image {
      height: 75px;
      object-fit: scale-down;
      margin-bottom: 2em;
    }

    .grid-item__paragraph {
      font-size: .9em;
    }
  }
</style>
