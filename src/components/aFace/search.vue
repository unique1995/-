<template>
<div class="search">
    <van-field
        v-model="sms"
        center
        clearable
        placeholder="请输入菜名"
        >
        <template #button>
           <van-button color="#ff5f3a" plain style="border:0">取消</van-button>
        </template>
    </van-field>
    <div class="menu">
       <van-card
            price="2.00"
            title="商品标题"
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
            >
            <template #footer>
                <van-button size="mini"  class="but" color="#ff5f3a" v-show="bool" @click="add(false)"><span style="font-size:20px" >-</span></van-button>
					<span class="num">{{num}}</span>
					<van-button size="mini" text="+" class="but" color="#ff5f3a"  @click="add(true)"><span style="font-size:20px">+</span></van-button>
            </template>
        </van-card>


    </div>
</div>


</template>

<script>

	export default {
		name: "search",
		data() {
			return {
                sms:'',
                num:0,
				bool:ralse
			};
		},
		methods: {
             add(bool) {
				if (bool) {
					this.num ++;
				} else {
					this.num--;
					this.num = this.num <= 1 ? 1 : this.num;
				}if(this.num>0){
					this.bool=true
				}
			},
		},

	}
</script>

<style scoped>
.van-cell{
    padding:10px 20px;
}
.search{
    display: flex;
    flex-direction: column;
    height: 100%;
    padding:0 30px;
}
.menu{
    flex:1;
}
.but{
	height: 50px;
	width:50px;
	border-radius: 50%;
	font-size: 20px;
}
.van-card__title {
    line-height: 34px;
}
</style>
