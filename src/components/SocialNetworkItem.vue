<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h1>{{ person.Name }}</h1>
        <ul v-if="persons">
            <li v-for="item of persons" :key="item.id">{{ item.Name }}</li>
        </ul>
    </div>
</template>


<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

interface IPerson {
    Name: string;
}


@Component
export default class SocialNetworkItem extends Vue {
    @Prop() private msg!: string;
    @Prop({type: Object as () => IPerson}) private person!: IPerson;
    @Prop({type: Array as () => Array<IPerson>}) private persons!: Array<IPerson>;
}
</script>
