<template>
	<div class="report">
		<div class="page-container ">
			<div v-page="opts" class="page-wp">
				<div class="page page1">
					<p class="part part1" v-animate="'slideIn'">
						vue-fullpage
					</p>
				</div>
				<div class="page page2">
					<p class="part part2" v-animate="'slideIn'">
						vue-fullpage
					</p>
				</div>
				<div class="page page3">
					<p class="part part3" v-animate="'slideIn'">
						vue-fullpage
					</p>
				</div>
				<div class="page page4">
					<p class="part part4" v-animate="'fadeIn'">
						vue-fullpage
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import reset_rem from "../../assets/js/wechat/reset_rem.js";
	export default {
		name: 'report',
		data() {

			return {
				opts: {
					start: 0,
					dir: 'v',
					loop: false,
					duration: 500,
					stopPageScroll: true,
					beforeChange: function(prev, next) {},
					afterChange: function(prev, next) {}
				}
			}
		}
	}
</script>
<style scoped>
	@import url("../../assets/css/wechat/report.css");
	@import url("../../assets/css/wechat/reset_rem.css");
</style>