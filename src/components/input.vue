<script>
import { AlertTriangleIcon } from "vue-feather-icons";
export default {
  name: "Input",
  components: {
    AlertTriangleIcon,
  },
  props: {
    error: {
      type: String,
      default: "",
    },
    type: String,
    label: String,
    text: {
      type: String,
      default: "",
    },
    value: String,
  },
  data() {
    return {
      val: this.value,
    };
  },
  methods: {
    updateInput() {
      this.$emit("input", this.val);
    },
  },
};
</script>

<template>
  <div>
    <label>{{ label }}</label>
    <div>
      <input :type="type" v-model="val" @input="updateInput" />
      <alert-triangle-icon class="icon" v-if="error != ''" />
    </div>

    <span>{{ error }}</span>
  </div>
</template>

<style scoped>
input {
  border: none;
  background: var(--input-color);
  color: var(--text-color);
  height: 38px;
  padding: 10px 20px;
  display: block;
  width: 100%;
  box-sizing: border-box;
}

label {
  opacity: 0.4;
  font-size: 12px;
}
span {
  display: block;
  margin: 2px -16px 6px;
  width: 100%;
  text-align: right;
  font-size: 10px;
  color: rgb(253, 61, 61);
  height: 14px;
}

div {
  position: relative;
}

.icon {
  position: absolute;
  right: 12px;
  height: 18px;
  top: calc(50% - 17.6px / 2);
  color: red;
}
</style>