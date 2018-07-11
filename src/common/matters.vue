<template>
	<div class="art-list">
		<div class="art-box" v-for="(todo1, index) in todos1" :class="[todo1.select ? activeClass : '']" v-on:click="tab2(todos1,index)">
			<div class="art-title">{{todo1.text}}</div>
			<div v-if="seen" v-html="todo1.text1" class="art-answ">{{todo1.text1}}</div>
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
				todos1: [{
						text: '1.如何选择集财项目？',
						text1: '集财提供多类型出借项目,可在APP”项目”按钮中选择心意的出借项目,并按照提示步骤操作。',
						select: false
					},
					{
						text: '2.集财的出借收益是多少？',
						text1: '不同出借项目具有不同的预期收益率,可根据实际情况进行选择。',
						select: false
					},
					{
						text: '3.预估收益如何计算？',
						text1: '预估收益 = 投资总金额 * (年化收益率/365)*投资期限(天)。',
						select: false
					},
					{
						text: '4.出借项目什么时候起息？',
						text1: '所出借的项目将在T + 1个工作日起息。',
						select: false
					},
					{
						text: '5.出借项目成功后,我能提前赎回吗？',
						text1: '为了保护投资人的利益,不提供提前赎回服务。',
						select: false
					},
					{
						text: '6.出借项目到期后,本金和利息什么时候到账？',
						text1: 'T + 1个工作日到账。',
						select: false
					},
					{
						text: '7.最低投资额度？',
						text1: '500元起投。',
						select: false
					},
					{
						text: '8.为什么我无法进行投资？',
						text1: '未通过实名认证/为绑定银行卡/账户余额不足/出借项目当前状态为售罄/账户为冻结状态。',
						select: false
					},
					{
						text: '9.出借人教育',
						text1: '《网络借贷信息中介机构业务活动管理暂行办法》第九条规定网络借贷信息终结机构应当履行下列义务：“持续开展网络借贷知识普及和风险教育活动，加强信息披露工作，引导出借人以小额分散的方式参与网络借贷，确保出借人充分知悉借贷风险”。集财根据监管规定开立专门的投资者教育专栏，并分为“法律法规”和“风险提示”栏目，供平台用户了解学习。<br/>风险提示:<br/>您正在进行的是由集财提供网络借贷信息中介服务的网络借贷活动。集财在此就网络借贷活动的风险及禁止性行为向您提示如下：<br/>1、网络借贷是个体和个体之间通过互联网平台实现的直接借贷，您与借款人约定的且通过集财展示的借款利率或期待年回报率不代表您最终实际取得的利息或回报，您出借的本金以及相应的利息存在不能够按期收回的风险；集财不对您本金的收回、可获利息或回报金额作出任何承诺、保证。<br/><br/>2、您作为出借人，不得从事以下行为或存在以下情形：<br/>（1）向网络借贷信息中介机构提供不真实、不准确、不完整的信息；<br/>（2）使用非法资金或非自有资金进行出借；<br/>（3）不具备与进行网络借贷活动相适应的风险认知和承受能力，投资于与自身风险承受能力不匹配的融资项目；<br/>（4）其他借贷合同及有关协议约定的禁止性行为。<br/><br/>3、您确认已经知悉网络借贷活动的风险，保证不存在从事网络借贷活动的禁止性行为，承诺具备与参与网络借贷活动相适应的投资风险意识、风险识别能力、拥有非保本类金融产品投资的经历并熟悉互联网，承诺自行承担借贷产生的本息损失。<br/><br/>法律法规:<br/>最高人民法院关于审理民间借贷案件适用法律若干问题的规定：<a href="http://www.court.gov.cn/fabu-xiangqing-15146.html">http://www.court.gov.cn/fabu-xiangqing-15146.html</a><br/><br/>网络借贷信息中介机构业务活动管理暂行办法：<a href="http://www.cbrc.gov.cn/govView_37D312933F1A4CECBC18F9A96293F450.html">http://www.cbrc.gov.cn/<br/>govView_37D312933F1A4CEC<br/>BC18F9A96293F450.html</a><br/><br/>P2P网络借贷风险专项整治工作实施方案：<a href="http://www.cbrc.gov.cn/chinese/home/docDOC_ReadView/D81B52D3D20A49A99522C48FA8F1C752.html">http://www.cbrc.gov.cn/chinese<br/>/home/docDOC_ReadView/D81B52D<br/>3D20A49A99522C48FA8F1C752.html</a><br/><br/>',
						select: false
					}
				]
			}
		},
		methods: {
			tab2: function(todos1, index) {
				/*默认切换类的动作*/
				todos1.forEach(function(el) {
					el.select = false;
				});
//				todos1[index].select = true;
				if (this.seen == false) {
					todos1[index].select = true;
					this.seen = true;
				} else{
					todos1[index].select = false;
					this.seen = false;
				}
			}
		}
	}
</script>

<style>
	@import '../assets/css/help_center.css';
</style>