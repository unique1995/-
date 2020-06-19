<template>
	<div class="manage-wrap">
		<div class="box box1">
			<van-form @submit="onSubmit">
				<van-field
						readonly
						clickable
						name="datetimePicker"
						:value="startDate"
						label="开始时间"
						placeholder="点击选择开始时间"
						@click="showPicker = true"
				></van-field>
				<van-popup v-model="showPicker" position="bottom">
					<van-datetime-picker
							type="date"
							:min-date="minDate"
							:max-date="maxDate"
							@confirm="onConfirm"
							@cancel="showPicker = false"
					></van-datetime-picker>
				</van-popup>
				<van-field
						readonly
						clickable
						name="datetimePicker"
						:value="endDate"
						label="结束时间"
						placeholder="点击选择结束时间"
						@click="showPicker2 = true"
				></van-field>
				<van-popup v-model="showPicker2" position="bottom">
					<van-datetime-picker
							type="date"
							:min-date="minDate"
							:max-date="maxDate"
							@confirm="onConfirm2"
							@cancel="showPicker2 = false"
					></van-datetime-picker>
				</van-popup>
				<van-field
						readonly
						clickable
						name="picker"
						:value="isJQ"
						label="是否结清"
						placeholder="点击选择"
						@click="showPicker3 = true"
				/>
				<van-popup v-model="showPicker3" position="bottom">
					<van-picker
							show-toolbar
							:columns="columns"
							@confirm="onConfirm3"
							@cancel="showPicker3 = false"
					/>
				</van-popup>
				<div class="btn-box">
					<van-button round block type="info" native-type="submit">
						查询
					</van-button>
				</div>
			</van-form>
		</div>
		<div class="box box-height">
			<div>
				<van-row class="table" style="color: #ffa719;margin-bottom: 5px;" >
					<van-col span="8">车牌号</van-col>
					<van-col span="8">激活时间</van-col>
					<van-col span="8">状态</van-col>
				</van-row>
				<van-row class="table" v-for="(item,index) in list" :key="index" style="text-align: center;">
					<van-col span="8">{{item.license_plate}}</van-col>
					<van-col span="8">{{item.add_time}}</van-col>
					<van-col span="8">{{item.is_settle}}</van-col>
				</van-row>
			</div>
			<div class="page">
				<van-pagination
						v-model="currentPage"
						:total-items="total"
						:show-page-size="5"
						:items-per-page="5"
						force-ellipses
						@change="pageChange"
				></van-pagination>
			</div>
		</div>
	</div>
</template>

<script>
    import {querySCCarOwner} from '@/api/custInfo'
    export default {
        name: "carInfoList",
		data(){
            return {
                minDate: new Date(2020, 0, 1),
                maxDate: new Date(2025, 10, 1),
                currentDate: new Date(),
				startDate:"",
				endDate:"",
                showPicker:false,
                showPicker2:false,
                showPicker3:false,
                isJQ:"",
                currentPage:"",
                total:"",
                list:[],
                columns: ['已结清', '未结清'],
                pageIndex:"1"
			}
		},
		methods:{
            onSubmit(values) {
                console.log('submit', values);
                let param = {
                    user_id:this.$route.params.user_id,
                    minDate:this.startDate,
                    maxDate:this.endDate,
					is_settle:this.isJQ,
                    page:this.pageIndex,
                    rows:"5"
                }
                querySCCarOwner(param).then( res => {
                    if(res.data.code == 1){
                    	this.total = res.data.count;
                        this.list = res.data.data;
                        console.log(this.total)
                    }
                })
            },
            onConfirm(time) {
                let date = time;
                let m = date.getMonth() + 1;
                let d = date.getDate();
                if (m >= 1 && m <= 9) {
                    m = "0" + m;
                }
                if (d >= 0 && d <= 9) {
                    d = "0" + d;
                }
                let timer = date.getFullYear() + "-" + m + "-" + d;
                this.startDate = timer;
                this.showPicker = false;
            },
            onConfirm2(time) {
                let date = time;
                let m = date.getMonth() + 1;
                let d = date.getDate();
                if (m >= 1 && m <= 9) {
                    m = "0" + m;
                }
                if (d >= 0 && d <= 9) {
                    d = "0" + d;
                }
                let timer = date.getFullYear() + "-" + m + "-" + d;
                this.endDate = timer;
                this.showPicker2 = false;
            },
            onConfirm3(value,index){
                this.showPicker3 = false;
                this.isJQ = value;
			},
            formatter(type, val) {
                if (type === 'year') {
                    return `${val}年`;
                } else if (type === 'month') {
                    return `${val}月`;
                }else if (type === 'day') {
                    return `${val}日`;
                }
                return val;
            },
            pageChange(){
				console.log(this.currentPage)
                this.pageIndex = this.currentPage;
                this.onSubmit()
			}
		},
		mounted(){
            this.onSubmit()
        }
    }
</script>

<style scoped>
.manage-wrap{
	width: 100%;
	height: 100%;
	background-color: #e9e9e9;
	overflow: auto;
}
.box1{
	height: 460px;
}
.box{
	margin: 15px 20px;
	background-color: #fff;
	border-radius: 10px;
}
.box-height{
	height: calc(100% - 515px);
}
	.btn-box{
		padding: 25px 40px;
	}
	.table{
		text-align: center;
		font-size: 35px;
	}
	.van-pagination{
		font-size: 30px;
		margin-top: 20px;
	}
	.page{
		margin-bottom: 20px;
	}
</style>
