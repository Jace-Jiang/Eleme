<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="header">
      I am header
    </div>
    <div class="content">
      I am content
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import header from './components/header'
export default {
  components: {
    'v-header': header
  }
}

</script>

<style>

</style>
