<template>
<v-app>
    
    <v-toolbar app color="#082738">
        <v-toolbar-side-icon @click="toggleDrawer()"></v-toolbar-side-icon>
        <v-toolbar-title class="white--text text-xs-center"></v-toolbar-title>
    </v-toolbar>
    <v-content>
        <router-view />
    </v-content>
    <NavDrawer :drawer="drawer"/>
    
    
    <v-speed-dial
      v-model="fab"
      :top="top"
      :bottom="bottom"
      :right="right"
      :left="left"
      :direction="direction"
      :open-on-hover="hover"
      :transition="transition"
    >
      <template v-slot:activator>
        <v-btn v-model="fab" color="blue darken-2" fab dark absolute bottom right>
          <v-icon>language</v-icon>
          <v-icon>close</v-icon>
        </v-btn>
      </template>
      <v-btn fab dark small bottom right color="green">
        <span class="white--text">ES</span>
      </v-btn>
      <v-btn fab dark small bottom right color="indigo">
        <span class="white--text">FR</span>
      </v-btn>
    </v-speed-dial>
</v-app>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import i18n from '../../i18n';
import Me from './Me.vue';
import Skills from './Skills.vue';
import NavDrawer from './Nav.vue';
const data = require('../../assets/data.json');

console.log({data});
@Component({
    components: {
        Me,
        Skills,
        NavDrawer
    }
})
export default class MobileApp extends Vue {
    public data: any;
    public drawer: boolean = false;
    public mini: boolean = true;
    public direction:string = 'top';
    public fab: boolean = false;
    public fling: boolean = false;
    public hover: boolean = true;
    public tabs:any = null;
    public top: boolean = false;
    public right: boolean = true;
    public bottom: boolean = true;
    public left: boolean = false;
    public transition: string = 'scale-transition'

    toggleDrawer() {
        i18n.locale = 'fr';
        this.drawer = !this.drawer;
    }

    created() {
      this.data = data;
    }
}
</script>

<style lang="sass">
.img_background
    background: url('../../assets/bg_cv.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

</style>

