import { wrapFunctional } from './utils'

export { default as ButtonStart } from '../../components/ButtonStart.vue'
export { default as Competence } from '../../components/Competence.vue'
export { default as CompetencesList } from '../../components/CompetencesList.vue'
export { default as Experience } from '../../components/Experience.vue'
export { default as ExperienceList } from '../../components/ExperienceList.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as NetworksList } from '../../components/NetworksList.vue'
export { default as Objetif } from '../../components/Objetif.vue'

export const LazyButtonStart = import('../../components/ButtonStart.vue' /* webpackChunkName: "components/button-start" */).then(c => wrapFunctional(c.default || c))
export const LazyCompetence = import('../../components/Competence.vue' /* webpackChunkName: "components/competence" */).then(c => wrapFunctional(c.default || c))
export const LazyCompetencesList = import('../../components/CompetencesList.vue' /* webpackChunkName: "components/competences-list" */).then(c => wrapFunctional(c.default || c))
export const LazyExperience = import('../../components/Experience.vue' /* webpackChunkName: "components/experience" */).then(c => wrapFunctional(c.default || c))
export const LazyExperienceList = import('../../components/ExperienceList.vue' /* webpackChunkName: "components/experience-list" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyNetworksList = import('../../components/NetworksList.vue' /* webpackChunkName: "components/networks-list" */).then(c => wrapFunctional(c.default || c))
export const LazyObjetif = import('../../components/Objetif.vue' /* webpackChunkName: "components/objetif" */).then(c => wrapFunctional(c.default || c))
