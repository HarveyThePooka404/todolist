<template>
  <div>
    <v-app-bar elevation="0" app>
      <NavBar />
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container class="layout" fluid>
        <v-row class="pb-4" justify>
            <v-btn rounded small color="blue-grey" class="ma-2 white--text">
              Add new task
              <v-icon right dark> mdi-plus-circle </v-icon>
            </v-btn>
        </v-row>
        <template>
          <ToDo
            description="This is text But it would need to be slightly longer..."
            tag="Cooking"
            title="Prepare chicken for tomorrow"
          />
        </template>
      </v-container>
    </v-main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/components/NavBar.vue";
import SideMenu from "@/components/SideMenu.vue";
import ToDo from "@/components/ToDo.vue";

@Component({
  components: {
    NavBar,
    SideMenu,
    ToDo,
  },
})
export default class Home extends Vue {
  created() {
    console.log("YOLO");
  }
}
</script>
<style lang="scss" scoped>
.layout {
  display: grid;
  grid-template-rows: repeat(2, auto);
}
</style>
