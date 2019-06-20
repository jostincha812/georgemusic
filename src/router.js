import Vue from "vue";
import Router from "vue-router";
import Search from "./components/Search.vue";
import About from "./components/About.vue";
import TrackDetail from "./components/TrackDetail.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "search",
      component: Search
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/track/:id",
      name: "track",
      component: TrackDetail
    }
  ]
});
