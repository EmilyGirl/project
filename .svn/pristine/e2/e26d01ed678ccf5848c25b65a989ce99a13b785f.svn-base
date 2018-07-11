<template>
	<div class="double_egg">
		<div class="double-bg">
			<img src="../assets/img/double_bg1.png" alt="" />
			<img src="../assets/img/double_bg2.png" alt="" />
			<img src="../assets/img/double_bg3.png" alt="" />
			<img src="../assets/img/double_bg4.png" alt="" />
			<img src="../assets/img/double_bg5.png" alt="" />
			<img src="../assets/img/double_bg6.png" alt="" />
			<img src="../assets/img/double_bg7.png" alt="" />
			<img src="../assets/img/double_bg8.png" alt="" />
			<img src="../assets/img/double_bg9.png" alt="" />
			<img src="../assets/img/double_bg10.png" alt="" />
			<img src="../assets/img/double_bg11.png" alt="" />
			<img src="../assets/img/double_bg12.png" alt="" />
			<img src="../assets/img/double_bg13.png" alt="" />
			<img src="../assets/img/double_bg14.png" alt="" />
			<img src="../assets/img/double_bg15.png" alt="" />
			<img src="../assets/img/double_bg16.png" alt="" />
			<img src="../assets/img/double_bg17.png" alt="" />
			<img src="../assets/img/double_bg18.png" alt="" />
			<img src="../assets/img/double_bg19.png" alt="" />
			<img src="../assets/img/double_bg20.png" alt="" style="margin-bottom: 50px;"/>
		</div>
		<div class="content-top">
			<div class="top-title">
				<p class="title1">投资货融宝月标或双月标</p>
				<p class="title2">10.88%～11.88%</p>
			</div>
			<ul>
				<li><img @click="gouBtn()" src="../assets/img/gift1.png" alt="" /><img @click="gouBtn()" class="btn-common" src="../assets/img/tou_btn1.png"/></li>
				<li><img @click="gouBtn()" src="../assets/img/gift2.png" alt="" /><img @click="gouBtn()" class="btn-common" src="../assets/img/tou_btn2.png"/></li>
				<li><img @click="gouBtn()" src="../assets/img/gift3.png" alt="" /><img @click="gouBtn()" class="btn-common" src="../assets/img/tou_btn3.png"/></li>
				<li><img @click="gouBtn()" src="../assets/img/gift4.png" alt="" /><img @click="gouBtn()" class="btn-common" src="../assets/img/tou_btn4.png"/></li>
				<li><img @click="gouBtn()" src="../assets/img/gift5.png" alt="" /><img @click="gouBtn()" class="btn-common" src="../assets/img/tou_btn5.png"/></li>
				<li><img @click="gouBtn()" src="../assets/img/gift6.png" alt="" /><img @click="gouBtn()" class="btn-common" src="../assets/img/tou_btn6.png"/></li>
				<li><img @click="gouBtn()" src="../assets/img/gift7.png" alt="" /><img @click="gouBtn()" class="btn-common" src="../assets/img/tou_btn7.png"/></li>
			</ul>
		</div>
		<div class="content-bottom">
			<div class="bottom-title">
				<p class="title1">投资货融宝季标</p>
				<p class="title2">12.88%</p>
			</div>
			<ul>
				<li><img @click="gouBtn()" src="../assets/img/gift8.png" alt="" /><img @click="gouBtn()" class="btn-common" src="../assets/img/tou_btn1.png"/></li>
				<li><img @click="gouBtn()" src="../assets/img/gift9.png" alt="" /><img @click="gouBtn()" class="btn-common" src="../assets/img/tou_btn8.png"/></li>
				<li><img @click="gouBtn()" src="../assets/img/gift10.png" alt="" /><img @click="gouBtn()" class="btn-common" src="../assets/img/tou_btn3.png"/></li>
				<li><img @click="gouBtn()" src="../assets/img/gift11.png" alt="" /><img @click="gouBtn()" class="btn-common" src="../assets/img/tou_btn4.png"/></li>
				<li><img @click="gouBtn()" src="../assets/img/gift12.png" alt="" /><img @click="gouBtn()" class="btn-common" src="../assets/img/tou_btn5.png"/></li>
				<li><img @click="gouBtn()" src="../assets/img/gift13.png" alt="" /><img @click="gouBtn()" class="btn-common" src="../assets/img/tou_btn6.png"/></li>
				<li><img @click="gouBtn()" src="../assets/img/gift14.png" alt="" /><img @click="gouBtn()" class="btn-common" src="../assets/img/tou_btn7.png"/></li>
			</ul>
		</div>
		<!--<div class="active-rule">
			<img src="../assets/img/huodong_gui.png"/>
			<ul>
				<li>1、活动范围：月标及以上标的；</li>
				<li>2、每位用户活动期间仅可领取一次，活动期间投资季标的用户可选择同投资额度区间“温暖市集”中的礼品；</li>
				<li>3、活动期间不得对账户内的余额进行提现，提现用户将取消奖励资格；</li>
				<li>4、奖励按新充值投资的金额计算，回款复投不计入累计投资额；</li>
				<li>5、本次活动的实物奖品将在活动结束之后的15个工作日内以邮寄的形式发放，客服会在活动结束后进行电话回访确认；</li>
				<li>6、本次活动的理财券奖励将直接发放至集财理财账户，用户可在活动结束后在“我的券包”中查看；</li>
				<li>7、在法律允许范围内，集财理财对活动保留最终解释权；</li>
			</ul>
		</div>-->
		<div class="egg-share clearfix">
			<button id="goBtn" class="egg fl" @click="gouBtn()">立即投资</button>
			<button class="egg1 fl" v-bind:disabled="dis" v-tap="{methods :share}">立即分享</button>
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
				var source = this.$route.query.source;
				var _this = this;
				_this.$http.post('/activity/validActivityIsBegain', {
						parameters: '{"activityId":"1003"}'
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
				var model = 5;
				var activityId = 1003;
				this.noShare(activityId,model,source);
			},
		}
	}
</script>

<style scoped>
	@import '../assets/css/help_center.css';
</style>