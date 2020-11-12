<script>
import Head from "../components/head.vue";
import Input from "../components/input.vue";
import Button from "../components/buttonSq.vue";
import { UserPlusIcon } from "vue-feather-icons";

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
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store.commit("SET_ID", 1);
      this.$store.commit("SET_USER", "azakost");
      this.$store.commit("SET_NAME", "Azamat Alimbayev");
      this.$router.push({ path: "profile" });
    },
  },
};
</script>

<template>
  <div>
    <Head v-bind:secondLevel="false">
      <user-plus-icon class="icon" v-on:click="$router.push('register')" />
    </Head>
    <div class="form">
      <Input label="Имя пользователя" type="text" v-model="username" />
      <Input label="Пароль" type="password" v-model="password" />
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