<template>
	<div class="sign-rules">
        <h5><img class="sign_icon" src="../../assets/img/sign_icon.png" alt="" />积分说明</h5>
		<ul>
			<li>积分是集财理财用户在使用 app 出借、参与活动等情况下给予的奖励，仅限在集财理财 app 上使用。</li>
		</ul>	
		<h5><img class="sign_icon" src="../../assets/img/sign_icon.png" alt="" />赚取积分</h5>
		<ul class="sign_bot clearfix">	
			<li class="sign_left"><i></i>每日签到</li>
			<li><i></i>首次签到</li>
			<li><i></i>连续签到第二天 <span>+50积分</span></li>
			<li><i></i>连续签到第三天<span>+ 150积分</span> </li>
			<li><i></i>连续签到第四天<span>+ 200积分</span> </li>
			<li><i></i>连续签到第五天及以上 <span>+300积分</span></li>
			<li><i></i>中断签到，重新开始计算连续签到天数。</li>
			
			<li class="sign_left"><i></i>完善资料</li>
			<li><i></i><span>首次上传头像</span> <span>+200 积分</span></li>
			<li><i></i><span>首次成功绑卡</span> <span>+ 1000 积分</span></li>
		    <li class="sign_left"> <i></i>邀请好友</li>
			<li><i></i><span>邀请好友注册并绑卡成功</span><span> +2000 积分</span></li>
			<li><i></i><span>被邀请并绑卡成功</span> <span>+3000 积分</span></li>
			<li class="sign_left"><i></i>出借资金</li>
			<!--<li><i></i><span>注册当天出借</span> <span>可得1 000 积分</span></li>-->
			<li><i></i><span>首次充值  </span> <span>+ 500 积分</span></li>
			<li><i></i><span>首次出借新手专享</span> <span>+ 1000 积分</span></li>
			<li><i></i><span>首次出借月标</span> <span>+1000 积分</span></li>
			<li><i></i><span>首次出借半季标</span> <span>+ 1500 积分</span></li>
			<li><i></i><span>首次出借双月标</span> <span>+ 2000积分</span></li>
			<li><i></i><span>首次出借季标</span> <span>+3000 积分</span></li>
			<li><i></i><span>首次出借双季标</span> <span>+5000 积分</span></li>
			<li><i></i><span>首次出借年标及以上</span> <span>+8000 积分</span></li>

			<li><i></i><span>再次出借月标</span> <span>+4*出借金额/10</span></li>
			<li><i></i><span>再次出借半季标</span> <span>+7*出借金额/10</span></li>

			<li><i></i><span>再次出借双月标</span> <span>+10*出借金额/10</span></li>
			<li><i></i><span>再次出借季标</span> <span>+15*出借金额/10</span></li>
			<li><i></i><span>再次出借双季标</span> <span>+20*出借金额/10</span></li>
			<li><i></i><span>再次出借一年标</span> <span>+30*出借金额/10</span></li>
			<!--<li><i></i><span>再次出借两年标</span> <span>30*出借金额/10</span></li>-->

		</ul>
	</div>
</template>

<script>
	import reset_rem from "../../assets/js/wechat/reset_rem.js";
	export default {
		name: 'jc_about',
		data: function() {
			return {}
		}
	}
</script>

<style scoped>
	@import url("../../assets/css/wechat/reset_rem.css");
	/*@import '../../assets/css/help_center.css';*/
	/*签到规则*/
.sign-rules{
   padding-top: 2.4rem;
}
.sign-rules ul{
	padding-left: 1.4rem;
	padding-right:1.4rem;
}

.sign-rules ul li {	
	padding-left:1.4rem;
	line-height: 1.2rem;
	font-size: 1.2rem;
}
.sign-rules ul li i{
	display: inline-block;
	/*width:1.4rem*/
	
}
.sign-rules h5{
	padding-left: 1.4rem;
	margin-bottom: 1.2rem;
	/*font-family: PingFangSC-Semibold;*/
   font-size:1.4rem;
   color: #202020
}
.sign-rules h5:nth-child(3){
	margin-top: 2.2rem;
}
.sign-rules h5 .sign_icon{
	margin-right:0.6rem;
	width: 1.2rem;
	height: 1.2rem;
	vertical-align:middle;	
}
.sign-rules ul .sign_left{
	/*font-family: PingFang-SC-Medium;*/
   font-size:1.4rem;
   color: #202020;
   margin-bottom: 0.6rem;
   margin-top: 1.2rem;
}
.sign-rules ul .sign_left i{
	width: 0.2rem;
	height:0.8rem;
	background: #2772FF;
	margin-right:0.6rem;
	
}

.sign-rules ul li{
	/*font-family: PingFang-SC-Medium;*/
    font-size:1.2rem;
   color: #606060;
   position: relative;
   line-height: 1.2rem;
   margin-bottom: 0.6rem;
}
.sign-rules ul li span:first-child{
   /*vertical-align: middle;*/
}
.sign-rules ul li span:last-child{
	font-size: 1.4rem;
	color: #2772FF;
	margin:auto;
	 position: absolute;
	 right: 0;
	 top: 0.2rem;

}
.sign-rules .sign_bot{
	margin-bottom:3.5rem;
	
}
</style>