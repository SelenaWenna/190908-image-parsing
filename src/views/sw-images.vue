<template lang="pug">
.sw-container
  sw-query-settings
  .sw-images
    a.sw-images__item(
      v-for="image in images"
      :key="image.link"
      :style="{ backgroundImage: `url(${image.link})` }"
      target="_blank"
      )
      .sw-images__about
        .sw-title {{ image.title }}
        .sw-info Сохранено с {{ image.image.contextLink | formatLink }}
  button.sw-more(
    v-if="images.length"
    @click="parseImages()"
    ) Ещё...
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import swQuerySettings from '../components/sw-query-settings.vue';

export default {
  filters: {
    formatLink(link) {
      return link.split('/')[2];
    },
  },
  components: {
    swQuerySettings,
  },
  computed: {
    ...mapGetters([
      'images',
    ]),
  },
  methods: {
    ...mapActions([
      'parseImages',
    ]),
  },
};
</script>

<style lang="scss" scoped>
.sw-images {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  &__item {
    width: calc(25% - 20px);
    min-height: 200px;
    margin: 0 10px 20px;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    box-sizing: border-box;
    border-radius: 6px;
    border: 1px solid grey;
    transition: border-radius 0.3s;
    &:hover {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      .sw-images__about {
        opacity: 1;
      }
    }
  }
  &__about {
    position: absolute;
    top: 100%;
    left: -1px;
    right: -1px;
    padding: 10px;
    background: white;
    overflow: hidden;
    z-index: 1;
    opacity: 0;
    border: 1px solid grey;
    transition: opacity 0.3s;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
}
.sw-title,
.sw-info {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.sw-title {
  font-size: 15px;
  margin-bottom: 10px;
}
.sw-info {
  font-size: 12px;
  color: grey;
}
.sw-more {
  margin-top: 50px;
  padding: 10px 20px;
  text-transform: uppercase;
  background-color: green;
  color: white;
  transition: background-color 0.3s;
  border-radius: 3px;
  border: none;
  &:active,
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: darken(green, 5%);
  }
}
</style>
