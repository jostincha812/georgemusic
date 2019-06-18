<template>
  <div id="app">
    <section class="section">
      <nav class="nav has-shadow">
        <div class="container">
          <div class="field is-grouped">
            <div class="control is-expanded">
              <input
                type="text"
                class="input is-medium is-rounded is-primary"
                placeholder="Buscar Canciones"
                v-model="searchQuery"
              >
            </div>
            <div class="control">
              <button class="button is-medium is-info" v-on:click="search">
                <strong>Buscar</strong>
              </button>
              <button class="button is-medium is-danger">
                <strong>&times;</strong>
              </button>
            </div>
          </div>
          <p>
            <small>{{searchMessage}}</small>
          </p>
        </div>
      </nav>

      <div class="container results">
        <div class="columns">
          <div class="column" v-for="(t) in tracks" v-bind:key="t.index">{{t.name}} {{ t.artist}}</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import track from "./services/track";

console.log(track);

const tracks = [
  { name: "Cancion 1", artist: "Artista 1" },
  { name: "Cancion 2", artist: "Artista 2" },
  { name: "Cancion 3", artist: "Artista 3" }
];

export default {
  name: "app",

  data() {
    return {
      searchQuery: "",
      tracks: []
    };
  },

  methods: {
    search() {
      this.tracks = tracks;
      console.log(this.searchQuery);
    }
  },

  computed: {
    searchMessage() {
      return `Emcontrados ${this.tracks.length}`;
    }
  }
};
</script>


<style lang="scss">
@import "./scss/main.scss";
.results {
  margin-top: 20px;
}
</style>
