import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/components/layouts/defaultLayout.vue'),
    children: [{
      path: '/',
      name: 'homePage',
      component: () => import('@/views/HomeView.vue'),
    }, {
      path: 'account',
      name: 'accountPage',
      component: () => import('@/views/AccountView.vue'),
    }, {
      path: 'admins',
      name: 'adminsPage',
      component: () => import('@/views/AdminView.vue'),
    }, {
      path: 'users',
      name: 'userPage',
      component: () => import('@/views/UserView.vue'),
    }, {
      path: 'drivers',
      name: 'driverPage',
      component: () => import('@/views/DriverView.vue'),
    }, {
      path: ':view/edit/:id',
      name: 'editPage',
      component: () => import('@/views/EditView.vue'),
    },
    ],
    // component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
