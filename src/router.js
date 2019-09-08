import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/sw-home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/images',
      name: 'images',
      component: () => import('./views/sw-images.vue'),
    },
  ],
});
