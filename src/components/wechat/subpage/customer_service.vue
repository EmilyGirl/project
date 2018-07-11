<template>
	<div class="customer_service">
		<img class="service-bg" src="../../../assets/img/wechat/product/contact_us_bg.png"/>
		<div class="service-middle clearfix">
			<img class="fl" src="../../../assets/img/wechat/product/phone_icon.png"/>
			<div class="tel fl">
				客服电话<br />
				<a :href="'tel:' + tel">{{ tel }}</a>
			</div>
		</div>
		<div class="service-bottom clearfix">
			<div class="fl tel-left">企业QQ<br />4000053300</div>
			<div class="fl tel-right">微博<br />@集财-互联网金融</div>
		</div>
		<div class="customer_bottom">{{ serviceWorkTime }}</div>
	</div>
</template>

<script>
	import reset_rem from "../../../assets/js/wechat/reset_rem.js";
	export default {
		name: 'hello',
		data: function() {
			return {
				tel: '',
				serviceWorkTime: ''
			}
		},
		created: function () {
			this.loadFun()
		},
		methods: {
			loadFun: function () {
				var _this = this;
				_this.$http.post('/contactInformation/getContactInformation', {
					parameters: '{}'
				})
				.then(function(res) {
					if(res.data.end == 'ok') {
						_this.serviceWorkTime = res.data.data.serviceWorkTime;
						var tel = '';
						var tellist = res.data.data.list;
						for(var i = 0; i < tellist.length; i++) {
							if(tellist[i].type == 'tel') {
								tel = tellist[i].subtitle
							}
						}
						_this.tel = tel;
					}
				})
				.catch(function(err) {
					console.log(err)
				})
			}
		}
	}
</script>

<style scoped>
	@import url("../../../assets/css/wechat/reset_rem.css");
	@import url("../../../assets/css/wechat/customer_service.css");
</style>
