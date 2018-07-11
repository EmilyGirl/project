<template>
	<div class="experience-zhuan">
		<div class="experience-mask" v-if="maskShow" @touchmove.prevent>
			<div class="ex-content">
				<img src="../assets/img/tou_success.png"/>
				<img class="yi-zhu" @click="login()" src="../assets/img/yizhuce.png"/>
				<img class="chacha" @click="invest()" src="../assets/img/copy2.png"/>
				<div class="zhuBtn" @click="zhuBtn()">注册领钱</div>
			</div>
		</div>
		<img src="../assets/img/experience_2.png"/>
		<img class="guidance_zhuan" v-if="zhuanShow" src="../assets/img/yindao3.png"/>
		<div class="experience-footer" @click="zhuanBtn()">{{ content }}</div>
		<div class="experience_water" v-if="waterShow" @click="zhuanBtn()">
			<div class="water-wai">
				<div class="water-nei"></div>
			</div>
		</div>
	</div>
</template>

<script>
	
	export default {
		name: 'hello',
		data: function() {
			return {
				content: '',
				maskShow: false,
				zhuanShow: true,
				waterShow: true
			}
		},
		created: function() {
			this.load(); //定义方法
		},
		methods: {
			load: function () {
				var _this = this;
				_this.content = "转入";
				setTimeout(function () {
					_this.content = "已转入";
					_this.maskShow = true;
					_this.zhuanShow = false;
					_this.waterShow = false;
				},3000);
			},
			zhuanBtn: function () {
				var _this = this;
				_this.content = "已转入";
				_this.maskShow = true;
				_this.zhuanShow = false;
				_this.waterShow = false;
			},
			zhuBtn: function () {
				var u = navigator.userAgent;
				var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
				var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
				function loadURL(url) {
				    var iFrame;
				    iFrame = document.createElement("iframe");
				    iFrame.setAttribute("src", url);
				    iFrame.setAttribute("style", "display:none;");
				    iFrame.setAttribute("height", "0px");
				    iFrame.setAttribute("width", "0px");
				    iFrame.setAttribute("frameborder", "0");
				    document.body.appendChild(iFrame);
				    iFrame.parentNode.removeChild(iFrame);
				    iFrame = null;
			    }
				if(isIOS){
				    loadURL("fengyelicai://btnRegister");
				    return;
			    }
			    if(isAndroid){
				    JSInterface.toRegisterOfMoney();  
				    return;
			    }
			},
			login: function () {
				var u = navigator.userAgent;
				var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
				var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
			    if(isIOS){
			        loadURL("fengyelicai://btnLogin");
			        return;
			    }
			    if(isAndroid){
				    JSInterface.toLogin();  
				    return;
			    }
				function loadURL(url) {
				    var iFrame;
				    iFrame = document.createElement("iframe");
				    iFrame.setAttribute("src", url);
				    iFrame.setAttribute("style", "display:none;");
				    iFrame.setAttribute("height", "0px");
				    iFrame.setAttribute("width", "0px");
				    iFrame.setAttribute("frameborder", "0");
				    document.body.appendChild(iFrame);
				    iFrame.parentNode.removeChild(iFrame);
				    iFrame = null;
			    }
			},
			invest: function () {
				var u = navigator.userAgent;
				var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
				var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
				function loadURL(url) {
				    var iFrame;
				    iFrame = document.createElement("iframe");
				    iFrame.setAttribute("src", url);
				    iFrame.setAttribute("style", "display:none;");
				    iFrame.setAttribute("height", "0px");
				    iFrame.setAttribute("width", "0px");
				    iFrame.setAttribute("frameborder", "0");
				    document.body.appendChild(iFrame);
				    iFrame.parentNode.removeChild(iFrame);
				    iFrame = null;
			    }
				if(isAndroid){
		          	JSInterface.toInvest();
		          	return;
		        }
		      	if(isIOS){
		          	loadURL("fengyelicai://btnInvest");
		            return;
		      	}
			}
		}
	}	
</script>

<style>
	@import '../assets/css/help_center.css';
</style>