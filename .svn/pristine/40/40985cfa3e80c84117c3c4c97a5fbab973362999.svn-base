<template>
	<div id="personal" class="personal">
		<section id="ml_block1" class="ml_block ml_block1">
			<ul>
				<li class="ml_block_list">
					<div class="name">
						手机号
					</div>
					<div>
						<span class="zichan">{{phone}}</span>
					</div>
				</li>
				<li class="ml_block_list">
					<div class="name">
						姓名
					</div>
					<div>
						<span class="zichan">{{ username }}</span>
					</div>
				</li>
				<li class="ml_block_list">
					<div class="name">
						身份证号
					</div>
					<div>
						<span class="zichan">{{ID_NO}}</span>
					</div>
				</li>
				<li class="ml_block_list" @click="payShow()">
					<div class="name">
						交易密码
					</div>
					<div>
						{{trad_pwd}}<img src="../../../assets/img/wechat/mine/right.png" />
					</div>
				</li>
			</ul>
		</section>
		<section id="ml_block2" class="ml_block ml_block2">
			<ul>
				<li class="ml_block_list" @click="toLogin">
					<div class="name">
						登录密码
					</div>
					<div>
						{{log_pwd}}<img src="../../../assets/img/wechat/mine/right.png" />
					</div>
				</li>

			</ul>
		</section>
		<double-show-keyboard :isPay='isPay' @pas-end='pasEnd' @close='close' ref="pay" :countDown='countDown' :securityBtnCan='securityBtn' :payTitle='payTitle'></double-show-keyboard>
		<transition name="fade">
			<div class="welfare-close" v-if="closes">{{ message }} </div>
		</transition>
	</div>
</template>

