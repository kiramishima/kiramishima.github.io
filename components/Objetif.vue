<template>
  <div
    class="
      flex-1 flex flex-col
      justify-center
      bg-purple-300
      px-5
      lg:px-10
      w-full
      lg:w-9/12
      lg:m-auto
    "
  >
    <div class="mt-3">
      <p class="text-3xl font-bold mb-2">Objectif</p>
      <p class="text-sm font-normal">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, sint
        facilis blanditiis vel ipsam placeat nulla nobis! Alias, perferendis
        temporibus atque sequi architecto sint iure laudantium earum explicabo
        quis dolore!
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
@Component
export default class Objetif extends Vue {
  experiences = Array(5).fill(1)
}
</script>
