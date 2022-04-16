<template>
<p> Hello? </p>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator"

  @Component({})
  export default class MainLayout extends Vue {
      created() {
          console.log("Main layout")
      }
    }
</script>
<style lang="scss" scoped>

</style>
