<template>
  <div>
    <div class="title">
      热销推荐
    </div>
    <ul>
    <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
      <img :src="item.imgUrl" alt="" class="item-img">
      <div class="item-info">
        <p class="item-title">
          {{item.title}}
        </p>
        <p class="item-desc">
          {{item.desc}}
        </p>
        <button class="item-button">查看详情</button>
      </div>
    </li>
    <li class="border-bottom">
      <div class="recommend-viewall">
        <p class="recommend-viewall-title">
          查看所有产品
        </p>
      </div>
    </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  components: {},
  props: {},
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1507/2e/2e23d202457702c1.img.jpg_200x200_ff41b378.jpg',
        title: '上海自然博物馆',
        desc: '东亚地区最大的自然博物馆,精彩超出你的想象～'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1707/82/821428e3bbf93bbaa3.water.jpg_200x200_1f657041.jpg',
        title: '迪斯尼小镇',
        desc: '梦幻小镇购物餐饮应有尽有'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1408/21/623fa85345d2ff700bfe1f9bf70697f3.jpg_200x200_81e37f5f.jpg',
        title: '外摊观光隧道',
        desc: '647米长的色彩变换不断的隧道旅行，让你感觉如梦如幻'
      }]
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () {},
  mounted () {}
}
</script>
<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top : .2rem
    line-height : .8rem
    background : #eee
    text-indent : .2rem
  .item
    overflow : hidden
    display: flex
    height: 1.9rem
    .item-img
      width : 1.7rem
      height : 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width : 0
      .item-title
        line-height : .54rem
        font-size : .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top : .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color : #fff
  .recommend-viewall
    height : .6rem
    .recommend-viewall-title
      padding-top : .1rem
      text-align : center
      line-height : .4rem
      font-size : .25rem
      color : #10eaea
</style>
