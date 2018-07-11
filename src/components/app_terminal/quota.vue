<template>
	<div class="fu-content">
		<ul class="mode">
			<li v-for="(banklist, bank) in banklists">
				<img class="fl balance" :src="banklist.logoUri" />
				<div class="fl fu-middle">
					<p class="yu-common">{{ banklist.bankName }}</p>
					<p class="money-common">{{ banklist.bankNote }}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import reset_rem from "../../assets/js/wechat/reset_rem.js";
	export default {
		name: 'hello',
		data: function() {
			return {
				banklists: []
			}
		},
		created: function () {
			this.bankFun();
		},
		methods: {
			bankFun: function () {
				var _this = this;
				_this.$http.post('/Product/bankList', {
					parameters: '{"authorization":"83b728a1-06c2-4a66-89e1-a6fbf082f1b6"}'
				})
				.then(function(res) {
					if(res.data.end == 'ok') {
						_this.banklists = res.data.list;
					}
				})
				.catch(function(err) {
					console.log(err)
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../assets/css/wechat/reset_rem.css");
	@import url("../../assets/css/wechat/quota.less");
</style>