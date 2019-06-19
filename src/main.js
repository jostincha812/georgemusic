import Vue from "vue";
import App from "./App.vue";
import EventBus from "./plugins/event-bus";

import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(EventBus);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
