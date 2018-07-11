<template>
	<div class="blank">
		<!--<div class="mask" v-if="mask" @touchmove.prevent>
			<div class="mask-content">
				<div class="login_bg"><img src="../assets/img/login_bg.png"/></div>
				<span>您还未登录，请先登录！</span>
				<p v-on:click="nologin()">点击登录</p>
			</div>
		</div>-->
		<img src="../assets/img/01.png"/>
		<img src="../assets/img/02-1.png"/>
		<img src="../assets/img/03.png"/>
		<img src="../assets/img/04.png"/>
		<img src="../assets/img/05.png"/>
		<!--<button class="yaoq" v-bind:disabled="dis" v-tap="{methods :share}">分享给好友</button>
		<div class="invit-close" v-if="close">{{ message }}</div>-->
	</div>
</template>

<script>
	export default {
		name: 'hello',
		data: function() {
			return{
//				mask: false,
//				message: '',
//				close: false,
//				dis: false
			}
		},
		methods: {
//			share:function () {
//				var model = 1
//				this.actShare(model);
//			},
//			nologin: function () {
//				var source = this.$route.query.source;
//				this.start(source);
//			},
		}
	}
</script>

<style scoped>
	@import '../assets/css/help_center.css';
</style>