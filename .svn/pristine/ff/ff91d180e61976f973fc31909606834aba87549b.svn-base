<template>
	<div class="break">
		<img class="break_rule" @click="ruleFun()" src="../assets/img/break_rule.png"/>
		<img src="../assets/img/breakthrough_1.png" />
		<img src="../assets/img/breakthrough_2.png" />
		<div id="break" class="break-content">
			<div class="invest-money clearfix">
				<p>投资金额</p>
				<input v-model="money" class="money-inp fl" :disabled="inp" v-focus="focusStatus" @focus="focus()" @blur="blur()" type="text" name="" id="" value="" maxlength="6" placeholder="大于等于5000元（1000的整数倍）" /><button class="okBtn fr" :disabled="dis" @click="confirmFun()">确定</button>
			</div>
			<!--未打开-->
			<div class="unopen clearfix" v-if="unopen">
				<img class="fl" @click="imgBtn()" src="../assets/img/unopen.png" />
				<img class="fr" @click="imgBtn()" src="../assets/img/unopen.png" />
				<img class="fl" @click="imgBtn()" src="../assets/img/unopen.png" />
				<img class="fr" @click="imgBtn()" src="../assets/img/unopen.png" />
			</div>
			<!--已打开-->
			<div class="open clearfix" v-if="open">
				<div v-for="(item,index) in items" class="open-common">
					<img src="../assets/img/open.png" />
					<p class="amount">{{ item.amount }}元</p>
					<p class="biao-type">{{ item.name }}</p>
					<p class="canuse">满{{ money }}可用</p>
					<button class="lingBtn" :class="{ gray: isActive }" :disabled="unclick" @click="drawFun($event,item.type,'drawFun')">{{ title }}</button>
				</div>
				<div class="open-common">
					<img src="../assets/img/watting.png" />
				</div>
			</div>
			<div class="explain">
				<p>每人最多领取5个定制现金卡，使用后才可以继续领取</p>
				<p>联系客服： <img src="../assets/img/iosphone.png"/></p>
				<p class="lastP">市场有风险 投资需谨慎</p>
			</div>
		</div>
		<div class="break-bottom">活动由集财理财提供，与设备生产商Apple Inc.公司无关</div>
		<div class="success-alert" v-if="hide" @touchmove.prevent>
			<div class="alert-content">				
				<img src="../assets/img/success_ti.png"/>
				<img class="seeBtn" @click="seeFun()" src="../assets/img/see_btn.png"/>&nbsp;&nbsp;&nbsp;
				<img class="goBtn" @click="investFun()" src="../assets/img/go_btn.png"/>
				<img class="break_cha" @click="closeFun()" src="../assets/img/break_cha.png"/>
				<p class="break-title">{{ breakTitle }}</p>
			</div>
		</div>
		<div class="rule-alert" v-if="show" @touchmove.prevent>
			<div class="alert-content">				
				<img src="../assets/img/break_alert.png"/>
				<img class="break_cha" @click="closeFun()" src="../assets/img/break_cha.png"/>
			</div>
		</div>
		<div class="invit-close" v-if="close">{{ message }}</div>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		data: function() {
			return {
				money: '',
				message: '',
				close: false,
				focusStatus : false,
				unopen: true,
				open:false,
				items: [],
				title: '立即领取',
				unclick: false,
				dis: false,
				isActive: false,
				hide: false,
				breakTitle: '',
				show: false,
				inp: false
			}
		},
		directives: {
			focus: {
				update: function(el, {value}) {
					if(value) {
						el.focus()
					}
				}
			}
		},
		methods: {
			confirmFun: function() {
				var _this = this;
				var auth = this.$route.query.auth;
				if(this.money == '') {
					this.message = '请先输入投资金额';
					_this.close = true;
					setTimeout(function() {
						_this.close = false;
					}, 1000);
				} else if(this.money < 5000) {
					this.message = '请输入大于5000的金额';
					_this.close = true;
					setTimeout(function() {
						_this.close = false;
					}, 1000);
				} else if(this.money % 1000 != 0) {
					this.message = '请输入1000的整数倍';
					_this.close = true;
					setTimeout(function() {
						_this.close = false;
					}, 1000);
				} else if(this.money > 500000) {
					this.message = '单笔投资额不可大于50万';
					_this.close = true;
					setTimeout(function() {
						_this.close = false;
					}, 1000);
				} else {
					_this.$http.post('/Product/User/getDIYCoupon', {
						parameters: '{"authorization":"'+ auth +'","money":"' + this.money + '"}'
					})
					.then(function(res) {
						if(res.data.end == 'ok') {
							_this.dis = true;
							_this.inp = true;
							_this.items = res.data.data.couponList;
							_this.unopen = false;
							_this.open = true;
						} else if(res.data.end == 'noLogin') {
							_this.start();
						}
					})
					.catch(function(err) {
						console.log(err)
					});
				}
			},
			imgBtn: function () {
				this.focusStatus = true;
			},
			blur: function () {
				this.focusStatus = false;
			},
			focus: function () {
				var _this = this;
				setTimeout(function () {
					var pannel = document.getElementById("break");
					pannel.scrollIntoView(true);
				},200);
			},
			drawFun: function (e,type) {
				var auth = this.$route.query.auth;
				var _this = this;
				_this.unclick = true;
				_this.$http.post('/Product/User/sendDIYCoupon', {
					parameters: '{"authorization":"'+ auth +'","money":"' + this.money + '","type":"' + type + '"}'
				})
				.then(function(res) {
					if(res.data.end == 'ok') {
						_this.isActive = true;
						e.target.innerText = '领取成功';
						_this.hide = true;
						_this.breakTitle = res.data.message;
					} else if(res.data.end == 'error') {
						_this.hide = true;
						_this.breakTitle = res.data.message;
					} else if(res.data.end == 'noLogin') {
						_this.start();
					}
				})
				.catch(function(err) {
					console.log(err)
				});
			},
			closeFun: function () {
				this.hide = false;
				this.show = false;
			},
			ruleFun: function () {
				this.show = true;
			},
			investFun: function () {
				var u = navigator.userAgent;
				var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
				var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
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
				if(isAndroid){
		          	JSInterface.toInvest();
		          	return;
		        }
		      	if(isIOS){
		          	loadURL("fengyelicai://btnInvest");
		            return;
		      	}
			},
			seeFun: function () {
				var u = navigator.userAgent;
				var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
				var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
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
				if(isAndroid){
		          	JSInterface.toVoucherPage();
		          	return;
		        }
		      	if(isIOS){
		          	loadURL("fengyelicai://btnFYMyroll");
		            return;
		      	}
			}
			
		}
	}
</script>

<style scoped>
	@import '../assets/css/help_center.css';
</style>