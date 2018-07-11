<template>
	<div class="touqian">
		<div class="tou-mask" v-if="mask" @touchmove.prevent>
			<div class="tou-content">
				<img class="tou-alert" src="../assets/img/touqian_alert.png"/>
				<img class="tou-cha" @click="guanBtn()" src="../assets/img/copy2.png"/>
			</div>
		</div>
		<img class="hongdong_rule" @click="ruleBtn()" src="../assets/img/huodong_rule.png"/>
		<img src="../assets/img/touqian-1.png" />
		<img src="../assets/img/touqian-2.png" />
		<img src="../assets/img/touqian-3.png" />
		<img src="../assets/img/touqian-4.png" />
		<img src="../assets/img/touqian-5.png" />
		<img src="../assets/img/touqian-6.png" />
		<img src="../assets/img/touqian-7.png" />
		<img src="../assets/img/touqian-8.png" />
		<img src="../assets/img/touqian-9.png" />
		<img src="../assets/img/touqian-10.png" />
		<!--<button class="tou-footer" @click="gouBtn()"><img src="../assets/img/touzi_btn.png"/></button>-->
		<div class="day-share clearfix">
			<button class="qianggou fl" @click="gouBtn()">立即投资</button>
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
				mask: false,
				dis: false,
				message: ''
			}
		},
		methods: {
			ruleBtn: function () {
				this.mask = true;
			},
			guanBtn: function () {
				this.mask = false;
			},
			gouBtn:function () {
				var _this = this;
				_this.$http.post('/activity/validActivityIsBegain', {
						parameters: '{"activityId":"10001"}'
					})
					.then(function(res) {
						if(res.data.end == 'ok'){
							var u = navigator.userAgent;
							var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
							var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
							var ua = window.navigator.userAgent.toLowerCase();
							var source = this.$route.query.source;
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
									this.downApp();
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
				var model = 4;
				var activityId = 10001;
				this.noShare(activityId,model,source);
			},
		}
	}
</script>

<style scoped>
	@import '../assets/css/help_center.css';
</style>