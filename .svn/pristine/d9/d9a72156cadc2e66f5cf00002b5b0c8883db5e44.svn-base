<template>
	<div class="revise_traders_pwd">
		<form @submit.prevent="submit">
			<div class="input-list">
				<div class="icommon">
					<label>原密码</label>
					<input class="password" type="password" v-model="user.oldpwd" maxlength="6" name="" value="" placeholder="输入原交易密码" @keyup="unNull"/>
					<span class="fr" @click="forgetFun()">忘记密码</span>
				</div>
				<div class="icommon"><label>新密码</label><input class="password" type="password" v-model="user.password" maxlength="6" name="" value="" placeholder="输入新交易密码"  @keyup="unNull"/></div>
				<div class="icommon"><label>确认密码</label><input class="password" type="password" v-model="user.pwd" maxlength="6" name="" value="" placeholder="再次输入新的交易密码"  @keyup="unNull"/></div>
			</div>
			<div class="normal">
				*交易密码由6位数字组成
			</div>
			<button :class="{loginBtn:loginBtn}" class="boolBtn" type="submit" :disabled="!loginBtn">提交</button>
		</form>

		<transition name="fade">
			<div class="welfare-close" v-if="close" style="margin-left: 0;">{{ message }} </div>
		</transition>
	</div>
</template>

<script>
	import reset_rem from "../../../assets/js/wechat/reset_rem.js";
	import {usernameKey,authKey,authName,usernameName} from '@/config/config.js'
	export default {
		name: 'revise_traders_pwd',
		data() {
			return {
				user: {
					oldpwd: '',
					password: '',
					pwd: '',
					phoneId: 'wx',
					username: '',
					type:'1'
				},
				message: '',
				close: false,
				loginBtn: false,
				//tips: false,
			}
		},
		created: function() {
			this.$nextTick(function () {
                require ('../../../assets/js/wechat/reset_rem.js');
            })
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
				if(!(/^\d{6}$/.test(_this.user.oldpwd))) {
					_this.close = true;
					_this.message = '密码必须为6位数字';
					_this.loginBtn = false;
					setTimeout(function() {
						_this.close = false;
						_this.loginBtn = true;
					}, 1000);
					return;
				}
				if(!(/^\d{6}$/.test(_this.user.password))) {
					_this.close = true;
					_this.message = '密码必须为6位数字';
					_this.loginBtn = false;
					setTimeout(function() {
						_this.close = false;
						_this.loginBtn = true;
					}, 1000);
					return;
				}
				if(_this.user.password!=_this.user.pwd) {
					_this.close = true;
					_this.message = '两次密码输入不一致';
					_this.loginBtn = false;
					setTimeout(function() {
						_this.close = false;
						_this.loginBtn = true;
					}, 1000);
					return;
				}
				_this.$http.post('Product/User/updatePwd', {
						parameters: formData
					})
					.then(function(res) {
						if(res.data.end == 'ok') {
							_this.close = true;
							_this.message = res.data.message;
							setTimeout(function() {
								_this.close = false;
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

			},
			forgetFun: function() {
				this.$router.push({
					name: 'reset_traders_pwd'
				});
			},
			unNull: function() {
				if(this.user.oldpwd.length==6&&this.user.password.length==6&&this.user.pwd.length==6){
					this.loginBtn=true;
				}else{
					this.loginBtn=false;
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