<template>
  <div id="app">
    <v-header></v-header>
    <div class="content">
        I am content
    </div>
  </div>
</template>

<script>
import header from '_c/components/header'
export default {
  components: {
    'v-header': header
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
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
