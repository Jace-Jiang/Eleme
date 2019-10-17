<template>
  <div id="app">
    <Vheader :seller="seller"></Vheader>
    <div class="tab">
        <div class="tab-item">
          <router-link to="/goods">商品</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/ratings">评论</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/seller">商家</router-link>
        </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <input-number :max="10" :min="0" :step="2"></input-number>
  </div>
</template>

<script>
import InputNumber from '_c/input-number'
import Vheader from '_c/vheader'

const ERR_OK = 0

export default {
  data() {
    return {
      seller: {

      }
    }
  },
  created() {
    debugger
    this.$http.get('/api/seller').then((response) => { // 返回一个成功的钩子函数
      debugger
      response = response.body // 拿到mock数据，(json对象,api文档变更了，json传的是一个promise，用body传Object）
      if (response.errno === ERR_OK) {
        this.seller = response.data
        console.log(this.seller)
      }
    })
  },
  components: {
    InputNumber,
    Vheader
  }
}
</script>

<style lang="less" rel="stylesheet/stylus">
  //@import "./common/stylus/mixin.styl";
  #app {
    .tab {
      display: flex;
      width: 100%;
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      //border-1px(rgba(7, 17, 27, 0.1))
      .tab-item {
        flex: 1;
        text-align: center;
        & > a { // 表示当前样式下等切换，tab切换
          display: block;
          font-size: 14px;
          color: rgb(77, 85, 93);
          &.active {
          color: rgb(240, 20, 20)
          }
        }
      }
    }
  }
</style>
