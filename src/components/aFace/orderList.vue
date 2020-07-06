<template>
	<div>
		<van-row type="flex" justify="space-between" align="center" class="title">
			<van-col span="4"><van-icon name="arrow-left" size="20px" @click="handelBack"/></van-col>
			<van-col span="16">{{title}}</van-col>
			<van-col span="4"><van-icon name="phone-o" size="20px"/></van-col>
		</van-row>
		<div class="orderList" v-if="show">
			<div class="store">
				<span>美团餐厅</span>
				<span>待支付</span>
			</div>
			<div class="meal" v-for="(item,index) in arr">
				<span>菜品数量：共{{item.num}}份菜品</span>
				<span>￥{{item.price}}</span>
			</div>
			<p>下单时间: {{order_addtime}}</p>
		</div>
		<h2 class="middle" v-else>暂时还没有订单哦~</h2>

	</div>


</template>

<script>

	export default {
		name: "orderList",
		data() {
			return {
				tel:15534051204,
				activeKey: 0,
				store:"商家",
				span:"订单已经完成",
				title:"订单列表",
				list:[],
				arr:[],
				show:true,
				order_addtime:""
			};
		},
		methods: {
			handelBack(){
				this.$router.go(-1);
			}
		},
		created() {
			this.$nextTick(function(){  //不使用this.$nextTick()方法会报错
				this.order_addtime=this.$route.query.order_addtime;
			});
			this.list =JSON.parse(sessionStorage.getItem("list"));
			this.list && this.list.map((item)=>{
				if(item.num !== 0){
					this.arr.push(item)
				}
				return this.arr
			})
			if(this.list == null){
				this.show = false
			}
			console.log(this.list)
		},
		mounted() {


		}
	}
</script>

<style scoped>
.title{
	padding: 0 20px;
	height: 100px;
	font-size: 30px;

}
/deep/ .van-col {
	text-align: center;
}
.orderList{
	/*height: 270px;*/
	padding:20px 30px;
	background: #eee;
}
	.store{
		line-height: 107px;
		display: flex;
		justify-content: space-between;
		border-bottom:3px solid #eee;
		background: #fff;
		padding:0 20px;
	}
	.store :nth-child(1){
		font-family: PingFang-SC-Bold;
		font-size: 30px;
		color: #333333;
		font-weight: 700;
	}
.store :nth-child(2){

	font-size: 24px;
	color: #333333;
	font-weight: 700;
}
	.meal{
		display: flex;
		justify-content: space-between;
		background: #fff;
		line-height: 80px;
		padding:0 20px;
	}
	.meal :nth-child(1){
		font-size: 24px;
		color: #8f8f8f;
	}
	.meal :nth-child(2){
		font-size: 24px;
		 color: #333333;
	}
	p{
		background: #fff;
		font-size: 24px;
		line-height: 96px;
		padding:0 20px;
		color: #8f8f8f;
	}
	.middle{
		font-size: 20px;
		text-align: center;
		line-height: 50px;
	}

</style>
