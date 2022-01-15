import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home.vue";
import Login from "@/components/Login.vue";
import Board from "@/components/Board.vue";
import NotFound from "@/components/NotFound.vue";
import Card from "@/components/Card.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", component: Home },
    { path: "/login", component: Login },
    {
      path: "/b/:bid",
      component: Board,
      children: [{ path: "c/:cid", component: Card }],
    },
    { path: "*", component: NotFound },
  ],
});

export default router;
