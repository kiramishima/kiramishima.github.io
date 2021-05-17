<template>
  <div class="flex-1 flex flex-col justify-center bg-white px-5 lg:px-10 w-full lg:w-9/12 lg:m-auto">
    <div class="mt-3">
      <p class="text-3xl font-bold mb-2">Experience</p>
      <experience v-for="(item, index) of experiences" :key="index" :experience="item" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component
export default class ExperienceList extends Vue {
  experiences = Array(5).fill(1)
}
</script>
