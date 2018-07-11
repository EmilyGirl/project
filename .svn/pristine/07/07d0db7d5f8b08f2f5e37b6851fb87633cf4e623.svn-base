<template>
	<div class="help_centers">
		<ul class="nav">
			<li li v-for="(wrap,index) in wrapped" @click="clickNav(index)">
				<span :class="{'nav_li':checked==index}"></span> {{wrap.title}}
			</li>
		</ul>
		<div style="margin-top:8rem;">

			<div v-if="checked==0" v-for="(list,i) in about">
				<ol>
					<li @click="show(i)">
						<p class="art_titles">{{list.title}}</p>
						<div class="help_content" v-bind:class="{active:index==i}" v-html="list.content"></div>
					</li>
				</ol>
			
			</div>
			<div v-if="checked==1" v-for="(list,i) in lend">
				<ol>
					<li @click="show(i)">
						<p class="art_titles">{{list.title}}</p>
						<div class="help_content" v-bind:class="{active:index==i}" v-html="list.content"></div>
					</li>
				</ol>
			</div>

		
			<div v-for="(list,i) in withdraw" v-if="checked==2">
				<ol>
					<li @click="show(i)">
						<p class="art_titles">{{list.title}}</p>
						<div class="help_content" v-bind:class="{active:index==i}" v-html="list.content"></div>
					</li>
				</ol>
			</div>

			<div v-for="(list,i) in explain" v-if="checked==3">
				<ol>
					<li @click="show(i)">
						<p class="art_titles">{{list.title}}</p>
						<div class="help_content" v-bind:class="{active:index==i}" v-html="list.content">{{list.content}}</div>
					</li>
				</ol>
			</div>
		</div>
	</div>
</template>

