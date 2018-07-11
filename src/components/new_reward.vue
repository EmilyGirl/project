<template>
	<div class="bg-content">
		<div class="nojilu" v-if="nojilu">
			<img class="bgpic"  src="../assets/img/bg1.png"/>
			<p>还没有奖励？赶紧去
				<router-link :to=" { path:'./newInvitation',query:{ source:this.$route.query.source,auth:this.$route.query.auth,username:this.$route.query.username }} ">
			   		<span class="toyaoq1">邀请好友</span>
				</router-link>
				
			吧</p>
			<router-link :to="{ path:'./newInvitation',query:{ source:this.$route.query.source,auth:this.$route.query.auth,username:this.$route.query.username }} ">
			   	<img class="toyaoq2" src="../assets/img/btn1.png"/>
			</router-link>
			
		</div>
		<div class="jilu1" v-if="jilu">
			<p><span>时间</span><span>已投资好友</span><span>奖励金额</span></p>
			<ul>
				<li class="clearfix" v-for="i in list">
					<span>{{ i.earnTime | formatDate }}</span>
					<span>{{ i.beInvitePhone.substring(0,3)+"****"+i.beInvitePhone.substring(8,11) }}</span>
					<span class="orange you clearfix">{{ i.earnMoney/100 }}&nbsp;&nbsp;<i class="gray you"　v-if="i.status=='0'">待发放</i>
						<i　class="green you"　v-if="i.status=='1'">已发放</i>
					</span>
				</li>
			</ul>
			<infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
				<span slot="no-more" style="float: none;">没有更多数据了</span>
			</infinite-loading>
		</div>
	</div>
</template>

<script>
	import { formatDate } from '../assets/js/date.js';
	import InfiniteLoading from 'vue-infinite-loading';
	export default {
		name: 'hello',
		data: function() {
			return {
				list: [],
				date:'',
				nojilu: false,
				jilu: true,
				show: false
			}
		},
		filters: {
			formatDate(time) {
				var date = new Date(time);
				return formatDate(date, 'yyyy-MM-dd');
			}
		},
		methods: {
			onInfinite() {
				var currentPage = Math.floor(this.list.length / 20 + 1);
				var auth = this.$route.query.auth;
				var source = this.$route.query.source;
				this.$http.post('/Product/User/loadInviteEarnRecord', {
					parameters: '{"authorization":"'+ auth +'","currentPage":"'+currentPage+'","type":"1"}'
					}).then((res) => {
					if (res.data.end == 'noData') {
						this.nojilu = true;
						this.jilu = false;
					}else{
						this.nojilu = false;
						this.jilu = true;
						if(res.data.list.length) {
							this.list = this.list.concat(res.data.list);
							this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
							if(currentPage === res.data.allPage) {
								this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
							}
						} else {
							this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
						}
					}
				});
			}
		},
		components: {
			InfiniteLoading,
		}
	}	
</script>

<style scoped>
	@import '../assets/css/reward.css';
</style>