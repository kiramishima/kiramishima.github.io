<template>
<div class="w-full bg-red-500 flex flex-col items-end mb-2 p-2">
  <span class="flex-1 text-sm lg:text-base font-semibold font-mono py-2 pr-2">14/05/2021 - 14/05/2021</span>
  <div class="w-full bg-purple-700 flex flex-row pt-3">
    <div class="flex-none p-2 flex-wrap place-items-center justify-center">
      <img class="h-12 w-12" src="https://mojs.github.io/assets/img/logo.svg" alt="">
    </div>
    <div class="flex-1 ml-4">
      <p class="text-sm font-bold">Entreprise Name</p>
      <ul class="pl-6">
        <li class="list-disc">efdwefd</li>
        <li class="list-disc">wefwef</li>
        <li class="list-disc">wefwef</li>
      </ul>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
@Component
export default class Experience extends Vue {
  @Prop() experience!:any;
}
</script>
