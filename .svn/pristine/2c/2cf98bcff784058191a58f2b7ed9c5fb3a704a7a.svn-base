<template>
	<div class="bind-bank">
		<div class="fu-mask" v-if="fuclose">
			<div class="fu-content">
				<ul class="mode">
					<li v-for="(banklist, bank) in banklists" @click="bankClickFun(banklist)">
						<img class="fl balance" :src="banklist.logoUri" />
						<div class="fl fu-middle">
							<p class="yu-common">{{ banklist.bankName }}</p>
							<p class="money-common">{{ banklist.bankNote }}</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="bind-top bind-common clearfix">
			<div class="fl">绑定银行卡</div>
			<div class="fr" @click="xiane">限额说明</div>
		</div>
		<form @submit.prevent="submit">
			<div class="bind-middle">
				<ul>
					<li class="clearfix">
						<div class="left-common fl">持卡人</div>
						<div class="right-common fl"><input type="" name="" id="" v-model="user.id_holder" value="" placeholder="请输入持卡人姓名" /></div>
					</li>
					<li class="clearfix">
						<div class="left-common fl">身份证号</div>
						<div class="right-common fl"><input type="" name="" id="" v-model="user.id_card" value="" maxlength="18" placeholder="请输入身份证号" /></div>
					</li>
					<li class="clearfix" @click="bankFun()">
						<div class="left-common fl">银行</div>
						<div class="fl choice">{{ bankname }}</div>
						<input type="hidden" name="" v-model="user.bankCode" id="" value="" />
						<img class="fr right-icon" src="../../../assets/img/wechat/product/right.png" /></span>
					</li>
					<li class="clearfix">
						<div class="left-common fl">卡号</div>
						<div class="right-common fl"><input type="" name="" id="" v-model="user.acc_no" value="" maxlength="19" placeholder="用于出借的银行卡号" /></div>
					</li>
				</ul>
				<div class="bind-front">
					绑定前请先确认卡类型，非Ⅰ类卡会有交易限制 <img src="../../../assets/img/wechat/product/tip.png"/>
				</div>
			</div>
			<div class="bind-title">绑卡验证</div>
			<div class="bind-bottom">
				<ul>
					<li class="clearfix">
						<div class="left-common fl">手机号</div>
						<div class="right-common fl"><input type="" name="" id="" :value="user.username" maxlength="11" readonly="readonly" /></div>
					</li>
					<!--<li class="clearfix">
						<div class="left-common fl">验证码</div>
						<div class="right-common bottom-right fl"><input type="" name="" id="" v-model="validatecode" maxlength="6" value="" placeholder="请输入验证码" /></div>
						<input class="fl inputma" type="submit" name="" :disabled="findYzm" id="" :value="codeTitle" />
					</li>-->
				</ul>
			</div>
		</form>
		<div class="ment1"><!--<img v-if="lock" @click="lock=!lock,unlock=!unlock" src="../../../assets/img/wechat/product/lock.png"/><img v-if="unlock" @click="unlock=!unlock,lock=!lock" src="../../../assets/img/wechat/product/unlock.png"/>阅读并同意 <router-link to="">《XXX账户服务三方协议》</router-link> 和 <router-link to="">《用户授权协议》</router-link>--></div>
		<transition name="fade">
			<div v-if="close" class="prompt">{{ message }}</div>
		</transition>
		<button v-if="!fuclose"  class="btnBottom" type="submit" @click="submit()">确认绑定</button>
		<vue-pay-keyboard :isPay='isPay' @pas-end='pasEnd' @close='closeFun' ref="pay" :countDown='countDown' :payTitle='payTitle' @get-securit='getSecurit' :securityBtnCan='securityBtn'></vue-pay-keyboard>
	</div>
</template>

