<template>
  <div id="app">
    <p v-show="showValue">{{value}}</p>
    <p v-if="showValue">{{value}}</p>
    <p v-else-if="false">{{'otra cosa'}}</p>
    <p v-else>{{ 'Algo mas' }}</p>
    <ul>
      <li v-for="item in items" v-bind:key="item">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "app",

  data() {
    return {
      mensaje: "Hola Mundo",
      showValue: false,
      value: "Algo",
      items: [1, 2, 3, 4, 5]
    };
  }
};
</script>


<style lang="scss">
@import "./scss/main.scss";
</style>
