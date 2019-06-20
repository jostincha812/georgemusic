<template>
  <div class="container">
    <div class="columns">
      <div class="column is-5 is-offset-4">
        <pm-loader v-show="isLoading"></pm-loader>
        <pm-track v-bind:track="track" v-show="!isLoading"></pm-track>
      </div>
    </div>
  </div>
</template>

<script>
import PmTrack from "./Track.vue";
import PmLoader from "./shared/Loader.vue";

import TrackId from "../services/trackId";

export default {
  components: {
    PmTrack,
    PmLoader
  },

  data() {
    return {
      track: {},
      isLoading: false
    };
  },

  created() {
    this.isLoading = true;
    const id = this.$route.params.id;
    TrackId(id).then(response => {
      this.track = response;
      this.isLoading = false;
    });
  }
};
</script>

<style lang="scss" scoped>
.columns {
  margin: 20px;
}
</style>
