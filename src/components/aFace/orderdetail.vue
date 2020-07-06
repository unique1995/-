<template>
	<div class="orderdetail">

            <van-nav-bar :title="title"   class="title">
                <template #left>
                    <van-icon name="arrow-left"  color="#242424" size="20" @click="handelMenu"/>
                </template>
                <template #right>
                   <van-icon name="orders-o"  color="#242424" size="20" @click="handelList"/>
                </template>
            </van-nav-bar>
            <div class="orderMiddle" v-if="show">
                <div class="nopay">
                    <h1>待收货</h1>
                    <span>送达之后可享受美味</span>
                </div>
                <div class="middle" v-for="(item,index) in arr">
                    <van-card
                        :num=item.num
                        :price=item.price
                        :title=item.food_name
                        :thumb=item.img_src
                        />
                </div>
                <div class="orderMessage" >
                    <h1>订单信息 </h1>
                    <p>订单编号: <span>{{order_id}}</span></p>
                    <p>下单时间: <span>{{order_addtime}}</span></p>
                    <p>手机号: <span>{{phone}}</span></p>
                    <p>地址: <span>{{address}}</span></p>
                </div>
            </div>

            <div class="bottom" v-if="show">
                <van-button round type="info" color="#f8856b" size="small" @click="handelorder">取消订单</van-button>
				<van-dialog
					v-model="showMenu" show-cancel-button
					cancel-button-text="是"
					confirm-button-text="否"
					:title=txt
					@cancel="handelmeal"
				>
				</van-dialog>
                <van-button round type="info"  color="#ff5f3a" size="small" @click="handelpay">待送餐</van-button>
            </div>
		<h2 class="cart" v-else>暂时还没有菜品加入购物车哦~</h2>
    </div>
</template>

<script>
	import { queryCGOrderById,deleteCGOrderById} from "@/api/custInfo";
	import { Dialog } from 'vant';
	export default {
		name: "orderdetail",
		data() {
			return {
				title:"订单详情",
				list:[],
				arr:[],
				phone:"",
				address:"",
				showMenu:false,
				show:true,
				showpay:false,
				txt:"是否取消订单",
				id:"",
				order_id:'',
				order_addtime:"",
				text:""
			};
		},
		components: {
			[Dialog.Component.name]: Dialog.Component,
		},

		methods: {
			handelList(){
				this.$router.push({name:'orderList',query:{list:this.list,order_addtime:this.order_addtime}})
			},
			handelMenu(){
				this.$router.go(-1)
			},
			handelmeal(){
				let param = {
					id:this.$route.query.id
				}
			deleteCGOrderById(param).then(res => {
				if(res.data.code==1){
					sessionStorage.removeItem("list")
					this.$toast("删除成功");
					this.show = false
				}

			})
	},
			handelpay(){
				Dialog.alert({
					title:"快去柜台支付吧",
				})
					},
			handelorder(){
				 this.showMenu = true;
			    },

		},
		created() {
			this.$nextTick(function(){  //不使用this.$nextTick()方法会报错
				this.phone = this.$route.query.phone;
				this.address = this.$route.query.address;
			});
			this.list =JSON.parse(sessionStorage.getItem("list"));

			 this.list && this.list.map((item)=>{
				if(item.num !== 0){
					this.arr.push(item)
				}
				   return this.arr
				})
			if(this.arr.length == 0){
				this.show = false
			}
			console.log(this.arr)
			let param = {
				id:this.$route.query.id
			}
			queryCGOrderById(param).then(res => {
				this.order_id= res.data.data.order_id;
				this.order_addtime= res.data.data.order_addtime

			})
		},
		mounted() {
		}
	}
</script>

<style scoped>

.title{
    height: 100px;
    padding:0;
}
.nopay{
    height: 100px;
    margin: 30px;
    border:1px solid #eee;
    padding-left:15px;
    background: #ffffff;
}
.nopay h1{
    font-size: 34px;
    line-height: 50px;

}
.middle{
    min-height: 100px;
    margin: 0 30px;
}
.orderdetail{
    display: flex;
    flex-direction: column;
    height: 100%;
    /* padding:0 30px; */
    background: #e9e9e9;
}
.orderMiddle{
    flex: 1;
}
.bottom{
    height: 120px;
    /* margin: 0 30px; */
    padding:0 30px;
    display: flex;
    justify-content: space-between;
    background: #fff;
   align-items: center;
}
.orderMessage{
    height: 300px;
    padding-left:15px;
    border:1px solid #eee;
    background: #fff;
    margin:30px;
}
.orderMessage h1{
    font-size: 34px;
    line-height: 80px;
}
.orderMessage p{
    font-size: 24px;
    color:#8f8f8f;
    line-height: 40px;
}
/deep/ .van-card{
    height: 120px;
    border-bottom:1px solid #eee;
}
.van-card__title{
    line-height: 30px;
}
.van-card__thumb,.van-card__num{
	margin-right: 25px;
}
.cart{
	margin-top:200px;
	margin-left:150px;
	font-size: 20px;
	text-align: center;
	line-height: 50px;
}
</style>
