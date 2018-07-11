<template>
	<div class="legend">
		<img src="../assets/img/legend_bg1.png" alt="" />
		<div class="legend_bg2">
			<img src="../assets/img/legend_bg2.png" alt="" />
			<span>{{ activityDate }}</span>
		</div>
		<div class="legend_bg3">
			<img src="../assets/img/legend_bg3.png" alt="" />
			<div class="dateList">
				<div class="date_hide">
					<img class="dashed" src="../assets/img/dashed.png"/>
					<div class="inline">
						<ul class="clearfix">
							<li class="fl" v-for="(list,index) in lists">
								<button @click="infoFun(list,'infoFun')" :disabled="list.isShowData == 'true' ? false : true">
									<img :src="list.isShowData == 'true'?'../../static/img/date_'+ index +'.png':'../../static/img/date_hide_'+ index +'.png'">
									<br />
									<span :class="list.isShowData == 'true' ? 'class-b' : 'class-a'">{{ list.date }}</span>
								</button>
							</li>
						</ul>
						
					</div>
				</div>
			</div>
		</div>
		<div class="ranking_list">
			<ul class="clearfix rank_title">
				<li class="fl">排名</li>
				<li class="fl">姓名</li>
				<li class="fl">手机号</li>
				<li class="fl">奖励</li>
			</ul>
			<div class="rank_content clearfix">
				<div v-if="showInfo">
					<ul class="clearfix rank_info" v-for="(item,index) in items">
						<li class="fl rank_img"><img :src="'../../static/img/rankFive_'+ index +'.png'"/></li>
						<li class="fl">{{ item.realName }}</li>
						<li class="fl">{{ item.phone }}</li>
					</ul>
					<ul class="gife_info"><li v-for="(gifeList,index) in gifeLists">{{ gifeList.gife }}</li></ul>
				</div>
				<img class="hideInfo" v-if="hideInfo" src="../assets/img/quesheng.png"/>
			</div>
			<img src="../assets/img/legend_bg4.png" alt="" />
		</div>
		<img src="../assets/img/legend_bg5.png" alt="" />
		<img src="../assets/img/legend_bg6.png" alt="" />
		<div style="position: relative;">
			<img src="../assets/img/legend_bg7.png" alt="" />
			<img @click="gouInvest()" class="goLi" src="../assets/img/litou.png"/>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		data: function() {
			return{
				gifeLists:[
					{gife: "现金50元"},
					{gife: "现金30元"},
					{gife: "现金20元"},
					{gife: "理财券500元"},
					{gife: "理财券200元"}
				],
				lists: [],
				rankLists: [],
				items: [],
				showInfo: false,
				hideInfo: false,
				activityDate: ''
			}
		},
	    created: function() {
	    	this.loadData();
		},
		methods: {
			gouInvest:function () {
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
			loadData: function () {
				var _this = this;
				_this.$http.post('/activity/queyActivityTimeListByPre', {
						parameters: '{"activityIdPre":"top"}'
					})
					.then(function(res) {
						if(res.data.end == 'ok'){
							_this.lists = res.data.data.rsList;
							_this.activityDate = res.data.data.activityTimeInterval;
							if (res.data.data.rsList[0].isShowData == 'false') {
								_this.hideInfo = true;
								_this.showInfo = false;
							} else {
								if (res.data.data.rsList[res.data.data.rsList.length-1].isShowData == 'true') {
									var activityId = res.data.data.rsList[res.data.data.rsList.length-1].activityId;
								} else {
									for (var i = 0;i < res.data.data.rsList.length;i++) {
										//console.log(res.data.data.rsList[i].isShowData)
										if (res.data.data.rsList[i].isShowData == 'false') {										
											var activityId = res.data.data.rsList[i-1].activityId;
											break;
										}
									};
								}
								
								_this.$http.post('/activity/getInvestmentRankings', {
										parameters: '{"activityId":"'+ activityId +'","num":"5"}'
									})
									.then(function(res) {
										if(res.data.end == 'ok'){
											_this.hideInfo = false;
											_this.showInfo = true;
											_this.items = res.data.data;
										}
									})
									.catch(function(err) {
										console.log(err)
								});
							}
						}
					})
					.catch(function(err) {
						console.log(err)
				});
			},
			infoFun: function (list) {
				var _this = this;
				_this.$http.post('/activity/getInvestmentRankings', {
						parameters: '{"activityId":"'+ list.activityId +'","num":"5"}'
					})
					.then(function(res) {
						if(res.data.end == 'ok'){
							_this.items = res.data.data;
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