<template>
	<div class="experience">
		<img src="../assets/img/experience_1.png"/>
		<!--<div class="liBtn">
			立即购买
		</div>-->
		<img class="guidance_gou" src="../assets/img/yindao1.png"/>
		<router-link to="./experience_invest" class="water">
			<div class="water-wai">
				<div class="water-nei"></div>
			</div>
		</router-link>
	</div>
</template>

<script>
	
	export default {
		name: 'hello',
		data: function() {
			return {
				timer: null
			}
		},
		created: function() {
			this.load(); //定义方法
		},
		beforeDestroy: function () {
			clearTimeout(this.timer)
		},
		methods: {
			load: function () {
				var _this = this;
				this.timer = setTimeout(function () {
					_this.$router.push({
						path: '/experience_invest'
					});
				},3000);
			}
		}
	}	
</script>

<style>
	@import '../assets/css/help_center.css';
</style>