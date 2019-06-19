<template>
  <div id="app">
    <pm-header></pm-header>
    <pm-loader v-show="isLoading"></pm-loader>
    <section class="section" v-show="!isLoading">
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
                <strong>🔎</strong>
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
        <div class="columns is-multiline">
          <div class="column is-one-quarter" v-for="track in tracks" v-bind:key="track.index">
            <pm-track v-bind:track="track" v-on:select="setSeletedTrack" v-bind:class="{ 'is-active' : track.id == selectedTrack }"></pm-track>
          </div>
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
import PmTrack from "./components/Track.vue";
import PmLoader from "./components/shared/shared/Loader.vue";

export default {
  name: "app",
  components: {
    PmFooter,
    PmHeader,
    PmTrack,
    PmLoader
  },

  data() {
    return {
      searchQuery: "",
      tracks: [],
      isLoading: false,
      selectedTrack: ""
    };
  },

  methods: {
    search() {
      if (!this.searchQuery) {
        return;
      }
      this.isLoading = true;
      trackService(this.searchQuery).then(data => {
        this.tracks = data.tracks.items;
        this.isLoading = false;
      });
    },
    setSeletedTrack(id) {
      this.selectedTrack = id;
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

.is-active {
  border: 3px #23d160 solid;
}
</style>
