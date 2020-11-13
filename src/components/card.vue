<script>
import { MessageSquareIcon, HeartIcon } from "vue-feather-icons";
import { ava } from "../config";

export default {
  name: "Card",
  components: {
    HeartIcon,
    MessageSquareIcon,
  },
  data: () => {
    return {
      url: ava,
    };
  },
  methods: {
    formatDate: (secs) => {
      let t = new Date(1970, 0, 1);
      t.setSeconds(secs);
      let x = new Date();
      let timezone = -x.getTimezoneOffset() / 60;
      t.setHours(t.getHours() + timezone);
      let diff = new Date() - t;
      let sec = Math.floor(diff / 1000);
      if (sec < 2) {
        return "сейчас";
      }

      if (sec < 60) {
        return sec + " сек. назад";
      }

      let min = Math.floor(diff / 60000);
      if (min < 60) {
        return min + " мин. назад";
      }
      let d = t;
      d = [
        "0" + d.getDate(),
        "0" + (d.getMonth() + 1),
        "" + d.getFullYear(),
        "0" + d.getHours(),
        "0" + d.getMinutes(),
      ].map((component) => component.slice(-2));
      return d.slice(0, 3).join(".") + " " + d.slice(3).join(":");
    },
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
    short: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<template>
  <div :class="short ? 'card hover' : 'card'">
    <div>
      <a :href="'/users/' + uid">
        <img :src="url(uid)" />
      </a>
    </div>
    <a :href="short ? '/posts/' + pid : null">
      <div class="head">
        <span>@{{ username }}</span>
        <small v-if="short">{{ formatDate(created) }}</small>
      </div>
      <p>{{ text }}</p>
      <div class="foot">
        <div class="cats">
          <small v-for="c in categories" :key="c.Id">#{{ c.Name }}</small>
        </div>
        <div class="stats" v-if="short">
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

.hover:hover {
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

