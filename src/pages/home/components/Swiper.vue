<template>
  <div class="wrapper">
    <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img :src="item.imgUrl"
             class="swiper-img">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/vc/a0/b2/8b/3e3a346ff497f75c338230b09a.jpg'
      },
      {
        id: '0002',
        imgUrl: '//img1.qunarzz.com/vc/a9/f4/f1/bb33ddb697f07c375e7af81256.jpg'
      },
      {
        id: '0003',
        imgUrl: '//img1.qunarzz.com/vc/00/61/a1/4a3e60cef3ef6b1001e4cc84de.jpg'
      }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active //样式穿透 不受scoped限制
    background : #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #eeeeee
    .swiper-img
      width: 100%
</style>
