<template>
  <div>
    <button v-on:click="login">click</button>
    {{ this.$store.getters.LOG }}
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    login() {
      this.$store.commit("SET_LOG", "true");
    },
  },
};
</script>