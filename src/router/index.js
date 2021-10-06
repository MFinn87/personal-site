import {
  createRouter,
  createWebHistory,
} from 'vue-router'

import routes from './routes.js';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router;
