<template>
	<div class="header">
        <!-- <img src="../../assets/ljxclogo.png" alt="" srcset="" class="logo"> -->
      <div class="logo">
          <img src="../../assets/ljxclogo.png" alt="" srcset="" >
      </div>
         <p>欢迎来到辣椒小厨</p>   
       
        <div class="order">
            <van-form  label-width="314px">
                <div class="name">
                    <van-icon name="location-o" size="30"/>
                    <van-field
                        v-model="address"
                        name="用户名"
                        placeholder="请输入地址"
                        
                    />
                </div>
                <div class="name">
                    <van-icon name="phone-o" size="30"/>
                    <van-field
                        v-model="phone"     
                        placeholder="请输入手机号"
                        @blur="valid"
                    />
                </div>
                <div style="margin: 16px;">
                    <van-button round block type="info" native-type="submit" @click="handelMenu">
                        开始点餐
                    </van-button>
                </div>
            </van-form>
        </div> 
        <h1>山西鲨创科技提供技术支持</h1>
	</div>
</template>

<script>
    import zsimg from "@/assets/zs.jpg";
    import zhaopinimg from "@/assets/zhaopin.jpg";
    import {saveSCYzm,bindingQr,querySCUserByPhone,queryLicensePlate} from '@/api/custInfo'
    import messsage from '../pubComponent/messsage'
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    export default {
        name: "orderLogin",
		props:["qr_id","bannerList"],
        data() {
            return {
                address:"",
                phone:"",
                text: "",
            }
        },
        methods: {
                valid() {
                if (!(/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(this.phone))) {
                    /*this.text = "请输入正确的手机号！"
                    this.show8 = true;*/
                    this.text = "请输入正确的手机号！"
                 
                    this.phone = "";
                    return false;
                }
            },
           handelMenu(){
               this.$router.push("/orderMenu");
           }
        }
}
</script>

<style scoped>
.header{
	background: url("../../assets/diancanbg.jpg");
    background-size: cover;
	height: 100%;
    /* display:flex;
    justify-content:center;
    align-items:center; */
    
}
.order{
	width:690px;
	height: 500px;
	background: #fff;
	margin:0 auto;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
    padding-top:90px;

}

.name{
	display: flex;
	justify-content: space-between;
	align-items: center;
    padding:0px 70px;
}
.yanz{
     color:#f5c733;
      background-color: #292824;
      font-size: 10px;
}
/deep/ .van-button--info{
	background-color: #ff5f3a;
	color:#fffefe;
	border-radius: 50px;
	border:0;
    margin-top:60px;
 }
.logo{
    height: 286px;
    width:485px;
    padding-top: 63px;
    margin:0 auto;
   
}
.logo img{
    width:100%;
}
p{
    color:#fff;
    font-size: 46px;
    margin-top: 35px;
    margin-bottom:40px;
 text-align: center;
}
h1{
    color:#fff;
    font-size: 24px;
 margin-bottom: 24px;
 text-align: center;
 margin-top:195px;
}
</style>
