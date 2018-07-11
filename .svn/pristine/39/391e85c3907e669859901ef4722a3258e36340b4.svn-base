<template>
	<div class="channel">
		<img src="../assets/img/channel_1.png"/>
		<!--<div class="endtime">
	         <zk-time-down @time-end="message = '倒计时结束'" :endTime='endTime'></zk-time-down>
	    </div>
	    <p class="jiezhi">截止时间:2018年02月20日</p>-->
	    <div class="invest-content">
	    	<img src="../assets/img/huibao.png"/>
	    	<p class="intitle">首投月标及以上标的 , 最高奖励725元</p>
	    	<table border="0">
	    		<tr>
					<th>投资金额</th>
					<th>现金返现</th>
					<th>新手现金卡</th>
					<th>理财收益</th>
					<th>总收益</th>
				</tr>
				<tr>
					<td>6000</td>
					<td>40</td>
					<td>800理财券</td>
					<td>46</td>
					<td>86</td>
				</tr>
				<tr>
					<td>12000</td>
					<td>80</td>
					<td>1500理财券</td>
					<td>91</td>
					<td>171</td>
				</tr>
				<tr>
					<td>30000</td>
					<td>200</td>
					<td>28</td>
					<td>230</td>
					<td>430</td>
				</tr>
				<tr>
					<td>50000</td>
					<td>350</td>
					<td>38</td>
					<td>375</td>
					<td>725</td>
				</tr>
	    		<!--<tr><td>200000</td><td>600</td><td>188</td><td>1538</td><td>2138</td></tr>-->
	    	</table>
	    	<p class="zhu">注：对于已参与本次返现活动的用户，将不能参与平台其他活动，用户投资之后，平台返现将在3个工作日内，发放至账户余额内。(此次返现只针对新注册并投资的用户)活动最终解释权归杭州卓韬网络科技有限公司所有。</p>
	    </div>
		<div id="register-have" class="zhujiang">
			<img class="zhuimg" src="../assets/img/youjiang.png"/>
			<div class="zhujiang-kuang">
				<div class="common">
					<input class="phone_icon" type="text" name="username" v-on:focus="focus()" @keyup="addChange()" maxlength="11" v-model="username" id="phoneNum" value="" placeholder="请输入手机号码" />
				</div>
				<div class="common yanz">
					<input class="yanz_icon" type="text" v-on:focus="focus()" @keyup="addChange()" v-model="smsValidateCode" name="smsValidateCode" id="smsValidateCode" value="" maxlength="6" placeholder="请输入短信验证码" />
					<button id="getValidateCode" :class="{ changeBg:change }" @click="gain()">获取验证码</button>
				</div>
				<div class="common">
					<input class="mima_icon" type="password" v-on:focus="focus()" @keyup="addChange()" name="password" id="password" v-model="password" value="" placeholder="请设置6位及以上登录密码" />
				</div>
				<div class="te"><button :class="{ gaol:add }" @click="new_register()" v-bind:disabled="disa">立即注册</button></div>
			</div>
		</div>
		<img style="margin-top: 17px;" src="../assets/img/channel_jia.png"/>
		<img class="zhubottom" src="../assets/img/channel_bottom.png"/>
		<!--注册成功显示-->
		<div v-if="mask1" class="mask1" @touchmove.prevent>
			<div class="mask1-content mask1-content-new">
				<img class="success" src="../assets/img/channel_a1.png"/>
				<img @click="close()" class="cha" src="../assets/img/copy2.png"/>
				<div @click="down()" class="new-down new-down-new">立即下载</div>
			</div>
		</div>
		<!--已注册的显示-->
		<div v-if="mask2" class="mask2" @touchmove.prevent>
			<div class="mask2-content mask2-content-new">
				<img class="yizhu" src="../assets/img/channel_a2.png"/>
				<img @click="close1()" class="cha1" src="../assets/img/copy2.png"/>
				<div @click="down()" class="ok ok-new">立即下载</div>
			</div>
		</div>
		<div class="warn-prompt" id="warn"></div>
	</div>
</template>

<script>
	import jquery from "../assets/js/jquery-1.11.2.min.js"
	import zkTimeDown from './zkTimeDown.vue'
	export default {
		name: 'hello',
		data: function() {
			return {
				mask1: false,
				mask2: false,
				disa: true,
				change: false,
				add: false,
            	endTime : '2018/02/20 23:59:59'
			}
		},
		components : {
	        zkTimeDown
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
				var u = navigator.userAgent;
				var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
				var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
				var wal = navigator.userAgent;
				var num = wal.toLocaleLowerCase().indexOf("micromessenger", 0);
				var ua = window.navigator.userAgent.toLowerCase();
				if (isiOS) {
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
					var pannel = document.getElementById("register-have");
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
						            o.text("重新发送");  
						            wait = 120;
						            _this.change = false;
						        } else {  
						        	_this.change = true;
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
			addChange: function () {
				var _this = this;
				var username = $("#phoneNum").val();
				var password1 =$("#password").val(); //密码
				var smsValidateCode=$("#smsValidateCode").val();
			    var reg3 = /^[0-9]{6}$/;
			    var test = new RegExp(/^\w{6,16}$/);
				if ((/^[1][345789][0-9]{9}$/.test(username)) && reg3.test(smsValidateCode) && (/^\w{6,16}$/.test(password1))) {
					_this.add = true;
					_this.disa = false;
				} else{
					_this.add = false;
					_this.disa = true;
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
//				_this.add = true;
				this.$http.post('/Product/phoneRegister',{
					parameters: '{"registPlatform":"'+ registPlatform +'","keyWord":"'+ keyWord +'","registChannel":"'+ registChannel +'","username":"'+ username +'","smsValidateCode":"'+ smsValidateCode +'","password":"'+ password1 +'"}'
					})
					.then(function(res) {
						
						if ("ok" == res.data.end) {
							_this.mask1 = true;
							_this.disa = true;
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