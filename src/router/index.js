import Vue from 'vue'
import Router from 'vue-router'

/*import sadeA from "@/components/aFace/sadeA.vue"
import sideB from "@/components/bFace/sideB.vue"
import changePhone from "@/components/bFace/changePhone.vue"*/

// const sadeA = () => import(/* webpackChunkName: "sadeA" */ '../components/aFace/sadeA.vue');
const orderLogin = () => import(/* webpackChunkName: "orderLogin" */ '../components/aFace/orderLogin.vue');
const orderMenu = () => import(/* webpackChunkName: "orderMenu" */ '../components/aFace/orderMenu.vue');
const orderList = () => import(/* webpackChunkName: "orderList" */ '../components/aFace/orderList.vue');
const pay = () => import(/* webpackChunkName: "pay" */ '../components/aFace/pay.vue');
const store = () => import(/* webpackChunkName: "store" */ '../components/aFace/store.vue');
const commitOrder = () => import(/* webpackChunkName: "commitOrder" */ '../components/aFace/commitOrder.vue');
const orderdetail = () => import(/* webpackChunkName: "orderdetail" */ '../components/aFace/orderdetail.vue');
const search = () => import(/* webpackChunkName: "search" */ '../components/aFace/search.vue');
// const shouye = () => import(/* webpackChunkName: "shouye" */ '../components/aFace/shouye.vue');



Vue.use(Router)

export default new Router({
    routes: [
		{
			path:'/',           //这个表示的是根目录，即一进入的页面
			redirect:'orderLogin'    //设置页面一进来就显示的页面，这里写的内容是对应组将的component的值
		},
        // {
        //     path: '/aIndex',
        //     name: 'sadeA',
        //     component: sadeA
        // },
		// {
		// 	path: '/bIndex',
		// 	name: 'sideB',
		// 	component: sideB,
		// },
		{
			path: '/orderLogin',
			name: 'orderLogin',
			component: orderLogin,
			meta:{
				title:"开始点餐",
				isLogin:false    // 添加该字段，表示进入这个路由是需要登录的
			},
		},
		{
			path: '/orderMenu',
			name: 'orderMenu',
			component: orderMenu,
			meta:{
				title:"订餐菜单",
				isLogin:false    // 添加该字段，表示进入这个路由是需要登录的
			},
		},
		{
			path: '/orderList',
			name: 'orderList',
			component: orderList,
			meta:{
				title:"订餐列表",
				isLogin:false    // 添加该字段，表示进入这个路由是需要登录的
			},
		},
		{
			path: '/pay',
			name: 'pay',
			component: pay,
			meta:{
				title:"支付页",
				isLogin:false    // 添加该字段，表示进入这个路由是需要登录的
			},
		},
		{
			path: '/store',
			name: 'store',
			component: store,
			meta:{
				title:"店铺信息",
				isLogin:false    // 添加该字段，表示进入这个路由是需要登录的
			},
        },
        {
			path: '/commitOrder',
			name: 'commitOrder',
			component: commitOrder,
			meta:{
				title:"提交订单",
				isLogin:false    // 添加该字段，表示进入这个路由是需要登录的
			},
        },
        {
			path: '/orderdetail',
			name: 'orderdetail',
			component:orderdetail,
			meta:{
				title:"订单详情",
				isLogin:false    // 添加该字段，表示进入这个路由是需要登录的
			},
        },
        {
			path: '/search',
			name: 'search',
			component:search,
			meta:{
				title:"订单搜索",
				isLogin:false    // 添加该字段，表示进入这个路由是需要登录的
			},
        },

    ]
})
