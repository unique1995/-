<template>
	<div class="manage-wrap">
		<div class="box1">
			<img class="img-style" src="../../assets/luntai.jpg" alt="">
		</div>
		<div class="content">
			<van-form >
				<!--<van-field
						v-model="name"
						name="姓名"
						label="姓名"
						placeholder="购买人姓名"
				></van-field>-->
				<!--<van-field
						readonly
						clickable
						name="picker"
						:value="pinpai"
						label="轮胎品牌"
						placeholder="点击选择轮胎品牌"
						@click="showPicker1 = true"
				></van-field>
				<van-popup v-model="showPicker1" position="bottom">
					<van-picker
							show-toolbar
							:columns="columns"
							@confirm="onConfirm1"
							@cancel="showPicker1 = false"
					></van-picker>
				</van-popup>-->
				<van-field
						name="轮胎型号"
						v-model="xinhao"
						label="轮胎型号"
						placeholder="请输入型号"
				></van-field>
				<van-field
						name="车牌号"
						v-model="license_plate"
						label="车牌号"
						@blur="validCar"
						placeholder="请输入车牌号"
				></van-field>
				<!--<van-popup v-model="showPicker2" position="bottom">
					<van-picker
							show-toolbar
							:columns="columns2"
							@confirm="onConfirm2"
							@cancel="showPicker2 = false"
					></van-picker>
				</van-popup>-->
				<van-field
					name="购买数量"
					v-model="stepper"
					label="购买数量"
					type="number"
					placeholder="请输入购买数量"
				></van-field>
				<van-field
						v-model="phone"
						type="tel"
						label="手机号"
						@blur="validPhone"
						placeholder="请输入手机号"
				></van-field>
				<van-field
						v-model="sms"
						center
						clearable
						label="短信验证码"
						placeholder="请输入短信验证码"
				>
					<template #button>
						<van-button size="small" type="info" @click="sendSms">{{btntext}}</van-button>
					</template>
				</van-field>
				<div class="btn-box">
					<van-button  block type="info"  @click="onSubmit">
						立即绑定
					</van-button>
				</div>
			</van-form>
		</div>
		<div class="footer">
			<p>山西鲨创科技提供技术支持</p>
		</div>
	</div>
</template>

<script>
    import {saveSCTyreWarranty,saveSCZBYzm,saveSCYzm} from '@/api/custInfo'
    export default {
        name: "bindingTire",
		data(){
            return {
                name:"",
                pinpai:"",
				xinhao:"",
				showPicker1:false,
                showPicker2:false,
                sms:"",
                phone:"",
                license_plate:"",
                columns:["品牌一","品牌二",],
                columns2:["品牌一","品牌二",],
				disabled:false,
                btntext:"发送验证码",
				stepper:""
			}
		},
		methods:{
            onSubmit(){
                let param = {
                    yzm:this.sms,
                    phone:this.phone,
                    specification:this.xinhao,
                    license_plate:this.license_plate,
					number:this.stepper
                }
                saveSCTyreWarranty(param).then( res => {
                    if(res.data.code == 1){
						this.$toast("提交成功")
						this.$router.push({
							name:"warCardDetail",
							params: {
								data: res.data
							}
						})
                    }
                })
			},
            onConfirm1(value,index){
				this.showPicker1 = false;
				this.pinpai = value;
			},
            onConfirm2(value,index){
                this.showPicker2 = false;
                this.xinhao = value;
            },
            sendSms(){
				if(this.phone == ""){
                    this.$toast("请输入手机号")
					return;
				}
                let param = {
                    phone: this.phone
                }
				saveSCZBYzm(param).then(res => {
                    if (res.data.code == 1) {
                        this.$toast("发送成功")
                        let time = 60;
                        this.disabled = true;
                        this.btntext = "60 s"
                        let inter = setInterval( ()=> {
                            if(time > 1){
                                time--;
                                this.btntext = time + " s";
                            }else {
                                this.btntext = "获取验证码";
                                this.disabled = false;
                                clearInterval(inter)
                            }
                        },1000);
                    }else{
                        this.$toast("发送失败")
                    }
                })
			},
			validCar(){
				let value = this.license_plate;
				if (!(/^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[a-zA-Z](([DF]((?![IO])[a-zA-Z0-9](?![IO]))[0-9]{4})|([0-9]{5}[DF]))|[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1})$/.test(value))) {
					this.$toast("请输入正确的车牌号,区分大小写！")
					this.license_plate = "";
					return false;
				}
			},
			validPhone() {
				if (!(/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(this.phone))) {
					this.$toast("请输入正确的手机号")
					this.phone = "";
					return false;
				}
			},
		},
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
		top:-30px;
		border-radius: 10px;
		height: 740px;
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
</style>
