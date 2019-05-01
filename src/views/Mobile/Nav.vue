<template>
    <v-navigation-drawer dark v-model="drawer" :mini-variant.sync="mini" hide-overlay stateless app>
        <v-toolbar flat class="transparent">
            <v-list class="pa-0">
                <v-list-tile avatar>
                    <v-list-tile-avatar :to="{path: '/'}">
                        <img src="https://avatars2.githubusercontent.com/u/12620426?s=460&v=4">
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                        <v-list-tile-title>@kiramishima</v-list-tile-title>
                    </v-list-tile-content>

                    <v-list-tile-action>
                        <v-btn icon @click.stop="mini = !mini">
                        <v-icon>chevron_left</v-icon>
                        </v-btn>
                    </v-list-tile-action>
                </v-list-tile>
            </v-list>
        </v-toolbar>

        <v-list class="pt-0" dense>
            <v-divider></v-divider>

            <v-list-tile :to="{path: '/works'}">
                <v-list-tile-action>
                    <v-icon>card_travel</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title router-link to="/skills">{{ $t("menus.works") }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile :to="{path: '/skills'}">
                <v-list-tile-action>
                    <v-icon>format_list_bulleted</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title>{{ $t("menus.skills") }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class NavDrawer extends Vue {
    @Prop({default: false}) public drawer!: boolean;
    public mini: boolean = true;
}
</script>

<style lang="sass">
.v-speed-dial
    position: absolute;

.v-btn--floating
    position: relative;
</style>


