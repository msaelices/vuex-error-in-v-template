<template>
    <Page>
        <ActionBar title="App for checking NS-vue #473 issue"/>
        <GridLayout columns="*" rows="*">
            <ListView for="item in items">
              <v-template>
                <MyComponent :item="item" />
              </v-template>
            </ListView>
        </GridLayout>
    </Page>
</template>

<script >
  import MyComponent from './MyComponent'

  export default {
    components: {
      MyComponent,
    },
    computed: {
      items () {
        return this.$store.state.items
      }
    }
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
