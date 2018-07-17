<style lang="sass" scoped>
.container{
    background: #f4f4f4;
    width: 100%;
    height: auto;
    min-height: 100%;
    overflow: hidden;
}
.service-policy{
    width: 7.5rem;
    height: 0.73rem;
    background: #f4f4f4;
    padding: 0 0.31rem;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
}

.service-policy .item{
    background: url(http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/servicePolicyRed-518d32d74b.png) 0 center no-repeat;
    background-size: 0.1rem;
    padding-left: 0.15rem;
    display: flex;
    align-items: center;
    font-size: 0.25rem;
    color: #666;
}

.no-cart{
    width: 100%;
    height: auto;
    margin: 0 auto;
}

.no-cart .c{
    width: 100%;
    height: auto;
    margin-top: 2rem;
}

.no-cart .c img{
    margin: 0 auto;
    display: block;
    text-align: center;
    width: 2.58rem;
    height: 2.58rem;
}

.no-cart .c span{
    margin: 0 auto;
    display: block;
    width: 2.58rem;
    height: 0.29rem;
    line-height: 0.29rem;
    text-align: center;
    font-size: 0.29rem;
    color: #999;
}


.cart-view{
    width: 100%;
    height: auto;
    overflow: hidden;
    
}

.cart-view .list{
    height: auto;
    width: 100%;
    overflow: hidden;
    margin-bottom: 1.2rem;
}

.cart-view .group-item{
    height: auto;
    width: 100%;
    background: #fff;
    margin-bottom: 0.18rem;
}

.cart-view .item{
    height: 1.64rem;
    width: 100%;
    overflow: hidden;
}
.cart-view .item .checkbox{
    float: left;
    height: 0.34rem;
    width: 0.34rem;
    margin: 0.65rem 0.18rem 0.65rem 0.26rem;
    background: url(http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/checkbox-0e09baa37e.png) no-repeat;
    background-size: 0.34rem;
}

.cart-view .item .checkbox.checked{
    background: url(http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/checkbox-checked-822e54472a.png) no-repeat;
    background-size: 0.34rem;
}

.cart-view .item .cart-goods{
    float: left;
    height: 1.64rem;
    width: 6.72rem;
    border-bottom: 1px solid #f4f4f4;
}

.cart-view .item .img{
    float: left;
    height:1.25rem;
    width: 1.25rem;
    background: #f4f4f4;
    margin: 0.19rem 0.18rem 0.19rem 0;
}

.cart-view .item .info{
    float: left;
    height:1.25rem;
    width: 5.03rem;
    margin: 0.19rem 0.26rem 0.19rem 0;
}

.cart-view .item .t{
    margin: 0.08rem 0;
    height: 0.28rem;
    font-size: 0.25rem;
    color: #333;
    overflow: hidden;
}


.cart-view .item .name{
    height: 0.28rem;
    max-width: 3.1rem;
    line-height: 0.28rem;
    font-size: 0.25rem;
    color: #333;
    overflow: hidden;
}

.cart-view .item .num{
    height: 0.28rem;
    line-height: 0.28rem;
    float: right;
}

.cart-view .item .attr{
    margin-bottom: 0.17rem;
    height: 0.24rem;
    line-height: 0.24rem;
    font-size: 0.22rem;
    color: #666;
    overflow: hidden;
}

.cart-view .item .b{
    height: 0.28rem;
    line-height: 0.28rem;
    font-size: 0.25rem;
    color: #333;
    overflow: hidden;
}

.cart-view .item .price{
    float: left;
}

.cart-view .item .open{
    height: 0.28rem;
    width: 1.5rem;
    display: block;
    float: right;
    background: url(http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/arrowDown-d48093db25.png) right center no-repeat;
    background-size: 0.25rem;
    font-size: 0.25rem;
    color: #333;
}

.cart-view .item.edit .t{
    display: none;
}

.cart-view .item.edit .attr{
    text-align: right;
    background: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-right1-e9828c5b35.png) right center no-repeat;
    padding-right: 0.25rem;
    background-size: 0.12rem 0.2rem;
    margin-bottom: 0.24rem;
    height: 0.39rem;
    line-height: 0.39rem;
    font-size: 0.24rem;
    color: #999;
    overflow: hidden;
}

.cart-view .item.edit .b{
    display: flex;
    height: 0.52rem;
    overflow: hidden;
}

.cart-view .item.edit .price{
    line-height: 0.52rem;
    height: 0.52rem;
    flex: 1;
}

.cart-view .item .selnum{
    display: none;
}

.cart-view .item.edit .selnum{
    width: 2.35rem;
    height: 0.52rem;
    border: 1px solid #ccc;
    display: flex;
}

.selnum .cut{
    width: 0.7rem;
    height: 100%;
    text-align: center;
    line-height: 0.5rem;
}

.selnum .number{
    flex: 1;
    height: 100%;
    text-align: center;
    line-height: 0.68rem;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    float: left;
}

.selnum .add{
    width: 0.8rem;
    height: 100%;
    text-align: center;
    line-height: 0.5rem;
}


