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
    
    <LangDial />
    
</v-app>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Me from './Me.vue';
import Skills from './Skills.vue';
import NavDrawer from './Nav.vue';
import LangDial from '../../components/LangDial.vue';
const data = require('../../assets/data.json');

console.log({data});
@Component({
    components: {
        Me,
        Skills,
        NavDrawer,
        LangDial
    }
})
export default class MobileApp extends Vue {
    public data: any;
    public drawer: boolean = false;
    

    toggleDrawer() {
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

