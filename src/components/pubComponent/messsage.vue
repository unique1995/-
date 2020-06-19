<template>
	<div class="wrap" v-show="isShowFlag">
		<span class="text-style">
			{{text}}
		</span>
	</div>
</template>

<script>
    export default {
        name: "messsage",
        props:['text'],
        data(){
            return {
                isShowFlag:false
			}
		},
		watch:{
            isShowFlag(newVal,oldVal){
                if(newVal){
                    let inter = setTimeout( () => {
                        this.isShowFlag = false;
					},2000)
				}
			}
		},
        methods:{},
        mounted() {

        }
    }
</script>

<style scoped>
	.wrap{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.text-style{
		display: inline-block;
		height: 45px;
		line-height: 35px;
		padding: 5px 20px;
		border-radius: 5px;
		color: #eeeeee;
		background-color: #000000;
		opacity: 0.6;
		font-size: 30px;
	}
</style>