<script>
	import reset_rem from "../../../assets/js/wechat/reset_rem.js";
	import {usernameKey,authKey,authName,usernameName} from '@/config/config.js'
	export default {
		name: 'hello',
		data: function() {
			return {
				message: '',
				lcqx: '',
				lock: true,
				unlock: false,
				close: false,
				set: false,
				user: {
					id_holder: '',
					id_card: '',
					acc_no: '',
					username: '',
					bankCode: '',
				},
				banklists: [],
				fuclose: false,
				bankname: '请选择银行',
				validatecode: '',
				requestid: '',
				codeTitle: '获取验证码',
				findYzm: false,
				countDown: '60s后重新获取',
				payTitle: '',
				securityBtn: true,
				isPay: false,
				second: 60,
				preventTime: true,
				countBool: true
			}
		},
		created: function () {
			this.user.username = this.getxxx();
		},
		methods: {
			getxxx: function() {
				if(this.$getCookie(usernameName)) {
					return this.$decryptByDES(this.$getCookie(usernameName),this.$uncompile(usernameKey))
				}
			},
			submit: function () {
				var _this = this;
				if (_this.user.id_holder == '') {
					_this.close = true;
					_this.message = '请输入持卡人姓名';
					setTimeout(function () {
						_this.close = false;
					},2000);
				} else if (_this.user.id_card == '') {
					_this.close = true;
					_this.message = '请输入身份证号';
					setTimeout(function () {
						_this.close = false;
					},2000);
				} else if (_this.user.bankCode == '') {
					_this.close = true;
					_this.message = '请选择银行';
					setTimeout(function () {
						_this.close = false;
					},2000);
				} else if (_this.user.acc_no == '') {
					_this.close = true;
					_this.message = '请输入银行卡号';
					setTimeout(function () {
						_this.close = false;
					},2000);
				} else if (_this.unlock == true) {
					_this.close = true;
					_this.message = '请阅读或同意 《XXX账户服务三方协议》和《用户授权协议》';
					setTimeout(function () {
						_this.close = false;
					},2000);
				} else {
//					var auth = 'authorization';
//					var value = '83b728a1-06c2-4a66-89e1-a6fbf082f1b6';
//					this.user[auth] = value;
					var formData = JSON.stringify(this.user);
					_this.$http.post('/Product/User/bindCard', {
						parameters: formData
					})
					.then(function(res) {
						if(res.data.end == 'ok') {
							_this.isPay = true;
							_this.times();
							_this.payTitle = '请输入验证码';
							_this.close = true;
							_this.message = res.data.message;
							setTimeout(function () {
								_this.close = false;
							},2000);
							_this.requestid = res.data.requestid;
						} else {
							_this.close = true;
							_this.message = res.data.message;
							setTimeout(function () {
								_this.close = false;
							},2000);
						}
					})
					.catch(function(err) {
						console.log(err)
					})
				}
			},
			times: function () {
				var _this = this;
				var wait = _this.second;
				this.$refs.pay.countBool = _this.countBool;

				function time() {
					if(wait == 0) {
						clearInterval(window.countTime);
						_this.securityBtn = false;
						_this.countDown = '重新发送'
						wait = _this.second;
					} else {
						_this.securityBtn = true;
						wait--;
						_this.countDown = wait + "s后重新获取"

					}
				};
				window.countTime = setInterval(time, 1000);
			},
			pasEnd(val) {
				var _this = this;
				_this.validatecode = val;
				_this.confirmFun();
				console.log(_this.validatecode); //得到密码 可能会进行一些加密动作
				
			},
			closeFun() {
				if(this.$refs.pay.val.length > 0) {
		        	this.$refs.pay.val=[];
		        }
				var _this = this;

				//配合使用
				_this.isPay = !_this.isPay;
				clearInterval(window.countTime);
				var second = _this.second = 60;
				_this.countDown = second + "s后重新获取"
				//_this.times();
				//配合使用-end
			},
			getSecurit() {
				this.submit();
			},
			confirmFun: function () {
				var _this = this;
				var validatecode = 'code';
				var value = _this.validatecode;
				var requestid = 'requestid';
				var value1 = _this.requestid;
				_this.user[validatecode] = value;
				_this.user[requestid] = value1;
				var formData = JSON.stringify(_this.user);
				_this.$http.post('/Product/User/bindcard/confirm', {
					parameters: formData
				})
				.then(function(res) {
					if(res.data.end == 'ok') {
						
						_this.close = true;
						_this.message = res.data.message;
						setTimeout(function () {
							_this.$refs.pay.$payStatus(true);
							_this.close = false;
							_this.$router.push({path:'/wechat/homepage/mine'});
						},2000);
					} else {
						
						_this.close = true;
						_this.message = res.data.message;
						setTimeout(function () {
							_this.$refs.pay.$payStatus(false);
							_this.close = false;
						},2000);
					}
				})
				.catch(function(err) {
					console.log(err)
				})
					
			},
			bankFun: function () {
				var _this = this;
				_this.fuclose = true;
				_this.$http.post('/Product/bankList', {
					parameters: '{}'
				})
				.then(function(res) {
					if(res.data.end == 'ok') {
						_this.banklists = res.data.list;
					}
				})
				.catch(function(err) {
					console.log(err)
				})
			},
			bankClickFun: function (banklist) {
				this.fuclose = false;
				this.user.bankCode = banklist.bankCode;
				this.bankname = banklist.bankName;
			},
			xiane(){
				this.$router.push({path:'/app_terminal/quota'});
			},
		}
	}
</script>

<style scoped>
	@import url("../../../assets/css/wechat/reset_rem.css");
	@import url("../../../assets/css/wechat/bind_bank.css");
</style>