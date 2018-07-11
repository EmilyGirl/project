<template>
	<div class="revise_traders_pwd">
		<form @submit.prevent="submit">
			<div class="normal">
				<p class="bkTitle">可用余额<span class="light"> {{(obj.leftMoney/100).toFixed(2)}} </span>元</p>
			</div>
			<div class="input-list">
				<div class="icommon">
					<label>充值金额</label>
					<input class="recharge_input" type="number" v-model="rMoney" name="" value="" placeholder="请输入100元以上的充值金额" @keyup="unNull" /><span>元</span>
				</div>
			</div>
			<div class="normal">

				<p class="bkTitle">认证充值</p>
			</div>
			<div class="input-list">
				<div class="icommon bank">
					<label class="bankImg"><img :src="list.bankURI"/></label>
					<div class="bankText">
						<p>{{list.bankName}}（{{(obj.leftMoney/100).toFixed(2)}}）</p>
						<p>单笔限额：{{list.oneTimes}}元 单日最高：{{list.dayTimes}}元</p>
					</div>
				</div>
			</div>

			<button :class="{loginBtn:loginBtn}" class="boolBtn" type="submit" :disabled="!loginBtn">下一步</button>
		</form>
		<vue-pay-keyboard :isPay='isPay' @pas-end='pasEnd' @close='closes' ref="pay" :countDown='countDown' @get-securit='getSecurit' :securityBtnCan='securityBtn' :payTitle='payTitle'></vue-pay-keyboard>
		<transition name="fade">
			<div class="welfare-close" v-if="close">{{ message }} </div>
		</transition>
	</div>
</template>

