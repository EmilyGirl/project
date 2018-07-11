<template>
	<div class="fengye_day">
		<img src="../assets/img/feng_1.png" alt="" />
		<img src="../assets/img/feng_2.png" alt="" />
		<img src="../assets/img/feng_3.png" alt="" />
		<img src="../assets/img/feng_4.png" alt="" />
		<img src="../assets/img/feng_5.png" alt="" />
		<img src="../assets/img/feng_6.png" alt="" />
		<img src="../assets/img/feng_7.png" alt="" />
		<img src="../assets/img/feng_8.png" alt="" />
		<img src="../assets/img/feng_9.png" alt="" />
		<div class="day-share clearfix">
			<button class="qianggou fl" @click="gouBtn()">立即抢购</button>
			<button class="qianggou fl" v-bind:disabled="dis" v-tap="{methods :share}">立即分享</button>
			<div class="invit-close" v-if="close">{{ message }}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		data: function() {
			return{
				close: false,
				dis: false,
				message: ''
			}
		},
		methods: {
			gouBtn:function () {
				var _this = this;
				var source = this.$route.query.source;
				_this.$http.post('/activity/validActivityIsBegain', {
						parameters: '{"activityId":"10002"}'
					})
					.then(function(res) {
						if(res.data.end == 'ok'){
							var u = navigator.userAgent;
							var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
							var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
							var ua = window.navigator.userAgent.toLowerCase();
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
							if (source) {
								if(isAndroid){
						          	JSInterface.toInvest();
						          	return;
						        }
						      	if(isIOS){
						          	loadURL("fengyelicai://btnInvest");
						            return;
						      	}
							} else{
								if (isIOS) {
									window.location.href = "fengyelicai://";
									window.setTimeout(function() {
						                window.location.href = "https://itunes.apple.com/us/app/%E6%9E%AB%E5%8F%B6%E7%90%86%E8%B4%A2-%E9%AB%98%E6%94%B6%E7%9B%8A%E7%90%86%E8%B4%A2%E6%8A%95%E8%B5%84%E5%B9%B3%E5%8F%B0/id1252563418?mt=8";
						            }, 2000);
								}
								if (isAndroid) {
									_this.downApp();
								}
							}
						} else if (res.data.end == 'error') { 
							_this.message = res.data.message;
							_this.close = true;
							setTimeout(function () {
								_this.close = false;
							},1000);
						}
					})
					.catch(function(err) {
						console.log(err)
				})
				
			},
			share:function () {
				var source = this.$route.query.source;
				var model = 3;
				var activityId = 10002;
				this.noShare(activityId,model,source);
			},
		}
	}
</script>

<style scoped>
	@import '../assets/css/help_center.css';
</style>