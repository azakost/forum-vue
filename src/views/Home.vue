<script>
import { FilterIcon } from "vue-feather-icons";
import Head from "../components/head.vue";
import Editor from "../components/editor.vue";
import Card from "../components/card.vue";
import { get } from "../config";

export default {
  name: "Home",
  components: {
    FilterIcon,
    Head,
    Editor,
    Card,
  },
  data: () => {
    return {
      posts: null,
    };
  },
  methods: {
    async update() {
      this.posts = await get("posts");
    },
  },
  async mounted() {
    this.posts = await get("posts");
  },
};
</script>

<template>
  <div>
    <Head :parent="true">
      <filter-icon class="icon" />
    </Head>
    <Editor v-on:click="update" />

    <div class="home">
      <Card v-for="post in posts" :key="post.pid" v-bind="post" />
    </div>
  </div>
</template>