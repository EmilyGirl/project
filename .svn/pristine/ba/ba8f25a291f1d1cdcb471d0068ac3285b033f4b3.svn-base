<template>
	<div class="index-wrap">
		<div class="new_title">
			<div class="title_top">
				<img src="../../assets/img/new_bg_1.png" />
			</div>
			<div class="title_bot">
				<img src="../../assets/img/new_bg_2.png" />
			</div>
			<div class="title_content">
				<img class="new_guide" src="../../assets/img/new_guide.png" />
				<div>
					<p>集财是浙江集财互联网金融服务有限公司推出的互联网金融理财平台,是一个以前沿技术、大数据共同支撑、多重资金安全保障、智能风控的新型移动理财平台。集财旨在为更多的人提供优质、低风险、收益合理的理财机会。您可以通过集财手机APP轻松了解理财、完成理财投资。</p> 
					<p>浙江集财互联网金融服务有限公司创办于2015年,是华盛达控股集团旗下全资子公司.华盛达集团2007年开始涉足金融领域,相继投资入股或间接参股湖州银行、德清县农商银行、民权德商村镇银行、睢县德商村镇银行、天津滨海德商村镇银行等12家银行,并拥有杭州金融控股集团有限公司、浙江华盛达基金管理有限公司、德清县中小企业金融服务中心有限公司等七家金融类子公司,逐步构筑产业资本和金融资本的互动平台,实现专业化和多元化的经营格局。</p>
				</div>
				
			</div>
			<!--<h1>新人指引</h1>
			<h3>一秒变老司机</h3>-->
		</div>
		<!--导航-->
		<div class="new_lbt">
			<img src="../../assets/img/new_bg_3.png" />
			<div class="new_lbt_content">
				<div id="box">
					<ul class="slide-pages" :style="{transform:'translateX('+ runNum + 'rem)'}">

						<li v-for="(item, index) in new_title" @click="clickNav(index)" class="clearfix">
							<span :class="{on:checked== index}">{{item.name}}</span>
							<i class="name_icon"></i>
						</li>

					</ul>
				</div>

				<h2 v-for="(item, index) in new_title" v-if="checked==index" v-text="item.name"></h2>
				<div>
					<carousel v-if="checked==0" :slides="login" :end=end>0</carousel>
					<carousel v-if="checked==1" :slides="binding" :end=end>1</carousel>
					<carousel v-if="checked==2" :slides="chioce" :end=end>2</carousel>
					<carousel v-if="checked==3" :slides="buy" :end=end>3</carousel>
					<carousel v-if="checked==4" :slides="invest" :end=end>4</carousel>
					<carousel v-if="checked==5" :slides="returns" :end=end>4</carousel>
					<carousel v-if="checked==6" :slides="withdraw" :end=end>4</carousel>
				</div>
				<div class="bot_title" v-if="checked==i" v-for="(list,i) in new_title">
					{{list.new_title}}
				</div>

			</div>

		</div>
		<!--公众号-->
		<div class="new_wx">
			<img src="../../assets/img/new_bg_4.png" />

			<div class="new_wx_content">
				<div class="guanzhu">
					<h1>关注微信公众号</h1>
					<h2>最新资讯一目了然</h2>
				</div>
				<div class="guanzhu_bot">
					在微信上，即可查看集财产最新咨询
					<p>各种福利，一目了然</p>
					<div class="ewm">
						<img src="../../assets/img/ewm.png" />

					</div>
					<h6>关注公众号随时参与活动</h6>
					<img class="foot_img" src="../../assets/img/new_bottom_icon.png" />
				</div>
			</div>
			<div class="footer">
				<router-link :to="{name:'customer_service'}">客服咨询</router-link>
				<span class="footer_line"></span>
				<router-link :to="{name:'help_center'}">常见问题</router-link>
			</div>
		</div>

	</div>

</template>

