<template>
  <div id="app">
    <pm-header></pm-header>
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
        </div>
      </nav>

      <p>
        <small>{{searchMessage}}</small>
      </p>

      <div class="container results">
        <div class="columns">
          <div
            class="column"
            v-for="(t) in tracks"
            v-bind:key="t.index"
          >{{t.name}} - {{ t.artists[0].name}}</div>
        </div>
      </div>
    </section>
    <pm-footer></pm-footer>
  </div>
</template>

<script>
import trackService from "./services/track";
import PmFooter from "./components/layout/Footer.vue";
import PmHeader from "./components/layout/Header.vue";

export default {
  name: "app",
  components: {
    PmFooter,
    PmHeader
  },

  data() {
    return {
      searchQuery: "",
      tracks: []
    };
  },

  methods: {
    search() {
      if (!this.searchQuery) {
        return;
      }
      trackService(this.searchQuery).then(data => {
        this.tracks = data.tracks.items;
      });
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
