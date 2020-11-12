import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Profile from "../views/Profile.vue";
import Post from "../views/Post.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Вопросы",
    component: Home,
  },
  {
    path: "/login",
    name: "Вход в систему",
    component: Login,
  },
  {
    path: "/profile",
    name: "Профиль",
    component: Profile,
  },
  {
    path: "/posts/:pid",
    name: "Вопрос",
    component: Post,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
