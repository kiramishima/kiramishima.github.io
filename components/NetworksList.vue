<template>
  <div class="flex-1 flex flex-row justify-center lg:justify-start bg-white px-5 lg:px-10 w-full lg:w-9/12 lg:m-auto lg:pt-4">
    <span class="flex-1 lg:flex-none lg:pr-5" v-for="item of networks" :key="item.network" @mouseenter="onOver" @mouseleave="onLeave">
      <i :class="`fab fa-${item.network} text-3xl text-red-700`"></i>
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import anime from 'animejs'
import { ISocialNetwork } from '~/models/socialnetwork'

@Component
export default class NetworksList extends Vue {
  @Prop() networks!: ISocialNetwork[]
  timeline: any

  mounted() {
    this.timeline = this.createTimeline()
  }

  onOver(evt: Event) {
    anime({
      targets: evt.target,
      scale: 1.2,
      duration: 1500,
      elasticity: 400,
      direction: 'normal',
      rotate: 360
    })
    // .add({ targets: evt.target, color: 'rgba(0, 120, 255, .2)' }, 0 )

    this.timeline.play()
  }

  onLeave(evt: Event) {
    anime({
      targets: evt.target,
      scale: 1.0,
      duration: 600,
      elasticity: 300
    })
  }

  createTimeline() {
    return  anime.timeline({
      autoplay: false
    });
  }
}
</script>
