<template>
	<div class="experience-del">
		<div v-if="messageShow" class="message-mask">
			<div class="message-alert">
				<img src="../assets/img/message_bg.png"/>
				<span>{{ message }}</span>
				<div class="skipBtn" @click="skipBtn(end,'skipBtn')">我知道了</div>
			</div>
		</div>

		<ul class="del-top">
			<li class="clearfix">
				<div class="del-left fl">体验中(元)</div>
				<div class="del-right fr">{{ inMoneyStr }}</div>
			</li>
			<li class="clearfix">
				<div class="del-left fl">昨日收益(元)</div>
				<div class="del-right fr">{{ dayIncomeStr }}</div>
			</li>
			<li class="clearfix">
				<div class="del-left fl">累计收益(元)</div>
				<div class="del-right fr">{{ totalIncomeStr }}</div>
			</li>
			<li class="clearfix">
				<div class="del-left fl">到期日</div>
				<div class="del-right fr">{{ lastTimeStr }}</div>
			</li>
		</ul>
		<div class="del-bottom">
			<div class="rule-top"><span></span>转出规则</div>
			<ul>
				<li><span></span>1.需达到到期日方可转出余额</li>
				<li><span></span>2.会将收益一次性转出</li>
				<li><span></span>3.单笔投资月标及以上标的达到2000元</li>
				<li><span></span>4.体验金到期后15天内不转出到余额视为自动放弃</li>
				
			</ul>
		</div>
		<div v-if="expire" class="del-footer" @click="expireBtn()">转出{{ totalIncomeStr }}到余额</div>
		<div v-if="also" class="del-footer2">离提现还差{{ expireDays }}天</div>
	</div>
</template>

<script>
	
	export default {
		name: 'hello',
		data: function() {
			return {
				inMoneyStr: '',
				expireDays: '',
				totalIncomeStr: '',
				dayIncomeStr: '',
				lastTimeStr: '',
				expire: false,
				also: false,
				message: '',
				messageShow : false,
				end: ''
			}
		},
		created: function() {
			this.load(); //定义方法
		},
		methods: {
			load: function () {
				var _this = this;
				var auth = this.$route.query.auth;
				_this.$http.post('/usersgold/getUsersGold', {
						parameters: '{"authorization":"'+ auth +'"}'
					})
					.then(function(res) {
						if(res.data.end == 'ok'){
							_this.inMoneyStr = res.data.usersGold.inMoneyStr;
							_this.expireDays = res.data.usersGold.expireDays;
							_this.totalIncomeStr = res.data.usersGold.totalIncomeStr;
							_this.dayIncomeStr = res.data.usersGold.dayIncomeStr;
							_this.lastTimeStr = res.data.usersGold.lastTimeStr;
							if (res.data.usersGold.status == "0") {
								_this.also = true;
								_this.expire = false;
							}
							if (res.data.usersGold.status == "1") {
								_this.expire = true;
								_this.also = false;
							}
						}
					})
					.catch(function(err) {
						console.log(err)
				});
			},
			expireBtn: function () {
				var _this = this;
				var auth = this.$route.query.auth;
				_this.messageShow  = true;
				_this.$http.post('/usersgold/turnToLeftMoney', {
						parameters: '{"authorization":"'+ auth +'"}'
					})
					.then(function(res) {
						_this.end = res.data.end;
						if(_this.end == 'ok'){
							_this.message = res.data.message;
						} else if (_this.end == 'error') {
							_this.message = res.data.message;
						}
					})
					.catch(function(err) {
						console.log(err)
				});
			},
			skipBtn: function () {
				var _this = this;
				if (this.end == 'ok') {
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
					if(isIOS){
					    loadURL("fengyelicai://btnMe");
					    return;
				    }
				    if(isAndroid){
					    JSInterface.toMy();  
					    return;
				    }
				} else if (this.end == 'error') {
					_this.messageShow  = false;
				}
				
			}
		}
	}	
</script>

<style>
	@import '../assets/css/help_center.css';
</style>