<template>

    <div class="car-header">
        <div class="car">
          <div class="grid">
            <div
                :class="index === value ? 'grid-box back' : 'grid-box' "
                v-for="(item,index) in list"
                :key="item.id"
                @click="clickDetail(index)"
            >
                <img :src="item.url" alt />
                <span>{{item.name}}</span>
            </div>
        </div>
      </div>
    </div>

	
</template>

<script>
    export default {
        name: "carOwnerServe",
		data(){
            return {
                value:0,
                list: [
                        {
                        url: require("../../assets/ghxx_03.png"),//加载本地图片的方式
                        name: "更改信息"
                        },
                        {
                        url: require("../../assets/vip_05.png"),
                        name: "VIP查询"
                        },
                        {
                        url: require("../../assets/zixin_07.png"),
                        name: "客服咨询"
                        },
                    ],
			}
		},
		methods: {
             clickDetail(index) {
                this.value = index;
                if(index==0){
                  //更换手机号
                  this.$router.push("changePhone");
                }
                if(index==1){
                  //vip
                  this.$router.push("carOwnerLogin");
                }
                if(index==2){
                      //联系客服
                      window.location.href = "tel:0351-7659930";
                }

            },
        }
    }
</script>

<style scoped>
.car-header{
    background: url(../../assets/czfwbg.jpg) ;
    width:100%;
    height:100%;
    background-size: 100% 100%;
    position:relative;
}
.car {
    position: absolute;;
    height: 260px;
    left: 50%;
	  top: 50%;
	  transform: translate(-50%,-50%);
    /* border:1px solid yellow; */
    width:calc(100% - 60px); 
    border-radius:6px;
    background:#fff;
    opacity: 0.9;
    }
.grid {
  padding: 32px;
  display: flex;
  justify-content: space-around;
}
.grid-box img {
  width: 60px;
  height: 60px;
  /* margin-bottom: 20px; */
}
.back {
  background: #eeeeee;
}
.grid-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 5px;
  font-size: 28px;
  font-weight: 600;
  /* margin-bottom: 20px; */
}

</style>