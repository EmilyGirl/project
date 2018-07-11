<template>
	<div class="year_gifes">
		<div v-if="yearShow" @touchmove.prevent class="year-mask">
			<img class="year-rule" src="../assets/img/niandi_rule.png"/>
			<img class="year-know" @click="yearXiao()" src="../assets/img/niandi_btn.png"/>
		</div>
		<img class="year_rule" @click="yearXian()" src="../assets/img/year_rule.png"/>
		<img src="../assets/img/year_1.png" alt="" />
		<img src="../assets/img/year_2.png" alt="" />
		<img src="../assets/img/year_3.png" alt="" />
		<img src="../assets/img/year_4.png" alt="" />
		<img src="../assets/img/year_5.png" alt="" />
		<img src="../assets/img/year_6.png" alt="" />
		<img src="../assets/img/year_7.png" alt="" />
		<img src="../assets/img/year_8.png" alt="" />
		<img style="margin-bottom: 50px;" src="../assets/img/year_9.png" alt="" />
		<div class="year-share clearfix">
			<button id="goBtn" class="year-common fl" @click="gouBtn()"><img src="../assets/img/year_tou.png"/></button>
			<button class="year-common fl" v-bind:disabled="dis" v-tap="{methods :share}"><img src="../assets/img/year_share.png"/></button>
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
				message: '',
				yearShow: false
			}
		},
		methods: {
			yearXian: function () {
				this.yearShow = true;
			},
			yearXiao: function () {
				this.yearShow = false;
			},
			gouBtn:function () {
				var source = this.$route.query.source;
				var _this = this;
				_this.$http.post('/activity/validActivityIsBegain', {
						parameters: '{"activityId":"1004"}'
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
				var model = 6;
				var activityId = 1004;
				this.noShare(activityId,model,source);
			},
		}
	}
</script>

<style scoped>
	@import '../assets/css/help_center.css';
</style>