<template>
	<div class="art-list">
		<div class="art-box" v-for="(todo2, index) in todos2" :class="[todo2.select ? activeClass : '']" v-on:click="tab3(todos2,index)">
			<div class="art-title">{{todo2.text}}</div>
			<div v-if="seen" v-html="todo2.text1" class="art-answ">{{todo2.text1}}</div>
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
				todos2: [{
						text: '1.提现规则？',
						text1: '（1）提现大于1元即可提现，每天只能提现一次，提现额度没有限额<br/>（2）提现资金到账时间为及时到账，节假日顺延<br/>（3）充值提现都是0手续费<br/>（4）同卡进出',
						select: false
					},
					{
						text: '2.如何进行资金充值？',
						text1: '选择“我的”页面，点击“充值”按钮，输入充值金额点击“确认充值”进入第三方支付充值页面，验证手机号码后，点击确认付款即可充值成功。',
						select: false
					},
					{
						text: '3.最低充值金额是多少？',
						text1: '100元起充。',
						select: false
					},
					{
						text: '4.为什么银行已扣款，但平台账户余额没有增加？',
						text1: '您的原因很很可能是下面的情况：<br/>银行已扣款，但是可能由于银行系统原因，资金没有同步到第三方支付平台，这种情况您不用担心，如果长时间还没有到帐，请客服热线。',
						select: false
					},
					{
						text: '5.查询可提现金额？',
						text1: '成功登录后，选择“我的”页面查看可用余额。',
						select: false
					},
					{
						text: '6.提现需要多长时间到达银行账户？',
						text1: '工作日17:30前提现，当天到达银行账户；17:30后提现，隔天到达银行账户。（节假日顺延）',
						select: false
					},
					{
						text: '7.充值手续费怎么收取？',
						text1: '不收取。',
						select: false
					},
					{
						text: '8.充值金额到账时间？',
						text1: '即时到账，如遇到网络繁忙、节假日等，可能会延迟。',
						select: false
					},
					{
						text: '9.充值失败，怎么办？',
						text1: '充值失败订单的金额如果银行已扣费成功那将会在1-7个工作日（如遇双休日或法定节假日顺延）返回银行原卡。您可以再次尝试充值，若还未能解决问题，请致电我们客服热线，客服专员会帮助您解决问题。',
						select: false
					},
					{
						text: '10.如何查看交易记录？',
						text1: '成功登录集财理财账户，选择“ 我的”页面 ，点击“交易记录”即可查看历史交易记录。',
						select: false
					},
					{
						text: '11.如何查看投资记录？',
						text1: '成功登录集财理财账户，选择“ 我的”页面 ，点击“定期产品”即可查看相关投资记录。',
						select: false
					}
				]
			}
		},
		methods: {
			tab3: function(todos2, index) {
				/*默认切换类的动作*/
				todos2.forEach(function(el) {
					el.select = false;
				});
//				todos2[index].select = true;
				if (this.seen == false) {
					todos2[index].select = true;
					this.seen = true;
				} else{
					todos2[index].select = false;
					this.seen = false;
				}
			}
		}
	}
</script>

<style>
	@import '../assets/css/help_center.css';
</style>