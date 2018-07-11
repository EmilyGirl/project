<template>
	<div>
		<ul>
			<li class="integral_detail" v-for="i in list">
				<p>{{ i.insertTime | formatDate }}</p>
				<div class="bottom clearfix">
					<span class="left">{{ i.note }}</span>
					<span class="right" v-if="i.coinType == '2'">+{{ i.coin }}</span>
					<span class="right1" v-else="i.coinType == '1'">-{{ i.coin }}</span>
				</div>
			</li>
		</ul>
		<infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
			<span slot="no-results">没有数据...</span>
			<span slot="no-more" style="float: none;">没有更多数据了</span>
		</infinite-loading>
	</div>
</template>

<script>
	import { formatDate } from '../assets/js/date.js';
	import InfiniteLoading from 'vue-infinite-loading';
	export default {
		name: 'hello',
		data: function() {
			return {
				list: []
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
				this.$http.post('/Product/User/findMCoinRecordList', {
					parameters: '{"authorization":"'+ auth +'","currentPage":"'+currentPage+'","pageSize":"20"}'
				}).then((res) => {
					if (res.data.end == 'ok') {
						if(res.data.list.length) {
							this.list = this.list.concat(res.data.list);
							this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
							if(currentPage == res.data.allPage) {
								this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
							}
						} else {
							this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
						}
					} else if (res.data.end == 'noData') {
						this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
					}
					
				});
			}
		},
		components: {
			InfiniteLoading,
		}
	}
</script>

<style>
	@import '../assets/css/help_center.css';
</style>