<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <SocialNetworkItem msg="Welcome to Your Vue.js + TypeScript App" v-bind:person="{Name: 'Kira'}" v-bind:persons="[{Name: 'Kira'}, {Name: 'Sheldon'}]"/>
    <div id="nav" v-if="!isMobile">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view  v-if="!isMobile"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SocialNetworkItem from '@/components/SocialNetworkItem.vue'; // @ is an alias to /src

@Component({
  components: {
    SocialNetworkItem,
  },
})
export default class Home extends Vue {}
</script>
