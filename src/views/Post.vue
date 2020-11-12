<script>
import Card from "../components/card.vue";
import Head from "../components/head.vue";
import axios from "axios";
import {
  ThumbsUpIcon,
  ThumbsDownIcon,
  FlagIcon,
  EditIcon,
} from "vue-feather-icons";
import { host } from "../config";

export default {
  name: "Post",
  components: {
    Card,
    Head,
    ThumbsUpIcon,
    ThumbsDownIcon,
    FlagIcon,
    EditIcon,
  },
  data: () => {
    return {
      post: null,
    };
  },
  mounted() {
    axios
      .get(host + "/api/post?postID=" + this.$route.params.pid)
      .then((response) => (this.post = response.data));
  },
};
</script>

<template>
  <div>
    <Head />
    <Card
      v-bind:text="post.Title"
      v-bind:uid="post.AuthorID"
      v-bind:username="post.Username"
      v-bind:categories="post.Categories"
      v-bind:short="false"
    />
    <div class="long" v-html="post.Text" v-if="post.Text != ''"></div>
    <div class="actions">
      <div>
        <flag-icon
          class="icon"
          v-if="post.AuthorID != this.$store.getters.ID"
        />
        <edit-icon class="icon" v-else />
      </div>
      <div :class="post.Reaction">
        <thumbs-up-icon class="icon" />
        <span>{{ post.Likes - post.Dislikes }}</span>
        <thumbs-down-icon class="icon" />
      </div>
    </div>
  </div>
</template>


<style scoped>
.long {
  font-size: 14px;
  font-weight: 200;
  line-height: 1.8;
}

.long,
.actions {
  border-bottom: var(--border);
  padding: 16px;
}

.icon {
  height: 18px;
}

.icon:hover {
  opacity: 1;
}

.icon,
span {
  opacity: 0.6;
}

span {
  font-size: 12px;
}

.actions,
.actions > div {
  justify-content: space-between;
  align-items: center;
  display: flex;
}

.actions > div {
  width: 80px;
}

.like > .thumbs-up,
.dislike > .thumbs-down,
i:hover {
  color: var(--secondary-color);
}
</style>