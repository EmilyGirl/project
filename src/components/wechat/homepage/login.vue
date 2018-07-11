<template>
	<div class="login_regiester">
		<form @submit.prevent="submit">
			<div class="input-list">
				<div class="logo">
					<img src="../../../assets/img/wechat/mine/log_bg.png"/>
				</div>
				<div class="icommon"><input type="text" name="" v-model="user.username" maxlength="11" value="" placeholder="请输入手机号码" /></div>
				<div class="icommon"><input class="password" :type="inputType" v-model="user.password" maxlength="16" name="" value="" placeholder="请输入登录密码" /><img @click="changeImg($event)" class="hide" :src="imgUrl"/></div>
			</div>
			<button class="loginBtn" type="submit" :disabled="loginBtn">登录</button>
		</form>
		<div class="login-bottom clearfix">
			<p class="fl" @click="zhuFun()">立即注册？</p>
			<p class="fr" @click="forgetFun()" style="color: #666;">忘记密码？</p>
		</div>
		<ul class="footer">
	        <li class="margintop20 AlginCenter">华盛达控股集团旗下互联网理财平台</li>
	        <li class="firstfont AlginCenter">A HSD Holding Group Company</li>
    	</ul>
		<transition name="fade">
			<div class="welfare-close" v-if="close">{{ message }} </div>
		</transition>
	</div>
</template>

<script>
import reset_rem from "../../../assets/js/wechat/reset_rem.js";
import hide from '../../../assets/img/wechat/mine/unviewable.png'
import show from '../../../assets/img/wechat/mine/visible.png'
import {usernameKey,authKey,authName,usernameName} from '@/config/config.js'
export default {
	name: 'register',
	data () {
	    return {
	    	user: {
	    		username: '',
	    		password: '',
	    		phoneSys: '',
	    		sysVersion: ''
	    	},
	    	inputType: 'password',
	    	imgUrl: hide,
	    	message: '',
	    	close: false,
	    	loginBtn: false
	    }
	},
	methods: {
		submit: function () {
			var _this = this;
			var formData = JSON.stringify(_this.user); //这里是你的表单数据
			if (!(/^[1][345789][0-9]{9}$/.test(this.user.username))) {
				_this.close = true;
				_this.message = '用户名格式有误';
				_this.loginBtn = true;
				setTimeout(function () {
					_this.close = false;
					_this.loginBtn = false;
				},1800);
				return;
			}
			if (!(/^\w{6,16}$/.test(_this.user.password))) {
				_this.close = true;
				_this.message = '密码至少为6位';
				_this.loginBtn = true;
				setTimeout(function () {
					_this.close = false;
					_this.loginBtn = false;
				},1800);
				return;
			}

			_this.$http.post('/Product/login', {
					parameters: formData
				})
				.then(function(res) {
					if(res.data.end == 'ok'){
						var auth = res.data.obj.authorization;
						var username = res.data.obj.username;

						//新加：设置 cookie  username 和 auth  :start
						_this.$setCookie(authName,_this.$encryptByDES(auth,_this.$uncompile(authKey)))
						_this.$setCookie(usernameName,_this.$encryptByDES(username,_this.$uncompile(usernameKey)))
						var link = _this.$router.history.current.query.redirect;
						if(link){
						  location.replace(window.atob(link))
						}else{
							_this.$router.push({
								path: 'wechat/home',
								name: 'home',
							});
						}
						//新加：设置 cookie  username 和 auth   :end
					} else if (res.data.end == 'error') {
						_this.close = true;
						_this.message = res.data.message;
						setTimeout(function () {
							_this.close = false;
						},1800);
					}
				})
				.catch(function(err) {
				
					console.log(err)
			});
			
		},
		changeImg: function (e) {
			if (this.inputType == 'password') {
				this.inputType = 'text';
				this.imgUrl = show;
			} else {
				this.inputType = 'password';
				this.imgUrl = hide;
			}
		},
		zhuFun: function () {
			this.$router.push({
				path: 'register',
				name: 'register',
			});
		},
		forgetFun: function () {
			this.$router.push({
				path: 'forget_password',
				name: 'forget_password'
			});
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.footer{
		margin-top: 2.4rem;
	}
	.footer li{
		line-height: 1.2rem;
		color: #989898;
    font-size: .8rem;
    text-align: center;
		
	}
	@import url("../../../assets/css/wechat/reset_rem.css");
	@import url('../../../assets/css/wechat/main.css');
</style>
