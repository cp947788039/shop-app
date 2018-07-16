<style lang="sass" scoped>
.container {
  background: #f9f9f9;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.search {
  height: 0.88rem;
  width: 100%;
  padding: 0 0.3rem;
  background: #fff;
  display: flex;
  align-items: center;
}

.search .input {
  width: 6.9rem;
  height: 0.56rem;
  background: #ededed;
  border-radius: 0.08rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search .icon {
  background: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png) center no-repeat;
  background-size: 100%;
  width: 0.28rem;
  height: 0.28rem;
}

.search .txt {
  height: 0.42rem;
  line-height: 0.42rem;
  color: #666;
  padding-left: 0.1rem;
  font-size: 0.3rem;
}

.catalog {
  flex: 1;
  width: 100%;
  background: #fff;
  display: flex;
  border-top: 1px solid #fafafa;
}

.catalog .nav {
  width: 1.62rem;
  height: 100%;
  overflow: auto;
}

.catalog .nav .item {
  text-align: center;
  line-height: 0.9rem;
  width: 1.62rem;
  height: 0.9rem;
  color: #333;
  font-size: 0.28rem;
  border-left: 0.06rem solid #fff;
}

.catalog .nav .item.active {
  color: #ab2b2b;
  font-size: 0.36rem;
  border-left: 0.06rem solid #ab2b2b;
}

.catalog .cate {
  border-left: 1px solid #fafafa;
  flex: 1;
  height: 100%;
  padding: 0 0.3rem 0 0.3rem;
  overflow: auto;
}

.banner {
  display: block;
  height: 2.22rem;
  width: 100%;
  position: relative;
}

.banner .image {
  position: absolute;
  top: 0.3rem;
  left: 0;
  border-radius: 0.04rem;
  height: 1.92rem;
  width: 100%;
}

.banner .txt {
  position: absolute;
  top: 0.30rem;
  text-align: center;
  color: #fff;
  font-size: 0.28rem;
  left: 0;
  height: 1.92rem;
  line-height: 1.92rem;
  width: 100%;
}

.catalog .hd {
  height: 1.08rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.catalog .hd .txt {
  font-size: 0.24rem;
  text-align: center;
  color: #333;
  padding: 0 0.1rem;
  width: auto;
}

.catalog .hd .line {
  width: 0.4rem;
  height: 1px;
  background: #d9d9d9;
}

.catalog .bd {
  height: auto;
  width: 100%;
  overflow: hidden;
}

.catalog .bd .item {
  display: block;
  float: left;
  height: 2.16rem;
  width: 1.44rem;
  margin-right: 0.34rem;
}

.catalog .bd .item.last {
  margin-right: 0;
}

.catalog .bd .item .icon {
  height: 1.44rem;
  width: 1.44rem;
}

.catalog .bd .item .txt {
  display: block;
  text-align: center;
  font-size: 0.24rem;
  color: #333;
  height: 0.72rem;
  width: 1.44rem;
}
</style>
<template>
  	<div class="container">
  		<div class="search">
  			<a href="" class="input">
  				<img src="" alt="" class="icon">
  				<span class="txt">商品搜索, 共{{goodsCount}}款好物</span>
  			</a>
  		</div>
  		<div class="catalog">
  			<div class="nav">
  				<div class="item" :class="{'active':currentCategory.id == item.id ?true:false}" v-for="(item,index) in navList" @click="switchCate(item.id)">{{item.name}}</div>
  			</div>
  			<div class="cate">
  				<a :href="url" class="banner">
  					<img :src="currentCategory.wap_banner_url" alt="" class="image"/>
  					<span class="txt">{{currentCategory.front_name}}</span>
  				</a>
  				<div class="hd" v-if="currentCategory.name">
  					<span class="line"></span>
		            <span class="txt">{{currentCategory.name}}分类</span>
		            <span class="line"></span>
  				</div>
  				<div class="bd">
  					<a href="" class="item" :class="{'last':(index+1) % 3 == 0 ?true:false}" v-for="(item,index) in currentCategory.subCategoryList">
  						<img :src="item.wap_banner_url" alt="" class="icon">
  						<span class="txt">{{item.name}}</span>
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
            	navList: [],
			    categoryList: [],
			    currentCategory: {},
			    scrollLeft: 0,
			    scrollTop: 0,
			    goodsCount: 0,
			    scrollHeight: 0
            }
        },
        mounted(){
        	this.getCatalog();
        },
        methods:{
        	getCatalog(){
        		app.util.ajax({
                    appjson:true,
			        url: api.CatalogList,
			        success: (data)=> {
				        this.navList = data.data.categoryList;
          				this.currentCategory = data.data.currentCategory;
			      	}
			    })
			    app.util.ajax({
                    appjson:true,
			        url: api.GoodsCount,
			        success: (data)=> {
				        this.goodsCount = data.data.goodsCount;
			      	}
			    })
        	},
        	getCurrentCategory(id){
        		app.util.ajax({
                    appjson:true,
			        url: api.CatalogCurrent,
			        data:{id:id},
			        success: (data)=> {
				        this.currentCategory = data.data.currentCategory;
				        if(!this.currentCategory){
				        	this.currentCategory = {id:0};
				        }
			      	}
			    })
        	},
        	switchCate(id){
        		if(this.currentCategory.id === id){
        			return false;
        		}
        		this.getCurrentCategory(id);
        	},
        	
        }
    }
</script>