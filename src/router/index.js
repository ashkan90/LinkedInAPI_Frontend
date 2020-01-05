import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'app',
    redirect: '/root',
    meta: { requiresAuth: true },
    component: () => import('../Layout.vue'),
    children: [
      {
        path: '/root',
        name: 'index',
        component: () => import('../views/ProfileCard.vue'),
      },
    ],
  },
  {
    path: '/authorize',
    name: 'authorize',
    meta: { requiresAuth: false },
    component: () => import('../views/Authorize.vue'),
  },
  {
    path: '/listen/:state',
    name: 'listener',
    meta: { requiresAuth: false },
    component: () => import('../components/Listener.vue'),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.status === 'ok') {
      next();
      return;
    }
    next('/authorize');
  } else {
    next();
  }
});

export default router;
