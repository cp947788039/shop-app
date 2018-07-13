<style lang="sass" scoped>
.swiper-container{
    width: 7.5rem;
    height: 4.17rem;
    .swiper-slide{
        width:100%;
        height:100%;
        img{
            width:100%;
            height: 4.17rem;
        }
        a{
            display:block;
            overflow:hidden;
        }
    }
}
.m-menu {
  display: flex;
  height: 1.81rem;
  width: 7.5rem;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
}

.m-menu .item {
  flex: 1;
  display: block;
  padding: 0.2rem 0;
}

.m-menu img {
  display: block;
  width: 0.58rem;
  height: 0.58rem;
  margin: 0 auto;
  margin-bottom: 0.12rem;
}

.m-menu span {
  display: block;
  font-size: 0.24rem;
  text-align: center;
  margin: 0 auto;
  line-height: 1;
  color: #333;
}

.a-section {
  width: 7.5rem;
  height: auto;
  overflow: hidden;
  background: #fff;
  color: #333;
  margin-top: 0.2rem;
  a{
    color:#333;
  }
}

.a-section .h {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  height: 1.3rem;
}

.a-section .h .txt {
  padding-right: 0.3rem;
  background: url("http://ac-3yr0g9cz.clouddn.com/2cdba05369e10f934e54.png") right 4rem no-repeat;
  background-size: 0.16rem 0.27rem;
  display: inline-block;
  height: 0.36rem;
  font-size: 0.33rem;
  line-height: 0.36rem;
}

.a-brand .b {
  width: 7.5rem;
  height: auto;
  overflow: hidden;
  position: relative;
}

.a-brand .wrap {
  position: relative;
}

.a-brand .img {
  position: absolute;
  left: 0;
  top: 0;
}

.a-brand .mt {
  position: absolute;
  z-index: 2;
  padding: 0.27rem 0.31rem;
  left: 0;
  top: 0;
}

.a-brand .mt .brand {
  display: block;
  font-size: 0.33rem;
  height: 0.43rem;
  color: #333;
}

.a-brand .mt .price, .a-brand .mt .unit {
  font-size: 0.25rem;
  color: #999;
}

.a-brand .item-1 {
  float: left;
  width: 3.75rem;
  height: 2.52rem;
  overflow: hidden;
  border-top: 0.01rem solid #fff;
  margin-left: 0.01rem;
}

.a-brand .item-1:nth-child(2n+1){
  margin-left: 0;
  width: 3.74rem;
}

.a-brand .item-1 .img {
  width: 3.75rem;
  height: 2.53rem;
}

.a-new .b {
  width: 7.5rem;
  height: auto;
  overflow: hidden;
  padding: 0 0.31rem 0.45rem 0.31rem;
}

.a-new .b .item {
  float: left;
  width: 3.02rem;
  margin-top: 0.1rem;
  margin-left: 0.21rem;
  margin-right: 0.21rem;
}

.a-new .b .item-b {
  margin-left: 0.42rem;
}

.a-new .b .img {
  width: 3.02rem;
  height: 3.02rem;
}

.a-new .b .name {
  text-align: center;
  display: block;
  width: 3.02rem;
  height: 0.35rem;
  margin-bottom: 0.14rem;
  overflow: hidden;
  font-size: 0.3rem;
  color: #333;
}

.a-new .b .price {
  display: block;
  text-align: center;
  line-height: 0.3rem;
  font-size: 0.3rem;
  color: #b4282d;
}

.a-popular {
  width: 7.5rem;
  height: auto;
  overflow: hidden;
}

.a-popular .b .item {
  border-top: 1px solid #d9d9d9;
  margin: 0 0.2rem;
  height: 2.64rem;
  width: 7.1rem;
}

.a-popular .b .img {
  margin-top: 0.12rem;
  margin-right: 0.12rem;
  float: left;
  width: 2.4rem;
  height: 2.4rem;
}

.a-popular .b .right {
  float: left;
  height: 2.64rem;
  width: 4.56rem;
  display: flex;
  flex-flow: row nowrap;
}

.a-popular .b .text {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  height: 2.64rem;
  width: 4.56rem;
}

.a-popular .b .name {
  width: 4.56rem;
  display: block;
  color: #333;
  line-height: 0.5rem;
  font-size: 0.3rem;
}

