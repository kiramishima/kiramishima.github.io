<template>
  <div class="flex-1 flex flex-col justify-center bg-gray-400 px-5 lg:px-10 w-full lg:w-9/12 lg:m-auto">
  <div class="mt-3">
        <p class="text-3xl font-bold mb-2">Competences</p>
        <ul class="pl-6">
          <li class="list-disc">competence 1</li>
          <li class="list-disc">competence 1</li>
          <li class="list-disc">competence 1</li>
          <li class="list-disc">competence 1</li>
        </ul>
  </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
@Component
export default class CompetencesList extends Vue {
  experiences = Array(5).fill(1)
}
</script>
