<template>
	<div class="orderdetail">
       
            <van-nav-bar :title="title"   class="title">
                <template #left>
                    <van-icon name="arrow-left"  color="#242424" size="20" />
                </template>
                <template #right>
                   <van-icon name="orders-o"  color="#242424" size="20"/>
                </template>
            </van-nav-bar>
            <div class="orderMiddle">
                <div class="nopay">
                    <h1>待付款</h1>
                    <span>付款后可享受美味</span>
                </div>
                <div class="middle">
                    <van-card
                        num="2"
                        price="2.00"
                     
                        title="商品标题"
                        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                        />
                </div>
                <div class="orderMessage">
                    <h1>订单信息</h1>
                    <p>订单编号</p>
                    <p>下单时间</p>
                    <p>手机号</p>
                    <p>地址</p>
                </div>
            </div>
           
            <div class="bottom">
                <van-button round type="info" color="#f8856b" size="small">取消订单</van-button>
                <van-button round type="info"  color="#ff5f3a" size="small">立即支付</van-button>
            </div>
       
    </div>
</template>

<script>

	export default {
		name: "orderdetail",
		data() {
			return {
				title:"订单详情"
			};
		},
		methods: {

		},

	}
</script>

<style scoped>

.title{
    height: 100px;
    padding:0;
}
.nopay{
    height: 100px;
    margin: 30px;
    border:1px solid #eee;
    padding-left:15px;
    background: #ffffff;
}
.nopay h1{
    font-size: 34px;
    line-height: 50px;
   
}
.middle{
    min-height: 100px;
    margin: 0 30px;
}
.orderdetail{
    display: flex;
    flex-direction: column;
    height: 100%;
    /* padding:0 30px; */
    background: #e9e9e9;
}
.orderMiddle{
    flex: 1;
}
.bottom{
    height: 120px;
    /* margin: 0 30px; */
    padding:0 30px;
    display: flex;
    justify-content: space-between;
    background: #fff;
   align-items: center;
}
.orderMessage{
    height: 300px;
    padding-left:15px;
    border:1px solid #eee;
    background: #fff;
    margin:30px;
}
.orderMessage h1{
    font-size: 34px;
    line-height: 80px;
}
.orderMessage p{
    font-size: 24px;
    color:#8f8f8f;
    line-height: 40px;
}
/deep/ .van-card{
    height: 120px;
    border-bottom:1px solid #eee;
}
.van-card__title{
    line-height: 30px;
    
}
</style>