.cart-view .group-item .header{
    width: 100%;
    height: 0.94rem;
    line-height: 0.94rem;
    padding: 0 0.26rem;
    border-bottom: 1px solid #f4f4f4;
}

.cart-view .promotion .icon{
    display: inline-block;
    height: 0.24rem;
    width: 0.15rem;
}

.cart-view .promotion{
    margin-top: 0.25rem;
    float: left;
    height: 0.43rem;
    width: 4.8rem;
    line-height: 0.43rem;
    font-size: 0;
}

.cart-view .promotion .tag{
    border: 1px solid #f48f18;
    height: 0.37rem;
    line-height: 0.31rem;
    padding: 0 0.09rem;
    margin-right: 0.1rem;
    color: #f48f18;
    font-size: 0.24rem;
}

.cart-view .promotion .txt{
    height: 0.43rem;
    line-height: 0.43rem;
    padding-right: 0.1rem;
    color: #333;
    font-size: 0.29rem;
    overflow: hidden;
}

.cart-view .get{
    margin-top: 0.18rem;
    float: right;
    height: 0.58rem;
    padding-left: 0.14rem;
    border-left: 1px solid #d9d9d9;
    line-height: 0.58rem;
    font-size: 0.29rem;
    color: #333;
}

.cart-bottom{
    position: fixed;
    bottom:0;
    left:0;
    height: 1rem;
    width: 100%;
    background: #fff;
    display: flex;
}

.cart-bottom .checkbox{
    height: 0.34rem;

    padding-left: 0.6rem;
    line-height: 0.34rem;
    margin: 0.33rem 0.18rem 0.33rem 0.26rem;
    background: url(http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/checkbox-0e09baa37e.png) no-repeat;
    background-size: 0.34rem;
    font-size: 0.29rem;
}

.cart-bottom .checkbox.checked{
    background: url(http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/checkbox-checked-822e54472a.png) no-repeat;
    background-size: 0.34rem;
}

.cart-bottom .total{
    height: 0.34rem;
    flex: 1;
    margin: 0.33rem 0.1rem;
    font-size: 0.29rem;
}


.cart-bottom .delete{
    height: 0.34rem;
    width: auto;
    margin: 0.33rem 0.18rem;
    font-size: 0.29rem;
}

.cart-bottom .checkout{
    height: 1rem;
    width: 2.1rem;
    text-align: center;
    line-height: 1rem;
    font-size: 0.29rem;
    background: #b4282d;
    color: #fff;
}
</style>
<template>
  	<div class="container">
		<div class="service-policy">
		    <div class="item">30天无忧退货</div>
		    <div class="item">48小时快速退款</div>
		    <div class="item">满88元免邮费</div>
		</div>
		<div class="no-cart" v-if="cartGoods.length <= 0">
		    <div class="c">
		      	<img src="http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/noCart-a8fe3f12e5.png" />
		      	<span>去添加点什么吧</span>
		    </div>
		</div>
		<div class="cart-div" v-if="cartGoods.length > 0">
		    <div class="list">
			    <div class="group-item">
			        <div class="goods">
				        <div class="item" :class="{'edit':isEditCart?true:false}" v-for="(item,index) in cartGoods" :key="index">
				            <div class="checkbox" :class="{'checked':item.checked ? true:false}" @click="checkedItem(index)"></div>
				            <div class="cart-goods">
					            <img class="img" :src="item.list_pic_url"/>
					            <div class="info">
					                <div class="t">
					                  	<span class="name">{{item.goods_name}}</span>
					                  	<span class="num">x{{item.number}}</span>
					                </div>
					                <div class="attr">{{ isEditCart ? '已选择:' : ''}}{{item.goods_specifition_name_value}}</div>
					                <div class="b">
					                  	<text class="price">{{item.retail_price | currency}}</text>
					                  	<div class="selnum">
					                    	<div class="cut" @click="cutNumber(item)">-</div>
					                    	<input v-model="item.number" class="number" disabled="true" type="number" />
					                    	<div class="add" @click="addNumber(item)">+</div>
					                  	</div>
					                </div>
					            </div>
				            </div>
				        </div>
			        </div>
			    </div>
		    </div>
		    <div class="cart-bottom">
		      	<div class="checkbox" :class="{'checked':checkedAllStatus?true:false}" @click="checkedAll">全选({{cartTotal.checkedGoodsCount}})</div>
		      	<div class="total">{{!isEditCart ? cartTotal.checkedGoodsAmount : '' | currency}}</div>
		      	<div class="delete" @click="editCart">{{!isEditCart ? '编辑' : '完成'}}</div>
		      	<div class="checkout" @click="deleteCart" v-if="isEditCart">删除所选</div>
		      	<div class="checkout" @click="checkoutOrder" v-if="!isEditCart">下单</div>
		    </div>
		</div>
	</div>
