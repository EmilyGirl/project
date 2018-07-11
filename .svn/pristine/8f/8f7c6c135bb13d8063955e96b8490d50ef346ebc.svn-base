<template>
	<div class="lantern">
		<img src="../assets/img/lantern_1.png" alt="" />
		<img src="../assets/img/lantern_2.png" id="moveTop" alt="" />
		<button :disabled="stranger" class="record" @click="record()"><img src="../assets/img/record.png" alt="" /></button>
		<div class="middleClass" ref="middleClass">
			<img src="../assets/img/lantern_3.png" alt="" />
			<img src="../assets/img/lantern_4.png" alt="" />
			<ul class="gifes">
				<li :class="{ addclass: flag,posiAdd: flag2 }" v-for="(item,index) in items"><button @click="clickFun(item,index,'clickFun')" :disabled="disFlag"><img  :class="{ addclass1:index==flag1 }" :src="item.src"/></button></li>
			</ul>
		</div>
		<img src="../assets/img/lantern_5.png" alt="" />
		<img style="margin-bottom: 50px;" src="../assets/img/lantern_6.png" alt="" />
		<div class="chou" :class="{ changeColor: color1 }">剩余翻牌次数 <span>{{ lotteryTimes }}</span> 次<button :disabled="againFan" @click="again()">再翻一次</button></div>
		<div class="lanternMask" @touchmove.prevent v-if="showDiv">
			<div class="lanternMaskContent">
				<img src="../assets/img/lantern_alert.png"/>
				<p>{{ tipMsg }}</p>
				<div class="btnList">
					<button class="know" @click="hide()">我知道了</button>
					<button v-if="showInvest" class="goInvest" @click="invest()">前往理财</button>
				</div>
			</div>
		</div>
		<div class="recordMask" @touchmove.prevent v-if="showDivY">
			<div class="recordMaskContent">
				<img src="../assets/img/huojiang.png"/>
				<ul class="recordList" @touchmove.stop>
					<li class="clearfix" v-for="(jList,index) in jLists">
						<div class="fl jname">{{ jList.prizeName }}</div>
						<div class="fr jtime">{{ jList.insertTime }}</div>
					</li>
				</ul>
				<button class="knowY" @click="hideY()">我知道了</button>
			</div>
		</div>
		<div class="investb" @click="invest()">立即投资</div>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		created: function () {
			var auth = this.$route.query.auth;
			var _this = this;
			setTimeout(function () {
				_this.stranger = false;
			},4000);
			window.onload = function () {
				setTimeout(function () {
					var pannel = document.getElementById("moveTop");
					pannel.scrollIntoView(true);
				},200);
			}
			_this.$http.post('/activity/lanternFestival', {
					parameters: '{"authorization":"'+ auth +'","activityId":"1009","mark":"initTimes"}'
				})
				.then(function(res) {
					if(res.data.end == 'ok'){
						_this.lotteryTimes = res.data.data.lotteryTimes;
						if (res.data.data.lotteryTimes == 0) {
							_this.flag1 = -1;
							_this.flag2 = false;
							_this.disFlag = false;
							_this.color1 = true;
							_this.againFan = true;
						} else {
							_this.timeOne();
							_this.timeTwo();
							_this.timeThree();
							_this.timeFour();
							_this.color1 = false;
							_this.againFan = false;
						}
					}
				})
				.catch(function(err) {
					console.log(err)
			});
		},
		data: function() {
			return {
				jLists: [],
				items: [
					{src: '../../static/img/contrary_0.png'},
					{src: '../../static/img/contrary_1.png'},
					{src: '../../static/img/contrary_2.png'},
					{src: '../../static/img/contrary_3.png'},
					{src: '../../static/img/contrary_4.png'},
					{src: '../../static/img/contrary_5.png'},
				],
				lists: [
					{src: '../../static/img/front_3.png'},
					{src: '../../static/img/front_2.png'},
					{src: '../../static/img/front_1.png'},
					{src: '../../static/img/front_4.png'},
					{src: '../../static/img/front_5.png'},
					{src: '../../static/img/front_6.png'},
				],
				flag: false,
				flag1: -1,
				flag2: false,
				disFlag: true,
				showDiv: false,
				showDivY: false,
				lotteryTimes: '',
				tipMsg: '',
				showInvest: false,
				color1: false,
				againFan: false,
				stranger: true
			}
		},
		methods: {
			clickFun: function (item,index) {
				var auth = this.$route.query.auth;
				var _this = this;
				_this.disFlag = true;
				var temp_lottery = _this.lotteryTimes;
				_this.$http.post('/activity/lanternFestival', {
						parameters: '{"authorization":"'+ auth +'","activityId":"1009","mark":"lottery"}'
					})
					.then(function(res) {
						if(res.data.end == 'ok'){	
							_this.flag1 = index;
							if (temp_lottery == 0) {
								_this.flag1 = -1;
								_this.color1 = true;
								_this.againFan = true;
								_this.tipMsg = res.data.data.tipMsg;
								setTimeout(function () {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
									_this.disFlag = false;
								},2000);
							} else {
								var num = res.data.data.index;
								_this.tipMsg = res.data.data.tipMsg;
								item.src = '../../static/img/jiang_'+num+'.png';
								if (res.data.data.index == 1 || res.data.data.index == 2 || res.data.data.index == 3 || res.data.data.index == 4) {
									_this.showInvest = true;
								}
							}
							_this.lotteryTimes = res.data.data.lotteryTimes;
							setTimeout(function () {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
								_this.showDiv = true;
							},2000);
						}
					})
					.catch(function(err) {
						console.log(err)
				})
			},
			again:function () {
				location.reload();
			},
			timeOne: function () {
				var _this = this;
				var timeOn = setTimeout(function () {
					_this.flag = true;
					_this.items = _this.lists;
				},2000);
			},
			timeTwo: function () {
				var _this = this;
				var timeTw = setTimeout(function () {
					_this.flag2 = true;
				},3000);
			},
			timeThree: function () {
				var _this = this;
				var timeTh = setTimeout(function () {
					_this.flag2 = false;
				},4500);
			},
			timeFour: function () {
				var _this = this;
				var timeF = setTimeout(function () {
					_this.disFlag = false;
				},5000);
			},
			hide: function () {
				this.showDiv = false;
			},
			record: function () {
				this.showDivY = true;
				var auth = this.$route.query.auth;
				var _this = this;
				_this.$http.post('/activity/showWinnerList', {
						parameters: '{"authorization":"'+ auth +'"}'
					})
					.then(function(res) {
						if(res.data.end == 'ok'){
							_this.jLists = res.data.data.list;
						}
					})
					.catch(function(err) {
						console.log(err)
				});
			},
			hideY: function () {
				this.showDivY = false;
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
			},
		}
	}
</script>

<style>
	@import '../assets/css/help_center.css'
</style>