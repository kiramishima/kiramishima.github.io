import Vue from 'vue';
import Router from 'vue-router';
import Me from './views/Mobile/Me.vue';
import Skills from './views/Mobile/Skills.vue';
import Works from './views/Mobile/Works.vue';

const data = require('./assets/data.json');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'me',
      component: Me,
      props: { name: data.name, lastname: data.lastname }
    },
    {
      path: '/skills',
      name: 'skills',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Skills,
      props: { stats: data.skills_langs }
    },
    {
      path: '/works',
      name: 'works',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Works
    }
  ]
})
