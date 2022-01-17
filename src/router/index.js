import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/Home.vue';
import Login from '@/components/Login.vue';
import Board from '@/components/Board.vue';
import NotFound from '@/components/NotFound.vue';
import Card from '@/components/Card.vue';
import { ROUTES } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: ROUTES.HOME, component: Home },
    { path: ROUTES.LOGIN, component: Login },
    {
      path: ROUTES.BOARDS,
      component: Board,
      children: [{ path: ROUTES.CARDS, component: Card }],
    },
    { path: ROUTES.ALL, component: NotFound },
  ],
});

export default router;
