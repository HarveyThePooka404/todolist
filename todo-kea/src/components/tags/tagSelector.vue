<template>
<v-combobox
      v-model="chips"
      :items="items"
      chips
      clearable
      label="Add a tag"
      multiple
      solo
    >
      <template v-slot:selection="{ attrs, item, select, selected }">
        <v-chip
          v-bind="attrs"
          :input-value="selected"
          close
          @click="select"
          @click:close="remove(item)"
        >
          <strong>{{ item }}</strong>&nbsp;
        </v-chip>
      </template>
    </v-combobox>
</template>
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component({})
export default class tagSelector extends Vue {

    chips: Array<string> = []
    items: Array<string> = []

    remove (item: string): void {
      this.chips.splice(this.chips.indexOf(item), 1)
      this.chips = [...this.chips]
    }

    @Watch("chips")
    onChipsChange(): void {
      console.log("changed")
      this.$emit('newTag', this.chips)
    }
}
</script>