<script>
	import reset_rem from "../../assets/js/wechat/reset_rem.js";
	export default {
		name: 'jc_about',
		data: function() {
			return {
				index: -1,
				checked: 0,
				wrapped: [{
						title: "账户相关",
						num: 0
					},
					{
						title: "出借项目",
						num: 0
					},
					{
						title: "充值/提现",
						num: 0
					}, {
						title: "名词解释",
						num: 0
					}
				],
				about: [{
					title: "1.如何注册？",
					content: "点击“我的”页面后，点击“注册”按钮，并填写手机号码，获取验证码，设置登录密码即可完成注册。"
				}, {
					title: "2.注册账户时，设置登录密码有什么要求？",
					content: "密码必须包含数字和英文字母（区分大小写）或符号，至少6位字符，不超过16位字符。"
				}, {
					title: "3.忘记用户名、密码、怎么办？",
					content: "用户名即为您的手机号。忘记登录密码，可以在登录页面，点击“忘记密码”，按系统提示操作即可。忘记交易密码，可以登录后，在“我的”页面，点击左上角设置图标，点击修改交易密码，点击下方忘记密码，验证手机后即可修改交易密码。"
				}, {
					title: "4.交易密码有什么用？",
					content: "交易密码是为保证用户资金安全而设立密码体系，所有涉及到资金类操作（如充值、提现、购买出借产品），系统都需校验交易密码。所以说交易密码非常重要，切勿将交易密码告知他人并妥善保管。"
				}, {
					title: "5.为什么要进行实名认证？",
					content: "为了提高账户安全等级，保障资金的安全性和合同的有效性，客户需在首次充值前完成实名登记,集财理财承诺会对所有用户资料严格保密。"
				}, {
					title: "6.实名登记时，如果身份证号里含有x，怎么填写？",
					content: "填写大写x，不区分大小写。"
				}, {
					title: "7.银行卡绑定后是否可更改？",
					content: "在同卡进出的原则下绑定银行卡后，由于某些因素需要解绑的用户，必须提供如银行挂失等证明给客服人员，解绑后再重新绑定。但需注意：即将绑定银行卡的开户名需与原实名认证姓名必须一致，否则会导致提现失败。"
				}, {
					title: "8.注册时手机收不到验证码怎么办？",
					content: "<p>1)确认短信是否被手机软件拦截或过滤</p><p>2)确认手机是否能正常接收短信（信号问题、欠费、停机等）</p><p>3)短信收发过程中可能会有延时，请耐心等候。</p>"
				}, {
					title: "9.为什么要绑定银行卡？",
					content: "绑定银行卡是第三方资金托管安全方式中重要的一环，也是实名认证的一种方式，资金流动在绑定银行卡内，对出借者提供了资金安全保障，同时对出借也较为方便。"
				}, {
					title: "10.支持哪些银行进行实名认证？（仅支持储蓄卡，暂不支持信用卡）？",
					content: "目前支持：工商银行、中国银行、建设银行、交通银行、光大银行、广发银行、兴业银行、平安银行、浦发银行、上海银行、邮储银行、中信银行、招商银行、华夏银行、民生银行、农业银行、北京银行。"
				}, {
					title: "11.手机接收不到验证码信息？",
					content: "因工信部管制垃圾短信，现各手机运营商都在对短信网关号段进行品牌改造和升级，建议拨打我们客服热线。"
				}, {
					title: "12.为什么会登录失败？",
					content: "请您核对以下几点，这些可能是导致您登录失败的原因：<p>1)请您确认输入的手机号是否正确；</p><p>2)请您确认输入的密码是否正确。如果忘记密码，您可以点击【忘记密码】重新设置；</p><p>3)网络问题也会造成登录失败，如果提示网页有错误，建议您稍后尝试。<p>"
				}, {
					title: "13.手势密码有什么用？",
					content: "手势密码为保护用户资金及账户信息安全。建议启用该功能。"
				}, {
					title: "14.忘记手势密码，怎么办？",
					content: "如果已进入APP界面，可在手势密码页面，点击忘记手势密码，选择重新登录。待重新登录后，重置手势密码。"
				}, {
					title: "15.怎么关闭手势密码？",
					content: "选择“我的”页面，点击左上角图标，在手势密码锁定栏中点击右边开关，开关显示灰色即为关闭。"
				}, {
					title: "16.绑定账户的银行卡丢失，怎么办？",
					content: "为了您的资金安全请及时拨打我们客服热线进行解绑操作。"
				}],
				lend: [{
					title: "1.如何选择集财项目？",
					content: "集财提供多类型出借项目,可在APP”出借产品列表”中选择心意的出借项目,并按照提示步骤操作。"
				}, {
					title: "2.集财的出借收益是多少？",
					content: "不同出借项目具有不同的预期收益率,可根据实际情况进行选择。"
				}, {
					title: "3. 预期收益如何计算？",
					content: "预估收益 = 出借总金额 * (年化收益率/365)*出借期限(天)。"
				}, {
					title: "4.出借项目什么时候起息？",
					content: "所出借的项目起息日将在产品页面显示，出借前可了解起息方式后再行出借。"
				}, {
					title: "5.出借项目成功后,我能提前赎回吗？",
					content: "为了保护出借人的利益,不提供提前赎回服务。"
				}, {
					title: "6.出借项目到期后,本金和利息什么时候到账？",
					content: "T + 1个工作日到账。"
				}, {
					title: "7.最低出借金额？",
					content: "将根据实际情况设置最低出借金额，项目详情可见。"
				}, {
					title: "8.为什么我无法进行出借？",
					content: "未通过实名认证/为绑定银行卡/账户余额不足/出借项目当前状态为售罄/账户为冻结状态。"
				}, {
					title: "9.出借人教育 ",
					content: "《网络借贷信息中介机构业务活动管理暂行办法》第九条规定网络借贷信息终结机构应当履行下列义务：“持续开展网络借贷知识普及和风险教育活动，加强信息披露工作，引导出借人以小额分散的方式参与网络借贷，确保出借人充分知悉借贷风险”。集财根据监管规定开立专门的出借者教育专栏，并分为“法律法规”和“风险提示”栏目，供平台用户了解学习。 风险提示: 您正在进行的是由集财提供网络借贷信息中介服务的网络借贷活动。集财在此就网络借贷活动的风险及禁止性行为向您提示如下：<p>1、网络借贷是个体和个体之间通过互联网平台实现的直接借贷，您与借款人约定的且通过集财展示的借款利率或期待年回报率不代表您最终实际取得的利息或回报，您出借的本金以及相应的利息存在不能够按期收回的风险；集财不对您本金的收回、可获利息或回报金额作出任何承诺、保证。</p><p> 2、 您作为出借人，不得从事以下行为或存在以下情形：</p><p> 1)向网络借贷信息中介机构提供不真实、不准确、不完整的信息；</p><p> 2)使用非法资金或非自有资金进行出借；</p><p> 3)不具备与进行网络借贷活动相适应的风险认知和承受能力，出借于与自身风险承受能力不匹配的融资项目；</p><p> 4)其他借贷合同及有关协议约定的禁止性行为。</p><p> 3、 您确认已经知悉网络借贷活动的风险，保证不存在从事网络借贷活动的禁止性行为，承诺具备与参与网络借贷活动相适应的出借风险意识、风险识别能力、拥有非保本类金融产品出借的经历并熟悉互联网，承诺自行承担借贷产生的本息损失。</p><p> 法律法规: </p><p>最高人民法院关于审理民间借贷案件适用法律若干问题的规定： </p><p>网络借贷信息中介机构业务活动管理暂行办法：</p><a style='color:blue;word-wrap: break-word;text-decoration: underline;' href='http://www.court.gov.cn/fabu-xiangqing-15146.html' target='_blank'>http://www.court.gov.cn/fabu-xiangqing-15146.html</a><br/><p>网络借贷信息中介机构业务活动管理暂行办法：</p><a style='color:blue;word-wrap: break-word;text-decoration: underline;' href='http://www.cbrc.gov.cn/govView_37D312933F1A4CECBC18F9A96293F450.html' 'target='_blank'>http://www.cbrc.gov.cn/govView_37D312933F1A4CECBC18F9A96293F450.html</a><br/><p>P2P网络借贷风险专项整治工作实施方案： </p><a style='color:blue;word-wrap: break-word;text-decoration: underline;' href='http://www.cbrc.gov.cn/chinese/home/docDOC_ReadView/D81B52D3D20A49A99522C48FA8F1C752.html' target='_blank'>http://www.cbrc.gov.cn/chinese/home/docDOC_ReadView/D81B52D3D20A49A99522C48FA8F1C752.html</a>"

				}],
				withdraw: [{
					title: "1.提现规则？",
					content: "<p>1)提现大于1元即可提现，每天只能提现一次，提现额度没有限额</p><p>2) 提现资金到账时间为及时到账， 节假日顺延</p><p> 3) 改成充值提现手续费都是0 </p><p>4) 同卡进出。</p>"
				}, {
					title: "2.如何进行资金充值？",
					content: "选择“我的”页面，点击“充值”按钮，输入充值金额点击“确认充值”进入第三方支付充值页面，验证手机号码后，点击确认付款即可充值成功。"
				}, {
					title: "3.最低充值金额是多少？",
					content: "100元起充。"
				}, {
					title: "4.为什么银行已扣款，但平台账户余额没有增加？",
					content: "您的原因很很可能是下面的情况：银行已扣款， 但是可能由于银行系统原因， 资金没有同步到第三方支付平台， 这种情况您不用担心， 如果长时间还没有到帐， 请客服热线 。"
				}, {
					title: "5.查询可提现金额？",
					content: "成功登录后，选择“我的”页面查看可用余额。"
				}, {
					title: "6.提现需要多长时间到达银行账户？",
					content: "工作日17:30前提现，当天到达银行账户；17:30后提现，隔天到达银行账户。（节假日顺延）"
				}, {
					title: "7.充值手续费怎么收取？",
					content: "不收取。"
				}, {
					title: "8.充值金额到账时间？",
					content: "即时到账，如遇到网络繁忙、节假日等，可能会延迟。"
				}, {
					title: "9.充值失败，怎么办？",
					content: "充值失败订单的金额如果银行已扣费成功那将会在1-7个工作日（如遇双休日或法定节假日顺延）返回银行原卡。您可以再次尝试充值，若还未能解决问题，请致电我们客服热线，客服专员会帮助您解决问题。"
				}, {
					title: "10.如何查看交易记录？",
					content: "成功登录集财理财账户，选择“ 我的”页面 ，点击“交易记录”即可查看历史交易记录。"
				}, {
					title: "11.如何查看出借记录？",
					content: "成功登录集财理财账户，选择“ 我的”页面 ，点击“我的出借”即可查看相关出借记录。"
				}],
				explain: [{
						title: "1.什么是理财券？",
						content: "<p>1)理财券在出借中可作为虚拟金使用，且每次只能使用一张；</p><p>2）理财券不能直接提现，使用理财券产生的利息可以提现；示例：如用户A出借10000元，使用2000元理财券，则实际支付10000元，产品到期后将获得10000元本金和12000元产生的收益。</p>"
					}, {
						title: "2.什么是“累计收益”？",
						content: "截止目前所购买出借产品所产生收益之和。"
					}, {
						title: "3.什么是“可用余额”？",
						content: "截止目前可用于购买出借产品的账户金额。"
					}, {
						title: "4.什么是“出借中金额”？",
						content: "截止目前所购买且还没结束的出借产品总金额。"
					}, {
						title: "5.什么是“理财券余额”？",
						content: "理财券金额之和。"
					}, {
						title: "6.什么是“待结算收益”",
						content: "截止目前所购买且还没结束的出借产品总收益（利息）。"
					}, {
						title: "7.什么是“已结算收益”？",
						content: "截止目前所购买的出借产品且到账的收益（利息）之和。"
					}, {
						title: "8.什么是“资产总额”？",
						content: "资产总额=待收本金+待收收益+可用余额+可用礼金。"
					}, {
						title: "9.什么是“项目总额”？",
						content: "指该出借项目所募集的总资金。"
					}, {
						title: "10.什么是“起投金额”？",
						content: "指出借产品支持最少购买金额。"
					}, {
						title: "11.什么是“可投金额”？",
						content: "指目前该出借产品剩余可出借金额。"
					}, {
						title: "12.什么是“封闭期”？",
						content: "出借期限开始至结束之间的时间。"
					}, {
						title: "13.什么是“到期时间”？",
						content: "指封闭期结束的时间。"
					}, {
						title: "14.什么是“起息日”？",
						content: "指购买的出借产品正式起息的日期。"
					}, {
						title: "15.什么是“到期还本付息”？",
						content: "又称到期一次还本付息，是指出借人在出借期限内不是按月偿还本息，而是封闭期后一次性归还本金和利息。"
					}

				]
			}
		},
		methods: {
			clickNav(num) {
				var _this = this
				_this.checked = num
				_this.index = -1;

			},
			show(j) {
				var _this = this
				if(_this.index != j) {
					_this.index = j;

				} else if(_this.index == j) {
					_this.index = -1;
				}

			}
		}
	}
