<template>
	<div class="jgfg">
		<div class="out" v-for="(data,index) in datas">
			<div class="title">{{data.title}}</div>
			<div class="content" v-html="data.content"></div>
			<router-link :to='data.route'>
				<div class="footer">
					<span class="time"></span>
					<div class="rgt">
						查看内容 <img src="../../../assets/img/xp/publish_arrows_right.png" class="rightImg"/>
					</div>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'jgfg',
		data: function() {
			return {
				datas: [{
						title: '关于做好P2P网络借贷风险专项整治整改验收工作的通知',
						content:'各省(区、市、计划单列市)网络借贷风险专项整治联合工作办公室：<br/>为扎实推进P2P网络借贷(以下简称"网贷" )风险专项整治工作，在分类处置工作基础上，进一步加强各省(区、市、计划单列市)辖内网贷机构的整改验收工作，根据《网络借贷信息中介机构业务活动管理暂行办法》（以下简称《办法》)、《关于印发p2p网络借贷风险专项整治工作实施方案的通知》（银监发 [2016] 11号）和相关工作部署精神，现将网贷风险专项整治整改验收工作有关要求及安排通知如下：一、充分认识整改验收的重要意义',
						route:{
							path:'/wechat/disclosure/jgfg/jgfg_active',
							query:{sign:'1'}
						}
					},
					{
						title: '网络借贷信息中介机构业务活动信息披露指引',
						content:'第一章 总则<br />第一条 为规范网络借贷信息中介机构业务活动信息披露行为，维护参与网络借贷信息中介机构业务活动主体的合法权益，建立客观、公平、透明的网络借贷信息中介业务活动环境，促进网络借贷行业健康发展，依据《中华人民共和国民法通则》《关于促进互联网金融健康发展的指导意见》《网络借贷信息中介机构业务活动管理暂行办法》等法律法规，制定本指引。',
						route:{
							path:'/wechat/disclosure/jgfg/jgfg_active',
							query:{sign:'2'}
						}
					},
					{
						title: '网络借贷资金存管业务指引',
						content:'第一章 总 则<br />第一条 为规范网络借贷资金存管业务活动，促进网络借贷行业健康发展，根据《中华人民共和国合同法》、《中华人民共和国商业银行法》和《关于促进互联网金融健康发展的指导意见》、《网络借贷信息中介机构业务活动管理暂行办法》及其他有关法律法规，制定本指引。',
						route:{
							path:'/wechat/disclosure/jgfg/jgfg_active',
							query:{sign:'3'}
						}
					},
					{
						title: '网络借贷信息中介机构备案管理登记指引',
						content:'第一章 总则<br />第一条为建立健全网络借贷信息中介机构备案登记管理制度，加强网络借贷信息 中介机构事中事后监管，完善网络借贷信息中介机构基本统计信息，根据《网络借贷 信息中介机构业务活动管理暂行办法》等规定，制定本指引。',
						route:{
							path:'/wechat/disclosure/jgfg/jgfg_active',
							query:{sign:'4'}
						}
					},
					{
						title: '网络借贷信息中介机构业务活动管理暂行办法',
						content:'第一章　总　则<br />第一条　为规范网络借贷信息中介机构业务活动，保护出借人、借款人、网络借贷信息中介机构及相关当事人合法权益，促进网络借贷行业健康发展，更好满足中小微企业和个人投融资需求，根据《关于促进互联网金融健康发展的指导意见》提出的总体要求和监管原则，依据《中华人民共和国民法通则》、《中华人民共和国公司法》、《中华人民共和国合同法》等法律法规，制定本办法。',
						route:{
							path:'/wechat/disclosure/jgfg/jgfg_active',
							query:{sign:'5'}
						}
					},
				]
			}
		},
		methods: {
			link(route) {
				console.log(route);
//				this.$router.push(route);
			},
		}
	}
</script>

<style scoped lang="less">
	@import url("../../../assets/css/wechat/reset_rem.css");
	.jgfg{
		position: relative;
		.router{
			padding: 11rem 1.55rem 0 1.55rem;
			position:absolute;
			top: 0;
			a{
				display:block;
				width:34.4rem;
				height:4rem;
				/*background-color: rgba(200,0,0,.3);*/
				margin-bottom: 14.2rem;
			}
			
		}
		.out{
			padding: 2.4rem 1.55rem 1.8rem 1.55rem;
			background-color: white;
			margin-bottom: 1rem;
			.title{
				font-size: 1.5rem;
				line-height: 2rem;
				font-weight: bold;
				margin-bottom: 2rem;
			}
			.content{
				font-size: 1.4rem;
				color: #666666;
				line-height: 2rem;
				max-height: 12rem;
				text-align: justify;
				overflow: hidden;
				margin-bottom: 1.5rem;
			}
			.footer{
		        display: flex;
		        justify-content: space-between;
		        font-size: 1.3rem;
		      	color: #999999;
		        .rgt{
		            line-height:2rem;
		            .rightImg{
		                width: .6rem;
		                vertical-align: -.14rem;
		                margin-left: .5rem;
		            }
		        }
		    }
		}
		
	}
</style>