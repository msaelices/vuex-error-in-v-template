<template>
  <Label :text="item.text" col="0" row="0" @tap="changeText" />
</template>

<script >
  export default {
    props: ['item'],
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

