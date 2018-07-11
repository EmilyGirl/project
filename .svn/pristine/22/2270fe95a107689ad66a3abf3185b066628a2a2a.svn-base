<template>
	<div class="yybg">
		<img src="../../../assets/img/xp/yybg/operation_01.png"/>
		<img src="../../../assets/img/xp/yybg/operation_02.png"/>
		<img src="../../../assets/img/xp/yybg/operation_03.png" class="img3"/>
		<div class="router">
			<span  @click='hrefTo("1")'></span>
			<span @click='hrefTo("2")'></span>
		</div>
	</div>
</template>

<script>
	import reset_rem from "../../../assets/js/wechat/reset_rem.js";
	export default {
		name: 'yybg',
		methods: {
			hrefTo(num) {
				if(num=='1'){
					this.$router.push({
						path:'yybg/yybg_active',
						query:{month:'4'}
					});
				}else if(num=='2'){
					this.$router.push({
						path:'yybg/yybg_active',
						query:{year:'2017'}
					});
				}
			},
		}
		
	}
</script>

<style scoped lang="less">
	@import url("../../../assets/css/wechat/reset_rem.css");
	.yybg{
		position: relative;
		.img3{
			margin-top:-1.5px;
		}
		.router{
			padding:5.4rem 1.55rem;
			position:absolute;
			top: 0;
			span{
				display:block;
				width:34.4rem;
				height:14.7rem;
				/*background-color: rgba(200,0,0,.3);*/
				margin-bottom: 8.2rem;
			}
		}
		
	}
</style>