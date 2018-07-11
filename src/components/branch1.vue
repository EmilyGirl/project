<template>
	<div class="activity" style="background: #3c17a0;padding-bottom: 120px;">
		<!--<div class="mask" v-if="mask" @touchmove.prevent>
			<div class="mask-content">
				<div class="login_bg"><img src="../assets/img/login_bg.png"/></div>
				<span>您还未登录，请先登录！</span>
				<p v-on:click="nologin()">点击登录</p>
			</div>
		</div>-->
		<img class="actbtn" @click="actbtn()" src="../assets/img/actbtn.png"/>
		<div class="actmask" v-if="actmask" @touchmove.prevent>
			<img class="actrule" src="../assets/img/rule.png"/>
			<img class="actback" @click="show()" src="../assets/img/back.png"/>
		</div>
		<div><img src="../assets/img/huo_1(1).png"/></div>
		<div><img src="../assets/img/d-2.png"/></div>
		<div><img src="../assets/img/d-3.png"/></div>
		<div class="share-btn">
			<img src="../assets/img/d-bg.png"/>
			<button class="shareA" v-bind:disabled="dis" v-tap="{methods :share}"></button>
			<button class="shareB" @click="invest()"></button>
			<div class="invit-close" v-if="close">{{ message }}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		data: function() {
			return {
				items: [],
//				mask: false,
				message: '',
				close: false,
				dis: false,
				actmask: false
			}
		},
		methods: {
			invest: function () {
				var _this = this;
				_this.$http.post('/activity/validActivityIsBegain', {
						parameters: '{"activityId":"1"}'
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
								this.$http.get('/Product/versionUpdate?type=1&version=0.0')
									.then(function(res) {
										if(isAndroid){
											if(ua.match(/MicroMessenger/i) == 'micromessenger' || ua.match(/QQ/i) == "qq"){
												window.location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.allyoubank.fengye";
											 	return false;
											} else {
												window.location.href= res.data.obj.path; 
											}
											
										}else{
											 	window.location.href="https://itunes.apple.com/us/app/%E6%9E%AB%E5%8F%B6%E7%90%86%E8%B4%A2-%E9%AB%98%E6%94%B6%E7%9B%8A%E7%90%86%E8%B4%A2%E6%8A%95%E8%B5%84%E5%B9%B3%E5%8F%B0/id1252563418?mt=8";
										}
									})
									.catch(function(err) {
										console.log(err)
								});
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
				var activityId = 1;
				var model = 2
				this.noShare(activityId,model,source);
			},
			show:function () {
				this.actmask = false;
			},
			actbtn:function () {
				this.actmask = true;
			}
		}
	}	
</script>

<style>
	@import '../assets/css/help_center.css';
</style>