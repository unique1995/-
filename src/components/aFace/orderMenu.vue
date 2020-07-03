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
					v-for="(item,index) in arr"
					:price="item.price"
					:title="item.food_name"
					:thumb="item.img_src"
					:key="index"
					thumb-mode="widthFix"
				>
					<template #footer>
						<van-stepper v-model="item.num" theme="round"  @plus="add(item)" @minus="del(item)" min="0"/>
					</template>
				</van-card>
		</div>
	</div>
	<van-submit-bar :price=allPrice*100 button-text="提交订单" class="bottom" text-align="center"  @submit="handelMenu"/>
	<van-dialog
		        v-model="showMenu" show-cancel-button
				width="260"
				cancel-button-text="取消"
				confirm-button-text="确认"
				@confirm="changeCard"
			>
		<van-form  label-width="314px">
			<div class="name">
				<van-icon name="user-o" size="25"/>
				<van-field
					v-model="name"
					placeholder="请输入姓名"
				/>
			</div>
			<div class="name">
				<van-icon name="phone-o" size="25"/>
				<van-field
					v-model="phone"
					placeholder="请输入手机号"
					@blur="valid"
				/>
			</div>
			<div class="name">
				<van-icon name="location-o" size="25"/>
				<van-field
					v-model="address"
					placeholder="请输入地址"
				/>
			</div>
			<div class="name">
				<span style="width:50px;font-size:14px">备注</span>
				<van-field
					v-model="remark"
					placeholder="请输入备注"
				/>
			</div>
		</van-form>
	</van-dialog>
</div>

</template>

<script>
	import { queryCGMenuByPhone,saveCGUser} from "@/api/custInfo";
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
				address:"",
				name:"",
				phone:"",
				txt:"",
				remark:"",
				showMenu:false,
				show:false,
				meal:"精品凉菜",
				arr:[],
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
						// {
						// 	p:"精品凉菜",
						// 	title:"商品1",
						// 	thumb:"https://img.yzcdn.cn/vant/ipad.jpeg",
						// 	price:"1",
						// 	num:0,
						// 	bool:true
						// },
						//
						// {
						// 	p:"特色炒菜",
						// 	title:"商品1",
						// 	thumb:"https://img.yzcdn.cn/vant/ipad.jpeg",
						// 	price:"1",
						// 	num:0,
						// 	bool:true
						// },
					],
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
				// this.$router.push("/commitOrder")
				this.showMenu= true;
			},
			queryMenu(){
				// let restaurant_id = sessionStorage.getItem("restaurant_id");
				let param = {
					food_name:"",
					food_type:"",
					restaurant_id:"SCNC2006240947147163090249"
				}
				queryCGMenuByPhone(param).then( res=>{
					if(res.data.code == 1){
						this.list = res.data.data;
						this.arr = this.list.map((item)=>{
							item.img_src="/static/menuImg/"+item.img_src
							return item;
						})
						console.log(this.list)
					}
					// console.log(res)
				})
			},
			valid() {
				if (!(/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(this.phone))) {
					/*this.text = "请输入正确的手机号！"
                    this.show8 = true;*/
					this.text = "请输入正确的手机号！"

					this.phone = "";
					return false;
				}
			},
			changeCard(){
				let lise = []
				lise = this.arr.map((item) => {
					let obj = {}
					obj.goods_id = item.id;
					obj.goods_num = item.num;
					return obj
				})
				console.log(lise)
				let param = {
					phone: this.phone,
					name: this.name,
					address: this.address,
					order_sum:this.allPrice,
					remark:this.remark,
					menuList:lise
				}
				saveCGUser(param).then(res => {
					console.log(res)
				})
				// this.$router.push({name:'orderdetail',query:{list:this.arr,phone:this.phone,address:this.address}})
				// console.log(this.arr)
			}
		},
		mounted() {
			this.queryMenu()
		},
		computed:{
			allPrice() {
					let allPrice = 0;
					for (let item of this.list) {
						allPrice += item.num * item.price;
					}
					return allPrice
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
	width:100%;
}
.van-button{
	background: #ff5f3a;
}
.van-card{
	padding:8px;
	margin-top:0;
	color: #242424;
}
.van-sidebar-item{
	height: 80px;
	line-height: 50px;
	font-size: 26px;
	color: #8f8f8f;
}
.van-card__title{
	font-size: 28px;
	line-height: 34px;
}
.but{
	height: 40px;
	width:40px;
	border-radius: 50%;
	font-size: 15px;
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
.van-image img{
	width:100%;
	height: 100%;
}
/deep/ .van-card__thumb {
	width: 150px;
	height: 150px;
}
.van-card__content{
	margin-top: 10px;
	margin-left: 10px;
	margin-bottom: 10px;
}
.name{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding:0px 70px;
}
</style>
