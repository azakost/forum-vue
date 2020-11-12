<script>
import { FilterIcon } from "vue-feather-icons";
import Head from "@/components/head.vue";
import Card from "@/components/card.vue";

import axios from "axios";

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
      info: null,
    };
  },
  methods: {},
  mounted() {
    axios
      .get("http://localhost:8080/api/posts")
      .then((response) => (this.info = response.data));
  },
};
</script>

<template>
  <div>
    <Head>
      <filter-icon class="icon" />
    </Head>
    <div class="home">
      <Card
        v-for="item in info"
        v-bind:text="item.text"
        v-bind:username="item.username"
        v-bind:hearts="item.likes - item.dislikes"
        v-bind:messages="item.comments"
        v-bind:key="item.pid"
        v-bind:avatar="'http://localhost:8080/avatars/' + item.uid + '.jpg'"
      />
    </div>
  </div>
</template>