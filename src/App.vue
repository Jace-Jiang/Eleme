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
import { getSeller } from '@/api/seller'

export default {
  data() {
    return {
      seller: {

      }
    }
  },
  components: {
    InputNumber,
    Vheader
  },
  created() {
    this.getSellerList()
  },
  mounted() {
    this.getSellerList()
  },
  methods: {
    getSellerList() {
      debugger
      getSeller().then(res => {
        this.seller = res.data
      })
    }
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
