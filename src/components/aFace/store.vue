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
				<p><van-icon name="location-o" />{{address}}</p>
				<p><van-icon name="phone-o" />{{owner_phone}}</p>

			</div>
			<div>
				<h1>营业时间</h1>
				<p>{{business_hours}}</p>
			</div>
		</div>
	</div>


</template>

<script>
	import { queryCGRestaurantInformationById} from "@/api/custInfo";

	export default {
		name: "orderMenu",
		data() {
			return {
				title:"支付页",
				money:"￥90",
				address:"",
				owner_phone:"",
				business_hours:""
			};
		},
		methods: {

		},
		mounted() {
			let restaurant_id = sessionStorage.getItem("restaurant_id");
			let param = {
				id:restaurant_id,
			}
			queryCGRestaurantInformationById(param).then(res => {
				let message = res.data.data;
				this.address = message.address;
				this.business_hours = message.business_hours;
				this.owner_phone = message.owner_phone
			})
		}
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
		font-weight: 600;
		line-height: 50px;
		margin-bottom:10px;
	}
	.store p {
		font-size: 24px;
		color: #8f8f8f;
		line-height: 40px;

	}
</style>
