<template>
    <div>
        <v-container fluid grid-list-md>
            <v-layout row>
                <v-flex xs12>
                    {{ $t("menus.skills") }}
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Radar } from 'vue-chartjs';

@Component({
    components: {}
})
export default class SkillsComponent extends Vue {
    @Prop() public stats !: Array<any>;
    public radar: any = {
        size: '300',
        structure: {
            external: {                             // external stroke of the structure's polygon
                strokeColor: 'rgba(0, 0, 0, 1)',    // color (any css format is usable (hexa, rgb, rgba...))
                strokeWidth: '1',                   // pixel unit
            },
            internals: {                            // internals stroke of the structure's polygon (one every 10%)
                strokeColor: 'rgba(0, 0, 0, .3)',   // color (any css format is usable (hexa, rgb, rgba...))
                strokeWidth: '1',                   // pixel unit
            },
            average: {                              // average polygon (placed at 50%)
                strokeColor: 'rgba(3, 36, 57, 1)',    // stroke color (any css format is usable (hexa, rgb, rgba...))
                strokeWidth: '1',                   // pixel unit
                fillColor: 'rgba(3, 36, 57, 1)',     // polygon color (any css format is usable (hexa, rgb, rgba...))
            },
        },
        lines: {                                    // lines from center to summits
            strokeColor: 'rgba(0, 0, 0, .3)',       // color (any css format is usable (hexa, rgb, rgba...))
            strokeWidth: '1',                       // pixel unit
        }
    };
    public scale: any = {};
    
    public polycolor:string = 'rgba(250, 100, 50, .5)';

    mounted() {
        console.log(this.stats);
    }
}
</script>

<style lang="sass">
</style>

