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

  </div>
</template>

<script>
import { getSellers } from '@/api/seller'
import Vheader from '_c/vheader'

export default {
  data() {
    return {
      seller: {

      }
    }
  },
  components: {
    Vheader
  },
  created() {
    // getSellers().then(res => {
    //   debugger
    //   console.log(this.seller)
    // }).catch((e) => {
    //   debugger
    // })

    // this.$http.get('/api/seller').then((response) => {
    //   response = response.body
    //   console.log(response)
    // })

    this.getList()
  },
  mounted() {
  },
  methods: {
    getList() {
      getSellers().then(res => {
        debugger
        console.log(res)
      }).catch((e) => {
        debugger
        console.log(e)
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
