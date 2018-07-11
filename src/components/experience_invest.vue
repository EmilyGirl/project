<template>
	<div class="experience">
		<img src="../assets/img/licai_bg.png"/>
		<img class="guidance_gou1" src="../assets/img/yindao2.png"/>
		<router-link to="./experience_into" class="water-invest">
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
						path: '/experience_into'
					});
				},3000);
			}
		}
	}	
</script>

<style>
	@import '../assets/css/help_center.css';
</style>