<template>
<div class="side-menu">
      <v-list
        >
          <v-list-item-group
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item>
              <v-list-item-title>Foo</v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-list-item-title>Bar</v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-list-item-title>Fizz</v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-list-item-title>Buzz</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
</div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator"

  @Component({})
  export default class SideMenu extends Vue {

      show = true;
      group = true;
      created():void {
          console.log("nav bar")
      }

      showMenu(): void {
          console.log("nav bar clicked")
      }
    }
</script>
<style lang="scss" scoped>

</style>
