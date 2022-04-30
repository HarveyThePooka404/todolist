<template>
  <v-card class="mx-auto todo-card" max-width="400">
    <div class="tag-container">
      <v-card-title class="title-padding"> {{ task.title }} </v-card-title>

      <v-chip v-for="tag in task.tags" :key="tag" class="ma-2">
        {{ tag }}
      </v-chip>

      <v-card-text class="text--primary pt-2">
        {{ task.description }}
      </v-card-text>
    </div>

    <v-card-actions class="action-container">
      <v-btn color="orange" text> Done </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Task } from "@/types/Task";

@Component({})
export default class ToDo extends Vue {
  @Prop({ default: {} }) task!: Task;

  show = true;
  group = true;
}
</script>
<style lang="scss" scoped>
.title-padding {
  padding-bottom: 0;
}
.todo-card {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  position: relative;
  min-width: 200px;
  width: 100%;
}
</style>
