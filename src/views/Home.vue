<script>
import { FilterIcon } from "vue-feather-icons";
import Head from "@/components/head.vue";
import Card from "@/components/card.vue";

// import { get } from "../config";

export default {
  name: "Home",
  components: {
    FilterIcon,
    Head,
    Card,
  },
  data: () => {
    return {
      text: "Placeholder",
    };
  },
  methods: {
    test: () => {
      alert("yes");
    },
  },
  mounted() {},
};
</script>

<template>
  <div>
    <Head>
      <filter-icon class="icon" v-on:click="test" />
    </Head>
    <div class="home">
      <Card text="Lorem ipsum dolor" />
    </div>
  </div>
</template>