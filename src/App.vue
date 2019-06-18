<template>
  <div id="app">
    <input type="text" v-model="name">
    <input type="text" v-model="lastname">
    <p>{{fullName}}</p>
  </div>
</template>

<script>
export default {
  name: "app",

  data() {
    return {
      name: "",
      lastname: ""
    };
  },

  computed: {
    fullName() {
      return `${this.name} ${this.lastname}`;
    }
  },

  watch: {
    name(newVal, oldVal) {
      console.log(newVal, oldVal);
    }
  }
};
</script>


<style lang="scss">
@import "./scss/main.scss";
</style>
