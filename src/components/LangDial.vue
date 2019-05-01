<template>
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
      <v-btn fab dark small bottom right color="green" @click="changeLang('es')">
        <span class="white--text">ES</span>
      </v-btn>
      <v-btn fab dark small bottom right color="indigo" @click="changeLang('fr')">
        <span class="white--text">FR</span>
      </v-btn>
    </v-speed-dial>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import i18n from '../i18n';

@Component
export default class LangDial extends Vue {
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

    changeLang(lang: string) {
        i18n.locale = lang;
    }
}
</script>
