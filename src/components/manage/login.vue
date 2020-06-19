<template>
	<div class="login-wrap">
		<div class="box">
			<img class="img-style" src="../../assets/htdl.png" alt="">
			<div class="from">
				<van-form @submit="onSubmit">
					<van-field
							v-model="username"
							name="用户名"
							label="用户名"
							placeholder="用户名"
					></van-field>
					<van-field
							v-model="password"
							type="password"
							name="密码"
							label="密码"
							placeholder="密码"
					></van-field>
					<div class="btn-box">
						<van-button round block type="info"  style="color: #ffc21a;background-color: #000;" native-type="submit">
							登录
						</van-button>
					</div>
				</van-form>
			</div>

		</div>
		<div class="footer">
			<span>山西鲨创科技有限公司</span>
		</div>
	</div>
</template>

<script>
    import {checkLogin} from '@/api/custInfo'
    export default {
        name: "login",
		data(){
            return {
                username:"",
                password:"",
			}
		},
		methods:{
            onSubmit(){
                if(this.username == "" || this.password == ""){
                    this.$toast('用户名与密码不能为空');
                    return;
                }
                /*sessionStorage.setItem("userName",this.username);
                this.$router.push("carInfoList")
				return;*/
                let param = {
					login_name:this.username,
                    password:this.password
                }
                checkLogin(param).then( res => {
                    if(res.data.code == 1){
                    	if(res.data.su.right_id == "2"){
							sessionStorage.setItem("user_name",this.username);
							this.$router.push({
								name:"carInfoList",
								params: {
									user_id: res.data.su.id
								}
							})
						}else {
							this.$toast("权限不足");
						}
                    }
                })
			}
		}
    }
</script>

<style scoped>
	.login-wrap{
		width: 100%;
		height: 100%;
		background-color: #ffc21a;
		overflow: auto;
	}
	.box{
		margin: 90px 30px;
		position: relative;
		left: 0;
		top: 0;
	}
	.img-style{
		width: 690px;
	}
	.from{
		position: absolute;
		top:360px;
		left: 0;
		width: 100%;
		text-align: center;
	}
	.btn-box{
		padding: 38px;
		/*margin-top: 10px;*/
	}
	.footer{
		/*position: fixed;
		bottom: 10px;*/
		position: absolute;
		bottom: 15px;
		text-align: center;
		color: #c49719;
		width: 100%;
		font-size: 24px;
	}
</style>
