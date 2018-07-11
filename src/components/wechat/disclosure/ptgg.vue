<template>
	<div class="ptgg">
		<div class="out" v-for="(data,index) in datas">
			<div class="title">{{data.title}}</div>
			<div class="content">{{data.content}}</div>
			<router-link :to='data.route'>
				<div class="footer">
					<span class="time" v-html="data.time"></span>
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
		name: 'ptgg',
		data: function() {
			return {
				runNum: 0,
				checked: 0,
				datas: [{
						title: '集财官网更新升级公告',
						content:'亲爱的荠菜（集财）粉：集财理财官网即将迎来升级维护，期间将无法提供购买理财产品服务，如您有投资需求，可在集财理财APP中或者关注并通过微信公众号“集财圈儿”---“集财首页”----“理财产品”中进行投资理财。集财理财官网即将迎来升级维护，期间将无法提供购买理财产品服务，如您有投资需求，可在集财理财APP中或者关注并通过微信公众号“集财圈儿”---“集财首页”----“理财产品”中进行投资理财。',
						time:'2018.05.20 &nbsp;&nbsp;&nbsp; 08:00',
						route:{
							path:'/wechat/disclosure/ptgg/ptgg_active',
							query:{sign:'1'}
						}
					},
					{
						title: '关于集财理财系统升级公告',
						content:'亲爱的荠菜（集财）粉：集财理财将于2018年5月20日 02:00至2018年5月21日 02:00系统升级，期间暂时无法进行投资理财，还请您耐心等待，系统升级后即可让您的投资体验更加舒适。',
						time:'2018.05.18 &nbsp;&nbsp;&nbsp; 08:00',
						route:{
							path:'/wechat/disclosure/ptgg/ptgg_active',
							query:{sign:'2'}
						}
					},
					{
						title: '银行卡支付限额提升通知',
						content:'亲爱的荠菜（集财）粉：集财理财为拥抱合规，对接银行存管努力做好合规与安全保障，集财APP版本升级，新版APP震撼来袭。动动您的手指，在官网、现APP首页上方的展示图中、集财圈儿微信公众号中都可以下载新版集财理财APP。',
						time:'2016年05月29 &nbsp;&nbsp;&nbsp; 01:14',
						route:{
							path:'/wechat/disclosure/ptgg/ptgg_active',
							query:{sign:'3'}
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
	.ptgg{
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