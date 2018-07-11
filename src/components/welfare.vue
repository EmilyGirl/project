<template>
	<div class="welfare">
		<ul>
			<li class="clearfix" v-for="(item,index) in items">
				<div class="welfare-left fl"><img :src="item.imgUrl"/></div>
				<div class="welfare-middle fl">
					<div class="txt-title">{{ item.title }}</div>
					<div class="txt-integral">积分+{{ item.score }}</div>
				</div>
				<div class="welfare-right fr" v-if="item.state == 0" @click="appBtn(item.keyword,'appBtn')">{{ item.buttonName }}</div>
				<div class="welfare-right fr" v-if="item.state == 1" :disabled="getBtn" @click="btnFun(item.keyword,'btnFun')">领取</div>
				<div class="welfare-right fr noBtn" v-if="item.state == 2" :disabled="noBtn">已完成</div>
				<div class="welfare-right fr noBtn" v-if="item.state == 3" :disabled="noBtn">已过期</div>
			</li>
			<transition name="fade">
				<div class="welfare-close" v-if="close">领取成功</div>
			</transition>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		data: function() {
			return {
				items: [],
				noBtn: false,
				close: false,
				getBtn: true
			}
		},
		created: function() {
			this.loadData();
		},
		methods: {
			loadData: function () {
				var _this = this;
				var auth = this.$route.query.auth;
				_this.$http.post('/Product/User/showWelfareTaskList', {
						parameters: '{"authorization":"'+ auth +'"}'
					})
					.then(function(res) {
						if(res.data.end == 'ok'){
							_this.items = res.data.list;
							
						}
					})
					.catch(function(err) {
						console.log(err)
				})
				
			},
			appBtn: function (keyword) {
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
		          	if (keyword == 1) {
		          		JSInterface.toMyInfo();  
		          		return;
		          	}
		          	if (keyword == 2) {
		          		JSInterface.toBindBankCard();  
		          		return;
		          	}
		          	if (keyword == 3 || keyword == 5 || keyword == 6 || keyword == 7 || keyword == 8 || keyword == 9) {
		          		JSInterface.toInvest();  
		          		return;
		          	}
		          	if (keyword == 4) {
		          		JSInterface.toRecharge();  
		          		return;
		          	}
		        }
		      	if(isIOS){
		      		if (keyword == 1) {
		          		loadURL("fengyelicai://btnPerson");
		            	return;
		          	}
		      		if (keyword == 2) {
		          		loadURL("fengyelicai://btnCardAuth");
		            	return;
		          	}
		      		if (keyword == 3 || keyword == 5 || keyword == 6 || keyword == 7 || keyword == 8 || keyword == 9) {
		          		loadURL("fengyelicai://btnInvest");
		            	return;
		          	}
		      		if (keyword == 4) {
		          		loadURL("fengyelicai://btnRecharge");
		            	return;
		          	}
		      	}
				
			},
			btnFun: function (keyword) {
				var _this = this;
				var auth = this.$route.query.auth;
				_this.getBtn = false;
				_this.$http.post('/Product/User/updateWelfareState', {
						parameters: '{"authorization":"'+ auth +'","keyword":"'+ keyword +'"}'
					})
					.then(function(res) {
						if(res.data.end == 'ok'){
							_this.close = true;
							setTimeout(function () {
								_this.close = false;
							},500);
							setTimeout(function () {
								_this.getBtn = true;
								location.reload()
							},1000);
						}
					})
					.catch(function(err) {
						console.log(err)
				})
			}
		}
	}	
</script>

<style>
	@import '../assets/css/help_center.css';
</style>