import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");

// Setting up a "real 100vh" height for mobile browsers
changeHeight();
function changeHeight() {
  var vh = window.innerHeight * 0.01 * 100;
  document.documentElement.style.setProperty("--fullH", `${vh}px`);
}
window.addEventListener("resize", changeHeight);