<script>
	import reset_rem from "../../assets/js/wechat/reset_rem.js";

	import carousel from '../../common/carousel'
	export default {
		components: {
			carousel
		},
		data() {
			return {
				runNum: 0,
				nowIndex: 0,
				checked: 0,
				new_title: [{
					name: "注册登录",
					new_title: "在'我的'页面中进行登录或注册"
				}, {
					name: "绑卡认证",
					new_title: "在'我的'页面中进行绑卡注册"
				}, {
					name: "选择项目",
					new_title: "在'出借'页面中进行选择项目"
				}, {
					name: "购买支付",
					new_title: "在'我的出借'页面中进行购买支付"
				}, {
					name: "坐等收益",
					new_title: "在'我的'页面中选中'我的出借'"
				}, {
					name: "到期回款",
					new_title: "在'我的出借'页面中点击'已还款'"
				}, {
					name: "再投/提现",
					new_title: "在'我的'页面中进行再投/提现"
				}],
				//				slides :{
				login: [{
					top_title: "注册登录",
					src: require('../../assets/img/new_screen_log.png'),

				}, {
					top_title: "注册登录",
					src: require('../../assets/img/new_screen_binding.png'),

				}],

				binding: [{
					top_title: "绑卡认证",
					src: require('../../assets/img/new_screen_binding.png')

				}],
				chioce: [{
					top_title: "选择项目",
					src: require('../../assets/img/new_screen_choice.png'),

				}],
				buy: [{
					top_title: "购买支付",
					src: require('../../assets/img/new_screen_buy.png'),

				}],
				invest: [{
					top_title: "坐等收益",
					src: require('../../assets/img/new_screen_invest.png'),

				}],
				returns: [{
					top_title: "到期回款",
					src: require('../../assets/img/new_screen_return.png'),

				}],
				withdraw: [{
					top_title: "再投/提现",
					src: require('../../assets/img/new_screen_withdraw.png'),

				}],
				//				}

			}
		},
		methods: {
			end: function(i) {
				if(i == 2) {
//					console.log(123456789)
//					console.log(this.new_title.length)
//					console.log(this.checked)

					if(this.checked + 1 > this.new_title.length - 1) {
						this.checked = this.new_title.length - 1;
					} else {
						this.checked = this.checked + 1;
					}
					this.clickNav(this.checked)
				} else {

					//					alert(this.checked)
					if(this.checked == 0) {
						this.checked = 0;
					} else {
						this.checked = this.checked - 1;
					}
					this.clickNav(this.checked)

				}
			},
			clickNav(num) {
				var _this = this
				_this.checked = num

				if(num > 0) {
					_this.runNum = (-(num - 1) * 200) / 20

				} else if(num == 6) {
					_this.runNum = ((num + 1) * 210) / 20
					console.log("2" + _this.runNum)
				}
				console.log(_this.runNum)
			},
		}
	}
</script>

