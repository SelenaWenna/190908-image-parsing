<template lang="pug">
form.sw-query-settings(
  @submit.prevent=""
  )
  sw-input.sw-input(
    @change="changeQuery($event)"
    )
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'sw-query-settings',
  methods: {
    ...mapActions([
      'clearImages',
      'parseImages',
    ]),
    changeQuery(q) {
      this.clearImages();
      this.parseImages({ q });
    },
  },
};
</script>

<style lang="scss" scoped>
.sw-query-settings {
  display: flex;
  width: 100%;
}
</style>
