<script>
import { FilterIcon } from "vue-feather-icons";
import Head from "../components/head.vue";
import Card from "../components/card.vue";

import { get } from "../config";

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
  async mounted() {
    this.posts = await get("posts");
  },
};
</script>

<template>
  <div>
    <Head parent="true">
      <filter-icon class="icon" />
    </Head>
    <div class="home">
      <Card v-for="post in posts" v-bind:key="post.pid" v-bind="post" />
    </div>
  </div>
</template>