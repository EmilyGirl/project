<template>
	<div class="ptgg_active">
		<div class="sign" v-if='sign==="1"'>
			<div class="title">集财官网更新升级公告</div>
			<div class="time">2018.05.20&nbsp;&nbsp;08:00</div>
			<div class="content">
				亲爱的荠菜（集财）粉：<br />

集财理财官网即将迎来升级维护，期间将无法提供购买理财产品服务，如您有投资需求，可在集财理财APP中或者关注并通过微信公众号“集财圈儿”---“集财首页”----“理财产品”中进行投资理财。集财理财官网即将迎来升级维护，期间将无法提供购买理财产品服务，如您有投资需求，可在集财理财APP中或者关注并通过微信公众号“集财圈儿”---“集财首页”----“理财产品”中进行投资理财。
			</div>
		</div>
		<div class="sign" v-if='sign==="2"'>
			<div class="title">关于集财理财系统升级公告</div>
			<div class="time">2018.05.18&nbsp;&nbsp;08:00</div>
			<div class="content">
				亲爱的荠菜（集财）粉：<br />
集财理财将于2018年5月20日 02:00至2018年5月21日 02:00系统升级，期间暂时无法进行投资理财，还请您耐心等待，系统升级后即可让您的投资体验更加舒适。
			</div>
		</div>
		<div class="sign" v-if='sign==="3"'>
			<div class="title">银行卡支付限额提升通知</div>
			<div class="time">2016年05月29&nbsp;&nbsp;01:14</div>
			<div class="content">
				亲爱的荠菜（集财）粉：<br />

集财理财为拥抱合规，对接银行存管努力做好合规与安全保障，集财APP版本升级，新版APP震撼来袭。动动您的手指，在官网、现APP首页上方的展示图中、集财圈儿微信公众号中都可以下载新版集财理财APP。
			</div>
		</div>
	</div>
</template>

<script>
	import reset_rem from "../../../assets/js/wechat/reset_rem.js";
	export default {
		name: 'ptgg_active',
		data: function() {
			return {
				sign:false,
				
			}
		},
		created(){
			this.sign=this.$route.query.sign;
			console.log(typeof(this.sign));
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="less">
	@import url("../../../assets/css/wechat/reset_rem.css");
	.ptgg_active{
		position: absolute;
		width: 100%;
		min-height: 100%;
		background-color: white;
		padding: 2.4rem 1.55rem;
		box-sizing:border-box;
		font-size: 1.3rem;
		line-height: 2rem;
		.title{
			font-size:1.5rem;
			font-weight:bold;
			margin-bottom: 1rem;
		}
		.time{
			text-align: right;
			margin-bottom: 1.5rem;
			color: #666666;
		}
		.content{
			color: #666666;
		}
	}
</style>