<template>
<div class="box">
	<div class="top">
		<div class="top_1">
			<van-row type="flex" justify="space-between">
						<van-col span="12"  style="display: flex;align-items: center" class="col">
							<img src="../../assets/rest.png" alt />
							<span class="tel">{{tel}}</span>
						</van-col>
						<van-col span="12" style="display: flex;justify-content: flex-end" class="col">
							<img src="../../assets/list.png" alt  style="margin-right: 10px;" @click="handellist"/>
							<img src="../../assets/search.png" alt @click="search"/>
						</van-col>
			</van-row>
		</div>
		<div class="top_img">
			<img src="../../assets/lajia.png" @click="handelstore">
		</div>
	</div>
	<div class="middle">
		<div class="left" ref="menuWrapper">
			<van-sidebar v-model="activeKey" @change="onChange" >
				<van-sidebar-item :title=item.name v-for="(item,index) in arrList"  />
			</van-sidebar>
		</div>
		<div class="right" ref="foodsWrapper">
				<p>精品草才</p>
				<van-card
					v-for="(item,index) in list"
					:price="item.price"
					:title="item.title"
					:thumb="item.thumb"
					:key="index"
				>
					<template #footer>
						<van-stepper v-model="item.num" theme="round"  @plus="add(item)" @minus="del(item)" min="0"/>
					</template>
				</van-card>
		</div>
<!--		<div class="right" ref="foodsWrapper" v-for="(item,index) in list" :key="index">-->
<!--			<p>精品草才</p>-->
<!--			<van-card-->
<!--				v-for="(ite,indx) in item"-->
<!--				:price="ite.price"-->
<!--				:title="ite.title"-->
<!--				:thumb="ite.thumb"-->
<!--			>-->
<!--				<template #footer>-->
<!--					<van-stepper v-model="ite.num" theme="round"  @plus="add(ite)" @minus="del(ite)" min="0"/>-->
<!--				</template>-->
<!--			</van-card>-->
<!--		</div>-->
	</div>
	<van-submit-bar :price=allPrice button-text="提交订单" class="bottom" text-align="center" @submit="handelMenu"/>
</div>

</template>

<script>

	export default {
        name: "orderMenu",
		data() {
			return {
				tel:15534051204,
				num:0,
				badge:0,
				activeKey: 0,
				bool:false,
				badge:"",
				show:false,
				meal:"精品凉菜",
				items: [
					{ text: '浙江', },
					{ text: '江苏', },
				],
				arrList:[
					{
						name:"精品凉菜",
						id:1
					},
					{
						name:"忽悠面",
						id:2
					},
					{
						name:"葱香拌面",
						id:3
					},{
						name:"绿豆芽",
						id:4
					}
				],
				list:
					[
						{
							p:"精品凉菜",
							title:"商品1",
							thumb:"https://img.yzcdn.cn/vant/ipad.jpeg",
							price:"1",
							num:0,
							bool:true
						},

						{
							p:"特色炒菜",
							title:"商品1",
							thumb:"https://img.yzcdn.cn/vant/ipad.jpeg",
							price:"1",
							num:0,
							bool:true
						},
					],
				// list:[[
				// 	{
				// 		p:"精品凉菜",
				// 		title:"商品1",
				// 		thumb:"https://img.yzcdn.cn/vant/ipad.jpeg",
				// 		price:"1",
				// 		num:0,
				// 		bool:true
				// 	},
				// ],
				// 	[
				// 		{
				// 			p:"精品凉菜",
				// 			title:"商品1",
				// 			thumb:"https://img.yzcdn.cn/vant/ipad.jpeg",
				// 			price:"1",
				// 			num:0,
				// 			bool:true
				// 		},
				// 	]
				// ],

			};
		},
		methods: {
			onChange(index) {
				console.log(index)
			},
			search(){
				this.$router.push("/search")
			},
			handellist(){
					this.$router.push("/orderList")
			},
			 add(item) {
				 item.num++;
			},
			del(item){
				if(item.num === 0){
					return
				}
				item.num--;
			},
			handelstore(){
				this.$router.push("/store")
			},
			handelMenu(){
				this.$router.push("/commitOrder")
			}
		},
		mounted() {

		},
		computed:{
			allPrice: {
				get() {
					let allPrice = 0;
					for (let item of this.list) {
						allPrice += item.num * item.price;
					}
					return allPrice*100
				}
			}
		},
	}
</script>

<style scoped>
.box{
	height: 100%;
	display: flex;
	flex-direction: column;
}
.top{
	height: 300px;
}
.middle{
	flex:1;
	display: flex;
	height: calc(100% - 300px);
}
.middle .left{
	flex :0 0 25%;
	height: 100%;
	width:150px;
	overflow: auto;
}
.top_img{
	height: 200px;
	background: #000;
	margin-top:100px;
	line-height: 100px;
}
.top_img img{
	width:100%;
}
.top_1{
	height: 100px;
	overflow: hidden;
	padding:25px 30px 0 30px;
	position: fixed;
	top: 0;
	width: 100%;
	background: #fff;
	z-index:999;
}
.middle .right{
	  flex :0 0 75%;
	  height: 100%;
	  overflow: auto;
	  padding-bottom: 100px;
}
.right p{
	height: 80px;
	line-height: 80px;
	color: #8f8f8f;
	font-size: 24px;
	padding-left:32px;
}
.col img{
		 width:15%;
	 }
.van-sidebar{
	width:150px;
}
.van-button{
	background: #ff5f3a;
}
.van-card{
	padding:20px;
	margin-top:0;
	color: #242424;
}
.van-sidebar-item{
	height: 80px;
	line-height: 50px;
	font-size: 24px;
	color: #8f8f8f;
}
.van-card__title{
	font-size: 34px;
	line-height: 34px;
}
.but{
	height: 50px;
	width:50px;
	border-radius: 50%;
	font-size: 20px;
}
.num{
	font-size: 36px;
}
.bottom{
	height: 100px;
	background: #2a2726;
}
.van-submit-bar__text span {
    color: #fff;
}
	/deep/ .van-info{
		width:25px;
		height: 25px;
		line-height: 25px;
	}
</style>
