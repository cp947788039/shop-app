//order 模块路由设置
module.exports = [{
	path: '/user/userList',
	name: 'userList',
	meta: {
		title: '个人中心',
	},
	component: resolve => require(['./userList.vue'], resolve)
},] 