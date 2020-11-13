import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Profile from "../views/Profile.vue";
import Post from "../views/Post.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Вопросы",
      component: Home,
    },
    {
      path: "/login",
      name: "Вход в систему",
      component: Login,
      props: {
        parent: false,
      },
    },
    {
      path: "/profile",
      name: "Профиль",
      component: Profile,
      props: {
        parent: false,
      },
    },
    {
      path: "/posts/:pid",
      name: "Вопрос",
      component: Post,
      props: {
        parent: false,
      },
    },
  ],
});

export default router;
