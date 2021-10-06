<template>
  <div class="light-box" @click="onBackgroundClick">
    <span @click="onXClick" class="close">&times;</span>
    <img @click="onImageClick" :src="source" class="light-box__image">
  </div>
</template>

<script>
  import {
    defineComponent,
  } from 'vue'

  export default defineComponent({
    props: {
      source: {
        type: String,
        required: false,
      },
    },

    methods: {
      close() {
        this.$emit('onLightBoxExit')
      },
      onXClick() {
        this.close()
      },
      onBackgroundClick() {
        this.close()
      },
      onImageClick(event) {
        event.preventDefault()
        event.stopPropagation()
      },
    },
  })
</script>

<style lang="scss">
  .light-box {
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: rgba(#000, .91);
    display: flex;
    flex-direction: column;

    .light-box__image {
      margin: auto;
      width: 80vw;
      height: 100vh;
      object-fit: contain;
    }

    .close {
      position: absolute;
      top: .5em;
      right: 1em;
      color: #f1f1f1;
      font-size: 3em;
      font-weight: bold;
    }

    .close:hover,
    .close:focus {
      color: #bbb;
      text-decoration: none;
      cursor: pointer;
    }

    @media only screen and (max-width: 700px) {
      .light-box__image {
        width: 100%;
      }
    }
  }
</style>
