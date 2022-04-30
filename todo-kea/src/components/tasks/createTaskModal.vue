<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <StandardButton :hasIcon="true" :on="on" :attrs="attrs" />
    </template>

    <v-card>
      <v-card-title class="text-h5 grey lighten-2">
        Create a New Task
      </v-card-title>

      <form class="form-padding">
        <v-text-field v-model="title" label="Title" required></v-text-field>
        <tagSelector @newTag="updateTag"/>
        <v-textarea
          solo
          name="input-7-4"
          label="Task Description"
          v-model="description"
        ></v-textarea>
      </form>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="createTask"> Create </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import StandardButton from "@/components/buttons/StandardButton.vue";
import tagSelector from "../tags/tagSelector.vue";
import { TASK_STATUS } from "@/types/Task";

@Component({
  components: {
    StandardButton,
    tagSelector,
  },
})
export default class createTaskModal extends Vue {
  dialog = false;
  title = "";
  description = "";
  tags: Array<string> = [];

  createTask(): void {
    this.dialog = false;

    const newTask = {
      title: this.title,
      tags: this.tags,
      status: TASK_STATUS.TO_BE_DONE,
      description: this.description,
    };

    this.$store.dispatch("createToDo", newTask)
  }

  updateTag(tags: Array<string>): void {
      this.tags = [...tags];
  }
}
</script>

<style lang="scss" scoped>
.form-padding {
  padding: 1rem 2rem;
}
</style>
