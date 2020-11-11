<script>
import { FilterIcon } from "vue-feather-icons";
import Head from "@/components/head.vue";

export default {
  name: "Home",
  components: {
    FilterIcon,
    Head,
  },
  methods: {
    test: () => {
      alert("yes");
    },
  },
};
</script>

<template>
  <div>
    <Head>
      <filter-icon class="icon" v-on:click="test" />
    </Head>
    <div class="home">Home</div>
  </div>
</template>