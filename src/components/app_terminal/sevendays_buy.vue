<template>
	<div class="safe">
		<h3 style="text-align:center;font-weight:bold;font-size:1.4rem">
            <span style="width:8rem;height:4rem;background:rgb(246, 83, 82);color:#fff;padding:0.2rem 1rem;border-radius:0.5rem;font-size:1.4rem;">公告</span>
			七天限时抢购活动
		</h3>
		<div class="time">2018.04.17 08:00</div>
		<div class="line"></div>
		<div class="safe1">
			<p>为了庆祝集财获得信山控股投资，与央企达成战略合作，集财特于04月17日至04月23日推出七天限时抢购活动！</p>
			<p>活动期间您在集财理财所购买的产品，都可额外增加1%的年化收益！额外收益奖励会和本金、利息在产品到期时一并兑付。
请注意活动时间哦，04月17日（00：00）起至04月23日（24：00）止，为期七天，手慢无！伙伴们，考验手速的时候到啦！</p>
			<p>另外，以后有关活动的具体信息，大家在首页轮播图、集财App“个人中心”—“我的消息”以及微信公众号中都可以了解到。
而且个人活动奖励的具体情况，您也可以在“我的消息”中得到确认。
怎么样，是不是很方便呢？如果您在购买过程中有任何问题，都可以联系我们的客服同事哦，电话：400-005-3300</p>
			<p>最后，重要的事情说三遍！</p>
			<p>请注意活动时间：04月17日（00：00）起至04月23日（24：00）止！快和亲朋好友一起来抢购吧，该出手时就出手！</p>
			

		</div>
		<div class="footer">集财理财<br/>2018.04.17</div>
	</div>
</template>

<script>
	import reset_rem from "../../assets/js/wechat/reset_rem.js";
	export default {
		name: 'sevendays_buy',
		data () {
			return {}
		}
	}
</script>

<style scoped>
	@import '../../assets/css/help_center.css';
	.safe {
		padding: 2rem;
		margin-top: 3rem;
	}
	
	.time {
		font-size: 1rem;
		color: #999;
		text-align: center;
		margin-top: 2rem;
	}
	
	.safe1 {
		font-size: 1.2rem;
		line-height: 3rem;
	}
	.safe1 p{
		font-size: 1.2rem;
		line-height: 3rem;
		margin: 2rem 0;
		text-indent: 4rem;
	}
	.line {
		width: 80%;
		height: 1px;
		padding: 0 2rem;
		background: #ccc;
		margin: 0 auto;
		margin-top: 1.5rem;
	}
	
	.footer {
		font-size: 1.6rem;
		float: right;
		text-align: center;
		margin-right: 3.5rem;
		line-height: 2rem;
		margin-bottom: 3rem;
	}
</style>