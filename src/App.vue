<template>
  <div id="app">
    <div class="content">
        I am content
    </div>
    <input-number :max="10" :min="0" :step="2"></input-number>
  </div>
</template>

<script>
import InputNumber from '_c/input-number'
export default {
  components: {
    InputNumber
  }
}
</script>

<style lang="less">

</style>
