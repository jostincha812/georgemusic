<template>
  <section class="hero is-success">
    <div class="hero-head">
      <header class="nav">
        <div class="container">
          <div class="nav-left is-pulled-left">
            <div class="nav-item">
              <strong class="has-text-grey-dark">💻 George Music</strong>
            </div>
          </div>
          <div class="nav-right is-pulled-right">
            <router-link class="nav-item has-text-grey-dark mr-25" to="/">
              <strong>🔎 Buscar</strong>
            </router-link>
            <router-link class="nav-item has-text-grey-dark mr-25" to="about">
              <strong>👤 Nosotros</strong>
            </router-link>
          </div>
        </div>
      </header>
    </div>
    <div class="hero-body">
      <div class="content has-text-centered">
        <h1 class="title">George Music</h1>
        <h1 class="subtitle">Canciones Vue-nisimas</h1>
        <pm-player></pm-player>
      </div>
    </div>
  </section>
</template>

<script>
import PmPlayer from "../Player.vue";

export default {
  components: {
    PmPlayer
  }
};
</script>

<style lang="scss" scoped>
.mr-25 {
  margin-right: 25px;
}
</style>

