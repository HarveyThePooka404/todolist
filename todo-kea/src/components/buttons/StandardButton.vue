<template>
     <v-btn v-bind="attrs" v-on="on" rounded small color="blue-grey" class="ma-2 white--text" @click="$emit('click')">
        Add new Task
        <v-icon v-if="hasIcon" right dark> mdi-plus-circle </v-icon>
    </v-btn>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class Home extends Vue {
    @Prop({default: false}) hasIcon!: boolean 
    @Prop() on!: any
    @Prop() attrs!: any

}
</script>

