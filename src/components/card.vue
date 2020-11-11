<template>
  <div class="card">
    <div>
      <a v-bind:href="'/users/' + uid">
        <img v-bind:src="avatar" />
      </a>
    </div>
    <a v-bind:href="'/posts/' + pid">
      <div class="head">
        <span>@{{ username }}</span>
        <small>{{ time }}</small>
      </div>
      <p>{{ text }}</p>
      <div class="foot">
        <div>hash</div>
        <div class="stats">
          <div>
            <heart-icon class="icon" />
            <small>{{ hearts }}</small>
          </div>
          &nbsp; &nbsp;
          <div>
            <message-square-icon class="icon" />
            <small>{{ messages }}</small>
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
</style>


<script>
import { MessageSquareIcon, HeartIcon } from "vue-feather-icons";

export default {
  name: "Card",
  components: {
    HeartIcon,
    MessageSquareIcon,
  },
  props: {
    avatar: String,
    uid: {
      type: Number,
      default: 0,
    },
    pid: {
      type: Number,
      default: 0,
    },
    username: String,
    text: String,
    time: Number,
    hearts: {
      type: Number,
      default: 0,
    },
    messages: {
      type: Number,
      default: 0,
    },
  },
};
</script>