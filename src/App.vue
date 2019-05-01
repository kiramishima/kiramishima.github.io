
<template>
  <Mobile />
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>


<script  lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Mobile from './views/Mobile/App.vue'

@Component({
  components: {
    Mobile
  },
})
export default class App extends Vue {
  private isMobile: boolean = false;
  mounted() {
    window.addEventListener('resize', this.onResize, { passive: true })
  }

  onResize () {
    this.isMobile = window.innerWidth < 600
  }
}
</script>
