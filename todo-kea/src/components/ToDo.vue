<template>
   <v-card
      class="mx-auto"
      max-width="400"
    >
        <v-card-title> {{ title }} </v-card-title>
  
      <v-card-subtitle class="pb-0">
          {{ tag }}
      </v-card-subtitle>
  
      <v-card-text class="text--primary pt-2">
          {{ description }}
      </v-card-text>
  
      <v-card-actions>
        <v-btn
          color="orange"
          text
        >
          Edit
        </v-btn>
  
        <v-btn
          color="orange"
          text
        >
          Done
        </v-btn>
      </v-card-actions>
    </v-card>
</template>

<script lang="ts">
  import {Component, Vue, Prop} from "vue-property-decorator"

  @Component({})
  export default class ToDo extends Vue {
      @Prop() description!: string;
      @Prop() tag!: string;
      @Prop() title!: string;

      show = true;
      group = true;
      created():void {
          console.log("to do ")
      }
    }
</script>
<style lang="scss" scoped>

</style>
