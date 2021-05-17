<template>
  <div ref="btnStart" class="bg-green-500 p-3 w-20 font-medium text-white rounded-md text-center" @click="onStartBtn" @mouseenter="enterButton()" @mouseleave="leaveButton()">
    ENTER
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import anime from 'animejs'

@Component
export default class ButtonStart extends Vue {
  mounted() {
    const timeline = this.createTimeline()
    timeline.add({
      targets: this.$refs.btnStart,
      translateX: window.screen.width / 3 - 10,
      translateY: window.screen.height / 3 + 100,
      rotate: 360,
      duration: 1300,
      easing: 'easeInOutExpo',
      direction: 'alternate',
    })

    timeline.play()
  }

  createTimeline() {
    return  anime.timeline({
      autoplay: false
    });
  }

  enterButton() {
    anime({
      targets: this.$refs.btnStart,
      scale: 1.2,
      duration: 1500,
      elasticity: 400
    })
  }

  leaveButton() {
    anime({
      targets: this.$refs.btnStart,
      scale: 1.0,
      duration: 600,
      elasticity: 300
    })
  }

  onStartBtn(): void {
    this.$emit("status", "START_GAME")
  }
}
</script>
