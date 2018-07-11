<template>
	<div class="day-day">
		<div class="posit">
			<img src="../assets/img/day_bg.png"/>
			<div class="day-top">
				<div class="day-left">
					<p class="miaoshu">预计年化收益率</p>
					<p class="qian-common" v-if="jiangLiEarnings == 0">{{ baseEarnings }}%</p>
					<p class="qian-common" v-if="jiangLiEarnings > 0" style="font-size: 40px;line-height: 60px;">{{ annualEarnings }}% <span class="jiaxi-bai"> {{ baseEarnings | fixNum }}+{{ jiangLiEarnings | fixNum }}%</span></p>
				</div>
				<!--<div class="day-right fr">
					<p class="qian-common">{{ atleastMoney/100 | fixNum }}</p>
					<p class="miaoshu">起投金额(元)</p>
				</div>-->
			</div>
			<ul class="sank">
				<li>{{ title1 }}</li>
				<li>{{ title2 }}</li>
				<li>{{ title3 }}</li>
			</ul>
		</div>
		<div class="safe-bao">
			<p><span></span>安全保障</p>
			<ul class="bianse" v-html="security">
				{{ security }}
			</ul>
		</div>
		<div class="shouyi">
			<p><span></span>收益计算方法</p>
			<ul>
				<li class="nianhua">{{ incomeCalculate }}</li>
				<li class="ps">* {{ description }}</li>
			</ul>
		</div>
		<div class="shouyi">
			<p><span></span>收益发放时间</p>
			<ul>
				<li class="nianhua">日日盈这款活期理财产品，投资当日计息，因为转入日日盈的资金会在第二个交易日由保理公司进行确认，确认之后才能进行结算。</li>
				<li class="nianhua">日日盈提现以16：00为切点，16：00之前可当日进行结算，超过16：00会在在第二天进行结算，如遇周末，顺延到工作日。</li>
			</ul>
			<img src="../assets/img/table_img.png"/>
		</div>
		<div class="day-bottom">
			最终解释权归集财理财所有
		</div>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		data: function() {
			return {
				annualEarnings: '',
				baseEarnings: '',
				atleastMoney: '',
				title1: '',
				title2: '',
				title3: '',
				incomeCalculate: '',
				description: '',
				security: '',
				jiangLiEarnings: ''
			}
		},
		created: function() {
			this.loadData();
		},
		filters: {
			fixNum(value) {
				return value.toFixed(2);
			}
		},
		methods: {
			loadData: function () {
				var _this = this;
				var auth = this.$route.query.auth;
				_this.$http.post('/Product/User/coinEarningDetail', {
						parameters: '{"authorization":"'+ auth +'"}'
					})
					.then(function(res) {
						if(res.data.end == 'ok'){
							_this.baseEarnings = res.data.data.baseEarnings;
							_this.atleastMoney = res.data.data.atleastMoney;
							_this.annualEarnings = res.data.data.annualEarnings;
							_this.title1 = res.data.data.title1;
							_this.title2 = res.data.data.title2;
							_this.title3 = res.data.data.title3;
							_this.incomeCalculate = res.data.data.incomeCalculate;
							_this.description = res.data.data.description;
							_this.security = res.data.data.security;
							_this.jiangLiEarnings = res.data.data.jiangLiEarnings;
						}
					})
					.catch(function(err) {
						console.log(err)
				})
				
			}
		}
	}	
</script>

<style>
	@import '../assets/css/help_center.css';
</style>