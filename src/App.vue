<template>
  <div id="app">
    <pm-header></pm-header>
    <router-view></router-view>
    <pm-footer></pm-footer>
  </div>
</template>

<script>
import PmFooter from "./components/layout/Footer.vue";
import PmHeader from "./components/layout/Header.vue";

export default {
  name: "app",
  components: {
    PmFooter,
    PmHeader
  }
};
</script>


<style lang="scss">
@import "./scss/main.scss";

.results {
  margin-top: 20px;
}

.is-active {
  border: 3px #23d160 solid;
}

body {
  background: #e9e3e3;
}

footer {
  background: #130512 !important;
  color: #ffffff !important;
}
</style>
