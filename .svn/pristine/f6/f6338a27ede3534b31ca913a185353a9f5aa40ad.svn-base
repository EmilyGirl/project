<template>
	<div class="op-blank">
		<div class="commonHeader">
			<img class="fl" @click="returnBtn()" src="../assets/img/return.png"/>
			<p class="fl">操作成功</p>
		</div>
		<div class="op-content">
			<img src="../assets/img/alert_succ.png"/>
			<p>支付成功</p>
			<div class="investBtn" @click="investBtn()">继续投资</div>
			<div style="margin-left: 20px;" class="investBtn" @click="dingFun()">查看详情</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		data: function() {
			return {
				
			}
		},
		created:function () {
			this.getAuth();
		},
		methods: {
			investBtn: function () {
				this.investPageFun();
			},
			returnBtn: function () {
				this.investAlertFun();
			},
			dingFun: function () {
				this.investPutFun();
			},
			getAuth: function () {
				
			}
		}
	}	
</script>

<style>
	@import '../assets/css/help_center.css';
</style>