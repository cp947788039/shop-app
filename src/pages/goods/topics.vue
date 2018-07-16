<style lang="sass" scoped>
.container{
   	width: 7.5rem;
    height: 100%;
    overflow: auto;
    background: #f4f4f4;
}
.topic-list{
    width: 7.5rem;
    height: 100%;
    overflow: auto;
    background: #f4f4f4;
}

.topic-list .item{
    width: 100%;
    height: 6.25rem;
    overflow: hidden;
    background: #fff;
    margin-bottom: 0.2rem;
}

.topic-list .img{
    width: 100%;
    height: 4.15rem;
}

.topic-list .info{
    width: 100%;
    padding:0.3rem;
}

.topic-list .title{
    display: block;
    text-align: center;
    color: #333;
    overflow: hidden;
    font-size: 0.35rem;
}

.topic-list .desc{
    display: block;
    text-align: center;
    position: relative;
    width: auto;
    height: 0.24rem;
    line-height: 0.24rem;
    overflow: hidden;
    color: #999;
    font-size: 0.24rem;
    margin-top: 0.16rem;
    margin-bottom: 0.3rem;
}

.topic-list .price{
    display: block;
    text-align: center;
    width: 100%;
    height: 0.27rem;
    line-height: 0.27rem;
    overflow: hidden;
    color: #b4282d;
    font-size: 0.27rem;
}


.page{
    width: 7.5rem;
    height: 1.08rem;
    background: #fff;
    margin-bottom: 0.2rem;
}

.page div{
    height: 1.08rem;
    width: 50%;
    float: left;
    font-size: 0.29rem;
    color: #333;
    text-align: center;
    line-height: 1.08rem;
}

.page .prev{
    border-right: 1px solid #D9D9D9;
}

.page .disabled{
    color: #ccc;
}
</style>
<template>
  	<div class="container">
  		<div class="topic-list">
  			<a href="" v-for="(item,index) in topicList" :key="index">
  				<img :src="item.scene_pic_url" class="img" alt="">
  				<div class="info">
  					<span class="title">{{item.title}}</span>
	                <span class="desc">{{item.subtitle}}</span>
	                <span class="price">{{item.price_info}}元起</span>
  				</div>
  			</a>
  			<div class="page">
  				<div class="prev" :class="{'disabled':page <= 1?true:false}" @click="prevPage">上一页</div>
  				<div class="next" :class="{'disabled':(count / size) < page +1?true:false}" @click="nextPage">下一页</div>
  			</div>
  		</div>
  	</div>
</template>
<script>
	import api from 'common/js/api';
    export default{
        data(){
            return{
            	topicList: [],
		        page: 1,
		        size: 10,
		        count: 0,
		        showPage: false
            }
        },
        mounted(){
        	this.getTopic();
        },
        methods:{
        	getTopic(){
        		app.util.ajax({
                    appjson:true,
			        url: api.TopicList,
			        data:{
			        	page:this.page,
			        	size:this.size,
			        },
			        success: (data)=> {
				        this.topicList = data.data.data;
				        this.showPage = true;
				        this.count = data.data.count;
			      	}
			    })
        	},
        	prevPage(){
        		if(this.page <= 1){
        			return false;
        		}
        		this.page--;
        		this.getTopic();
        	},
        	nextPage(){
        		if(this.page+1 > (this.count/this.size)){
        			return false;
        		}
        		this.page++;
        		this.getTopic();
        	},
        }
    }
</script>