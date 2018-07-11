<template>
	<div class="revise_traders_pwd">
		<form @submit.prevent="submit">

			<div class="input-list">
				<div class="icommon"><label>新密码</label><input class="password" type="password" v-model="user.password" maxlength="6" name="" value="" placeholder="输入新交易密码" @keyup="unNull" /></div>
				<div class="icommon"><label>确认密码</label><input class="password" type="password" v-model="user.pwd" maxlength="6" name="" value="" placeholder="再次输入新的交易密码" @keyup="unNull" /></div>
				<div class="icommon">
					<label>验证码</label>
					<input class="password" type="text" v-model="user.yzm" maxlength="6" name="" value="" placeholder="输入短信验证码" @keyup="unNull" />
					<button class="getMa" @click.prevent="getYzm()" :disabled="findYzm">{{ codeTitle }}</button>
				</div>
			</div>
			<div class="normal">
				*交易密码由6位数字组成
			</div>
			<button :class="{loginBtn:loginBtn}" class="boolBtn" type="submit" :disabled="!loginBtn">提交</button>
		</form>

		<transition name="fade">
			<div class="welfare-close" v-if="close">{{ message }} </div>
		</transition>
	</div>
</template>

<script>
	import reset_rem from "../../../assets/js/wechat/reset_rem.js";
	import { usernameKey, authKey, authName, usernameName } from '@/config/config.js'
	export default {
		name: 'revise_login_pwd',
		data() {
			return {
				user: {
					yzm: '',
					user: '',
					password: '',
					pwd: '',
					phoneId: 'wx',
					username: '',
					type: '1'
				},
				message: '',
				close: false,
				loginBtn: false,
				//tips: false,
				codeTitle: '获取验证码',
				findYzm: false,
				yzm: '',
				name: '',
			}
		},
		created: function() {
			this.user.username = this.getxxx();
			
		},
		methods: {
			getxxx: function() {
				if(this.$getCookie(usernameName)) {
					return this.$decryptByDES(this.$getCookie(usernameName),this.$uncompile(usernameKey))
				}
			},
			submit: function() {
				var _this = this;
				var formData = JSON.stringify(_this.user); // 这里是你的表单数据
				//alert(formData);
				if(!(/^\d{6}$/.test(_this.user.yzm))) {
					_this.close = true;
					_this.message = '密码必须为6位数字';
					_this.loginBtn = false;
					setTimeout(function() {
						_this.close = false;
						_this.loginBtn = true;
					}, 1000);
					return;
				} else if(!(/^\d{6}$/.test(_this.user.password))) {
					_this.close = true;
					_this.message = '密码必须为6位数字';
					_this.loginBtn = false;
					setTimeout(function() {
						_this.close = false;
						_this.loginBtn = true;
					}, 1000);
					return;
				} else if(_this.user.password != _this.user.pwd) {
					_this.close = true;
					_this.message = '两次密码输入不一致';
					_this.loginBtn = false;
					setTimeout(function() {
						_this.close = false;
						_this.loginBtn = true;
					}, 1000);
					return;
				} else {
					var username = _this.user.username;
					_this.$http.post('/Product/findPwdYzmIsRight', {
							parameters: '{"username":"' + username + '","type":"3","apiVersion":"","phoneId":"wx","yzm":"' + _this.user.yzm + '"}'
						})
						.then(function(res) {
							if(res.data.end == 'ok') {
								_this.$http.post('/Product/findPwdUpdatePwd', {
										parameters: formData
									})
									.then(function(res) {
										if(res.data.end == 'ok') {
											var href = window.btoa(location.href)
											_this.close = true;
											_this.message = res.data.message;
											setTimeout(function() {
												_this.close = false;
												// location.replace(`/#/wechat/homepage/login?redirect=${href}`)
												_this.$router.push({name:'personal_data'});
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
				}

			},
			unNull: function() {
				if(this.user.yzm.length == 6 && this.user.password.length == 6 && this.user.pwd.length == 6) {
					this.loginBtn = true;
				} else {
					this.loginBtn = false;
				}
			},
			getYzm: function() {
				var _this = this;
				var username = _this.user.username;
				/*if(!(/^[1][345789][0-9]{9}$/.test(this.username))) {
					_this.close = true;
					_this.message = '用户名格式有误';
					_this.findYzm = true;
					setTimeout(function() {
						_this.close = false;
						_this.findYzm = false;
					}, 1000);
					return;
				}*/
				if(!(/^\d{6}$/.test(_this.user.password))) {
					_this.close = true;
					_this.message = '密码必须为6位数字';
					_this.loginBtn = false;
					setTimeout(function() {
						_this.close = false;
					}, 1000);
					return;
				} else if(_this.user.password != _this.user.pwd) {
					_this.close = true;
					_this.message = '两次密码输入不一致';
					_this.loginBtn = false;
					setTimeout(function() {
						_this.close = false;
					}, 1000);
					return;
				} else {
					_this.$http.post('/Product/findPwdSendYzm', {
							parameters: '{"username":"' + username + '","type":"3","apiVersion":"","phoneId":"wx"}'
						})
						.then(function(res) {
							if(res.data.end == 'ok') {

								var wait = 60;

								function time() {
									if(wait == 0) {
										_this.findYzm = false;
										_this.codeTitle = '获取验证码'
										wait = 60;
									} else {
										_this.findYzm = true;
										_this.codeTitle = wait + "s后获取"
										wait--;
										setTimeout(function() {
											time();
										}, 1000)
									}
								};
								time();
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
				}
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