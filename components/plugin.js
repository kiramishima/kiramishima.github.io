import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  ButtonStart: () => import('../../components/ButtonStart.vue' /* webpackChunkName: "components/button-start" */).then(c => wrapFunctional(c.default || c)),
  Competence: () => import('../../components/Competence.vue' /* webpackChunkName: "components/competence" */).then(c => wrapFunctional(c.default || c)),
  CompetencesList: () => import('../../components/CompetencesList.vue' /* webpackChunkName: "components/competences-list" */).then(c => wrapFunctional(c.default || c)),
  Experience: () => import('../../components/Experience.vue' /* webpackChunkName: "components/experience" */).then(c => wrapFunctional(c.default || c)),
  ExperienceList: () => import('../../components/ExperienceList.vue' /* webpackChunkName: "components/experience-list" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  NetworksList: () => import('../../components/NetworksList.vue' /* webpackChunkName: "components/networks-list" */).then(c => wrapFunctional(c.default || c)),
  Objetif: () => import('../../components/Objetif.vue' /* webpackChunkName: "components/objetif" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
