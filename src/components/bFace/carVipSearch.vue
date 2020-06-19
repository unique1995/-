<template>
    <div class="carvip"> 
        <div class="carvip-card">
            <img src="../../assets/vipcard.png" alt="">
            <span>(山西博远汽车美容)</span>
            <div class="top-up">充值:<span>￥{{topup}}</span></div>  
            <div class="top-up">余额:<span>￥{{balance}}</span></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "carVipSearch",
		data(){
            return {
                show: true,
                bool:false,
                username: '',
                password: '',
                topup:1000,
                balance:""
			}
        },
        created(){
this.getParams()
},
		methods: {
             getParams () {
                var routerParams = this.$route.params.user_id.balance
                this.balance = routerParams
}
        },
        mounted () {
            
        }
    }
</script>
    
<style scoped>
.carvip{
    background: url(../../assets/vipbg.jpg) ;
    width:100%;
    height:100%;
    background-size: 100% 100%;
    /* position:relative; */
}
.carvip-card{
    height: 430px;
    padding-top:96px;
    margin: 0 30px;
    position:relative;
    }
.carvip-card :nth-child(2){
    position:absolute;
    top:226px;
    left:318px;
    font-size: 30px;
    color:#4f2d19;
    font-family: "PingFang-SC-Bold";
}
.carvip-card :nth-child(3){
    position:absolute;
    top:312px;
    left:272px;
    font-size: 28px;
}
.carvip-card :nth-child(4){
    position:absolute;
    top:382px;
    left:272px;
    font-size: 28px;
}
.carvip-card img {
    width:100%;
}
.top-up span{
  font-size:36px ;
 font-weight: 700;
}
</style>