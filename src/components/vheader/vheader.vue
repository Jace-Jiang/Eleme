<template>
    <div class="header">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar">
      </div>
    </div>
</template>

<script>
export default {
  name: 'vheader',
  props: {
    seller: {
      type: Object
    }

  }
}
</script>

<style scoped>

</style>
