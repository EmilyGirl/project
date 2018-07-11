<template>
	<div class="year_report">
		<swiper :options="swiperOption" ref="mySwiper">
			<!-- slides -->
			<swiper-slide>
				<div class="report-common" :class="{ 'ani-common':ani }">
					<img src="../assets/img/report_bg1.jpg"/>
					<img class="feng" src="../assets/img/feng_li.png"/>
					<img class="common1_1" src="../assets/img/rectangle.png"/>
					<img class="common1_2" src="../assets/img/yuan.png"/>
					<img class="common1_3" src="../assets/img/2017.png"/>
					<img class="common1_4" src="../assets/img/ping.png"/>
					<img class="common1_5" src="../assets/img/annual_report.png"/>
					<img class="common1_6" src="../assets/img/shuju.png"/>
					<img class="xuanfu" src="../assets/img/xuanfu.png"/>
				</div>
			</swiper-slide>
			<swiper-slide>
				<div class="report-common">
					<img src="../assets/img/report_bg2.jpg"/>
					<img class="common1_7" src="../assets/img/year_r4.png"/>
					<img class="common1_8" src="../assets/img/tmin.png"/>
					<img class="common1_9" src="../assets/img/second_1.png"/>
					<img class="common1_10" src="../assets/img/second_2.png"/>
					<img class="common1_11" src="../assets/img/second_3.png"/>
					<img class="xuanfu" src="../assets/img/xuanfu.png"/>
				</div>
			</swiper-slide>
			<swiper-slide>
				<div class="report-common">
					<img src="../assets/img/report_bg2.jpg"/>
					<img class="common1_12" src="../assets/img/year_r2.png"/>
					<img class="common1_13" src="../assets/img/hang_1.png"/>
					<img class="common1_14" src="../assets/img/hang_2.png"/>
					<img class="common1_15" src="../assets/img/di-1.png"/>
					<img class="common1_16" src="../assets/img/gao-1.png"/>
					<img class="common1_17" src="../assets/img/qian-1.png"/>
					<img class="common1_18" src="../assets/img/qian-2.png"/>
					<img class="xuanfu" src="../assets/img/xuanfu.png"/>
				</div>
			</swiper-slide>
			<swiper-slide>
				<div class="report-common">
					<img src="../assets/img/report_bg2.jpg"/>
					<img class="common1_19" src="../assets/img/year_r3.png"/>
					<img class="common1_20" src="../assets/img/zugou.png"/>
					<img class="common1_21" src="../assets/img/huoche.png"/>
					<img class="xuanfu" src="../assets/img/xuanfu.png"/>
				</div>
			</swiper-slide>
			<swiper-slide>
				<div class="report-common">
					<img src="../assets/img/report_bg2.jpg"/>
					<img class="common1_te" src="../assets/img/tuhao.png"/>
					<img class="common1_22" src="../assets/img/year_r5.png"/>
					<img class="common1_23" src="../assets/img/tiao_3.png"/>
					<img class="common1_24" src="../assets/img/tiao_2.png"/>
					<img class="common1_25" src="../assets/img/tiao_1.png"/>
					<img class="common1_26" src="../assets/img/local_1.png"/>
					<img class="common1_27" src="../assets/img/local_2.png"/>
					<img class="common1_28" src="../assets/img/local_3.png"/>
					<img class="xuanfu" src="../assets/img/xuanfu.png"/>
				</div>
			</swiper-slide>
			<swiper-slide>
				<div class="report-common">
					<img src="../assets/img/report_bg2.jpg"/>
					<img class="common1_29" src="../assets/img/touren.png"/>
					<img class="common1_30" src="../assets/img/bing_1.png"/>
					<img class="common1_31" src="../assets/img/bing_2.png"/>
					<img class="common1_32" src="../assets/img/bing_3.png"/>
					<img class="common1_33" src="../assets/img/biebi.png"/>
					<img class="common1_34" src="../assets/img/qune.png"/>
					<img class="common1_35" src="../assets/img/yuyi.png"/>
					<img class="xuanfu" src="../assets/img/xuanfu.png"/>
				</div>
			</swiper-slide>
			<swiper-slide>
				<div class="report-common">
					<img src="../assets/img/report_bg2.jpg"/>
					<img class="common1_36" src="../assets/img/jieren.png"/>
					<img class="common1_37" src="../assets/img/chengli.png"/>
					<img class="common1_38" src="../assets/img/zhuli.png"/>
					<img class="common1_39" src="../assets/img/city.png"/>
					<img class="xuanfu" src="../assets/img/xuanfu.png"/>
				</div>
			</swiper-slide>
			<swiper-slide>
				<div class="report-common">
					<img src="../assets/img/report_bg2.jpg"/>
					<img class="common1_40" src="../assets/img/fenghuo.png"/>
					<img class="common1_41" src="../assets/img/guafen.png"/>
					<img class="common1_42" src="../assets/img/nianhuo.png"/>
					<img class="xuanfu" src="../assets/img/xuanfu.png"/>
				</div>
			</swiper-slide>
			<swiper-slide>
				<div class="report-common">
					<img src="../assets/img/report_bg2.jpg"/>
					<img class="common1_43" src="../assets/img/shuangdan.png"/>
					<img class="common1_44" src="../assets/img/qingzeng.png"/>
					<img class="common1_45" src="../assets/img/jizan.png"/>
					<img class="xuanfu" src="../assets/img/xuanfu.png"/>
				</div>
			</swiper-slide>
			<swiper-slide>
				<div class="report-common">
					<img src="../assets/img/report_bg2.jpg"/>
					<img class="lastPage_1" src="../assets/img/gonger.png"/>
					<img class="lastPage_2" src="../assets/img/gounian.png"/>
					<img class="lastPage_3" src="../assets/img/fengcai.png"/>
					<img class="lastPage_4" src="../assets/img/goubiao.png"/>
					<button :disabled="dis" v-tap="{methods :share}" class="lastPage_5"><img src="../assets/img/share_btn.png"/></button>
					<img class="lastPage_6" src="../assets/img/fenggou.png"/>
				</div>
			</swiper-slide>
		</swiper>
		<!--<button class="yaoq" v-bind:disabled="dis" v-tap="{methods :share}">分享给好友</button>
		<div class="invit-close" v-if="close">{{ message }}</div>-->
	</div>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		name: 'hello',
		components: {
			swiper,
			swiperSlide
		},
		created: function () {
//			console.log(swiper)
		},
		data: function() {
			return {
				ani: false,
				message: '',
				close: false,
				dis: false,
				swiperOption: { //以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
		        	// notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
					notNextTick: true,
					direction : 'vertical',
					height: innerHeight,
					// swiper configs 所有的配置同swiper官方api配置
				    observer:true,//修改swiper自己或子元素时，自动初始化swiper
					observeParents:true,//修改swiper的父元素时，自动初始化swiper
					grabCursor : true,
					setWrapperSize :true,
					autoHeight: true,
					paginationClickable :true,
					on:{
						init:function(el){
							document.getElementsByClassName('swiper-slide')[0].classList.add('ani-common')
//							alert(this.ani)
//							this.ani = true;
					    },
						transitionStart: function(){
							var arr = document.getElementsByClassName('swiper-slide');
							for(var i=0;i<arr.length;i++){
						        document.getElementsByClassName('swiper-slide')[i].classList.remove('ani-common')
							}
					    },
						transitionEnd: function(){
							document.getElementsByClassName('swiper-slide')[this.activeIndex].classList.add('ani-common')
					    },
					}
				},
			}
		},
		computed: {
			swiper() {
				return this.$refs.mySwiper.swiper;
			}
		},
		methods: {
			share:function () {
				var source = this.$route.query.source;
				var model = 8;
				var activityId = 0;
				this.noShare(activityId,model,source);
			}
		}
	}
</script>

<style>
	@import '../assets/css/swiper.css';
	@import '../assets/css/help_center.css'
</style>