.a-popular .b .desc {
  width: 4.56rem;
  display: block;
  color: #999;
  line-height: 0.5rem;
  font-size: 0.25rem;
}

.a-popular .b .price {
  width: 4.56rem;
  display: block;
  color: #b4282d;
  line-height: 0.5rem;
  font-size: 0.33rem;
}

.a-topic .b {
  height: 5.33rem;
  width: 7.5rem;
  padding: 0 0 0.48rem 0;
}

.a-topic .b .list {
  height: 5.33rem;
  width: 7.5rem;
  white-space: nowrap;
}

.a-topic .b .item {
  display: inline-block;
  height: 5.33rem;
  width: 6.8rem;
  margin-left: 0.3rem;
  overflow: hidden;
}

.a-topic .b .item:last-child {
  margin-right: 0.3rem;
}

.a-topic .b .img {
  height: 3.87rem;
  width: 6.80rem;
  margin-bottom: 0.3rem;
}

.a-topic .b .np {
  height: 0.35rem;
  margin-bottom: 0.13rem;
  color: #333;
  font-size: 0.3rem;
}

.a-topic .b .np .price {
  margin-left: 0.2rem;
  color: #b4282d;
}

.a-topic .b .desc {
  display: block;
  height: 0.3rem;
  color: #999;
  font-size: 0.24rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow:ellipsis;
}

.good-grid {
  width: 7.5rem;
  height: auto;
  overflow: hidden;
}

.good-grid .h {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  height: 1.3rem;
  font-size: 0.33rem;
  color: #333;
}

.good-grid .b {
  width: 7.5rem;
  padding: 0 0.06rem;
  height: auto;
  overflow: hidden;
}

.good-grid .b .item {
  float: left;
  background: #fff;
  width: 3.65rem;
  margin-bottom: 0.06rem;
  height: 4.52rem;
  overflow: hidden;
  text-align: center;
}

.good-grid .b .item .a{
  height: 4.52rem;
  width: 100%;
}

.good-grid .b .item-b {
  margin-left: 0.06rem;
}

.good-grid .item .img {
  margin-top: 0.2rem;
  width: 3.02rem;
  height: 3.02rem;
}

.good-grid .item .name {
  display: block;
  width: 3.65rem;
  padding: 0 0.2rem;
  overflow: hidden;
  height: 0.35rem;
  margin: 0.11rem 0 0.22rem 0;
  text-align: center;
  font-size: 0.3rem;
  color: #333;
}

.good-grid .item .price {
  display: block;
  width: 3.65rem;
  height: 0.3rem;
  text-align: center;
  font-size: 0.3rem;
  color: #b4282d;
}

.good-grid .more-item{
  height: 100%;
  width: 100%;
}

