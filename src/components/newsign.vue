<template>
	<div class="newsign">
		<div class="new-mask" v-if="mask" @touchmove.prevent>
			<div class="newMask-content">
				<img src="../assets/img/weideng.png"/>
				<p v-on:click="nologin()">点击登录</p>
			</div>
		</div>
		<div class="newsign-top">
			<div class="personal clearfix">
				<img class="personal-left fl" :src="imgUrl"/>
				<div class="personal-right fl">
					<span class="p-phone">{{ username }}</span>
					<span class="p-point"><img src="../assets/img/personal_icon.png"/>我的积分:{{ totalPoint }}</span>
				</div>
			</div>
			<div class="personal-btn">
				<!--<span class="sign-btn">每日签到 +{{ point }}</span>-->
				<button class="sign-btn" v-if="everyday" :disabled="dis" @click="btnFun()">每日签到 +{{ todayPoint }}</button>
				<button class="sign-btn1" v-if="continuous">连续签到{{ continuousSignInTimes }}天</button>
				<router-link :to="{ path:'./welfare',query:{ source:this.$route.query.source,auth:this.$route.query.auth }}">
				    <button class="welfare-btn">福利任务</button>
				</router-link>
			</div>
			<div class="sign-day">
				<img src="../assets/img/tou_bg.png"/>
				<!--<span class="jin-tou">{{ tip }}</span>-->
				<span class="jin-tou">连续签到5天即可获得20分/天</span>
				<ul class="clearfix lyq_newsign1">
					<li class="fl" v-for="(item,index) in items">
						<div class="point" v-bind:class="{'change-point':item.isSign == 'yes'}">+{{ item.point }}</div>
						<div class="date">{{ item.date }}</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="rhesis">
			<div class="jin-shou clearfix">
				<div class="shou-left fl">
					<img src="../assets/img/qian_icon.png"/><span>截止今日收益<span>{{ totalProfit/100 }}</span>元</span>
				</div>
				<div class="shou-right fr">{{ currentDate }}</div>
			</div>
		</div>
		<div class="rhesis-content">
			<img src="../assets/img/yun.png"/>
			<img class="deng" src="../assets/img/deng.png"/>
			<span>{{ signInCopy }}</span>
		</div>
		<div class="newsign-bottom">
			<img class="remen" src="../assets/img/remen.png"/>
			<ul>
				<li class="invest-list" v-for="(list,index) in lists" @click="invest(list.id,'invest')">
					<p class="list-name">{{ list.title }}</p>
					<div class="list-de">
						<span class="sign-common" v-if="list.qxType != 99" style="margin-right: 19%;">{{ list.annualEarnings | fixNum }}<span class="bai">%</span></span>
						<span class="tou clearfix" v-if="list.qxType != 99 && list.productType != 1">
							<div class="addxu fl addf">
								<span>{{ list.lcqx }}天</span>项目期限
							</div>
							<div class="kong fl"></div>
							<div class="addxu fl adds">
								<span>{{ list.financingAmount/1000000 }}万</span>项目总金额
							</div>
						</span>
						<span class="tou clearfix" v-if="list.qxType != 99 && list.productType == 1">
							<div class="addxu fl addf">
								<span>{{ list.lcqx }}天</span>项目期限
							</div>
							<div class="kong fl"></div>
							<div class="addxu fl adds">
								<span>{{ list.maxMoney/1000000 }}万</span>最高投资
							</div>
						</span>
						
						<span class="sign-common" v-if="list.qxType == 99">{{ list.annualEarnings | fixNum }}<span class="bai">%</span></span><span class="tou" v-if="list.qxType == 99">{{ list.title1 }}   {{ list.title3 }}</span>
						<div class="jiaxi" v-if="(list.isJiangLi == 1 && list.qxType == 99)" style="top: -50%;">
							<!--<img src="../assets/img/jiaxi_blue.png"/>-->
							<span>{{ list.baseEarnings | fixNum }}+{{ parseFloat(list.jiangLiEarnings) | fixNum }}%</span>
						</div>
						<div class="jiaxi" v-if="(list.isJiangLi == 1 && list.qxType != 99)">
							<!--<img src="../assets/img/jiaxi_blue.png"/>-->
							<span>{{ list.baseEarnings | fixNum }}+{{ parseFloat(list.jiangLiEarnings) | fixNum }}%</span>
						</div>
						<!--<div class="jiaxi" v-if="list.isJiangLi == 1 && list.productStatus == 1"><img src="../assets/img/jiaxi_bro.png"/><span>{{ list.baseEarnings | fixNum }}+{{ parseInt(list.jiangLiEarnings) | fixNum }}%</span></div>-->
					</div>
					<div class="list-shou">
						<span class="sign-common">预期年化收益率</span>
						<span class="schedule" v-if="list.qxType != 99">已售{{ parseInt(list.wcjd*100) }}%<span><var class="jindu-bg" :style="'width:'+parseInt(list.wcjd*100)+'%'"></var></span></span>
						<span class="schedule" v-if="list.qxType == 99">每日万元收益{{ list.defaultIncome/100 }}元</span>
					</div>
					<img v-if="list.productType == 1" class="xian" src="../assets/img/xiangou.png"/>
				</li>
			</ul>
		</div>
		<transition name="fade">
			<div class="welfare-close" v-if="close">{{ message }}</div>
		</transition>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		data: function() {
			return {
				items: [],
				lists: [],
				username: '',
				totalPoint: '',
				point: '',
				totalProfit: '',
				currentDate: '',
				signInCopy: '',
				tip: '',
				imgUrl: '',
				continuous: true,
				everyday: false,
				todayPoint: '',
				continuousSignInTimes: '',
				close: false,
				title: '',
				baseEarnings: '',
				lcqx: '',
				atleastMoney: '',
				wcjd: '',
				jiangLiEarnings: '',
				defaultIncome: '',
				mask: false,
				message: '',
				dis: false
			}
		},
		created: function() {
			this.loadData();
		},
		filters: {
			fixNum(value) {
				return value.toFixed(2);
			}
		},
		methods: {
			loadData: function () {
				var _this = this;
				var auth = this.$route.query.auth;
				_this.$http.post('/Product/User/newSignInfomation', {
						parameters: '{"authorization":"'+ auth +'"}'
						//'{}'
					})
					.then(function(res) {
						if (res.data.end == 'noLogin') {
							_this.mask = true;
						} else {
							if(res.data.end == 'ok'){
								_this.everyday = true;
								_this.continuous = false;
								_this.imgUrl = res.data.avatar;
								_this.username = res.data.username;
								_this.totalPoint = res.data.totalPoint;
								_this.totalProfit = res.data.totalProfit;
								_this.currentDate = res.data.currentDate;
								_this.signInCopy = res.data.signInCopy;
								_this.tip = res.data.tip;
								_this.items = res.data.dateList;
								_this.todayPoint = res.data.todayPoint;
								_this.continuousSignInTimes = res.data.continuousSignInTimes;
								if (res.data.isSign == 'yes') {
									_this.everyday = false;
									_this.continuous = true;
									_this.mask = false;
								}
							}
						}
					})
					.catch(function(err) {
						console.log(err)
				});
				_this.$http.post('/Product/loadHotProduct', {
						parameters: '{"authorization":"'+ auth +'"}'
					})
					.then(function(res) {
						if(res.data.end == 'ok'){
							_this.lists = res.data.data.hotProduct;
						}
					})
					.catch(function(err) {
						console.log(err)
				});
			},
			invest: function (id) {
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
		          	JSInterface.toProductDetail(id);
		          	return;
		        }
		      	if(isIOS){
		      		passProDetailValue(id)
		          	loadURL("fengyelicai://btnProductDetail");
		            return;
		      	}
			},
			nologin: function () {
//				var source = this.$route.query.source;
				this.start();
			},
			btnFun: function () {
				var _this = this;
				var auth = this.$route.query.auth;
				_this.dis = true;
				_this.$http.post('/Product/User/newSaveMSignIn', {
						parameters: '{"authorization":"'+ auth +'"}'
					})
					.then(function(res) {
						if (res.data.end == 'noLogin') {
							_this.nologin();
						} else {
							if(res.data.end == 'ok') {
								_this.totalPoint = res.data.totalPoint;
								_this.continuousSignInTimes = res.data.continuousSignIn;
								_this.message = res.data.message;
								_this.everyday = false;
								_this.continuous = true;
								_this.close = true;
								setTimeout(function () {
									_this.close = false;
								},500);
								setTimeout(function () {
									location.reload()
								},1000);
							} else if(res.data.end == 'error') {
								_this.message = res.data.message;
								_this.close = true;
								_this.dis = true;
								setTimeout(function () {
									_this.dis = false;
									_this.close = false;
								},1000);
							}
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