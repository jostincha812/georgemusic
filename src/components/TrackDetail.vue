<template>
  <div class="container">
    <div class="columns">
      <div class="column is-3 has-text-centered">
        <figure class="media-left">
          <p class="image">
            <img v-bind:src="track.album.images[0].url">
          </p>
          <p>
            <a class="button is-primary is-large">
              <span class="icon" v-on:click="selectTrack"></span>
            </a>
          </p>
        </figure>
      </div>
      <div class="column is-8">
        <div class="panel">
          <div class="panel-heading">
            <h1 class="title">{{track.name}}</h1>
          </div>
          <div class="panel-block">
            <article class="media">
              <div class="media-content">
                <div class="content">
                  <ul v-for="(value, key) in track" v-bind:key="key">
                    <li>
                      <strong>
                        {{key}}:&nbsp;
                        <span>{{value}}</span>
                      </strong>
                    </li>
                  </ul>
                </div>
              </div>
              <nav class="level">
                <div class="level-left">
                  <a class="level-item"></a>
                </div>
              </nav>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import trackMixin from "../mixins/track";
import TrackId from "../services/trackId";

export default {
  mixins: [trackMixin],

  data() {
    return {
      track: {}
    };
  },

  created() {
    const id = this.$route.params.id;
    TrackId(id).then(response => {
      this.track = response;
    });
  }
};
</script>

<style lang="scss" scoped>
.column {
  margin: 20px;
}
</style>
