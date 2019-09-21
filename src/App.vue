<template>
  <div id="app">
    <Vheader></Vheader>
    <div class="content">
        I am content
    </div>
    <input-number :max="10" :min="0" :step="2"></input-number>
  </div>
</template>

<script>
import InputNumber from '_c/input-number'
import Vheader from '_c/vheader'
export default {
  components: {
    InputNumber,
    Vheader
  }
}
</script>

<style lang="less">

</style>
