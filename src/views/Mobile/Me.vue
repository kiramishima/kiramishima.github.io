<template>
<div>
    <v-container class="img_background">
        <v-layout row>
            <v-flex xs4>
                <v-avatar size="120">
                    <v-img src="https://avatars2.githubusercontent.com/u/12620426?s=460&v=4"></v-img>
                </v-avatar>
            </v-flex>
            <v-flex xs8 d-flex>
                <v-layout row>
                    <v-flex xs4>
                        <p class="headline white--tex">Schedule</p>
                    </v-flex>
                    <v-flex xs4>
                        <p class="headline white--tex">Routine</p>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
    
    <v-container fluid grid-list-md>
        <v-layout row wrap>
            <v-flex xs12>
                <p class="headline text-xs-left text-capitalize">{{ $t("view_me.name_label") }}:</p>
                <p class="display-1 text-xs-left text-capitalize">{{ name }}</p>
            </v-flex>
            <v-flex xs12>
                <p class="headline text-xs-left text-capitalize">{{ $t("view_me.lastname_label") }}:</p>
                <p class="display-1 text-xs-left text-capitalize">{{ lastname }}</p>
            </v-flex>
            <v-flex xs12>
                <p class="headline text-xs-left text-capitalize">{{ $t("view_me.expertise") }}:</p>
                <p class="display-1 text-xs-left text-capitalize">SR Backend Developer</p>
            </v-flex>
            <v-flex xs12>
                <p class="headline text-xs-left text-capitalize">{{ $t("view_me.langs") }}:</p>
                <p class="display-1 text-xs-left text-capitalize">{{ $t("view_me.langs_content") }}</p>
            </v-flex>
            <v-flex xs12>
                <p class="headline text-xs-left text-capitalize">{{ $t("view_me.location") }}:</p>
                <p class="display-1 text-xs-left text-capitalize">Mexico City, Mexico</p>
            </v-flex>
        </v-layout>
    </v-container>
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class NavComponent extends Vue {
    @Prop() public name !: string;
    @Prop() public lastname !: string;
}
</script>