</script>

<style scoped>
	@import url("../../assets/css/wechat/reset_rem.css");
	/*@import '../../assets/css/help_center.css';*/
	/*帮助中心*/
	
	.help_centers {
		width: 100%;
		list-style: none;
	}
	
	.help_centers .nav {
		width: 100%;
		padding: 0.5rem 0;
		list-style: none;
		display: flex;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 9999;
		background: white;
	}
	
	.help_centers .nav li {
		display: inline-block;
		flex: 1;
		text-align: center;
		border-bottom: 0.5rem solid #C7C7C7;
		padding: 0.6rem 0;
		font-size: 1.4rem;
	}
	
	.help_centers .nav li span {
		width: 3.5rem;
		height: 3.5rem;
		padding-bottom: 1rem;
		display: block;
		margin: 0 auto;
		background-size: 100% 100%;
		-moz-background-size: 100% 100%;
		-webkit-background-size: 100% 100%;
	}
	
	.help_centers .nav li:nth-child(1) span {
		background: url("../../assets/img/ico_sprit.png") 0rem -0.25rem/ 18rem 10rem no-repeat;
	}
	
	.help_centers .nav li:nth-child(2) span {
		background: url("../../assets/img/ico_sprit.png") -4.75rem -0.25rem/ 18rem 10rem no-repeat;
	}
	
	.help_centers .nav li:nth-child(3) span {
		background: url("../../assets/img/ico_sprit.png") -9.5rem -0.25rem / 18rem 10rem no-repeat;
	}
	
	.help_centers .nav li:nth-child(4) span {
		background: url("../../assets/img/ico_sprit.png") -13.5rem -0.25rem / 18rem 10rem no-repeat;
	}
	
	.help_centers div {
		padding: 0.5rem;
		background: #fff;
	}
	
	.help_centers div ol li {
		line-height: 1.8rem;
		/*padding: 0.8rem 0 0.8rem 0;*/
		border-bottom: 0.01rem solid #f2f2f2;
	}
	.help_centers div ol li .art_titles {
		font-size:1.3rem;
		line-height: 3rem;
		padding-right: 1rem;
		background: url("../../assets/img/right.png") right center / 0.7rem auto no-repeat;
	}
	
	.help_centers div ol li .help_content {
		font-size: 1.2rem !important;
		padding: 1.2rem 0 1.6rem;
		color: #808080;
		display: none;
		box-sizing: border-box;
	}
	
	.help_centers li div.active {
		display: block !important;
	}
	

	
	
	
	.help_centers div p i {
		position: absolute;
		right: 2rem;
		top: 25%;
	}
	
.help_centers .nav_li {
		background-position-y: -5rem !important;
	}
</style>