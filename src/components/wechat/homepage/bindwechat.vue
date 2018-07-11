<template>
	<div class="login_regiester">
				<div class="logo" style="padding:5rem 11.75rem 3rem 11.75rem">
					<img src="../../../assets/img/wechat/mine/log_bg.png"/>
				</div>
				
 		<div v-if='islogin'>
			<div class="tips">
				<p>您的微信尚未绑定集财账户</p>
				<p>是否与下面集财账户绑定</p>
			</div>	
			<p class="l_tell">{{phone}}</p>
			<button class="loginBtn" type="submit" @click = 'bind' :disabled="loginBtn">是的绑定</button>
			<button class="loginBtn" type="submit"  @click = 'islogin = false' style="background-color:#ccc">不，绑定其他集财账户</button>		
		</div>	
 		<div v-else>
 				<div class="tips">
					<p>尚未登录集财</p>
					<p>填写您的集财账户信息绑定当前微信</p>
				</div>
 			<form @submit.prevent="submit">	
					<div class="input-list">
					<div class="icommon"><input type="text" name="" v-model="user.username" maxlength="11" value="" placeholder="请输入手机号码" /></div>
					<div class="icommon"><input class="password" :type="inputType" v-model="user.password" maxlength="16" name="" value="" placeholder="请输入登录密码" /><img @click="changeImg($event)" class="hide" :src="imgUrl"/></div>
				</div>
				<button class="loginBtn" type="submit" :disabled="loginBtn">绑定</button>
			</form>
			<div class="login-bottom clearfix">
				<p class="fl" @click="zhuFun()">立即注册？</p>
				<p class="fr" @click="forgetFun()" style="color: #666;">忘记密码？</p>
		    </div>	
		</div>
		<transition name="fade">
			<div class="welfare-close" v-if="close">{{ message }} </div>
		</transition>
	</div>

	
</template>

<script>
import reset_rem from "../../../assets/js/wechat/reset_rem.js";
import hide from '../../../assets/img/wechat/mine/unviewable.png'
import show from '../../../assets/img/wechat/mine/visible.png'
import {usernameKey,authKey,authName,usernameName,appid,redirectUrl} from '@/config/config.js'
export default {
	name: 'register',
	data () {
	    return {
	    	islogin:false,
	    	user: {
	    		username: '',
	    		password: '',
	    		phoneSys: '',
	    		sysVersion: ''
	    	},
	    	phone:'',
	    	inputType: 'password',
	    	imgUrl: hide,
	    	message: '',
	    	close: false,
	    	loginBtn: false
	    }
	},
	created(){
		console.log(this.$http)
		let type = this.$route.query.type;
		if(type){
			switch(type)
			{
			case '0':
			  this.popup('请重新登录')
			  break;
			  case '2':
			  this.popup('该微信已绑定其他用户')
			  break;
			  case '3':
			  this.popup('绑定成功')
			  break;
			  case '4':
			  this.popup('系统出错，请稍后再试')
			  break;
			default:
			  this.popup('授权失败，请重新授权')
			}
		}
		if (this.$getCookie(authName)&&this.$getCookie(usernameName) && !type) {
			this.phone = this.$decryptByDES(this.$getCookie(usernameName),this.$uncompile(usernameKey)).replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
			this.isbind(function(self){
				self.islogin = true;
			})
		}else{
			this.islogin = false;
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
// 没有登录
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
						_this.isbind(_this.bind)
						// 判断是否绑定
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
		popup : function(msg = '请稍后再试'){
				this.close = true;
				this.message = msg;
				setTimeout( () =>{	
					this.close = false;
				},1800);
		},
		isbind:function(cb){
			var _this = this;
			_this.$http.post('/Product/wechat/isbind', {
					parameters: JSON.stringify({ 
						source: '集财圈儿',
                	})
				}).then(function(res){
					  if (res.data.end == 'ok' && res.data.data.isbind) {
							// 我的页面
							_this.$router.replace({
								path: '/wechat/homepage/mine',
							});	
						}else if(res.data.end == 'error' && res.data.message == "请先登录"){
							_this.$delCookie(authName);
							_this.$delCookie(usernameName);
							_this.islogin = false;
						}else{
							// 跳转到 微信授权页面】、=【；o10g01
							cb(_this)
						}
				}).catch(function(err) {
					console.log(err)
			});
		},
		bind:function(){
				var auth = this.$decryptByDES(this.$getCookie(authName),this.$uncompile(authKey))
				 var url= `${redirectUrl}?authorization=${auth}`
				location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${encodeURI(url)}&response_type=code&scope=snsapi_userinfo&state=1234#wechat_redirect`;	
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

<!-- Add "scoped" attribute to limit415肉3如3 CSS to this component only -->
<style scoped >

	.tips p{
		color: rgb(102, 102, 102);
		font-size: 1rem;
		line-height: 1.8rem;
		text-align: center;
	}
	.tips{
		padding-bottom: 1rem;
	}
	.l_tell{
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
		font-size: 2rem;
		height: 4.5rem;
		line-height: 4.5rem;
		text-align: center;
		color: rgb(102, 102, 102);
	}
	@import url("../../../assets/css/wechat/reset_rem.css");
	@import url('../../../assets/css/wechat/main.css');
</style>
