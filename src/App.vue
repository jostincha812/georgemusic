<template>
  <div id="app">
    <div id="nav">
      <h1>{{ mensaje }}</h1>
      <p>{{ 1 + 1}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",

  data() {
    return {
      mensaje: "Hola Mundo"
    };
  }
};
</script>


<style lang="scss">
@import "./scss/main.scss";
</style>
