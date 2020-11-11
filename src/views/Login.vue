<template>
  <div>
    <button v-on:click="login">click</button>
    {{ this.$store.getters.ID }}
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    login() {
      this.$store.commit("SET_ID", 1);
      this.$store.commit("SET_USER", "azakost");
      this.$store.commit("SET_NAME", "Azamat Alimbayev");
    },
  },
};
</script>