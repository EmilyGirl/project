<template>
	<div class="month_report">
		<img src="../assets/img/month_1.png" alt="" />
		<img src="../assets/img/month_2.png" alt="" />
		<img src="../assets/img/month_3.png" alt="" />
		<img src="../assets/img/month_4.png" alt="" />
		<img src="../assets/img/month_5.png" alt="" />
		<img src="../assets/img/month_6.png" alt="" />
		<img src="../assets/img/month_7.png" alt="" />
		<img src="../assets/img/month_8.png" alt="" />
		<img src="../assets/img/month_9.png" alt="" />
		<img src="../assets/img/month_10.png" alt="" />
		<img src="../assets/img/month_11.png" alt="" />
		<img src="../assets/img/month_12.png" alt="" />
		<img src="../assets/img/month_13.png" alt="" />
		<img src="../assets/img/month_14.png" alt="" />
		<button class="month_share" v-bind:disabled="dis" v-tap="{methods :share}"><img src="../assets/img/share_btn.png"/></button>
		<div class="invit-close" v-if="close">{{ message }}</div>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		data: function() {
			return{
				close: false,
				dis: false,
				message: '',
			}
		},
		methods: {
			share:function () {
				var source = this.$route.query.source;
				var model = 9;
				var activityId = 0;
				this.noShare(activityId,model,source);
			}
		}
	}
</script>

<style scoped>
	@import '../assets/css/help_center.css';
</style>