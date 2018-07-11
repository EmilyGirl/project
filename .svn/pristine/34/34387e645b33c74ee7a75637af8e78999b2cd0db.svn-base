<template>
	<div class="my_friend">
		<scroller :on-infinite="infinite" ref="myscroller" v-if="showscroller">
			<div style="height: .5rem;"></div>
			<ul class="dataList">
				<li v-for="list in lists">
					<span>{{list.beInvitePhone}}</span>
					<span v-if="list.count!='0'">奖励{{(list.profitCount/100).toFixed(2)}}元</span>
					<span v-if="list.count=='0'">未投资</span>
					<router-link :to='{path:"/activity/rebate_detail",query:{id:list.beInvitedId,auth:auth}}' v-if="list.count!='0'">
						<span>
							查看详情 <img src="../../img/invitedRrecord/icon_next.png" class="next"/>
						</span>
					</router-link>
				</li>
			</ul>
		</scroller>
		<div style='height:48vh;background-color: #FFFFFF;margin-top: .4rem; padding: 6rem;font-size: 1.5rem;line-height: normal; color: #888888;text-align:center' v-if="showscroller==false">
			<img class="noimg" src="../../img/invitedRrecord/icon_kong.png" >
			<p style="font-size: 1.6rem;font-weight: bold;color: #666666;">您还没有邀请记录</p>快去邀请吧
		</div>
	</div>
</template>

<script>
	import reset_rem from "../../../../assets/js/wechat/reset_rem.js";
	export default {
		name: "my_friend",
		props: {
			auth: {
				type: String
			},
		},
		data: function() {
			return {
				offset: 0,
				noData: false,
				lists: [],
				showscroller: true,
			}
		},
		created() {
			
		},
		methods: {
			//   时间转换**************************
			add0(m) {
				return m < 10 ? "0" + m : m;
			},
			getDate(shijianchuo) {
				//shijianchuo是整数，否则要parseInt转换
				var time = new Date(shijianchuo);
				var y = time.getFullYear();
				var m = time.getMonth() + 1;
				var d = time.getDate();
				var h = time.getHours();
				var mm = time.getMinutes();
				var s = time.getSeconds();
				return(
					y +
					"-" +
					this.add0(m) +
					"-" +
					this.add0(d) +
					"  " +
					this.add0(h) +
					":" +
					this.add0(mm)
				);
			},
			infinite(done) {
				if(this.noData) {
					setTimeout(() => {
						this.$refs.myscroller.finishInfinite(2);
					});
					return;
				}
				let self = this; //this指向问题
				setTimeout(() => {
					self.$refs.myscroller.resize();
					done();
				}, 1200);

				this.offset++;
				this.loadData();
			},
			loadData() {
				var _this = this;
				_this.$http.post("/Product/User/findRewardDetail", {
						parameters: '{"authorization":"' + _this.auth + '","currentPage":"' + _this.offset + '"}'
					})
					.then(function(res) {
						if(res.data.end == "ok") {
							_this.lists = _this.lists.concat(res.data.data.list);
						}
						if(res.data.end == "noData" && _this.offset == 1) {
							_this.showscroller = false;
						} else if(res.data.end == "noData") {
							_this.noData = true;
						}
					})
					.catch(function(err) {
						console.log(err);
					});
			},
			todetail(index) {
				let _this = this;
				_this.$router.push({
					name: "announcement",
					query: {
						noticeId: index
					}
				});
			}
		}
	};
</script>

<style scoped lang="less">
	@import url("../../../../assets/css/wechat/reset_rem.css");
	.my_friend {
		font-size: 2rem;
		overflow: hidden;
		.dataList {
			background: #FFFFFF;
			padding-top: 2rem;
			padding-left: 2.4rem;
			padding-bottom: 2rem;
			font-size: 1.4rem;
			line-height: 4rem;
			color: #202020;
			li {
				border-bottom: .1rem solid #E0E0E0;
				>span:first-of-type {
					margin-right: 4.2rem;
				}
				a {
					float: right;
					.next {
						width: 1.4rem;
						margin-right: 2rem;
					}
				}
			}
		}
		.noimg{
			width: 60%;
		}
	}
</style>