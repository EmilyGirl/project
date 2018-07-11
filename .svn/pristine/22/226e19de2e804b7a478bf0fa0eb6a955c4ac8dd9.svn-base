<template>
	<div class="new-wrapper">
		<img src="../assets/img/new1-1.png"/>
		<div id="move" class="register">
			<img src="../assets/img/new2.png"/>
			<!--<input type="hidden"  id="registPlatform" name="registPlatform" v-model="registPlatform" value="10">-->
			<div class="new-inp">
				<div class="common yanz"><input type="text" name="username" v-on:focus="focus()" maxlength="11" v-model="username" id="phoneNum" value="" placeholder="请输入手机号码" /><button id="getValidateCode" @click="gain()">获取验证码</button></div>
				<div class="common"><input type="text" v-on:focus="focus()" v-model="smsValidateCode" name="smsValidateCode" id="smsValidateCode" value="" maxlength="6" placeholder="请输入短信验证码" /></div>
				<div class="common"><input type="password" v-on:focus="focus()" name="password" id="password" v-model="password" value="" placeholder="请设置6位及以上登陆密码" /></div>
				<div class="te"><button @click="new_register()" v-bind:disabled="disa"><img src="../assets/img/new_btn1.png"/></button></div>
			</div>
		</div>			
		<img src="../assets/img/new3.png"/>
		<img src="../assets/img/new4.png"/>
		<div class="new-footer">
			<img src="../assets/img/new5-5.png"/>
			<img @click="down()" class="new_btn" src="../assets/img/new_btn.png"/>
		</div>
		<div v-if="mask1" class="mask1" @touchmove.prevent>
			<div class="mask1-content">
				<img class="success" src="../assets/img/success.png"/>
				<img @click="close()" class="cha" src="../assets/img/cha.png"/>
				<img @click="down()" class="new-down" src="../assets/img/new_down.png"/>
			</div>
		</div>
		<div v-if="mask2" class="mask2" @touchmove.prevent>
			<div class="mask2-content">
				<img class="yizhu" src="../assets/img/yizhu.png"/>
				<img @click="close1()" class="cha1" src="../assets/img/cha.png"/>
				<img @click="down()" class="ok" src="../assets/img/ok.png"/>
			</div>
		</div>
		<div class="warn-prompt" id="warn"></div>
	</div>
</template>

