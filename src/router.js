import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Register from '@/views/user/Register.vue';
import Profile from '@/views/user/Profile.vue';
import Dashboard from '@/views/Dashboard.vue';
import Login from '@/views/user/Login.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/user/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/user/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/user/profile',
      name: 'profile',
      component: Profile,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});
