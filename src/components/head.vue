<script>
import { ArrowLeftIcon } from "vue-feather-icons";

export default {
  name: "Head",
  components: {
    ArrowLeftIcon,
  },
  props: {
    parent: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <header>
    <div>
      <arrow-left-icon
        class="icon back"
        v-if="!parent"
        v-on:click="$router.back()"
      />
      <h4>{{ $route.name }}</h4>
    </div>
    <div :class="parent ? 'second' : ''">
      <slot />
    </div>
  </header>
</template>

<style scoped>
header {
  justify-content: space-between;
  border-bottom: var(--border);
  padding: 0 16px;
  height: 52px;
  width: 100%;
}

header,
header > div {
  align-items: center;
  display: flex;
}

header > .second {
  display: none;
}

.back {
  margin-right: 16px;
  display: none;
}

@media only screen and (max-width: 1078px) {
  header > .second {
    display: block;
  }
}

@media only screen and (max-width: 500px) {
  header {
    padding-right: 68px !important;
  }
  .back {
    display: initial;
  }
}
</style>