<script>
	import jquery from "../assets/js/jquery-1.11.2.min.js"
	
	export default {
		name: 'hello',
		data: function() {
			return {
				mask1: false,
				mask2: false,
				disa: false
			}
		},
		created: function() {
			(function(root) {
	            root._tt_config = true;
	            var ta = document.createElement('script'); ta.type = 'text/javascript'; ta.async = true;
	            ta.src = document.location.protocol + '//' + 's3.pstatp.com/bytecom/resource/track_log/src/toutiao-track-log.js';
	            ta.onerror = function () {
	                var request = new XMLHttpRequest();
	                var web_url = window.encodeURIComponent(window.location.href);
	                var js_url  = ta.src;
	                var url = '//ad.toutiao.com/link_monitor/cdn_failed?web_url=' + web_url + '&js_url=' + js_url + '&convert_id=68398080705';
	                request.open('GET', url, true);
	                request.send(null);
	            }
	            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ta, s);
	        })(window);
		},
		methods: {
			close: function () {
				this.mask1 = false;
				this.disa = false;
				location.reload();
			},
			close1: function () {
				this.mask2 = false;
				this.disa = false;
				location.reload();
			},
			warn_hide: function () {
				$("#warn").fadeOut(1000);
			},
			show_hide: function () {
				$("#warn").show();
				setTimeout(this.warn_hide,1000);	
			},
			down:function () {
				//系统判断
				var ua = window.navigator.userAgent.toLowerCase();
				var u = navigator.userAgent;
				var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
				var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
				if (isIOS) {
					window.location.href = "fengyelicai://";
					window.setTimeout(function() {
		                window.location.href = "https://itunes.apple.com/us/app/%E6%9E%AB%E5%8F%B6%E7%90%86%E8%B4%A2-%E9%AB%98%E6%94%B6%E7%9B%8A%E7%90%86%E8%B4%A2%E6%8A%95%E8%B5%84%E5%B9%B3%E5%8F%B0/id1252563418?mt=8";
		            }, 2000);
				}
				if (isAndroid) {
					this.downApp();
				}
				 
			},
			focus: function () {
				var _this = this;
				setTimeout(function () {
					var pannel = document.getElementById("move");
					pannel.scrollIntoView(true);
				},200);
			},
			gain: function () {
				var _this = this;
				var i = 120;
				var isGoIn = true;
				if(!isGoIn)
				return false;
				var username = $("#phoneNum").val();
				if(!(/^[1][345789][0-9]{9}$/.test(username))){
					$("#warn").text("手机号码格式错误");
					this.show_hide();
					return;
				} else{
					_this.$http.post('/Product/sendSMSMessage', {
						parameters: '{"userName":"'+ username +'"}'
					})
					.then(function(res) {
						if("exists"==res.data.end){
							_this.mask2 = true;
							isGoIn = true;
//							 alert("手机号码已被注册");
						}else if("ok"==res.data.end){
							var send = $("#getValidateCode")
							var wait=120;  
							function time(o) {  
						        if (wait == 0) {  
						            o.attr("disabled",false);            
						            o.text("获取验证码");  
						            wait = 120;
						        } else {  
						            o.attr("disabled",true);  
						            o.text("" + wait + "s");  
						            wait--;
						            setTimeout(function() {  
						                time(o);  
						            },  
						            1000)  
						        }
						    }
							time(send);
							$("#warn").text(res.data.message);
							_this.show_hide();
						 }else{
						 	$("#warn").text(res.data.message);
							_this.show_hide();
						 } 
						 return false;
					})
					.catch(function(err) {
						console.log(err)
					});
				}
			},
			new_register: function () {
				var registPlatform = this.$route.query.registPlatform;
				var keyWord = this.$route.query.keyWord;
				var registChannel = this.$route.query.registChannel;
				if (typeof(registPlatform) == 'undefined') {
					registPlatform = '';
				}
				if (typeof(keyWord) == 'undefined') {
					keyWord = '';
				}
				if (typeof(registChannel) == 'undefined') {
					registChannel = '';
				}
				var _this = this;
				var username = $("#phoneNum").val();
				var password1 =$("#password").val(); //密码
				var smsValidateCode=$("#smsValidateCode").val();
			    var reg3 = /^[0-9]{6}$/;
			    var test = new RegExp(/^\w{6,16}$/);
			    if(!(/^[1][345789][0-9]{9}$/.test(username))){
					$("#warn").text("手机号码格式错误");
					this.show_hide();
					return;
				}
				if(!reg3.test(smsValidateCode)){
					$("#warn").text("验证码格式有误");
					this.show_hide();
					return;
				}
				if(!(/^\w{6,16}$/.test(password1))){
					$("#warn").text("密码由6-16个字母、数字或下划线组成");
					this.show_hide();
					return;
				}
				this.$http.post('/Product/phoneRegister',{
					parameters: '{"registPlatform":"'+ registPlatform +'","keyWord":"'+ keyWord +'","registChannel":"'+ registChannel +'","username":"'+ username +'","smsValidateCode":"'+ smsValidateCode +'","password":"'+ password1 +'"}'
					})
					.then(function(res) {
						if ("ok" == res.data.end) {
							_this.mask1 = true;
							_this.disa = true;
							_taq.push({convert_id:"68398080705", event_type:"form"})
						} else if ("err" == res.data.end) {
							$("#warn").text(res.data.message);
							_this.show_hide();
						} else{
							$("#warn").text(res.data.message);
							_this.show_hide();
						}
					})
					.catch(function(err) {
						console.log(err)
				});
			}
		}
	}	
</script>

<style scoped>
	@import '../assets/css/main.css';
</style>