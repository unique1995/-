<template>
	<div class="pay">
		<div class="banner">
			<img src="../../assets/spxxbanner.png">
		</div>
		<div class="store">
			<div>
				<h1>商家公告</h1>
				<p>欢迎光临，很高兴为您服务</p>
			</div>
			<div>
				<h1>商家信息</h1>
				<p><van-icon name="location-o" />{{storeMessage}}</p>
				<p><van-icon name="phone-o" />{{tel}}</p>

			</div>
			<div>
				<h1>营业时间</h1>
				<p>午市：09:00-15:00;  夜市：15:00-00:00;</p>
			</div>
		</div>
	</div>


</template>

<script>

	export default {
		name: "orderMenu",
		data() {
			return {
				title:"支付页",
				money:"￥90",
				storeMessage:"小店区晋阳街体育路北美金棕榈往北100米",
				tel:"1234556789"
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
.banner img{
	width:100%;
}
	.store{
		height: 563px;
		background: #fff;
		margin: 30px 30px 0 30px;
		padding-left:34px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	.store h1{
		font-size: 34px;
		font-size: 600;
		line-height: 50px;
		margin-bottom:10px;
	}
	.store p {
		font-size: 24px;
		color: #8f8f8f;
		line-height: 40px;

	}
</style>
