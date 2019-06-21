import Vue from "vue";
import App from "./App.vue";
import EventBus from "./plugins/event-bus";

import router from "./router";
import msToMm from "./filters/ms-to-mm";
import blur from "./directives/blur";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(EventBus);
Vue.use(msToMm);
Vue.use(blur);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
