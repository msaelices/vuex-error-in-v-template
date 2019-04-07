<template>
    <Page>
        <ActionBar title="Welcome to NativeScript-Vue!"/>
        <GridLayout columns="*" rows="*">
            <Label class="message" :text="msg" col="0" row="0"/>
            <ListView for="item in items" @itemTap="onItemTap">
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
    data() {
      return {
        msg: 'Hello World!'
      }
    },
    components: {
      MyComponent,
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
