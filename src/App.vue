<template lang="pug">
.sw-app
  #nav
    router-link.sw-nav-item(to="/") О проекте
    router-link(to="/images") Картинки
  <router-view/>
</template>

<style lang="scss">
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<style lang="scss" scoped>
.sw-app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.sw-nav-item {
  padding-right: 10px;
  padding-left: 10px;
}
</style>
