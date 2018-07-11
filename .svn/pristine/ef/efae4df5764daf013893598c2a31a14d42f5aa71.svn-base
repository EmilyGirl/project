<template>
	<div class="record">
		<div class="banner">
			<div class="center">
				<p class="all_money" v-defaultZero:money='(data.ProfitAllCount/100).toFixed(2)'></p>
				<p>累计奖励(元)</p>
			</div>
			<div class="bot">
				<div class="yifa">
					<p class="momey" v-defaultZero:money='(data.ProfitCount/100).toFixed(2)'>500</p>
					<p>已发放奖励(元)</p>
				</div>
				<div class="interval">|</div>
				<div class="weifa">
					<p class="momey" v-defaultZero:money='(data.ProfitNotCount/100).toFixed(2)'>100</p>
					<p>待发放奖励(元)</p>
				</div>
			</div>
		</div>
		<ul class="wrapped_title">
			<li v-for="(wrap,index) in wrapped" :class="{'wrap_li':selected==index}" @click="switchover(index)">{{wrap.title}}</li>
			<!--<li class="clear"></li>-->
		</ul>
		<div class="wrapped_box">
			<div v-if="selected == 0">
				<myFriend :auth="auth"/>
			</div>
			<div v-if="selected == 1">
				 <rewardRecord :auth="auth"/> 
			</div>
		</div>
	</div>
</template>

<script>
	import myFriend from "../../pub/comps/invited_record/my_friend";
	import rewardRecord from "../../pub/comps/invited_record/reward_record";
	import reset_rem from "../../../assets/js/wechat/reset_rem.js";
	export default {
		name: "record",
		components: {
		  myFriend,
		  rewardRecord,
		},
		data() {
			return {
				selected: 0,
				wrapped: [{
						title: "我的好友"
					},
					{
						title: "奖励记录"
					}
				],
				auth:'',
				data:'',
			};
		},
		created() {
			this.auth=this.$route.query.auth;
			this.loadData();
		},
		methods: {
			switchover: function(index) {
				this.selected = index;
			},
			loadData() {
				var _this = this;
				_this.$http
					.post("/Product/User/findReward", {
						parameters: '{"authorization":"' + _this.auth + '"}'
					})
					.then(function(res) {
						if(res.data.end == "ok") {
							_this.data = res.data.data;
//							console.log(_this.data);
						}else{
							_this.$Toast(res.data.message);
						}
					})
					.catch(function(err) {
						console.log(err);
					});
			},
		}
	};
</script>

<style scoped lang="less">
	@import url("../../../assets/css/wechat/reset_rem.css");
	.record{
		overflow: hidden;
		.banner{
			width: 100%;
			height: 17rem;
			background-image: linear-gradient(0deg, #FF815A 0%, #FF6767 100%);
			font-size: 1.2rem;
			line-height: normal;
			color: #FFFFFF;
			.center{
				width: 100%;
				height: 11.3rem;
				display: flex;
				justify-content: center;
				align-content: center;
				flex-wrap: wrap;
				p{
					width: 100%;
					text-align: center;
				}
				.all_money{
					font-size: 3.6rem;
				}
			}
			.bot{
				display: flex;
				justify-content: space-around;
				div{
					text-align: center;
					margin: 0 4rem;
				}
				.interval{
					font-size: 2rem;
					opacity: .2;
					margin: 0;
				}
				.momey{
					font-size: 1.6rem;
				}
			}
		}
		.wrapped_title {
			width: 100%;
			height: 4.5rem;
			background: #ffffff;
			border-top: 1px solid #ebebeb;
			border-bottom: 1px solid #ebebeb;
			z-index: 11;
			li {
				float: left;
				width: 25%;
				margin: 0 12.5%;
				height: 4.2rem;
				text-align: center;
				line-height: 4.5rem;
				font-size: 1.5rem;
				color: #A0A0A0;
				font-weight: bold;
			}
			.wrap_li {
				color: #000000;
				border-bottom: 0.3rem solid #FF5D5D;
			}
		}
		.wrapped_box{
			
		}
		
	}
	
</style>
<style lang="less">
	.my_friend,
	.reward_record{
		._v-container{
			position: relative !important;
			height: 67.6vh !important;
		}
		.loading-layer{
			margin: 2rem 0;
			height: 3rem !important;
		}
		._v-container>._v-content>.loading-layer .spinner-holder .spinner, ._v-container>._v-content>.pull-to-refresh-layer .spinner-holder .spinner{
			width: 2rem !important;
			height: 2rem !important;
		}
		.no-data-text{
			font-size: 1.5rem;
		}
	}
	
</style>