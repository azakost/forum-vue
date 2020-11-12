<script>
import { FilterIcon } from "vue-feather-icons";
import Head from "@/components/head.vue";
import Card from "@/components/card.vue";

import axios from "axios";
import { host } from "../config";

export default {
  name: "Home",
  components: {
    FilterIcon,
    Head,
    Card,
  },
  data: () => {
    return {
      posts: null,
    };
  },
  methods: {},
  mounted() {
    axios
      .get(host + "/api/posts")
      .then((response) => (this.posts = response.data));
  },
};
</script>

<template>
  <div>
    <Head>
      <filter-icon class="icon" />
    </Head>
    <div class="home">
      <Card v-for="post in posts" v-bind:key="post.pid" v-bind="post" />
    </div>
  </div>
</template>