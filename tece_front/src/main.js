import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import fg from "flexboxgrid";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  fg,
  render: h => h(App)
}).$mount("#app");
