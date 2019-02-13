<template>
  <div>
    <div class="title">
      热销推荐
    </div>
    <ul>
      <router-link
          tag="li"
          class="item border-bottom"
          v-for="item of list"
          :key="item.id"
          :to="'/detail/' + item.id"
      >
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
      </router-link>
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
  props: {
    list: Array
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
