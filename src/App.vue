<script>
import Layout from "./components/layout.vue";

export default {
  app: "App",
  components: {
    Layout,
  },
};
</script>

<template>
  <div id="app">
    <Layout>
      <router-view />
    </Layout>
  </div>
</template>

<style>
:root {
  --primary-color: blue;
  --secondary-color: #1da1f2;
  --border-color: #38444d;
  --text-color: white;
  --bg-color: #16212c;
  --menu-color: rgb(21, 32, 43);
  --topbar-color: rgb(21, 32, 43);
  --mobile-menu-text-color: rgb(136, 153, 166);
  --input-color: #192734;
  --input-color2: #1d2d3b;
  --border: 1px solid var(--border-color);
}

@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap");

html,
::placeholder,
textarea,
input {
  font-family: "Open Sans", sans-serif;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
}

* {
  box-sizing: border-box;
}
a,
a:active,
a:focus,
div[contenteditable] {
  color: var(--text-color);
  text-decoration: none;
  outline: none;
}

li,
ul {
  list-style-type: none;
  list-style: none;
}

body,
ul,
li,
h4,
p {
  padding: 0;
  margin: 0;
}

.icon {
  cursor: pointer;
}

input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}
</style>
