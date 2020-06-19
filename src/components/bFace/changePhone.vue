<template>
	<div style="width: 100%;height: 100%;">
		<!-- <van-nav-bar
				title="更换手机号"
				left-text="返回"
				left-arrow
				@click-left="onClickLeft"
				@click-right="onClickRight"
		></van-nav-bar> -->
		<div v-show="lastFlag">
			<van-field
				v-model="oldPlate"
				name="车牌号"
				label="车牌号"
				placeholder="输入车牌号"
				:rules="[{ validator:validatorPlate,required: true, message: '请填写正确的车牌号，区分大小写' }]"
			></van-field>
			<van-field
					v-model="oldPhone"
					name="validatorPhone"
					label="原手机号"
					type="digit"
					placeholder="输入原手机号"
					:rules="[{ validator:validatorPhone,required: true, message: '请输入正确的手机号' }]"
			></van-field>
			<div style="margin: 16px;">
				<van-button round block type="info" native-type="submit" @click="onvalid">
					下一步
				</van-button>
			</div>
		</div>
		<div class="sc-sec" v-show="!lastFlag">
			<van-field
					v-model="newPlate"
					name="车牌号"
					label="车牌号"
					placeholder="输入车牌号"
					:rules="[{ validator:validatorPlate,required: true, message: '请填写正确的车牌号，区分大小写' }]"
			></van-field>
			<van-field
				v-model="newPhone"
				center
				clearable
				type="digit"
				label="新手机号"
				name="newPhone"
				placeholder="请输入新手机号"
				:rules="[{ validator:validatorPhone,required: true, message: '请输入正确的手机号' }]"
			>
				<van-button slot="button" size="small" type="primary" native-type="text" @click="sendSms" :text="btnText" :disabled="disabled" ></van-button>
			</van-field>
			<van-field
				v-model="sms"
				center
				clearable
				type="digit"
				label="短信验证码"
				placeholder="请输入短信验证码"
				:rules="[{ required: true, message: '请填写验证码' }]"
			>
			</van-field>
			<div style="margin: 16px;">
				<van-button round block type="info" native-type="submit" @click="onSubmit">
					提交
				</van-button>
			</div>
		</div>
	</div>
</template>

<script>
    import {saveSCYzm,checkLicensePlate,updateBindingQr} from '@/api/custInfo'
    export default {
        name: "changePhone",
		data(){
            return {
                oldPhone:"",
				oldPlate:"",
				newPhone:"",
				newPlate:"",
				sms:"",
                lastFlag:true,
                disabled:false,
				btnText:"发送验证码",
				qr_id:"",
				car_id:""
			}
		},
		methods:{
            validatorPhone(val) {
                return /^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(val);
            },
            validatorPlate(val) {
                return /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[a-zA-Z](([DF]((?![IO])[a-zA-Z0-9](?![IO]))[0-9]{4})|([0-9]{5}[DF]))|[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1})$/.test(val);
            },
            onClickLeft(){
                this.$router.push('carOwnerServe')
			},
            onClickRight(){},
            onvalid(values){
                if(this.oldPhone === "" || !this.validatorPhone(this.oldPhone)){
                    this.$toast('请输入正确的手机号');
                    return;
                }
                if(this.oldPlate === "" || !this.validatorPlate(this.oldPlate)){
                    this.$toast('请填写正确的车牌号，区分大小写');
                    return;
                }
                let param = {
                    phone: this.oldPhone,
                    license_plate:this.oldPlate,
                }
                checkLicensePlate(param).then(res => {
                    if (res.data.code == 1) {
                        this.lastFlag = false;
                        this.qr_id = res.data.sco.qr_code_id;
                        this.car_id = res.data.sco.id;
                    }else {
                        this.$toast(res.data.msg);
                    }
                })
			},
            sendSms(){
                console.log(111)
                if(!this.validatorPhone(this.newPhone)){
                    this.$toast('请输入正确的手机号');
                    return;
				}
				console.log(222)
                let param = {
                    phone: this.newPhone
                }
				let time = 60;
				this.btnText = "60 s";
				this.disabled = true;
                saveSCYzm(param).then(res => {
                    if (res.data.code == 1) {
                        this.$toast('发送成功');
                        let inter = setInterval( ()=> {
                            if(time > 1){
                                time--;
                                this.btnText = time + " s";
                            }else {
                                this.btnText = "发送验证码";
                                this.disabled = false;
                                clearInterval(inter)
                            }
                        },1000);
                    }else{
                        this.$toast(res.data.msg);
						this.btnText = "发送验证码";
						this.disabled = false;
                    }
                })
			},
            onSubmit(values) {
                console.log('submit');
                if(this.newPhone === "" || !this.validatorPhone(this.newPhone)){
                    this.$toast('请输入正确的手机号');
                    return;
				}
				if(this.newPhone === this.oldPhone){
					this.$toast('新手机号不能与原手机号相同');
					return;
				}
                if(this.sms === "" ){
                    this.$toast('请填写验证码');
                    return;
                }
                if(this.newPlate === "" || !this.validatorPlate(this.newPlate)){
                    this.$toast('请填写正确的车牌号，区分大小写');
                    return;
                }
                let param = {
                    phone: this.newPhone,
                    license_plate:this.newPlate,
					yzm:this.sms,
					qr_code_id:this.qr_id,
					id:this.car_id
                }
                updateBindingQr(param).then(res => {
                    if (res.data.code == 1) {
                        //this.$toast('修改成功');
						//this.$router.push("bIndex");
						this.$dialog.alert({
							message: '修改成功'
						}).then(() => {
							this.$router.push("bIndex");
						});
                    }else {
						this.$toast(res.data.msg);
                    }
                })
            },

		}
    }
</script>

<style scoped>

</style>
