<template>
	<div class="art-list">
		<div class="art-box" v-for="(todo3, index) in todos3" :class="[todo3.select ? activeClass : '']" v-on:click="tab4(todos3,index)">
			<div class="art-title">{{todo3.text}}</div>
			<div v-if="seen" v-html="todo3.text1" class="art-answ">{{todo3.text1}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		data: function() {
			return {
				activeClass: 'select',
				seen: false,
				todos3: [{
						text: '1.什么是理财券？',
						text1: '1、理财券在投资中可作为虚拟金使用，且每次只能使用一张；<br/> 2、理财券不能直接提现，使用理财券产生的利息可以提现；<br/>3、零钱罐不可使用理财券。<br/><br/>示例：<br/>如用户A购买10000元理财产品，使用2000元理财券，则实际支付10000元，产品到期后将获得10000元本金和12000元产生的利息。',
						select: false
					},
					{
						text: '2.什么是“累计收益”？',
						text1: '截止目前所购买理财产品所产生收益之和。',
						select: false
					},
					{
						text: '3.什么是“可用余额”？',
						text1: '截止目前可用于购买理财产品的账户金额。',
						select: false
					},
					{
						text: '4.什么是“投资中金额”？',
						text1: '截止目前所购买且还没结束的理财产品总金额。',
						select: false
					},
					{
						text: '5.什么是“理财券余额”？',
						text1: '理财券金额之和。',
						select: false
					},
					{
						text: '6.什么是“待结算收益”？',
						text1: '截止目前所购买且还没结束的理财产品总收益（利息）。',
						select: false
					},
					{
						text: '7.什么是“已结算收益”？',
						text1: '截止目前所购买的理财产品且到账的收益（利息）之和。',
						select: false
					},
					{
						text: '8.什么是“资产总额”？',
						text1: '可用余额 + 理财金额（不含理财券金额）。',
						select: false
					},
					{
						text: '9.什么是“项目总额”？',
						text1: '指该理财项目所募集的总资金。',
						select: false
					},
					{
						text: '10.什么是“起投金额”？',
						text1: '指理财产品支持最少购买金额。',
						select: false
					},
					{
						text: '11.什么是“可投金额”？',
						text1: '指目前该理财产品剩余可投资金额。',
						select: false
					},
					{
						text: '12.什么是“封闭期”？',
						text1: '投资期限开始至结束之间的时间。',
						select: false
					},
					{
						text: '13.什么是“到期时间”？',
						text1: '指封闭期结束的时间。',
						select: false
					},
					{
						text: '14.什么是“起息日”？',
						text1: '指购买的理财产品正式起息的日期。',
						select: false
					},
					{
						text: '15.什么是“到期还本付息”？',
						text1: '又称到期一次还本付息，是指投资人在投资期限内不是按月偿还本息，而是封闭期后一次性归还本金和利息。',
						select: false
					}
				]
			}
		},
		methods: {
			tab4: function(todos3, index) {
				/*默认切换类的动作*/
				todos3.forEach(function(el) {
					el.select = false;
				});
//				todos3[index].select = true;
				if (this.seen == false) {
					todos3[index].select = true;
					this.seen = true;
				} else{
					todos3[index].select = false;
					this.seen = false;
				}
			}
		}
	}
</script>

<style>
	@import '../assets/css/help_center.css';
</style>