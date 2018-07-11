<template>
	<div class="op-blank">
		<div class="commonHeader">
			<img class="fl" @click="investBtn()" src="../assets/img/return.png"/>
			<p class="fl">操作成功</p>
		</div>
		<div style="margin-top: 500px;">{{ message }}</div>
		<div class="op-content">
			<img src="../assets/img/alert_succ.png" />
			<p>操作成功</p>
			<div class="investBtn" @click="investBtn()">返回</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		data: function() {
			return {
				message: ''
			}
		},
		created: function() {
			var hurl = window.location.href;
			this.message = hurl;
		},
		methods: {
			investBtn: function() {
				this.investAlertFun();
			},
			getAuth: function() {
				
			}
		}
	}
</script>

<style>
	@import '../assets/css/help_center.css';
</style>