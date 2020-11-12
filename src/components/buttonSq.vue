<script>
export default {
  name: "buttonSq",
  props: {
    name: String,
    disable: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    click() {
      this.$emit("click");
    },
  },
};
</script>

<template>
  <button :disabled="disabled" @click="click">
    {{ name }}
  </button>
</template>


<style scoped>
button {
  background: var(--secondary-color);
  color: var(--text-color);
  padding: 6px 12px;
  cursor: pointer;
  border: none;
  float: right;
  width: 100%;
  height: 38px;
}

button:disabled {
  opacity: 0.5;
}
</style>