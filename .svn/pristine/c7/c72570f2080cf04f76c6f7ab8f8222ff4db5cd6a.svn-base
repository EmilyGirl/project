<template>
	<div>
		<div class="new-mask" v-if="mask" @touchmove.prevent>
			<div class="newMask-content">
				<img src="../assets/img/weideng.png"/>
				<p v-on:click="nologin()">点击登录</p>
			</div>
		</div>
		<div class="cont1">
			<img src="../assets/img/1.png"/>
			<div class="ewm">
				
			</div>
		</div>
		<div class="cont2">
			<img src="../assets/img/2.png"/>
			<p class="inviteNum">好友扫描二维码即可分享邀请码: <span>{{ invit }}</span></p>
			<p class="peoNum">{{ friend }}</p>
			<p class="money">{{ money/100 | fixNum }}</p>
			
			<router-link :to="{ path:'./reward_detail',query:{ source:this.$route.query.source,auth:this.$route.query.auth,username:this.$route.query.username }}">
			    <span class="jilu">查看奖励明细>></span>
			</router-link>
		</div>
		<div class="content3">
			<img src="../assets/img/3.png"/>
			<div class="con-bottom">
				<p>*邀请人奖励关系的有效期为：被邀请好友注册后30天，30天后奖励关系自动解除。</p>
				<ul>
					<li>您所赚奖金=好友投资金额x奖励系数</li>
					<li class="clearfix">
						<div class="li-left">
							奖励条件
						</div>
						<div class="li-right">
							奖励系数
						</div>
					</li>
					<li class="clearfix fon">
						<div class="li-left">投资新手专享</div>
						<div class="li-right">{{ newUser }}%</div>
					</li>
					<li class="clearfix fon">
						<div class="li-left">投资月标</div>
						<div class="li-right">{{ month }}%</div>
					</li>
					<li class="clearfix fon">
						<div class="li-left">投资半季标</div>
						<div class="li-right">{{ half_quarter }}%</div>
					</li>
					<li class="clearfix fon">
						<div class="li-left">投资双月标</div>
						<div class="li-right">{{ double_month }}%</div>
					</li>
					<li class="clearfix fon">
						<div class="li-left">投资季标</div>
						<div class="li-right">{{ quarter }}%</div>
					</li>
					<li class="clearfix fon" style="border-bottom: 0;">
						<div class="li-left">投资双季标</div>
						<div class="li-right">{{ double_quarter }}%</div>
					</li>
				</ul>
				<p style="margin-top: 10px;">例如:您邀请的好友在注册后30天内共投资货押宝双季标10万元，您所获得的奖励是300元  </p>
			</div>
		</div>
		<div class="content4">
			<img src="../assets/img/4.png"/>
			<p>被邀请好友投资成功后，邀请人奖励会显示在【发现】>【邀请好友】>【查看奖励明细】中，当月奖励将于次月10号一次性发放至邀请人的集财理财账户，届时可直接用于投资或提现。</p>
		</div>
		<div class="content5">
			<img style="margin-bottom: 50px;" src="../assets/img/5.png"/>
			<p class="po-1">《中华人民共和国个人所得税法》第三条第四款规定“劳务报酬所得，适用比例税率，税率为百分之二十。对劳务报酬所得一次收入畸高的，可以实行加成征收，具体办法有国务院规定。”</p>
			<p class="po-2">邀请人奖励将会根据平台的运营情况进行相应的调整，届时以公告通知为准。</p>
			<p class="po-3">本活动最终解释权为集财理财所有。</p>
		</div>	
		<button class="yaoq" v-bind:disabled="dis" v-tap="{methods :invita}">邀请好友</button>
		<div class="invit-close" v-if="close">{{ message }}</div>
		<div class="int">
			<img v-if="browser" v-on:click="clickimg()" @touchmove.prevent class="browser" src="../assets/img/browser.png"/>
			<img v-if="weiqq" v-on:click="clickimg()" @touchmove.prevent class="weiqq" src="../assets/img/weiqq.png"/>
		</div>
	</div>
</template>

<script>
	import jquery from "../assets/js/jquery-1.11.2.min.js"
	
	export default {
		name: 'hello',
		data: function() {
			return {
				invit: '',
				friend: '',
				money: '',
				newUser: '',
				month: '',
				half_quarter: '',
				double_month: '',
				quarter: '',
				double_quarter: '',
				mask: false,
				dis: false,
				browser: false,
				weiqq: false,
				message: '',
				close: false
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
		mounted: function () {    //钩子函数，等于vue1.0中的ready
            this.$nextTick(function () {
                require ('../assets/js/jquery.qrcode.min.js');
            })
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
						var w=$(".cont1 .ewm").width();
	        			var wpx=w+"px";
						if(res.data.end == 'ok'){
							_this.invit = res.data.inviteId;
							_this.money = res.data.inviteEarn;
							_this.friend = res.data.inviteNum;
							_this.newUser = res.data.coefficient.newUser;
							_this.month = res.data.coefficient.month;
							_this.half_quarter = res.data.coefficient.half_quarter;
							_this.double_month = res.data.coefficient.double_month;
							_this.quarter = res.data.coefficient.quarter;
							_this.double_quarter = res.data.coefficient.double_quarter;
							$(".cont1 .ewm").height(wpx);
			                $(".ewm").qrcode({
			                    text: res.data.inviteURL,
			                    width:w,
			                    height:w
			                });
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