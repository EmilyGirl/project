<template>
	<div class="appraisal_result">
		<div class="type">您的风险测评类型为</div>
		<div class="type-title">{{ type }} <span>”</span></div>
		<div class="type-img"><img src="../assets/img/appraisal_result.png"/></div>
		<div class="type-cont">集财理财建议您最少每年或当您的状态有任何重大转变时，对您的风险评估进行检视，以确保您的出借决定与您对风险所持的态度一致。</div>
		<router-link to="./fake_appraisal">
		   	<div class="again">重新测评 ></div>
		</router-link>
		<div class="type-bottom">期望回报并非平台承诺收益，市场有风险，投资需谨慎</div>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		data: function() {
			return{
				type: ''
			}
		},
		created: function () {
			var sum = this.$route.query.sum;
			if (sum < 60 || sum == 60) {
				this.type = '保守型'
			} else if (sum > 60 && sum < 80 || sum == 80) {
				this.type = '平衡型'
			} else if (sum > 80) {
				this.type = '进取型'
			}
		}
	}
</script>

<style scoped>
	@import '../assets/css/help_center.css';
</style>