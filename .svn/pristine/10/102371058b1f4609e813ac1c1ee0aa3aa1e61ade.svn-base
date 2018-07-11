<template>
	<div class="homeTabs">
		<ul class="tab clearfix">
			<li v-for="(item, index) in items" :class="[commonClass,item.active ? activeClass : '']" v-on:click="navClickEvent(items,index)">
				<a href="javascript:;"><span></span>{{item.text}}</a>
			</li>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script>
	import reset_rem from "../../assets/js/wechat/reset_rem.js";
	export default {
		name: 'home',
		data() {
			return {
				commonClass: 'nav-item',
				activeClass: 'active',
				items: [{
						text: '出借',
						active: true
					},
					{
						text: '我的',
						active: false
					},
				]
			}
		},
		methods: {
			navClickEvent: function(items, index) {
				items.forEach(function(el) {
					el.active = false;
				});
				items[index].active = true;
				switch(index) {
					case 0:
						this.$router.push({
							path: '/wechat/subpage/product'
						})
						break;
					case 1:
						this.$router.push({
							path: '/wechat/homepage/mine'
						})
						break;
				}
			}
			
		}
	}
</script>

<style scoped>
	@import url("../../assets/css/wechat/reset_rem.css");
	@import url("../../assets/css/wechat/home.css");
</style>