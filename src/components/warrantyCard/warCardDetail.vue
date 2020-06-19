<template>
	<div class="manage-wrap">
		<div class="box1">
			<img class="img-style" src="../../assets/1.jpg" alt="">
		</div>
		<div class="content">
			<van-row class="row" >
				<van-col span="24" class="span">
					<span>手机号&nbsp;&nbsp;&nbsp;</span>{{detail.phone}}
				</van-col>
				<van-col span="24" class="span">
					<span>车牌号&nbsp;&nbsp;&nbsp;</span> {{detail.license_plate}}
				</van-col>
				<van-col span="24" class="span">
					<span>型号&nbsp;&nbsp;&nbsp;</span> {{detail.specification}}
				</van-col>
				<van-col span="24" class="span">
					<span>购买数量&nbsp;&nbsp;&nbsp;</span> {{detail.number}}
				</van-col>
				<van-col span="24" class="span">
					<span>注册日期&nbsp;&nbsp;&nbsp;</span> {{detail.create_time}}
				</van-col>
				<!--<van-col span="24" class="span">
					<span>保质期&nbsp;&nbsp;&nbsp;</span> {{detail.validity_period}}
				</van-col>-->
			</van-row>
		</div>
		<div>
			<img class="img-style img2" src="../../assets/2.jpg" alt="">
		</div>
	</div>
</template>

<script>
    import {saveSCYzm} from '@/api/custInfo'
    export default {
        name: "warCardDetail",
		data(){
            return {
				detail:{
					phone:"15203586666",
					license_plate:"晋A 5555",
					specification:"asd",
					create_time:"2020-05-15 18:45:16",
					validity_period:"2021-05-15 18:45:16",
					number:"2"
				}
			}
		},
		methods:{

		},
		mounted() {
			this.detail = this.$route.params.data.data;
			console.log(this.detail)
        }
    }
</script>

<style scoped>
	.manage-wrap{
		width: 100%;
		height: 100%;
		background-color: #e9e9e9;
		overflow: auto;
	}
	.box1{
		width: 100%;
		height:300px;
	}
	.img-style{
		width: 100%;
		height: 100%;
	}
	.content{
		top:-20px;
		border-radius: 10px;
		height: 450px;
		width: 690px;
		margin-left:30px;
	}
	.footer{
		width: 100%;
		text-align: center;
		color:#999;
		font-size: 24px;
	}
	.btn-box{
		margin-top: 35px;
	}
	.row{
		padding-top: 20px;
		padding-left: 50px;
	}
	.span{
		color: #4d4d4d;
		font-size: 30px;
		margin-bottom: 20px;
	}
	.span span{
		display: inline-block;
		width: 150px;
		color: #c1c1c1;
	}
	.img2{
		padding: 0px 30px;
		margin-top: 10px;
	}
</style>
