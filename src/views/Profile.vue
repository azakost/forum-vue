<script>
import Head from "../components/head.vue";
import { LogOutIcon } from "vue-feather-icons";
import { get } from "../config";

export default {
  name: "Profile",
  components: {
    Head,
    LogOutIcon,
  },
  methods: {
    async logout() {
      localStorage.clear();
      this.$store.commit("SET_ID", 0);
      this.$store.commit("SET_USER", "");
      this.$store.commit("SET_NAME", "");
      this.$router.push({ path: "login" });
      await get("logout");
    },
  },
};
</script>

<template>
  <div>
    <Head>
      <log-out-icon class="icon" v-on:click="logout" />
    </Head>
  </div>
</template>

<style scoped>
.icon {
  height: 22px;
}
</style>