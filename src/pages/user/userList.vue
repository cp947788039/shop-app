<style lang="sass" scoped>
.container{
    background: #f4f4f4;
    height: auto;
    overflow: auto;
    width: 100%;
}
.profile-info{
    width: 100%;
    height: 2.8rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    padding: 0 0.3rem;
    background: #333;
}

.profile-info .avatar{
    height: 1.48rem;
    width: 1.48rem;
    border-radius: 50%;
}

.profile-info .info{
    flex: 1;
    height: 0.85rem;
    padding-left: 0.31rem;
}

.profile-info .name{
    display: block;
    height: 0.45rem;
    line-height: 0.45rem;
    color: #fff;
    font-size: 0.37rem;
    margin-bottom: 0.1rem;
}

.profile-info .level{
    display: block;
    height: 0.3rem;
    line-height: 0.3rem;
    margin-bottom: 0.1rem;
    color: #7f7f7f;
    font-size: 0.3rem;
}

.user-menu{
    width: 100%;
    height: auto;
    overflow: hidden;
    background: #fff;
}

.user-menu .item{
    float: left;
    width: 33.33333%;
    height: 1.87rem;
    border-right: 1px solid rgba(0,0,0,.15);
    border-bottom: 1px solid rgba(0,0,0,.15);
    text-align: center;
}

.user-menu .item .a{
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.user-menu .item.no-border {
    border-right: 0;
}

.user-menu .item.item-bottom {
    border-bottom: none;
}

.user-menu .icon{
    margin: 0 auto;
    display: block;
    height: 0.52rem;
    width: 0.52rem;
    margin-bottom: 0.16rem;
}

.user-menu .icon.order{
    background: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/ucenter-sdf6a55ee56-f2c2b9c2f0.png) 0 -4.37rem no-repeat;
    background-size: 0.52rem;
}

.user-menu .icon.coupon{
    background: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/ucenter-sdf6a55ee56-f2c2b9c2f0.png) 0 -0.62rem no-repeat;
    background-size: 0.52rem;
}

.user-menu .icon.gift{
    background: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/ucenter-sdf6a55ee56-f2c2b9c2f0.png) 0 -1.87rem no-repeat;
    background-size: 0.52rem;
}

.user-menu .icon.address{
    background: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/ucenter-sdf6a55ee56-f2c2b9c2f0.png) 0 0 no-repeat;
    background-size: 0.52rem;
}

.user-menu .icon.security{
    background: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/ucenter-sdf6a55ee56-f2c2b9c2f0.png) 0 -5rem no-repeat;
    background-size: 0.52rem;
}

.user-menu .icon.kefu{
    background: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/ucenter-sdf6a55ee56-f2c2b9c2f0.png) 0 -3.12rem no-repeat;
    background-size: 0.52rem;
}

.user-menu .icon.help{
    background: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/ucenter-sdf6a55ee56-f2c2b9c2f0.png) 0 -2.5rem no-repeat;
    background-size: 0.52rem;
}

.user-menu .icon.feedback{
    background: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/ucenter-sdf6a55ee56-f2c2b9c2f0.png) 0 -1.25rem no-repeat;
    background-size: 0.52rem;
}


.user-menu .txt{
    display: block;
    height: 0.24rem;
    width: 100%;
    font-size: 0.24rem;
    color:#333;
}

.logout{
    margin-top: 0.5rem;
    height: 1.01rem;
    width: 100%;
    line-height: 1.01rem;
    text-align: center;
    background: #fff;
    color: #333;
    font-size: 0.3rem;
}
</style>
<template>
  	<div class="container">
        <div class="profile-info" @click="goLogin">
            <img class="avatar" :src="userInfo.avatar"/>
            <div class="info">
              <span class="name">{{userInfo.nickname}}</span>
            </div>
        </div>
        <div class="user-menu">
            <div class="item">
              <a href="/pages/ucenter/order/order" class="a">
                <span class="icon order"></span>
                <span class="txt">我的订单</span>
              </a>
            </div>
            <div class="item">
              <a href="/pages/ucenter/coupon/coupon" class="a">
                <span class="icon coupon"></span>
                <span class="txt">优惠券</span>
              </a>
            </div>
            <div class="item no-border">
              <a href="href" class="a">
                <span class="icon gift"></span>
                <span class="txt">礼品卡</span>
              </a>
            </div>
            <div class="item">
              <a href="/pages/ucenter/collect/collect" class="a">
                <span class="icon address"></span>
                <span class="txt">我的收藏</span>
              </a>
            </div>
            <div class="item">
              <a href="/pages/ucenter/footprint/footprint" class="a">
                <span class="icon security"></span>
                <span class="txt">我的足迹</span>
              </a>
            </div>
            <div class="item no-border">
              <a href="href" class="a">
                <span class="icon kefu"></span>
                <span class="txt">会员福利</span>
              </a>
            </div>
            <div class="item">
              <a href="../address/address" class="a">
                <span class="icon address"></span>
                <span class="txt">地址管理</span>
              </a>
            </div>
            <div class="item">
              <a href="href" class="a">
                <span class="icon security"></span>
                <span class="txt">账号安全</span>
              </a>
            </div>
            <div class="item no-border">
              <a href="href" class="a">
                <span class="icon kefu"></span>
                <span class="txt">联系客服</span>
              </a>
            </div>
            <div class="item item-bottom">
              <a href="href" class="a">
                <span class="icon help"></span>
                <span class="txt">帮助中心</span>
              </a>
            </div>
            <div class="item item-bottom">
              <a href="/pages/ucenter/feedback/feedback" class="a">
                <span class="icon feedback"></span>
                <span class="txt">意见反馈</span>
              </a>
            </div>
        </div>
        <!--<div class="logout" bindtap="exitLogin">退出登录</div>-->
    </div>
</template>
<script>
	import api from 'common/js/api';
    export default{
        data(){
            return{
            	userInfo: {}
            }
        },
        mounted(){
        	this.getCartList();
        },
        methods:{
        	getCartList(){
        		app.util.ajax({
                    appjson:true,
			        url: api.CartList,
			        success: (data)=> {
				        this.cartGoods = data.data.cartList;
          				this.cartTotal = data.data.cartTotal;
          				this.checkedAllStatus = this.isCheckedAll();
			      	}
			    })
        	},
        	
        	
        }
    }
</script>