<script>
	import reset_rem from "../../../assets/js/wechat/reset_rem.js";
	import { usernameKey, authKey, authName, usernameName } from '@/config/config.js';
	export default {
		name: 'wx_recharge',
		data() {
			return {
				message: '',
				close: false,
				loginBtn: false,
				//tips: false,
				codeTitle: '获取验证码',
				findYzm: false,
				yzm: '',
				rMoney: '',
				list: [],
				obj: {},
				leftMoney: '0',
				username: '',
				isPay: false,
				countDown: '60s后重新获取',
				countBool: true,
				second: 60,
				preventTime: true,
				securityBtn: true,
				payTitle: '请输入短信验证码',
				payType: '',
				orderid: '',
				cardId: '',
				realPwd: '',
			}
		},
		created: function() {
			var _this = this;
			_this.leftMoney = parseFloat(_this.leftMoney).toFixed(2);
			//_this.username = _this.$decryptByDES(_this.$getCookie(usernameName), usernameKey);
			_this.username = this.$decryptByDES(this.$getCookie(usernameName), this.$uncompile(usernameKey));
			console.log(_this.username);
			_this.$http.post('/Product/User/showMyAccountNew', {
					parameters: '{}'
				})
				.then(function(res) {
					if(res.data.end == 'ok') {
						_this.obj = res.data.obj;
						if(res.data.obj.isBindBank == "1") {
							_this.list = res.data.list[0];
						}
						_this.leftMoney = parseFloat(res.data.obj.leftMoney).toFixed(2);
						//console.log(_this.user);
					} else if(res.data.end == 'noLogin') {
						_this.message = res.data.message;
						_this.close = true;
						setTimeout(function() {
							_this.close = false;
							_this.start();
						}, 1000);
					}
				})
				.catch(function(err) {
					console.log(err)
				});


		},
		methods: {
			submit() {
				this.payShow()
			},
			unNull() {
				if(this.rMoney.length != 0) {
					this.loginBtn = true;
				} else {
					this.loginBtn = false;
				}
			},
			payShow() {

				var _this = this;
				_this.times();
				//alert(1111111)
				var formData = JSON.stringify({
					username: _this.username,
					amount: _this.rMoney*100,
				}); // 这里是你的表单数据
				//alert(formData);
//				var moneys=_this.rMoney;
//				alert(moneys);
				if(parseFloat(_this.rMoney) < 100) {
					_this.close = true;
					_this.message = '请输入大于100的金额';
					_this.loginBtn = false;
					setTimeout(function() {
						_this.close = false;
						_this.loginBtn = true;
					}, 1000);
					return;
				}
				if(_this.rMoney > _this.list.oneTimes) {
					_this.close = true;
					_this.message = '充值金额超限';
					_this.loginBtn = false;
					setTimeout(function() {
						_this.close = false;
						_this.loginBtn = true;
					}, 1000);
					return;
				}

				_this.$http.post('/Product/User/recharge', {
						parameters: formData
					})
					.then(function(res) {
						if(res.data.end == 'ok') {
							_this.isPay = true;
							
							_this.payType = res.data.type;
							_this.orderid = res.data.orderid;
//														if(_this.payType=="bf"){
//															_this.payTitle="宝付支付提供本次支付服务";
//														}else if(_this.payType=="yb"){
//															_this.payTitle="易宝支付提供本次支付服务";
//														}

						} else {
							_this.close = true;
							_this.message = res.data.message;
							setTimeout(function() {
								_this.close = false;
							}, 1000);
						}
					})
					.catch(function(err) {
						console.log(err)
					});

			},
			times() {
				var _this = this;
				var wait = _this.second;
				this.$refs.pay.countBool = _this.countBool;

				function time() {
					if(wait == 0) {
						//alert("我被清掉了");
						clearInterval(window.countTime);
						_this.securityBtn = false;
						_this.countDown = '重新发送';
						wait = _this.second;
					} else {
						_this.securityBtn = true;
						wait--;
						_this.countDown = wait + "s后重新获取";

					}
				};
				window.countTime = setInterval(time, 1000);

			},
			pasEnd(val) {
				var _this = this;
				//var money = _this.rMoney * 100;
				_this.realPwd = val;
				//console.log(val); //得到密码 可能会进行一些加密动作
				setTimeout(() => { // 模拟请求接口验证密码中 ..
					this.$refs.pay.$payStatus(true) // 拿到子组件的事件
				}, 1000);

				var money = _this.rMoney * 100;
				var params = {
					orderid: _this.orderid,
					username: _this.username,
					type: _this.payType,
					amount: money,
					accountId: _this.cardId,
					validatecode: _this.realPwd
				}
				_this.$http.post('/Product/User/recharge/confirm', {
						/*parameters: '{"orderid":' + _this.orderid + ',"username":' + _this.username + ',"type":' + _this.payType + ',"amount":' + money + ',"accountId":' + _this.cardId + ',"validatecode":' + _this.realPwd' + '}'*/
						parameters: JSON.stringify(params)
					})
					.then(function(res) {
						if(res.data.end == 'ok') {
							_this.close = true;
							_this.message = res.data.message;
							setTimeout(function() {
								_this.close = false;
								setTimeout(function() {
									_this.$router.push({ path: 'recharge_dispose' });
								}, 1000);
							}, 1000);
						} else {
							_this.close = true;
							_this.message = res.data.message;
							setTimeout(function() {
								_this.close = false;
							}, 1000);
						}
					})
					.catch(function(err) {
						console.log(err)
					});
			},
			closes() {
				if(this.$refs.pay.val.length > 0) {
					this.$refs.pay.val=[];
				}
				var _this = this;
				//配合使用
				clearInterval(window.countTime);
				var second = _this.second = 60;
				_this.countDown = second + "s后重新获取";
				this.isPay = !_this.isPay;
				//_this.times();
				//配合使用-end
			},
			getSecurit() {
				var _this=this;
				var money = _this.rMoney * 100;
				var formData = JSON.stringify({
					username: _this.username,
					amount: money,
				});
				_this.$http.post('/Product/User/recharge', {
						parameters: formData
					})
					.then(function(res) {
						if(res.data.end == 'ok') {
							_this.isPay = true;
							_this.times();
							_this.payType = res.data.type;
							_this.orderid = res.data.orderid;
//														if(_this.payType=="bf"){
//															_this.payTitle="宝付支付提供本次支付服务";
//														}else if(_this.payType=="yb"){
//															_this.payTitle="易宝支付提供本次支付服务";
//														}

						} else {
							_this.close = true;
							_this.message = res.data.message;
							setTimeout(function() {
								_this.close = false;
							}, 1000);
						}
					})
					.catch(function(err) {
						console.log(err)
					});
			},

			//			zhuFun: function() {
			//				this.$router.push({
			//					path: 'register',
			//					name: 'register',
			//				});
			//			},

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url("../../../assets/css/wechat/jc_reset.css");
	@import url("../../../assets/css/wechat/layout.css");
	@import url("../../../assets/css/wechat/reset_rem.css");
	@import url("../../../assets/css/wechat/revise_traders_pwd.css");
</style>