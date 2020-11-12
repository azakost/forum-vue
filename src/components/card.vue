<template>
  <div class="card">
    <div>
      <a v-bind:href="'/users/' + uid">
        <img v-bind:src="server + '/avatars/' + uid + '.jpg'" />
      </a>
    </div>
    <a v-bind:href="'/posts/' + pid">
      <div class="head">
        <span>@{{ username }}</span>
        <small>{{ created }}</small>
      </div>
      <p>{{ text }}</p>
      <div class="foot">
        <div class="cats">
          <small v-for="c in categories" v-bind:key="c.Id">#{{ c.Name }}</small>
        </div>
        <div class="stats">
          <div>
            <heart-icon class="icon" />
            <small>{{ likes - dislikes }}</small>
          </div>
          &nbsp; &nbsp;
          <div>
            <message-square-icon class="icon" />
            <small>{{ comments }}</small>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>


<style scoped>
.card {
  grid-template-columns: 40px auto;
  border-bottom: var(--border);
  column-gap: 16px;
  display: grid;
  padding: 16px;
}

.card:hover {
  background: var(--input-color);
}

img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  object-position: 50% 50%;
}

.head,
.foot,
.stats {
  display: flex;
  justify-content: space-between;
}

.stats {
  width: 70px;
}

.stats > div {
  align-items: center;
  display: flex;
}

span,
p,
small {
  font-weight: 200;
  font-size: 13px;
}

span {
  opacity: 0.8;
}

p {
  line-height: 1.8;
  margin: 8px 0;
}

.icon {
  height: 12px;
}

.icon,
small {
  margin-top: 4px;
  opacity: 0.4;
}

small {
  font-size: 11px;
}

.cats > small {
  margin-right: 8px;
}
</style>


<script>
import { MessageSquareIcon, HeartIcon } from "vue-feather-icons";
import { host } from "../config";

export default {
  name: "Card",
  components: {
    HeartIcon,
    MessageSquareIcon,
  },
  data: () => {
    return {
      server: host,
    };
  },
  props: {
    pid: Number,
    created: Number,
    uid: Number,
    username: String,
    text: String,
    likes: Number,
    dislikes: Number,
    comments: Number,
    reaction: String,
    categories: Array,
  },
};
</script>