<style scoped>
	@import url("../../assets/css/wechat/reset_rem.css");
	.index-wrap .new_title {
		position: relative;
	}

	
	.index-wrap .new_lbt img {
		margin-top: -0.05rem;
	}
	
	.index-wrap .new_wx img {
		margin-top: -0.05rem;
	
	}
	
	.index-wrap .new_title .title_content {
		width: 34.5rem;
		height: 31.5rem;
		background: #F0F0F0;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
		margin-bottom: 1rem;
		border-radius: 0.5rem;
		font-size: 1.2rem;
	}
	
	.index-wrap .new_title .title_content div {
	   text-indent: 2em;
		width: 30.5rem;
		height: 24.9rem;
		line-height: 1.8rem;	
		margin: 3.5rem 2rem 3rem;
		text-align: justify;
	}
	
	.index-wrap .new_title .title_content .new_guide {
		width: 12rem;
		height: 5.5rem;
		position: absolute;
		left: 1.5rem;
		bottom: 30rem;
	}
	
	.index-wrap .new_lbt {
		position: relative;
	}
	
	.index-wrap .new_lbt h2 {
		text-align: center;
		font-size: 1.4rem;
	}
	
	.index-wrap .new_lbt .new_lbt_content {
		width: 34.5rem;
		height: 56.9rem;
		background: #F0F0F0;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
		margin-bottom: 1rem;
		border-radius: 0.5rem;
	}
	
	.index-wrap .new_lbt .new_lbt_content .bot_title {
		text-align: center;
		font-size: 1.2rem;
		line-height: 1.8rem;
	}
	
	.index-wrap .new_lbt .new_lbt_content #box {
		box-sizing: border-box;
		overflow: hidden;
		width: 31rem;
		margin: 0 auto;
	}
	
	.index-wrap .new_wx {
		position: relative;
	}
	
	.index-wrap .new_wx .new_wx_content {
		width: 34.5rem;
		height: 57rem;
		background: #F0F0F0;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
		margin-top: 1rem;
		border-radius: 0.5rem;
	}
	
	.index-wrap .new_wx .new_wx_content .foot_img {
		width: 30.3rem;
		height: 6.7rem;
		margin: 3rem auto;
	}
	
	.index-wrap .new_wx .new_wx_content .guanzhu {
		width: 30.1rem;
		text-align: center;
		margin: 2rem auto;
		border-bottom: 3px solid #B3B3B3;
	}
	
	.index-wrap .new_wx .new_wx_content .guanzhu h1,
	h2 {
		font-size: 1.4rem;
	}
	
	.index-wrap .new_wx .new_wx_content .guanzhu h2 {
		margin: 2rem auto;
	}
	
	.index-wrap .new_wx .new_wx_content .guanzhu_bot {
		margin: auto;
		text-align: center;
		font-size: 1.2rem;
	}
	
	.index-wrap .new_wx .new_wx_content .guanzhu_bot p {
		margin-top: 0.5rem;
	}
	
	.index-wrap .new_wx .new_wx_content .guanzhu_bot .ewm {
		width: 23.1rem;
		height: 23.1rem;
		margin: 1.5rem auto;
		background: #a9a9a9;
	}
	
	.index-wrap .new_lbt .slide-pages {
		box-sizing: border-box;
		margin: 2rem auto 1rem;
		/*display: flex;*/
		overflow: hidden;
		line-height: 3rem;
		height: 3rem;
		padding: 0rem 0.2rem;
		/*animation:imgAnimation 15s linear infinite ;*/
		width: 300%;
	}
	
	.index-wrap .new_lbt .slide-pages .run {
		transform: translateX(-50%);
	}

	.index-wrap .new_lbt .new_lbt_content .slide-pages li {
		box-sizing: border-box;

		display: inline-block;
		padding-right: 2.4rem;
		cursor: pointer;
		font-size: 1.2rem;
		margin-right: 0.5rem;
		position: relative;
	}
	
	.index-wrap .new_lbt .new_lbt_content .slide-pages li .name_icon {
		background: url("../../assets/img/new_arrows_right.png") no-repeat;
		background-size: 100%;
		width: 2.35rem;
		height: 0.8rem;
		/*margin-left:0.8rem;*/
		position: absolute;
		right: 0;
		top: 50%;
		margin-top: -0.4rem;
	}
	
	.index-wrap .new_lbt .new_lbt_content .slide-pages li:last-child i {
		background: none;
	}
	
	.index-wrap .slide-pages li span {
		box-sizing: border-box;
		width: 7.7rem;
		height: 2.5rem;
		background: #F2F2F2;
		padding: 0.6rem 1.25rem;
		color: #000000;
		border-radius: 50rem;
		white-space: nowrap;
		border: 1px solid #000000;
	}
	
	.index-wrap .slide-pages li .on {
		background: #2772ff;
		color: #F2F2F2;
		border: none;
	}
	
	.index-wrap .footer {
		position: absolute;
		bottom: 0;
		right: 0;
		left: 0;
		text-align:center;
		margin: 2rem auto;
		line-height:1.5rem;
		
	} 
	.index-wrap .footer a{
		color: #FFFFFF;
		font-size: 1.4rem;
	}
	.index-wrap .footer .footer_line{
    
		    border:0.1rem solid #FFFFFF;
		        margin:1rem;
		        border-radius:0.1rem;
	}
</style>