import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Register from '@/views/user/Register.vue';
import Profile from '@/views/user/Profile.vue';
import Dashboard from '@/views/Dashboard.vue';
import Login from '@/views/user/Login.vue';
import { Auth } from '@/firebase/auth';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true,
      },
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
      meta: {
        requiresAuth: true,
      },
    },

  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.requiresAuth)) {
    if (Auth.currentUser) {
      next();
    } else {
      next({ path: '/user/login' });
    }
  }
  next();
});

export default router;
