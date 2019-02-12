<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题</div>
    <router-link to="/city">
      <div class="header-right">
        <span class="city">{{city}}</span>
        <span class="iconfont arrow-icon">&#xe615;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']) // 可以直接使用city而无需{{this.$store.state.city}}
  }
}
</script>

<style lang="stylus" scoped>
  // @import '../../../assets/styles/varibles.styl'
  @import '~styles/varibles.styl'
// 1rem = html font-size = 50px
  .header
    display : flex
    line-height : $headerHeight
    background : $bgColor
    color : #fff
    // 43px
    height : $headerHeight
    .header-left
      width : .64rem
      float : left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      height : .62rem
      line-height : .62rem
      margin-top : .12rem
      margin-left : .2rem
      padding-left : .2rem
      background : #ffffff
      border-radius: .1rem
      color : #cccccc
    .header-right
      min-width: 1.04rem
      padding: 0 .1rem
      float: right
      text-align : center
      font-size : 0
      color: #ffffff
      .city
        font-size: .24rem
      .arrow-icon
        margin-left .04rem
        font-size: .24rem

</style>