.more-a{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.good-grid .more-a .txt{
  height: 0.33rem;
  width: 100%;
  line-height: 0.33rem;
  color: #333;
  font-size: 0.33rem;
}

.good-grid .more-a .icon{
  margin: 0.6rem auto 0 auto;
  width: 0.7rem;
  height: 0.7rem;
}
</style>
<template>
<div class="container">
  <div class="banner">
      <div class="swiper-container swiper-container-banner">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
                <a :href="item.link">
                    <img :src="item.image_url|imgBaseUrl">
                </a>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
  </div>
  <div class="m-menu">
    <a :href="item.url" class="item"  v-for="(item,index) in channel" :key="index">
      <img :src="item.icon_url" />
      <span>{{item.name}}</span>
    </a>
  </div>
  <div class="a-section a-brand">
    <div class="h">
      <a href="../brand/brand">
        <span class="txt">品牌制造商直供</span>
      </a>
    </div>
    <div class="b">
      <div class="item item-1" v-for="(item,index) in brands" :key="index">
        <a :href="`/pages/brandDetail/brandDetail?id=${item.id}`">
          <div class="wrap">
            <img class="img" :src="item.new_pic_url" />
            <div class="mt">
              <span class="brand">{{item.name}}</span>
              <span class="price">{{item.floor_price | currency}}</span>
              <span class="unit">元起</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
  <div class="a-section a-new" v-if="newGoods.length > 0">
    <div class="h">
      <div>
        <a href="../newGoods/newGoods">
          <span class="txt">周一周四 · 新品首发</span>
        </a>
      </div>
    </div>
    <div class="b">
      <div class="item" v-for="(item,index) in newGoods" :key="index">
        <a :href="`../goods/goods?id=${item.id}`">
          <img class="img" :src="item.list_pic_url" />
          <span class="name">{{item.name}}</span>
          <span class="price">{{item.retail_price | currency}}</span>
        </a>
      </div>
    </div>
  </div>
  <div class="a-section a-popular" v-if="hotGoods.length > 0">
    <div class="h">
      <div>
        <a href="../hotGoods/hotGoods">
          <span class="txt">人气推荐</span>
        </a>
      </div>
    </div>
    <div class="b">
      <div class="item" v-for="(item,index) in hotGoods" :key="index">
        <a :href="`/pages/goods/goods?id=${item.id}`">
          <img class="img" :src="item.list_pic_url"/>
          <div class="right">
            <div class="text">
              <span class="name">{{item.name}}</span>
              <span class="desc">{{item.goods_brief}}</span>
              <span class="price">{{item.retail_price | currency}}</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
  <div class="a-section a-topic" v-if="topics.length > 0">
    <div class="h">
      <div>
        <a href="../topic/topic">
            <span class="txt">专题精选</span>
        </a>
      </div>
    </div>
    <!-- <div class="b">
      <scroll-div scroll-x="true" class="list">
        <div class="item" wx:for="{{topics}}" wx:for-index="index" wx:for-item="item" wx:key="{{item.id}}">
          <navigator url="../topicDetail/topicDetail?id={{item.id}}">
            <image class="img" src="{{item.scene_pic_url}}" background-size="cover"></image>
            <div class="np">
              <text class="name">{{item.title}}</text>
              <text class="price">￥{{item.price_info}}元起</text>
            </div>
            <text class="desc">{{item.subtitle}}</text>
          </navigator>
        </div>
      </scroll-div>
    </div> -->
  </div>
  <div class="good-grid" v-for="(item,index) in floorGoods" :key="index">
    <div class="h">
      <div>
        <span>{{item.name}}</span>
      </div>
    </div>
    <div class="b">
        <div v-for="(iitem,iindex) in item.goodsList" :key="iindex" class="item" :class="iindex % 2 == 0 ? '' : 'item-b'">
          <a :href="`../goods/goods?id=${iitem.id}`" class="a">
            <img class="img" :src="iitem.list_pic_url" />
            <span class="name">{{iitem.name}}</span>
            <span class="price">{{iitem.retail_price | currency}}</span>
          </a>
        </div>
        <div class="item item-b item-more">
          <a :href="`/pages/category/category?id=${item.id}`" class="more-a">
            <div class="txt">{{'更多'+item.name+'好物'}}</div>
            <!-- <img class="icon" src="../../static/images/icon_go_more.png" /> -->
          </a>
        </div>
    </div>
  </div>
</div>
</template>
<script>
    import api from 'common/js/api';
    export default{
        data(){
            return{
            	newGoods: [],
                hotGoods: [],
                topics: [],
                brands: [],
                floorGoods: [],
                banner: [],
                channel: [],
            }
        },
        created(){
            this.$store.dispatch('updateNavbarTitle','仿网易严选商城');
            /*this.$store.dispatch('updateNavbarStatus',{isShowHead:true, isShowFoot:true, isShowBack:false});*/
        },
        mounted(){
        	this.getList();
        },
        methods:{
			async getList() {
			    await app.util.ajax({
                    appjson:true,
			        url: api.IndexUrl,
			        success: (data)=> {
				        this.newGoods = data.data.newGoodsList || [];
                        this.hotGoods = data.data.hotGoodsList || [];
                        this.topics = data.data.topicList || [];
                        this.brands = data.data.brandList || [];
                        this.floorGoods = data.data.categoryList || [];
                        this.banner = data.data.banner || [];
                        this.channel = data.data.channel || [];
			      	}
			    })
                await new Swiper ('.swiper-container-banner', {
                    autoplay: 5000,
                    loop: true,
                    pagination: '.swiper-pagination',
                }) 
			},
			
        }
    }
</script>