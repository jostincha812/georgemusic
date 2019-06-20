<template>
  <section class="hero is-success">
    <div class="hero-head">
      <header class="nav">
        <div class="container">
          <div class="nav-left">
            <div class="nav-item">
              <strong>💻 George Music</strong>
            </div>
          </div>
          <div class="nav-right nav-menu">
            <router-link class="nav-item" to="/">Buscar</router-link>
            <router-link class="nav-item" to="about">Nosotros</router-link>
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

