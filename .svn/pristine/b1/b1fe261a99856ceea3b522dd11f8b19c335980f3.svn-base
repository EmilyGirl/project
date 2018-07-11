<template>
	<div class="invitation">
		<div class="new-mask" v-if="mask" @touchmove.prevent>
			<div class="newMask-content">
				<img src="../assets/img/weideng.png"/>
				<p v-on:click="nologin()">点击登录</p>
			</div>
		</div>
		<img src="../assets/img/yao_1.png"/>
		<img style="margin-top: -1px;" src="../assets/img/yao_2.png"/>
		<div class="invitation-content">
			<div class="invitation-detail clearfix">
				<div class="invitation-left fl">
					<p class="new-friend">{{ friend }}</p>
					<p class="new-common">已邀好友数 (人)</p>
				</div>
				<div class="invitation-middle fl"></div>
				<div class="invitation-right fr">
					<p class="new-money">{{ money }}</p>
					<p class="new-common">累计奖励 (元)</p>
				</div>
				<router-link :to="{ path:'./new_reward',query:{ source:this.$route.query.source,auth:this.$route.query.auth,username:this.$route.query.username }}">
				    查看奖励明细 >>
				</router-link>
			</div>
			<div class="get-award">
				<div class="get-title">您能得到的奖励</div>
				<div class="get-content">
					<p class="youxiao">邀请人奖励关系的有效期为：被邀请好友注册30天后奖励关系自动解除。</p>
					<p class="xishu">您所赚奖励 = 好友投资金额 x 奖励系数</p>
					<div class="xishu-list">
						<ul>
							<li class="clearfix">
								<div class="xushu-common fl">奖励条件</div>
								<div class="xushu-common fl">奖励系数</div>
							</li>
							<!--<li class="clearfix">
								<div class="xushu-common fl">投资新手专享</div>
								<div class="xushu-common fl">0.03%</div>
							</li>
							<li class="clearfix">
								<div class="xushu-common fl">投资月标</div>
								<div class="xushu-common fl">0.1%</div>
							</li>
							<li class="clearfix">
								<div class="xushu-common fl">投资双月标</div>
								<div class="xushu-common fl">0.15%</div>
							</li>
							<li class="clearfix">
								<div class="xushu-common fl">投资季标</div>
								<div class="xushu-common fl">0.2%</div>
							</li>-->
							<li class="clearfix" v-for="(item,index) in items">
								<div class="xushu-common fl">{{ item.name }}</div>
								<div class="xushu-common fl">{{ item.coefficient }}%</div>
							</li>
						</ul>
					</div>
					<p class="lizi"><span>例如：</span>您邀请的好友在注册后30天内累计投资枫宝盈季标10万元，您所获得的奖励就是600元。</p>
				</div>
			</div>
			<div class="how-see">
				<div class="how-title">如何查看奖励</div>
				<div class="how-content">
					<p class="xianshi">邀请好友投资成功后，邀请人奖励会显示在：</p>
					<div class="ziline">
						<span>1</span>首页<img src="../assets/img/line.png"/>邀请有奖<img src="../assets/img/line.png"/>查看奖励明细
					</div>
					<div class="ziline">
						<span>2</span>发现<img src="../assets/img/line.png"/>邀请有奖<img src="../assets/img/line.png"/>查看奖励明细
					</div>
					<p class="xiaoji"><span>ps：</span>当月奖励将于次月10号一次性发放到邀请人的集财理财账户，届时可直接用于投资或提现。</p>
				</div>
			</div>
			<div class="invit-way">
				<div class="way-title">两种邀请方式</div>
				<div class="way-content clearfix">
					<div class="way-left fl">
						<router-link :to="{ path:'./erwei',query:{ source:this.$route.query.source,auth:this.$route.query.auth,username:this.$route.query.username }}">
				    		<img src="../assets/img/sharebtn.png"/>
						</router-link>
						<p>让好友扫描您的二维码进行注册并投资</p>
					</div>
					<div class="way-right fr">
						<button v-bind:disabled="dis" v-tap="{methods :invita}"><img src="../assets/img/shareimg.png"/></button>
						<p>将邀请页面分享并发送给好友注册并投资</p>
					</div>
				</div>
			</div>
			<div class="di-footer">
				<p>活动最终解释权归集财理财所有</p>
				<p>投资有风险 理财需谨慎</p>
			</div>
		</div>
			
		<button class="yaoq1" v-bind:disabled="dis" v-tap="{methods :invita}">立即分享</button>
		<div class="invit-close" v-if="close">{{ message }}</div>
		<!--<div class="int">
			<img v-if="browser" v-on:click="clickimg()" @touchmove.prevent class="browser" src="../assets/img/browser.png"/>
			<img v-if="weiqq" v-on:click="clickimg()" @touchmove.prevent class="weiqq" src="../assets/img/weiqq.png"/>
		</div>-->
	</div>
</template>

<script>
	
	export default {
		name: 'hello',
		data: function() {
			return {
				invit: '',
				friend: '',
				money: '',
				mask: false,
				dis: false,
				browser: false,
				weiqq: false,
				message: '',
				close: false,
				items: [],
				inviteURL: ''
			}
		},
		filters: {
			fixNum(value) {
				return value.toFixed(2);
			}
		},
		created: function() {
			this.invitation(); //定义方法
		},
		methods: {
			invita: function () {
				var model = 1
				this.actShare(model);
			},
			invitation: function() {
				var auth = this.$route.query.auth;
				var username = this.$route.query.username;
				var _this = this;
				_this.$http.post('/Product/User/showMyInvitation', {
						parameters: '{"authorization":"'+ auth +'","username":"'+ username +'"}'
					})
					.then(function(res) {
						if(res.data.end == 'ok'){
							_this.invit = res.data.inviteId;
							_this.money = res.data.inviteEarn;
							_this.friend = res.data.inviteNum;
							_this.items = res.data.coefficient;
							_this.inviteURL = res.data.inviteURL;
						}else{
							_this.mask = true;
						}
					})
					.catch(function(err) {
						console.log(err)
				})
			},
			nologin: function () {
//				var source = this.$route.query.source;
				this.start();
			},
			clickimg: function () {
				this.browser = false;
				this.weiqq = false;
			}
		}
	}	
</script>

<style>
	@import '../assets/css/help_center.css';
</style>