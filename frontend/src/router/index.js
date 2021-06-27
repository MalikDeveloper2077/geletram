import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { auth: true },
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/chat/:id',
    name: 'Chat',
    meta: { auth: true },
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../views/Auth.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
