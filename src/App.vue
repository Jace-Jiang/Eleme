<template>
  <div id="app">
    <v-header></v-header>
    <div class="content">
      I am content
    </div>
  </div>
</template>

<script>
import header from 'components/header'
export default {
  components: {
    'v-header': header
  }
}

</script>

<style>

</style>
