<template>
	<div class="activity">
		<!--<div class="mask" v-if="mask" @touchmove.prevent>
			<div class="mask-content">
				<div class="login_bg"><img src="../assets/img/login_bg.png"/></div>
				<span>您还未登录，请先登录！</span>
				<p v-on:click="nologin()">点击登录</p>
			</div>
		</div>-->
		<div><img src="../assets/img/huo_1.png"/></div>
		<div><img src="../assets/img/huo_2.png"/></div>
		<div class="posi"><img src="../assets/img/huo_3.png"/><img class="tou-btn1" src="../assets/img/btn.png" @click="invest()"/><img class="tou-btn2" src="../assets/img/btn.png"  @click="invest()"/></div>
		<div class="posi"><img src="../assets/img/huo_4.png"/><img class="tou-btn3" src="../assets/img/btn.png" @click="invest()"/><img class="tou-btn4" src="../assets/img/btn.png" @click="invest()"/></div>
		<div class="posi"><img src="../assets/img/huo_5.png"/><img class="tou-btn5" src="../assets/img/btn.png" @click="invest()"/></div>
		<div><img src="../assets/img/huo_6.png"/></div>
		<div class="ranking">
			<div class="rank-name" v-for="(item,index) in items"><img :src="'../../static/img/rank_'+ index +'.png'"/>
				<span v-if="item.phone" class="ph">{{ item.phone }}</span>
				<span v-if="item.totalMoney"  class="mon">{{ item.totalMoney }}元</span>
				<span v-else class="mon">暂无数据</span>

			</div>
			<div class="rank-name"><img class="bang" src="../assets/img/bang.png"/></div>
			<div class="rank-name"><img class="last" src="../assets/img/huo_footer.png"/></div>
		</div>
		<!--<button class="yaoq" v-bind:disabled="dis" v-tap="{methods :share}">分享给好友</button>
		<div class="invit-close" v-if="close">{{ message }}</div>-->
	</div>
</template>

<script>
	export default {
		name: 'hello',
		data: function() {
			return {
				items: [],
//				mask: false,
//				message: '',
//				close: false,
//				dis: false
			}
		},
		created: function() {
			this.loadData();
		},
		methods: {
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
			loadData: function () {
				var _this = this;
				_this.$http.post('/activity/queryDepositoryActTop', {
						parameters: '{"depositoryId":"1","num":"10"}'
					})
					.then(function(res) {
						if(res.data.end == 'ok'){
							let list =  res.data.data;
							if (list.length<10) {
								let num = 10-list.length;
								for (var i = 0; i < num; i++) {
									list.push('');
								}
							}
							_this.items = list;
						}
					})
					.catch(function(err) {
						console.log(err)
				})

			},
//			share:function () {
//				var model = 1
//				this.actShare(model);
//			},
//			nologin: function () {
//				var source = this.$route.query.source;
//				this.start(source);
//			},
		}
	}
</script>

<style>
	@import '../assets/css/help_center.css';
</style>
