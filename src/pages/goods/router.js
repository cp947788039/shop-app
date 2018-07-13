//order 模块路由设置
module.exports = [{
	path: '/goods/goodsDetails',
	name: 'goodsDetails',
	meta: {
		title: '商品详情',
	},
	component: resolve => require(['./goodsDetails.vue'], resolve)
},{
	path: '/goods/topics',
	name: 'topics',
	meta: {
		title: '专题',
	},
	component: resolve => require(['./topics.vue'], resolve)
},{
	path: '/goods/classify',
	name: 'classify',
	meta: {
		title: '分类',
	},
	component: resolve => require(['./classify.vue'], resolve)
},{
	path: '/goods/cart',
	name: 'cart',
	meta: {
		title: '购物车',
	},
	component: resolve => require(['./cart.vue'], resolve)
},] 