<script>
	import reset_rem from "../../../assets/js/wechat/reset_rem.js";
	import { usernameKey, authKey, authName, usernameName } from '@/config/config.js';
	import doubleShowKeyboard from "../../../assets/js/wechat/double-show-keyboard.js";
	export default {
		name: 'personal',
		data() {
			return {
				phone: '',
				username: '',
				ID_NO: '',
				trad_pwd: '未设置',
				log_pwd: '修改',
				renzheng: '',
				payTitle: '设置6位交易密码',
				isBindBank: '',
				isPay: false,
				countDown: '60s后重新获取',
				countBool: false,
				second: 60,
				preventTime: true,
				securityBtn: true,
				count: 0,
				data1: '',
				data2: '',
				closes: false,
			}
		},
		created: function() {
			var _this = this;
			_this.phone = _this.$decryptByDES(_this.$getCookie(usernameName),_this.$uncompile(usernameKey));
			var isBindBank;
			var isPayPwd;
			_this.$http.post('/Product/User/showMyAccountNew', {
					parameters: '{}'
				})
				.then(function(res) {
					if(res.data.end == 'ok') {
							isBindBank = res.data.obj.isBindBank;
							isPayPwd = res.data.obj.isPayPwd;
							if(isBindBank != '1') {
								_this.username = "未认证";
								_this.ID_NO = "未认证";

							} else {
								_this.phone = _this.$decryptByDES(_this.$getCookie(usernameName),_this.$uncompile(usernameKey));
								_this.username = res.data.list[0].name;
								_this.ID_NO = res.data.list[0].idcard;

							}
							if(isPayPwd != "yes") {
								_this.trad_pwd = "未设置";
							} else {
								_this.trad_pwd = "修改";
							}

						//console.log(_this.user);
					} else if(res.data.end == 'noLogin') {
						_this.message = res.data.message;
						_this.closes = true;
						setTimeout(function() {
							_this.closes = false;
						}, 1000);
					}
				})
				.catch(function(err) {
					console.log(err)
				});


		},
		methods: {
			payShow() {
				if(this.trad_pwd == "未设置") {
					this.isPay = true;
					var _this = this;
					//					_this.times();
					this.$refs.pay.countBool = _this.countBool;//取消发送按钮
				} else {
					this.$router.push({
						path: '/wechat/subpage/revise_traders_pwd',
					});
				}

			},
			//			times() {
			//				var _this = this;
			//				var wait = _this.second;
			//				function time() {
			//					if(wait == 0) {
			//						clearInterval(window.countTime);
			//						_this.securityBtn = false;
			//						_this.countDown = '重新发送'
			//						wait = _this.second;
			//					} else {
			//						_this.securityBtn = true;
			//						_this.$refs.pay.securitBtnCan(_this.securityBtn);
			//						wait--;
			//						_this.countDown = wait + "s后重新获取"
			//
			//					}
			//				};
			//				window.countTime = setInterval(time, 1000);
			//			},
			pasEnd(val) {
				var _this = this;
				var data1, data2;

				//console.log(val); //得到密码 可能会进行一些加密动作
//				setTimeout(() => { // 模拟请求接口验证密码中 ..
//					//					if(true) { // 密码正确
//					this.$refs.pay.$payStatus(false) // 拿到子组件的事件
//					//this.$refs.pay.isPay=!this.isPay;
//					//alert("success");
//					//					} else {
//					//						this.$refs.pay.$payStatus(false)
//					//					}
//				}, 1000);

				if(_this.count == 0) {
					_this.data1 = val;
					_this.count++;
					_this.$refs.pay.payStatusMsg("","提交成功,请确认密码");
					setTimeout(() => { // 模拟请求接口验证密码中 ..
						_this.payTitle = "请确认交易密码";
						_this.$refs.pay.$payStatus(false) // 拿到子组件的事件
					}, 800);
					_this.message = "提交成功,请确认密码";
					_this.closes = true;
					setTimeout(function() {
						_this.closes = false;
					}, 1000);
				} else {

					_this.data2 = val;
					if(_this.data1 != _this.data2) {
						//alert("两次密码输入不一致,请重新输入");
						_this.$refs.pay.payStatusMsg("","两次密码输入不一致,请重新输入");
						setTimeout(() => { // 模拟请求接口验证密码中 ..
							_this.$refs.pay.$payStatus(false) // 拿到子组件的事件
						}, 800);
						_this.message = "两次密码输入不一致,请重新输入";
						_this.closes = true;
						setTimeout(function() {
							_this.closes = false;
						}, 1000);
						
						_this.count = 0;
						_this.data2 = '';
						_this.payTitle = "设置6位交易密码"
					} else {
						_this.$http.post('/Product/User/updatePayPwd', {
								parameters: '{"password":' + _this.data1 + ',"pwd":' + _this.data2 + ',"username":' + _this.phone + '}'
							})
							.then(function(res) {
								if(res.data.end == 'ok') {
									_this.closes = true;
									_this.message = res.data.message;
									_this.$refs.pay.payStatusMsg("交易密码设置成功","");
									setTimeout(() => { // 模拟请求接口验证密码中 ..
										_this.$refs.pay.$payStatus(true); // 拿到子组件的事件
										setTimeout(function() {
											_this.isPay = false;
											_this.closes = false;
											_this.data1 = '';
											_this.data2 = '';
										},1800);
									}, 1000);
									_this.trad_pwd = "修改";
									//console.log(_this.user);
								} else if(res.data.end == 'noLogin') {
									_this.message = res.data.message;
									_this.closes = true;
									setTimeout(function() {
										_this.closes = false;
									}, 1000);
								}
							})
							.catch(function(err) {
								console.log(err)
							});

					}

				}
//				console.log("data1:" + _this.data1);
//				console.log("data2:" + _this.data2);

			},
			close() {
				var _this = this;
				if(this.$refs.pay.val.length > 0) {
					this.$refs.pay.val=[];
				}
				//配合使用
				this.isPay = !_this.isPay;
				clearInterval(window.countTime);
				var second = _this.second = 60;
				_this.countDown = second + "s后重新获取"
				//_this.times();
				//配合使用-end
			},
			toLogin(){
				this.$router.push({
					path: '/wechat/subpage/revise_login_pwd',
				});
			}
		}
	}
</script>

<style scoped>
	@import url("../../../assets/css/wechat/jc_reset.css");
	@import url("../../../assets/css/wechat/reset_rem.css");
	@import url("../../../assets/css/wechat/layout.css");
	@import url("../../../assets/css/wechat/mine.css");
</style>