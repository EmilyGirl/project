<template>
	<div class="evaluate_result">
		<div class="jg" :style = "{backgroundImage :' url('+imgUrl+') '}">
			<p>{{borrowLevel.type}}</p>
			<p>风险承受能力<span> {{score}}</span>分</p>
		</div>
		<div class="advise">{{borrowLevel.note}}{{borrowLevel.meaning}}</div>
		<button class="btn" @click="investFun()">立即出借</button>
		<p><span class="re" @click="reEvaluate()">重新评估</span></p>
		<div class="invit-close" v-if="close">{{ message }}</div>
	</div>
</template>

<script>
	import reset_rem from "../../../assets/js/wechat/reset_rem.js";
	export default {
		name: 'evaluate_result',
		data: function() {
			return {
				message: '',
				close: false,
				type: '',
				borrowLevel: {},
				score: '',
				imgUrl:''
			}
		},
		created: function() {
			var auth = this.$route.query.auth;
			var _this = this;
			_this.$http.post('/Product/User/queryResultSource', {
					parameters: '{"authorization":"' + auth + '"}'
				})
				.then(function(res) {
					if(res.data.end == 'ok') {
						_this.borrowLevel = res.data.borrowLevel;
						_this.score = res.data.score;
						_this.imgUrl = res.data.borrowLevel.imgUrl;
					}
				})
				.catch(function(err) {
					console.log(err)
				});
		},
		methods: {
			investFun: function() {
				var u = navigator.userAgent;
				var ua = window.navigator.userAgent.toLowerCase(); //判断是不是微信端
				var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
				var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
				var isWeixin = ua.match(/MicroMessenger/i) == "micromessenger" ? true : false;

				function loadURL(url) {
					var iFrame;
					iFrame = document.createElement("iframe");
					iFrame.setAttribute("src", url);
					iFrame.setAttribute("style", "display:none;");
					iFrame.setAttribute("height", "0px");
					iFrame.setAttribute("width", "0px");
					iFrame.setAttribute("frameborder", "0");
					document.body.appendChild(iFrame);
					iFrame.parentNode.removeChild(iFrame);
					iFrame = null;
				}
				try {
					//浏览器调试
					if(isIOS && !isWeixin) {
						loadURL("fengyelicai://btnInvest");
					} else if(isAndroid && !isWeixin) {
						JSInterface.toInvest();
					} else {
						this.$router.push({
							path: "/wechat/home"
						});
						
					}
				} catch(e) {
					console.log(e);
					this.$router.push({
						path: "/wechat/home"
					});
					
				}

//				if(isAndroid) {
//					JSInterface.toInvest();
//					return;
//				}
//				if(isIOS) {
//					loadURL("fengyelicai://btnInvest");
//					return;
//				}
			},
			reEvaluate(){
				var auth = this.$route.query.auth;
				this.$router.push({
					path: 'evaluate',
					name: 'evaluate',
					query: {
						auth: auth
					}
				});
			},
		}
	}
</script>

<style scoped lang="less">
	@import url("../../../assets/css/wechat/reset_rem.css");
	@import url("../../../assets/css/xp/xp.less");
</style>