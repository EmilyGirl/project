<template>
	<div class="bank-list">
		<ul>
			<li v-for="(item,index) in items">
				<div class="bank-list-cont clearfix">
					<div class="bank-left fl">
						<img :src="item.logoUri"/>
					</div>
					<div class="bank-right fl">
						<div class="bank-name">{{ item.bankName }}</div>
						<div class="xiane">{{ item.bankNote }}</div>
					</div>
				</div>
			</li>
		</ul>
		<div class="bank-bottom">
			<span>银行卡的支付限额是由银行设定，购物支付/转账等场景共享限额,无法提升。若提示超限，建议更换其他支付方式</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		data: function() {
			return {
				items: [],
			}
		},
		created: function() {
			this.loadData();
		},
		methods: {
			loadData: function () {
				var _this = this;
				var auth = this.$route.query.auth;
				_this.$http.post('/Product/bankList', {
						parameters: '{"authorization":"'+ auth +'"}'
					})
					.then(function(res) {
						if(res.data.end == 'ok'){
							_this.items = res.data.list;
						}
					})
					.catch(function(err) {
						console.log(err)
				})
				
			}
		}
	}	
</script>

<style>
	@import '../assets/css/help_center.css';
</style>