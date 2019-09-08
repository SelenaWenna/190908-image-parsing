<template lang="pug">
.sw-images Images
  div AIzaSyDnzmtj12p6roMg_sQJrgL4iTRrrlm3CnQ
  div {{ $store.state.images }}
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions([
      'parseImages',
    ]),
  },
  created() {
    this.parseImages();
  },
};
</script>
