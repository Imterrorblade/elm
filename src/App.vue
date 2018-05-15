<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="scss">
  @import './style/common';
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .router-fade-enter-action, .router-fade-leave-action {
    -webkit-transition: opacity .3s;
    -moz-transition: opacity .3s;
    -ms-transition: opacity .3s;
    -o-transition: opacity .3s;
    transition: opacity .3s;
  }
  .router-fade-enter, .router-fade-leave-action {
    opacity: 0;
  }
</style>
