<template>
	<div class="login_regiester">
		<div v-if="show">
			<div class="input-list">
				<div class="logo">
					<img src="../../../assets/img/wechat/mine/log_bg.png"/>
				</div>
				<div class="icommon"><input type="text" name="" v-model="username" maxlength="11" value="" placeholder="请输入手机号码" /></div>
				<div class="icommon"><input type="text" name="" v-model="yzm" maxlength="6" value="" placeholder="请输入验证码" /><button class="getMa" @click.prevent="getYzm()" :disabled="findYzm">{{ codeTitle }}</button></div>
				<div class="icommon"><input type="text" v-model="inviteId" name="" value="" placeholder="请输入邀请码（选填）" /></div>
				<div class="icommon"><input class="password" type="password" v-model="password" name="" value="" placeholder="请设置登录密码" /></div>
				<div class="icommon"><input class="password" type="password" v-model="pwd" name="" value="" placeholder="请重复登录密码" /></div>
			</div>
			<!--<button class="registerBtn" @click.prevent="nextFun()">下一步</button>-->
			<button class="registerBtn" @click="nextFun()">注册</button>
			<p class="ser-res">注册即表示您同意
				<router-link to="/app_terminal/use_agreement">《集财理财注册协议》</router-link>
			</p>
		</div>
		<!--<div v-if="hide">
			<div class="input-list">
				<div class="icommon"><img src="../../../assets/img/wechat/mine/password.png" /><input class="password" type="password" v-model="password" name="" value="" placeholder="请设置登录密码" /></div>
				<div class="icommon"><img src="../../../assets/img/wechat/mine/password.png" /><input class="password" type="password" v-model="pwd" name="" value="" placeholder="请重复登录密码" /></div>
			</div>
			<button class="registerBtn" @click="loginFun()">登录</button>
		</div>-->
		<transition name="fade">
			<div class="welfare-close" v-if="close">{{ message }} </div>
		</transition>
	</div>
</template>

<script>
import reset_rem from "../../../assets/js/wechat/reset_rem.js";
	export default {
		name: 'register',
		data() {
			return {
				username: '',
				yzm: '',
				inviteId: '',
				close: false,
				findYzm: false,
				codeTitle: '获取验证码',
				show: true,
				hide: false,
				password: '',
				pwd: '',
				yzmIsRight:false,
			}
		},
		methods: {
			loginFun: function() {
				var _this = this;
				// _this.nextFun();
				var pwd = _this.pwd;
				var password = _this.password;
				var username = _this.username;
				
				var yzm = _this.yzm;
				if(!(/^[1][345789][0-9]{9}$/.test(this.username))) {
					_this.close = true;
					_this.message = '用户名格式有误';
					_this.findYzm = true;
					setTimeout(function() {
						_this.close = false;
						_this.findYzm = false;
					}, 1800);
					return;
				};
				if(!/^[0-9]{6}$/.test(this.yzm)) {
					_this.close = true;
					_this.message = '验证码格式有误';
					_this.findYzm = true;
					setTimeout(function() {
						_this.close = false;
						_this.findYzm = false;
					}, 1800);
					return;
				}
				
				if(!(/^\w{6,16}$/.test(this.password))) {
					_this.close = true;
					_this.message = '密码至少为6位';
					_this.loginBtn = true;
					setTimeout(function() {
						_this.close = false;
						_this.loginBtn = false;
					}, 1800);
					return;
				}
				if(this.password != this.pwd) {
					_this.close = true;
					_this.message = '密码不一致';
					setTimeout(function() {
						_this.close = false;
					}, 1800);
					return;
				};
				if(!_this.yzmIsRight){
					_this.close = true;
//					_this.message = '验证码错误';
					setTimeout(function() {
						_this.close = false;
					}, 1800);
					return;
				}
				_this.$http.post('/Product/phoneRegisterUser', {
						parameters: '{"username":"' + username + '","type":"0","apiVersion":"","phoneId":"wx23a7bffb625dc3de","pwd":"' + pwd + '","password":"' + password + '","registPlatform":"3","channel":"wechat"}'
					})
					.then(function(res) {
						if(res.data.end == 'ok') {
							_this.close = true;
							_this.message = res.data.message;
							setTimeout(function() {
								_this.close = false;
							}, 1800);
							_this.$router.push({
								path: '/wechat/homepage/login',
							});
						} else if(res.data.end == 'error') {
							_this.close = true;
							_this.message = res.data.message;
							setTimeout(function() {
								_this.close = false;
							}, 1800);
						}
					})
					.catch(function(err) {
						console.log(err)
					});
			},
			getYzm: function() {
				var _this = this;
				var username = _this.username;
				if(!(/^[1][345789][0-9]{9}$/.test(this.username))) {
					_this.close = true;
					_this.message = '请输入正确上的手机号码';
					_this.findYzm = true;
					setTimeout(function() {
						_this.close = false;
						_this.findYzm = false;
					}, 1800);
					return;
				}
				_this.$http.post('/Product/findPwdSendYzm', {
						parameters: '{"username":"' + username + '","type":"1","apiVersion":"","phoneId":"wx23a7bffb625dc3de"}'
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
							_this.close = true;
							_this.message = res.data.message;
							setTimeout(function() {
								_this.close = false;
							}, 1800);
						}else{
							_this.close = true;
							_this.message = res.data.message;
							setTimeout(function() {
								_this.close = false;
							}, 1800);
						}
					})
					.catch(function(err) {
						console.log(err)
					});
					
			},
			nextFun: function() {
				var _this = this;
				var username = _this.username;
				var yzm = _this.yzm;

				if(!(/^[1][345789][0-9]{9}$/.test(this.username))) {
					_this.close = true;
					_this.message = '用户名格式有误';
					_this.findYzm = true;
					setTimeout(function() {
						_this.close = false;
						_this.findYzm = false;
					}, 1800);
					return;
				};

					if(!/^[0-9]{6}$/.test(this.yzm)) {
					_this.close = true;
					_this.message = '验证码格式有误';
					_this.findYzm = true;
					setTimeout(function() {
						_this.close = false;
						_this.findYzm = false;
					}, 1800);
					return;
				}
				_this.$http.post('/Product/findPwdYzmIsRight', {
						parameters: '{"username":"' + username + '","type":"1","apiVersion":"","phoneId":"wx23a7bffb625dc3de","yzm":"' + yzm + '"}'
					})
					.then(function(res) {
						if(res.data.end == 'ok') {
							_this.yzmIsRight=true;
							// _this.close = true;
							// _this.message = res.data.message;
							// setTimeout(function() {
							// 	_this.close = false;
							// }, 1800);
							_this.loginFun()

						} else if(res.data.end == 'error') {
							_this.yzmIsRight=false;
							_this.close = true;
							_this.message = res.data.message;
							setTimeout(function() {
								_this.close = false;
							}, 1800);
						}
					})
					.catch(function(err) {
						console.log(err)
					});
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url("../../../assets/css/wechat/reset_rem.css");
	@import url('../../../assets/css/wechat/main.css');
</style>