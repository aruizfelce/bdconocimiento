import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('../views/AuthView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/UserProfileView.vue'),
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/add',
    name: 'add',
    component: () => import('../views/AddView.vue'),
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../views/EditView.vue'),
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/categories',
    name: 'categories',
    component: () => import('../views/CategoriesView.vue'),
    meta:{
      requiresAuth: true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  // Requires auth & no user
  if (requiresAuth && !(await store.dispatch("users/getCurrentUser"))) {
    next({ name: "auth" });
    // No requires auth and user (auth)
  } else if (!requiresAuth && (await store.dispatch("users/getCurrentUser"))) {
    next({ name: "Home" });
  } else {
    // Anything else
    next();
  }
});
