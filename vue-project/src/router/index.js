import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/",
    component: {
      render(c) {
        return c("router-view");
      },
    },
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../components/Home.vue"),
      },
      {
        path: "/cars",
        name: "car-list",
        component: () => import("../components/CarList.vue"),
      },
      {
        path: "/save",
        name: "save-car",
        component: () => import("../components/Form.vue"),
      }
    ],
  },
];

const router = new VueRouter({ routes });
export default router;