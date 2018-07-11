<template>
	<div class="year_end">
		<img src="../assets/img/year_end1.png" alt="" />
		<img src="../assets/img/year_end2.jpg" alt="" />
		<div class="year_end3">
			<div class="yEnd">结束倒计时：<zk-time-down @time-end="message = '活动已结束'" :endTime='endTime'></zk-time-down></div>
			<img src="../assets/img/year_end3.png" alt="" />
		</div>
		<div class="yearDu">
			<img src="../assets/img/year_end4.png" alt="" />
			<img src="../assets/img/year_end5.png" alt="" />
			<img src="../assets/img/year_end6.png" alt="" />
			<img src="../assets/img/year_end7.png" alt="" />
			<div class="du-content">
				<p class="yeartitle">*仅限季标和双季标</p>
				<div class="jinImg">
					<div class="fanwei clearfix">
						<img class="fanwei_1 fl" src="../assets/img/fanwei_1.png"/>
						<img class="fanwei_2 fl" src="../assets/img/fanwei_2.png"/>
						<img class="fanwei_3 fl" src="../assets/img/fanwei_3.png"/>
						<img class="fanwei_4 fl" src="../assets/img/fanwei_4.png"/>
					</div>
				</div>
				<img id="conImg" src="../assets/img/content.png"/>
				<div class="local" v-if="totalMoney<10000000" :style="{ left:totalMoney/150000 + '%' }" :class="[ totalMoney>7500000?'leftCon ':'',]">
					<div class="localCon">
						<img src="../assets/img/jindu.png"/>
						<span>当前累计投资额<br />¥{{ totalMoney }}</span>
					</div>
				</div>
				<div class="local" v-if="(totalMoney>10000000 || totalMoney==10000000)" style="left: 100%;" :class="[ totalMoney>7500000?'leftCon ':'',]">
					<div class="localCon">
						<img src="../assets/img/jindu.png"/>
						<span>当前累计投资额<br />¥{{ totalMoney }}</span>
					</div>
				</div>
			</div>
		</div>
		<div class="year_end8">
			<img src="../assets/img/year_end8.png" alt="" />
			<img src="../assets/img/year_end9.png" alt="" />
			<img src="../assets/img/year_end10.png" alt="" />
			<div class="ulCont">
				<ul class="clearfix">
					<li class="fl fircom">排名</li>
					<li class="fl fircom">姓名</li>
					<li class="fl lascom">手机号</li>
					<li class="fl lascom">投资金额</li>
				</ul>
				<ul class="clearfix" v-for="(item,index) in items">
					<li class="fl fircom"><img :src="'../../static/img/end_'+ index +'.png'"/></li>
					<li class="fl fircom">{{ item.realName }}</li>
					<li class="fl lascom">{{ item.phoneNum }}</li>
					<li class="fl lascom">{{ item.money }}</li>
				</ul>
			</div>
		</div>
		<img src="../assets/img/year_end11.png" alt="" />
		<img src="../assets/img/year_end12.png" alt="" style="margin: 0;" />
		<div class="year-share clearfix">
			<button id="goBtn" class="year-common fl" v-bind:disabled="dis" v-tap="{methods :share}"><img src="../assets/img/end_btn1.png"/></button>
			<button class="year-common fl" @click="gouBtn()"><img src="../assets/img/end_btn2.png"/></button>
			<div class="invit-close" v-if="close">{{ message }}</div>
		</div>
	</div>
</template>

<script>
	import zkTimeDown from './zkTimeDown.vue'
	export default {
		name: 'hello',
		data: function() {
			return{
				close: false,
				dis: false,
				message: '',
				yearShow: false,
				endTime : '2018/02/28 23:59:59',
				totalMoney: '',
				leftCon: 'leftCon',
				items: []
			}
		},
		components : {
	        zkTimeDown
	    },
	    created: function() {
			this.jinFun();
		},
		methods: {
			yearXian: function () {
				this.yearShow = true;
			},
			yearXiao: function () {
				this.yearShow = false;
			},
			gouBtn:function () {
				var source = this.$route.query.source;
				var _this = this;
				_this.$http.post('/activity/validActivityIsBegain', {
						parameters: '{"activityId":"1008"}'
					})
					.then(function(res) {
						if(res.data.end == 'ok'){
							var u = navigator.userAgent;
							var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
							var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
							var ua = window.navigator.userAgent.toLowerCase();
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
							if (source) {
								if(isAndroid){
						          	JSInterface.toInvest();
						          	return;
						        }
						      	if(isIOS){
						          	loadURL("fengyelicai://btnInvest");
						            return;
						      	}
							} else{
								if (isIOS) {
									window.location.href = "fengyelicai://";
									window.setTimeout(function() {
						                window.location.href = "https://itunes.apple.com/us/app/%E6%9E%AB%E5%8F%B6%E7%90%86%E8%B4%A2-%E9%AB%98%E6%94%B6%E7%9B%8A%E7%90%86%E8%B4%A2%E6%8A%95%E8%B5%84%E5%B9%B3%E5%8F%B0/id1252563418?mt=8";
						            }, 2000);
								}
								if (isAndroid) {
									_this.downApp();
								}
							}
						} else if (res.data.end == 'error') { 
							_this.message = res.data.message;
							_this.close = true;
							setTimeout(function () {
								_this.close = false;
							},1000);
						}
					})
					.catch(function(err) {
						console.log(err)
				})
			},
			share:function () {
				var source = this.$route.query.source;
				var model = 7;
				var activityId = 1008;
				this.noShare(activityId,model,source);
			},
			jinFun: function () {
				var _this = this;
				_this.$http.post('/activity/yearEndSpoils', { 
						parameters: '{"activityId":"1008","num":"10"}'
					})
					.then(function(res) {
						if(res.data.end == 'ok'){
							_this.totalMoney = res.data.data.totalMoney;
							_this.items = res.data.data.topList;
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
	@import '../assets/css/help_center.css';
</style>