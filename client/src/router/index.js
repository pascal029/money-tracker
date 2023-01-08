import { createRouter, createWebHistory } from "vue-router";
import home from "../views/home.vue";
import login from "../views/login.vue";
import signup from "../views/signup.vue";
import dashboard from "../views/dashboard.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/login",
      name: "login",
      component: login,
    },
    {
      path: "/signup",
      name: "signup",
      component: signup,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: dashboard,
    },
  ],
});

export default router;
