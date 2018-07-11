<template>
	<div class="rule-details">
		<div class="router">
			<!-- <div class="nav-style">
				<span v-for='(data,key,index) in datas' @click="showHide(index)" :class='{class1:index==qw}' class="lyqClass1">{{ data.data }}</span>
				
			</div> -->
			<!--项目信息-->
			<div class="preject" :class="{ showhide:add }">
				<ul class="qixian">
					<li class="clearfix">
						<span class="fl left-com">项目名称</span>
						<span class="fr right-com">{{ title }}</span>
					</li>
					<li class="clearfix">
						<span class="fl left-com">项目期限</span>
						<span class="fr right-com">{{ lcqx }}天</span>
					</li>
					<li class="clearfix">
						<span class="fl left-com">预计年化</span>
						<span class="fr right-com" v-if="jiangLiEarnings == 0">{{ baseEarnings }}%</span>
						<span class="fr right-com" v-if="jiangLiEarnings > 0">{{ baseEarnings }}% +{{ jiangLiEarnings }}%</span>
					</li>
					<li class="clearfix">
						<span class="fl left-com">回款方式</span>
						<span class="fr right-com">{{ fxfs }}</span>
					</li>
				</ul>
				<ul class="qixian">
					<li class="clearfix">
						<span class="fl left-com">起息时间</span>
						<span class="fr right-com">{{ (new Date()).valueOf() + calcInterestWay*(24*60*60*1000) | formatDate}}</span>
					</li>
					<li class="clearfix">
						<span class="fl left-com">回款时间</span>
						<span class="fr right-com">{{ (new Date()).valueOf() + calcInterestWay*(24*60*60*1000) + lcqx*24*60*60*1000 | formatDate }}</span>
					</li>
					<li class="clearfix">
						<span class="fl left-com">预计收益</span>
						<span class="fr right-com" v-if="jiangLiEarnings == 0">投资100000元，预期收益<span style="color: #FF650F;">{{ 100000*baseEarnings*lcqx/36500 | fixNum }}</span>元</span>
						<span class="fr right-com" v-if="jiangLiEarnings > 0">投资100000元，预期收益<span style="color: #FF650F;">{{ 100000*annualEarnings*lcqx/36500 | fixNum }}</span>元</span>
					</li>
				</ul>
				<div class="liu-content">
					<ul class="liu-shu">
						<li v-for="(item,index) in items">
							<p class="liu-title"><span></span>{{ item.title }}</p>
							<img v-if="item.img != ''" :src="item.img"/>
							<img v-for="infoImg in infoImgs" v-if="infoImgs != []&&index == 0" :src="infoImg"/>
							<div v-html="item.content">{{ item.content }}</div>
						</li>
					</ul>
				</div>
			</div>
			<!--关于集财-->
			<div class="about-fengye" :class="{ showhide1:add1 }">
				<ul>
					<li class="clearfix f-1">
						<div class="about-right fl">
							<p class="about-t">股东背景</p>
							<p class="about-m">全资控股大股东中宇本鑫实业属国资金融背景</p>
						</div>
					</li>
					<li class="clearfix f-3">
						<div class="about-right fl">
							<p class="about-t">供应链金融</p>
							<p class="about-m">专业风控团队审核，对接国有企业、国际大型贸易企业、准上市公司采购大宗商品，全程控制</p>
						</div>
					</li>
					<li class="clearfix f-4">
						<div class="about-right fl">
							<p class="about-t">智能风控</p>
							<p class="about-m">资金去向透明可追踪，借款人真实且为大型企业，每笔交易自动生成具有法律效力的电子合同，保障用户资金安全</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
　　    </div>
</template>

<script>
	import { formatDate } from '../assets/js/date.js';
	export default {
        data () {
            return {
            	title:'',
            	calcInterestWay:0,
            	datas: {
        			data1:{
        				data: '项目信息'
            		},
//          		data2:{
//          			data: '关于集财'
//          		}
            	},
            	add: false,
            	add1: true,
				items:[],
				baseEarnings: '',
				lcqx: '',
				fxfs: '',
				jiangLiEarnings: '',
				annualEarnings: '',
				qw: '0',
				infoImgs:[],
            };
        },
        created: function() {
			this.loadData();
		},
		filters: {
			fixNum(value) {
				return value.toFixed(2);
			},
			formatDate(time) {
				var date = new Date(time);
				return formatDate(date, 'yyyy-MM-dd');
			}
		},
        methods: {
        	loadData: function () {
				var _this = this;
				var auth = this.$route.query.auth;
				var productId = this.$route.query.productId;
				_this.$http.post('/Product/getProductById', {
						parameters: '{"authorization":"'+ auth +'","productId":"'+ productId +'"}'
					})
					.then(function(res) {
						if(res.data.end == 'ok'){
							_this.items = res.data.obj.newInfo;
							_this.baseEarnings = res.data.obj.baseEarnings;
							_this.calcInterestWay = res.data.obj.calcInterestWay;
							_this.lcqx = res.data.obj.lcqx;
							_this.fxfs = res.data.obj.fxfs;
							_this.jiangLiEarnings = res.data.obj.jiangLiEarnings;
							_this.annualEarnings = res.data.obj.annualEarnings;
							_this.infoImgs = res.data.obj.infoImg;
							_this.title =  res.data.obj.title;
						}
					})
					.catch(function(err) {
						console.log(err)
				})
				
			},
			showHide: function (index) {
				this.qw = index;
				if (index == 0) {
					this.add = false;
					this.add1 = true;
				}
				if (index == 1) {
					this.add = true;
					this.add1 = false;
				}
			}
        }
    }
</script>

<style>
	@import '../assets/css/help_center.css';
</style>