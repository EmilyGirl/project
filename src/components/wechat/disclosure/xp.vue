<template>
	<div class="xp">
		<div class="nav">
			<ul class="slide-pages">
				<!--:style="{transform:'translateX('+ runNum + 'rem)'}"  :style="{left:runNum + 'rem'}"-->
				<li v-for="(item, index) in titles" @click="clickNav(index)" class="clearfix">
					<router-link :to="item.path" replace><span :class="{on:checked== index}">{{item.text}}</span></router-link>
				</li>
			</ul>
		</div>
		
		<router-view ></router-view>
			
	</div>
</template>

<script>
	import reset_rem from "../../../assets/js/wechat/reset_rem.js";
	export default {
		name: 'xp',
		data: function() {
			return {
				runNum: 0,
				checked: 0,
				titles: [{
						text: '存管说明',
						path:'/wechat/disclosure/cgsm'
					},
					{
						text: '运营报告',
						path:'/wechat/disclosure/yybg'
					},
					{
						text: '组织信息',
						path:'/wechat/disclosure/zzxx'
					},
					{
						text: '备案信息',
						path:'/wechat/disclosure/baxx'
					},
					{
						text: '经营信息',
						path:'/wechat/disclosure/jyxx'
					},
					{
						text: '监管法规',
						path:'/wechat/disclosure/jgfg'
					},
					{
						text: '平台公告',
						path:'/wechat/disclosure/ptgg'
					},
					{
						text: '联系我们',
						path:'/wechat/disclosure/lxwm'
					},
//					{
//						text: '法人签证',
//						path:'/wechat/disclosure/frqz'
//					},
				]
			}
		},
		methods: {
			clickNav(num) {
				var _this = this;
				_this.checked = num;
				//console.log(num);
				if(num > 0&&num < 8) {
					_this.runNum = (-(num - 1) * 112) / 20;
				}
				console.log(_this.runNum);
			},
		}
	}
</script>

<style scoped lang="less">
	@import url("../../../assets/css/wechat/reset_rem.css");
	@import url("../../../assets/css/xp/xp.less");
</style>
