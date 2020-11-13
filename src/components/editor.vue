<script>
import Button from "../components/button.vue";
import { ImageIcon, ChevronsDownIcon } from "vue-feather-icons";
import { get, put } from "../config";

export default {
  name: "Editor",
  components: {
    Button,
    ImageIcon,
    ChevronsDownIcon,
  },
  data() {
    return {
      cats: {},
      quest: {
        title: "",
        text: "",
        categories: [],
      },
    };
  },
  methods: {
    async click() {
      await put("writepost", this.quest);
      this.$emit("click");
    },
  },
  async mounted() {
    this.cats = await get("categories");
  },
};
</script>

<template>
  <div class="write">
    <div class="short">
      <textarea
        placeholder="На чем застряли?"
        max="140"
        v-model="quest.title"
      />
      <div class="cats">
        <template v-for="c in cats">
          <input
            type="checkbox"
            :id="c.id"
            :key="c.id"
            :value="c.id"
            v-model="quest.categories"
          />
          <label :for="c.id" :key="'x' + c.id">#{{ c.name }}</label>
        </template>
      </div>
    </div>
    <div class="long">
      <div
        placeholder="Расширенное пояснение"
        contenteditable="true"
        class="editor"
        v-html="quest.text"
      />
      <div class="actions">
        <div>
          <chevrons-down-icon class="icon" />
          <image-icon class="icon" />
        </div>
        <div>
          <Button @click="click" :disabled="false">Спросить</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
Button {
  border-radius: 50px;
  height: 28px;
}

.write {
  position: relative;
}

.short {
  background: var(--input-color);
  margin-bottom: 60px;
}
textarea {
  background: var(--input-color);
  color: var(--text-color);
  box-sizing: border-box;
  border-radius: 5px;
  line-height: 1.7;
  overflow: hidden;
  font-size: 13px;
  padding: 16px;
  height: 84px;
  border: none;
  resize: none;
  width: 100%;
}

.long {
  border-bottom: var(--border);
  background: var(--bg-color);
  position: absolute;
  margin-top: -60px;
  width: 100%;
  z-index: 9;
}

.editor {
  background: var(--input-color);
  border-top: var(--border);
  -ms-overflow-style: none;
  scrollbar-width: none;
  font-weight: 200;
  font-size: 13px;
  line-height: 1.8;
  overflow: auto;
  height: 0;
}

.editor:empty:not(:focus):before {
  content: attr(placeholder);
  pointer-events: none;
  color: #93999f;
  font-size: 12px;
  display: none;
}

.actions {
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 16px;
}

.icon {
  opacity: 0.5;
  height: 18px;
}

.icon:hover {
  opacity: 1;
}

.icon:first-child {
  margin-right: 16px;
}

.cats {
  padding: 0 16px 16px;
}

input {
  display: none;
}

.cats > label {
  color: var(--secondary-color);
  margin-right: 16px;
  font-size: 12px;
  cursor: pointer;
  opacity: 0.2;
}

input:checked + label {
  opacity: 1;
}
</style>