<template>
  <Label :text="item.text" col="0" row="0" @tap="changeText" />
</template>

<script >
  export default {
    props: ['item'],
    components: {
      MyComponent,
    },
    methods: {
      changeText () {
        this.$store.dispatch('changeText', {
          item,
          text: 'Other Text',
        })
      },
    },
  }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
