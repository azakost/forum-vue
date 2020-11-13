<script>
import Head from "../components/head.vue";
import Input from "../components/input.vue";
import Button from "../components/buttonSq.vue";
import { UserPlusIcon } from "vue-feather-icons";
import { post } from "../config";

export default {
  name: "Login",
  components: {
    Head,
    UserPlusIcon,
    Input,
    Button,
  },
  data: () => {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      let res = await post("login", this.user);
      this.$store.commit("SET_ID", res.userID);
      this.$store.commit("SET_USER", res.username);
      this.$store.commit("SET_NAME", res.fullname);
      this.$router.push({ path: "profile" });
    },
  },
};
</script>

<template>
  <div>
    <Head>
      <user-plus-icon class="icon" v-on:click="$router.push('register')" />
    </Head>
    <div class="form">
      <Input label="Имя пользователя" type="text" v-model="user.username" />
      <Input label="Пароль" type="password" v-model="user.password" />
      <Button name="Войти" class="margin-top" v-on:click="login" />
    </div>
  </div>
</template>

<style scoped>
.icon {
  height: 22px;
}

.form {
  padding: 15px 40px 0;
}

.margin-top {
  margin-top: 16px;
}
</style>