<template>
<div class="navbar-layout">
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
</div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator"

  @Component({})
  export default class NavBar extends Vue {

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
