<template>
	<div class="pay">
		<van-row type="flex" justify="space-around" class="row" size="28px">
			<van-col span="6"><van-icon name="arrow-left" /></van-col>
			<van-col span="6">{{title}}</van-col>
			<van-col span="6"></van-col>
		</van-row>
		<div class="wallet">
			<p>订单小计<span>{{money}}</span></p>
		</div>
		<div>
			<van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
		</div>
	</div>


</template>

<script>

	export default {
		name: "orderMenu",
		data() {
			return {
				title:"支付页",
				money:"￥90"
			};
		},
		methods: {

		},

	}
</script>

<style scoped>
	.pay{
		background: #eee;
		height: 100%;
	}
.row{
	line-height: 100px;
	padding:0 30px;
	font-size: 28px;
	font-weight: 600;
	background: #fff;
}
.wallet{
	 line-height: 450px;
	margin-top:100px;
	background: url("../../assets/wallet.png") no-repeat;
	background-size: 100%;
	text-align: center;
	color: #fff;
 }
.wallet img{
	width:100%;
}
	.wallet p{
		font-size: 28px;
	}
	.wallet p span{
		font-size: 52px;
	}
</style>