</template>
<script>
	import api from 'common/js/api';
    export default{
        data(){
            return{
            	cartGoods: [],
			    cartTotal: {
			      "goodsCount": 0,
			      "goodsAmount": 0.00,
			      "checkedGoodsCount": 0,
			      "checkedGoodsAmount": 0.00
			    },
			    isEditCart: false,
			    checkedAllStatus: true,
			    editCartList: [],
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
        	isCheckedAll(){
        		//判断购物车商品已全选
			    return this.cartGoods.every( (element, index, array) => {
			      if (element.checked == true) {
			        return true;
			      } else {
			        return false;
			      }
			    });
        	},
        	checkedItem(index){
        		if (!this.isEditCart) {
        			app.util.ajax({
	                    appjson:true,
				        url: api.CartChecked,
				        data: {
				        	productIds: this.cartGoods[itemIndex].product_id,
				        	isChecked: this.cartGoods[itemIndex].checked ? 0 : 1,
				        },
				        success: (data)=> {
					        this.cartGoods = data.data.cartList;
	          				this.cartTotal = data.data.cartTotal;
	          				this.checkedAllStatus = this.isCheckedAll();
				      	}
				    })
				}else {
				    //编辑状态
				    let tmpCartData = this.cartGoods.map(function (element, index, array) {
				        if (index == itemIndex){
				          element.checked = !element.checked;
				        }
				        return element;
				    });
				    this.cartGoods = tmpCartData;
				    this.checkedAllStatus = this.isCheckedAll();
				    this.cartTotal.checkedGoodsCount = this.getCheckedGoodsCount();
				}
        	},
        	getCheckedGoodsCount(){
        		let checkedGoodsCount = 0;
			    this.cartGoods.forEach(function (v) {
			      if (v.checked === true) {
			        checkedGoodsCount += v.number;
			      }
			    });
			    return checkedGoodsCount;
        	},
        	checkedAll(){
        		if (!this.isEditCart) {
				    let productIds = this.cartGoods.map(function (v) {
				        return v.product_id;
				    });
				    app.util.ajax({
	                    appjson:true,
				        url: api.CartChecked,
				        data: {
				        	productIds: productIds.join(','),
				        	isChecked: this.isCheckedAll() ? 0 : 1,
				        },
				        success: (data)=> {
					        this.cartGoods = data.data.cartList;
	          				this.cartTotal = data.data.cartTotal;
	          				this.checkedAllStatus = this.isCheckedAll();
				      	}
				    })

				} else {
				    //编辑状态
				    let checkedAllStatus = this.isCheckedAll();
				    let tmpCartData = this.cartGoods.map(function (v) {
				        v.checked = !checkedAllStatus;
				        return v;
				    });
					this.cartGoods = tmpCartData;
				    this.checkedAllStatus = this.isCheckedAll();
				    this.cartTotal.checkedGoodsCount = this.getCheckedGoodsCount();
				}
        	},
        	editCart(){
        		if (this.isEditCart) {
				    this.getCartList();
				    this.isEditCart = !this.isEditCart
				} else {
				    //编辑状态
				    let tmpCartList = this.cartGoods.map(function (v) {
				        v.checked = false;
				        return v;
				    });
				    this.editCartList = this.cartGoods;
			        this.cartGoods = tmpCartList;
			        this.isEditCart = !this.isEditCart;
			        this.checkedAllStatus = this.isCheckedAll();
			        this.cartTotal.checkedGoodsCount = this.getCheckedGoodsCount();
				}
        	},
        	updateCart(productId, goodsId, number, id){
        		app.util.ajax({
                    appjson:true,
			        url: api.CartUpdate,
			        data: {
			        	productId,
			        	goodsId,
			        	number,
			        	id,
			        },
			        success: (data)=> {
          				this.checkedAllStatus = this.isCheckedAll();
			      	}
			    })
        	},
        	cutNumber(cartItem){
			    let number = (cartItem.number - 1 > 1) ? cartItem.number - 1 : 1;
			    cartItem.number = number;
			    this.updateCart(cartItem.product_id, cartItem.goods_id, number, cartItem.id);
        	},
        	addNumber(cartItem){
        		let number = cartItem.number + 1;
			    cartItem.number = number;
			    this.updateCart(cartItem.product_id, cartItem.goods_id, number, cartItem.id);
        	},
        	checkoutOrder(){
        		let checkedGoods = this.cartGoods.filter(function (element, index, array) {
			    	if (element.checked == true) {
			        	return true;
			    	} else {
			        	return false;
			      	}
			    });
			    if (checkedGoods.length <= 0) {
			      return false;
			    }
			    
        	},
        	deleteCart(){
        		let productIds = this.cartGoods.filter(function (element, index, array) {
			      	if (element.checked == true) {
			        	return true;
			      	} else {
			        	return false;
			      	}
			    });
			    if (productIds.length <= 0) {
			      return false;
			    }
			    productIds = productIds.map(function (element, index, array) {
			      	if (element.checked == true) {
			        	return element.product_id;
			      	}
			    });
			    app.util.ajax({
                    appjson:true,
			        url: api.CartDelete,
			        data: {
			        	productIds:productIds.join(','),
			        },
			        success: (data)=> {
          				this.cartGoods = data.data.cartList.map(v => {
					        v.checked = false;
					        return v;
					    });
			          	this.cartTotal = data.data.cartTotal;
			      	}
			    })
        	},
        	
        }
    }
</script>