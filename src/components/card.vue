<template>
  <div class="card">
    <div><a href="#">Ava</a></div>
    <a href="#">
      <div class="head">
        <span>@username</span>
        <small>timeago</small>
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
            <small>2</small>
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
    pid: Number,
    username: String,
    text: String,
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