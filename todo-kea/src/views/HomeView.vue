<template>
  <div>
    <v-app-bar elevation="0" app>
      <NavBar />
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
          <createTaskModal />
      <v-container class="layout" fluid>
        <template >
          <ToDo
          v-for="task in tasks"
          :key="task.id"
          :task="task"
          />
        </template>
      </v-container>
    </v-main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

//components
import NavBar from "@/components/NavBar.vue";
import SideMenu from "@/components/SideMenu.vue";
import ToDo from "@/components/tasks/ToDo.vue";
import StandardButton from "@/components/buttons/StandardButton.vue";
import createTaskModal from "@/components/tasks/createTaskModal.vue";

//types
import { Task } from "@/types/Task"

@Component({
  components: {
    NavBar,
    SideMenu,
    ToDo,
    StandardButton, 
    createTaskModal
  },
})
export default class Home extends Vue {

  async created(): Promise<void> {
    await this.$store.dispatch("bindAllToDos");
  }

  get tasks(): Array<Task> {
    //this is an example of things I am getting reactively.. 
    return this.$store.getters.getAllToDos
  }

}
</script>
<style lang="scss" scoped>
.layout {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  column-gap: 10px;
}
</style>
