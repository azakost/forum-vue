<script>
import {
  AwardIcon,
  BellIcon,
  BookOpenIcon,
  HelpCircleIcon,
} from "vue-feather-icons";

import { ava } from "../config";

export default {
  name: "Layout",
  components: {
    AwardIcon,
    BellIcon,
    BookOpenIcon,
    HelpCircleIcon,
  },
  data() {
    return {
      url: ava,
    };
  },
};
</script>

<template>
  <main>
    <div class="menu">
      <router-link to="/">
        <help-circle-icon class="icon" />
        <span>Вопросы</span>
      </router-link>

      <router-link to="/knowlege">
        <book-open-icon class="icon" />
        <span>Знания</span>
      </router-link>

      <router-link to="/ranking">
        <award-icon class="icon" />
        <span>Рейтинг</span>
      </router-link>

      <router-link to="/notify">
        <bell-icon class="icon" />
        <span>Уведомления</span>
        <small aria-checked="true" />
      </router-link>
    </div>

    <div class="basic">
      <div class="login">
        <router-link to="/profile" v-if="this.$store.getters.USER != ''">
          <img :src="url(this.$store.getters.ID)" />

          <li>
            <ul>
              {{
                this.$store.getters.NAME
              }}
            </ul>
            <ul>
              @{{
                this.$store.getters.USER
              }}
            </ul>
          </li>
        </router-link>

        <router-link to="/login" v-else>
          <img src="../assets/lock.png" alt="" />

          <li>
            <ul>
              Привет, студент!
            </ul>
            <ul>
              Залогинься плиз...
            </ul>
          </li>
        </router-link>
      </div>
      <div class="content">
        <slot />
      </div>
    </div>
    <div class="rightbar">right</div>
  </main>
</template>

<style scoped>
main {
  grid-template-columns: 275px 598px 392px;
  max-width: calc(275px + 598px + 392px);
  position: relative;
  margin: 0 auto;
  height: var(--fullH);
  display: grid;
}

.menu {
  display: flex;
  flex-direction: column;
  border-right: var(--border);
}

.basic {
  border-right: var(--border);
}

@media only screen and (max-width: 1265px) {
  main {
    grid-template-columns: 68px 598px 392px;
    max-width: calc(68px + 598px + 392px);
  }
  span,
  li {
    display: none;
  }
}

@media only screen and (max-width: 1078px) {
  main {
    grid-template-columns: 68px auto;
    max-width: calc(88px + 598px);
  }
  .rightbar {
    display: none;
  }
}

@media only screen and (max-width: 500px) {
  main {
    grid-template-columns: auto;
  }
  .menu {
    flex-direction: row;
    position: absolute;
    height: 56px;
    bottom: 0;
    right: 0;
    left: 0;
    justify-content: space-around;
    align-items: center;
    border-top: var(--border);
  }

  .login {
    bottom: auto !important;
    left: auto !important;
    right: 0;
    top: 0;
  }
}

a {
  display: flex;
  align-items: center;
  margin: 11px 0;
  display: flex;
  opacity: 0.8;
  position: relative;
}

[aria-current="page"] {
  color: var(--secondary-color);
  font-weight: bold;
}

.icon {
  margin: 0 22px;
}

img {
  border-radius: 50%;
  margin: 0 19px;
  height: 30px;
  width: 30px;
  object-fit: cover;
}

ul:last-child {
  font-size: 0.7em;
  margin-top: 4px;
}

.login {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 9;
}
</style>