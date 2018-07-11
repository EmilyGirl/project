<template>
	<div class="birthday">
		<img class="birthday-bg" src="../assets/img/birthday.png"/>
		<img class="wuhong" src="../assets/img/wuhong.png"/>
		<span class="red-b">{{ initMoney/100 }}元现金卡</span>
		<img class="licaiq" src="../assets/img/licaiquan.png"/>
		<span class="money-b">{{ initMoney1/100 }}元<br />理财劵</span>
		<img class="fang_btn" src="../assets/img/fang_btn.png"/>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		data: function() {
			return{
				initMoney: '',
				initMoney1:''
			}
		},
		created: function () {
			this.getRed();
		},
		methods: {
			getRed: function () {
				var _this = this;
				var auth = this.$route.query.auth;
				_this.$http.post('/activity/findBirthdayGifts', {
						parameters: '{"authorization":"'+ auth +'"}'
					})
					.then(function(res) {
						if(res.data.end == 'ok'){
							if ( res.data.data.birthdayGifts[0].type == "2") {
								_this.initMoney = res.data.data.birthdayGifts[0].initMoney;
							}
							if ( res.data.data.birthdayGifts[1].type == "0") {
								_this.initMoney1 = res.data.data.birthdayGifts[1].initMoney;
							}
						}
					})
					.catch(function(err) {
						console.log(err)
				});
			}
		}
	}
</script>

<style scoped>
	@import '../assets/css/help_center.css';
</style>