<template>
  <div class="flex-1 flex flex-col justify-center bg-white px-5 lg:px-10 w-full lg:w-9/12 lg:m-auto">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
@Component
export default class Competence extends Vue {
  @Prop() competence!:any;
}
</script>
