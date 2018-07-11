<template>
	<div class="wapper">
		<ul class="tab clearfix" id="litab">
			<li v-for="(item, index) in items" :class="[commonClass,item.active ? activeClass : '']" v-on:click="navClickEvent(items,index)">
				<a href="javascript:;"><span></span>{{item.text}}</a>
			</li>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		data: function() {
			return {
				commonClass: 'nav-item',
				activeClass: 'active',
				items: [{
						text: '账户相关',
						active: true
					},
					{
						text: '出借项目',
						active: false
					},
					{
						text: '充值/提现',
						active: false
					},
					{
						text: '名词解释',
						active: false
					}
				]
			}
		},
		methods: {
			navClickEvent: function(items, index) {
				/*默认切换类的动作*/
				items.forEach(function(el) {
					el.active = false;
				});
				items[index].active = true;
				/*开放用户自定义的接口*/
				//      this.$emit('navClickEvent',items,index);
				switch(index) {
					case 0:
						this.$router.push({
							path: '/question/account'
						})
						break;
					case 1:
						this.$router.push({
							path: '/question/matters'
						})
						break;
					case 2:
						this.$router.push({
							path: '/question/recharge'
						})
						break;
					case 3:
						this.$router.push({
							path: '/question/explain'
						})
						break;
				}
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import '../assets/css/help_center.css';
</style>