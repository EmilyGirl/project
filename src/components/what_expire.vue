<template>
	<div class="what-experience">
		<p><span>1.</span>体验金是集财理财提供给用户的投资本金，有一定有效期。</p>
		<p><span>2.</span>体验金可以产生收益，体验金一旦被投资，到期后投资收益归用户所有。</p>
		<p><span>3.</span>到期后，系统将自动收回已投资的体验金。</p>
		<p><span>4.</span>体验金不能转出，但体验金投资产生的收益满足条件后可以转到余额并提现。</p>
		<p><span>5.</span>如遇其它问题，请联系客服<a @click="tel()">{{ message }}</a></p>
	</div>
</template>

<script>
	
	export default {
		name: 'hello',
		data: function() {
			return {
				message: '4008251755'
			}
		},
		methods: {
			tel: function () {
				var _this = this;
				var telphone = _this.message;
				var u = navigator.userAgent;
				var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
			    if(isAndroid){
				    JSInterface.showTelDialog(telphone);;  
				    return;
			    }
			}
		}
	}	
</script>

<style>
	@import '../assets/css/help_center.css';
</style>