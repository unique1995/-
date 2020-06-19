<template>
	<div class="commitOrder">
        <van-nav-bar title="提交订单">
             <template #left>
               <van-icon name="arrow-left" color="#242424" size="20" @click="back"/>
            </template>
            <template #right>
                <van-icon name="orders-o" color="#242424" size="20"/>
            </template>
        </van-nav-bar>
      <div class="middle">
           <van-card
            num="2"
            price="2.00"
            class="menu"
            title="商品标题"
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        />
       <van-nav-bar  left-text="备注">
            <template #right>
                <van-icon name="arrow" size="20" color="#000"/>
            </template>
        </van-nav-bar>
      </div>

      <div class="bottom">
          <span>{{total}}</span>
          <van-button round type="info" size="small"  color="#ff5f3a">去支付</van-button>
      </div>
    </div>
</template>

<script>
    import zsimg from "@/assets/zs.jpg";
    import zhaopinimg from "@/assets/zhaopin.jpg";
    import {saveSCYzm,bindingQr,querySCUserByPhone,queryLicensePlate} from '@/api/custInfo'
    import messsage from '../pubComponent/messsage'
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    export default {
        name: "commitOrder",

        data() {
            return {
               total:"￥12"
            }
        },
		methods:{
        	back(){
				this.$router.go(-1);
			}
		}
}
</script>

<style scoped>
.menu{
    min-height: 100px;
    padding: 30px;
}
.remark{
    height: 100px;
    background: #eee;
}
.commitOrder{
    display: flex;
    flex-direction: column;
    height: 100%;
}
.bottom{
    height: 100px;
   align-items: center;
    display: flex;
    justify-content: space-between;
    padding:0 30px;
    background: #eee;
}
.bottom span{
    font-size: 34px;
    font-weight: 500;
}
.middle{
    flex:1;
}
.van-card__title{
	line-height: 30px;
}
/deep/ .van-nav-bar__text {
	 color: #000;
 }
</style>
