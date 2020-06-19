<template>
    <div class="pub">
		<div class="b-top">
			<img :src="imgSrc" height="100%" width="100%" @click="jumpCom" alt="" />
		</div>
		<div class="b-content">
			<div class="fw">
				车主服务
			</div>
			<div class="more-fw">
				<div class="more-item" @click="itemClick(3)">
					<img src="../../assets/cooperation.png" class="icon-style" alt="">
					<!--<van-icon name="manager" class="icon-style" />-->
					<div>广告招商</div>
				</div>
				<div class="more-item" @click="itemClick(1)">
					<img src="../../assets/phone.png" class="icon-style" alt="">
					<!--<van-icon name="phone" class="icon-style" />-->
					<div>更换手机</div>
				</div>
				<div class="more-item" @click="itemClick(2)">
					<img src="../../assets/Customer-service_03.png" class="icon-style" alt="">
					<!--<van-icon name="manager" class="icon-style" />-->
					<div>客服咨询</div>
				</div>
			</div>
		</div>
		<div class="b-content b-content1">
			<div class="fw">
				分类
			</div>
			<div class="more-fw2">
				<div class="more-item2" @click="itemClick()">
					<div>
						<img src="../../assets/car_14.png" class="icon-style" alt="">
						<div>汽车</div>
					</div>
				</div>
				<div class="more-item2" @click="itemClick()">
					<div>
						<img src="../../assets/home_14.png" class="icon-style" alt="">
						<div>房产</div>
					</div>
				</div>
				<div class="more-item2" @click="itemClick()">
					<div>
						<img src="../../assets/Medical_17.png" class="icon-style" alt="">
						<div>医疗</div>
					</div>
				</div>
				<div class="more-item2" @click="itemClick()">
					<div>
						<img src="../../assets/hotel_20.png" class="icon-style" alt="">
						<div>住宿</div>
					</div>
				</div>
				<div class="more-item2" @click="itemClick()">
					<div>
						<img src="../../assets/food_30.gif" class="icon-style" alt="">
						<div>美食</div>
					</div>
				</div>
				<div class="more-item2" @click="itemClick()">
					<div>
						<img src="../../assets/aircraft_32.png" class="icon-style" alt="">
						<div>出行</div>
					</div>
				</div>
				<div class="more-item2" @click="itemClick()">
					<div>
						<img src="../../assets/add_34.png" class="icon-style" alt="">

					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "sideB",
		data(){
        	return {
            	imgSrc:"https://www.sckj5.cn/carImg/bmbanner.jpg",
				oldPhone:"",
				text:"",
			}
		},
        components:{

		},
		methods:{
			/*dateFormat(fmt, date) {
				let ret;
				const opt = {
					"Y+": date.getFullYear().toString(),        // 年
					"m+": (date.getMonth() + 1).toString(),     // 月
					"d+": date.getDate().toString(),            // 日
					"H+": date.getHours().toString(),           // 时
					"M+": date.getMinutes().toString(),         // 分
					"S+": date.getSeconds().toString()          // 秒
					// 有其他格式化字符需求可以继续添加，必须转化成字符串
				};
				for (let k in opt) {
					ret = new RegExp("(" + k + ")").exec(fmt);
					if (ret) {
						fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
					};
				};
				return fmt;
			},*/
            itemClick(type){
			    if(type==1){
			        //更换手机号
                    this.$router.push("changePhone");
				}
			    if(type==2){
			        //联系客服
                    window.location.href = "tel:0351-7659930";
				}
			},
            valid() {
                if (!(/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(this.phone))) {
                    this.text = "请输入正确的手机号！";
                    this.$refs.message.isShowFlag = true;
                    this.oldPhone = "";
                    return false;
                }
            },
            jumpCom(){
                this.$router.push("companyProfile")
			}
		},
		mounted() {
			//this.toggleImg()
		}
	}
</script>

<style scoped>
	.pub{
		width: 100%;
		height: 100%;
	}
	.b-top{
		width: 100%;
		height: 300px;
	}
	.b-content{
		margin: 30px;
		/*height: 400px;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);*/
	}
	.fw{
		margin-bottom: 30px;
		font-size: 36px;
		font-weight: bold;
		color: #707070;
	}
	.more-fw{
		/*height: 370px;*/
		width: 690px;
		height: 200px;
		border-radius: 10px;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
		display: flex;
		align-items: center;
		justify-content: flex-start;
		flex-wrap: wrap;
	}
	.more-fw2{
		width: 686px;
		height: 350px;
		border: 1px solid #dcdcdc;
		border-radius: 10px;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
		display: flex;
		align-items: center;
		justify-content: flex-start;
		flex-wrap: wrap;
	}
	.more-item{
		width:174px;
		height:136px;
		flex:1;
		text-align: center;
		font-size: 30px;
		color: #707070;
		overflow: hidden;
		margin-top: 20px;
	}
	.more-item2{
		width:170px;
		height:175px;
		text-align: center;
		font-size: 30px;
		color: #707070;
		overflow: hidden;
		display: inline-flex;
		align-items: center;

		justify-content: center;
	}
	.more-item2:nth-child(2){
		border-left: 1px solid #dcdcdc;
		border-right: 1px solid #dcdcdc;
		border-bottom: 1px solid #dcdcdc;
	}
	.more-item2:nth-child(3){
		border-right: 1px solid #dcdcdc;
		border-bottom: 1px solid #dcdcdc;
	}
	.more-item2:nth-child(4){
		border-bottom: 1px solid #dcdcdc;
	}
	.more-item2:nth-child(1){
		border-bottom: 1px solid #dcdcdc;
	}
	.more-item2:nth-child(5){
		width: 172px;
		border-right: 1px solid #dcdcdc;
	}
	.more-item2:nth-child(6){
		width: 168px;
		border-right: 1px solid #dcdcdc;
	}
	.more-item2:nth-child(7){
		width: 170px;
		border-right: 1px solid #dcdcdc;
	}
	.sc-dialog{
		width: 100%;
		height: 100%;
		background-color:rgba(0,0,0,0.5);
		position: absolute;
		top:0;
		left:0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.icon-style{
		width: 56px;
		height: 56px;
	}
	/deep/ .van-icon{
		font-size: 90px;
	}
</style>
