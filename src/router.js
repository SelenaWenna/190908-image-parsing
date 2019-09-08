import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/swHome.vue';

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
      component: () => import('./views/swImages.vue'),
    },
  ],
});
