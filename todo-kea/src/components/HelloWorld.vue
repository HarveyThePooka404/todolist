<template>
  <v-container>
      <v-card elevation="2">
        <p> I am content</p>
      </v-card>
  </v-container>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator"

  @Component({})
  export default class HelloWorld extends Vue {
    created() {
      console.log("YOLO")
    }
  }
</script>
