<template>
  <section class="bg-indigo-600 w-screen h-screen">
    <div class="place-self-center hidden lg:block">
      <button-start v-on:status="onBtnStartGameClicked"/>
    </div>
    <networks-list v-if="me" :networks="me.networks" />
    <div class="flex-1 flex flex-col justify-center bg-white px-10 w-full lg:w-9/12 lg:m-auto">
      <div class="mt-2">
        <p class="text-3xl text-center font-bold font-sans">Paul Arizpe</p>
        <p class="text-lg text-center font-light font-sans">Mexico, Mexique</p>
        <p class="text-lg text-center font-normal font-sans">(+521) 55-7949-0619</p>
        <p class="text-lg text-center font-light font-sans">kiramishima@outlook.com</p>
      </div>
    </div>
    <objetif />
    <competences-list />
    <experience-list />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import '@fortawesome/fontawesome-free/js/all'
import { Me } from '~/models/me'

@Component
export default class Index extends Vue {
  me: Me | null = null

  async onBtnStartGameClicked(ev: any) {
    console.log({ ev })

    await this.loadData()
  }

  async loadData() {
    try {
      const response = await this.$axios.get<Me>('/me.json').then(r => r.data)
      this.me = response
    } catch (ex) {
      console.error(ex)
    }
  }
}
</script>
