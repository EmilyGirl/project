<template>
	<h1 id='click' @click='auth' style='color: green;text-align: center;margin-top:30%;background-color: pink '>绑定 手机号xxxxxxx，userid：3</h1>
</template>
<script>
	import axios from 'axios'
	export default {
		created: function() {
			console.log(this.$route)
			if(this.$route.query.code) {
				this.$http.post("/Product/wechat/auth", {
					parameters: JSON.stringify({
						code: this.$route.query.code,
						userId: 3
					})
				}).then(data => {
					// alert('绑定成功,t')
					console.log(data)
					location.href = 'https://www.baidu.com'

				});
			}
		},
		methods: {
			auth: function() {
				var url = 'http://jicai-wap-dev.fengyelicai.xin/#/wechat';
				var appid = 'wxc736da50def50a28';
				location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appid + '&redirect_uri=' + encodeURI(url) + '&response_type=code&scope=snsapi_userinfo&state=1234#wechat_redirect'

			}

		}

	}

	// $('#click').on('click',function (argument) {
	// var url = 'http://m-dev.fengyelicai.com/api/Product/wechat.html';
	// var appid = 'wxc736da50def50a28';
	// 	location.href='https://open.weixin.qq.com/connect/oauth2/authorize?appid='+ +'&redirect_uri='+encodeURI(url)+'&response_type=code&scope=snsapi_userinfo&state=1234#wechat_redirect'
	// })
</script>