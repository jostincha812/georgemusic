<template>
  <main>
    <transition name="move">
      <pm-notificaion v-show="showNotification">
        <p slot="body">No se encontraron resultados</p>
      </pm-notificaion>
    </transition>
    <transition name="move">
      <pm-loader v-show="isLoading"></pm-loader>
    </transition>
    <section class="section" v-show="!isLoading">
      <nav class="nav has-shadow">
        <div class="container">
          <div class="field is-grouped">
            <div class="control is-expanded">
              <input
                type="text"
                class="input is-medium is-rounded is-primary border-b"
                placeholder="Buscar Canciones"
                v-model="searchQuery"
                v-on:keyup.enter="search"
              >
            </div>
            <div class="control">
              <button class="button is-medium is-info pr" v-on:click="search">
                <strong>🔎</strong>
              </button>
              <button class="button is-medium is-danger cancel">
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
            <pm-track
              v-blur="track.preview_url"
              v-bind:track="track"
              v-on:select="setSeletedTrack"
              v-bind:class="{ 'is-active' : track.id == selectedTrack }"
            ></pm-track>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import trackService from "../services/track";
import PmTrack from "./Track.vue";
import PmLoader from "./shared/Loader.vue";
import PmNotificaion from "./shared/Notification.vue";

export default {
  name: "app",
  components: {
    PmTrack,
    PmLoader,
    PmNotificaion
  },

  data() {
    return {
      searchQuery: "",
      tracks: [],
      isLoading: false,
      showNotification: false,
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
        this.showNotification = data.tracks.total === 0;
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
      return `Encontrados ${this.tracks.length}`;
    }
  },

  watch: {
    showNotification() {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false;
        }, 3000);
      }
    }
  }
};
</script>


<style lang="scss">
.results {
  margin-top: 20px;
}

.is-active {
  border: 3px #321021 solid;
}
.pr {
  margin-right: 7px;
  background-color: #321021 !important;
}
.cancel {
  background-color: #fd4257 !important;
}
.border-b {
  border-color: #50162e !important;
}
</style>
