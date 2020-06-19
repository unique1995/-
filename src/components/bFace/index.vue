<template>
	<div class="head">
		<van-row class="title">
			<van-col span="8">
				<van-icon name="wap-home-o" size="26"/>
				{{name}}
			</van-col>
			<van-col span="4" offset="12">
				<van-icon name="search" size="26"/>
				<van-icon name="orders-o" size="26"/>
			</van-col>
		</van-row>
	</div>
</template>

<script>
	import zsimg from "@/assets/zs.jpg";
	import zhaopinimg from "@/assets/zhaopin.jpg";
	import { sendMessage } from "@/api/custInfo";
	import messsage from "../pubComponent/messsage";
	import { swiper, swiperSlide } from "vue-awesome-swiper";
	export default {
		name: "moveCar",
		props: ["phone", "sms", "plate", "qr_id", "bannerList"],
		components: {
			messsage,
			swiper,
			swiperSlide
		},
		data() {
			return {
				name:"634675468"
			};
		},
		methods: {


		},

	};
</script>

<style scoped>
	.title{
		display: flex;

	margin-left:30px;
		margin-right: 30px;
		align-items: center;/*在交叉轴上中心点的对齐*/
		height: 100px;

	}
</style>
