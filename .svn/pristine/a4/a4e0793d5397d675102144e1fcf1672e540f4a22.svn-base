<template>
	<div class="rule-details">
		<!--项目信息-->
		<div class="preject">
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
					<span class="fr right-com" v-if="jiangLiEarnings > 0">{{ baseEarnings | fixNum }}%+{{ parseFloat(jiangLiEarnings) | fixNum }}%</span>
				</li>
				<li class="clearfix">
					<span class="fl left-com">回款方式</span>
					<span class="fr right-com">{{ fxfs }}</span>
				</li>
			</ul>
			<ul class="qixian">
				<li class="clearfix">
					<span class="fl left-com">起息时间</span>
					<span class="fr right-com">{{ (new Date()).valueOf() + calcInterestWay*(24*60*60*1000) | formatDate }}</span>
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
						<img v-for="" v-if="item.img != ''" :src="item.img"/>
						<img v-for="infoImg in infoImgs" v-if="infoImgs != []&&index == 0" :src="infoImg"/>
						<div class="lyq_text" v-html="item.content">
						</div><!-- v-html="item.content" {{ item.content }}-->
					</li>
				</ul>
			</div>
		</div>
　　    </div>
</template>

<script>
	import { formatDate } from '../../../assets/js/wechat/date.js';
	import reset_rem from "../../../assets/js/wechat/reset_rem.js";
	export default {
        data () {
            return {
            	title:'',
            	calcInterestWay:0,
				items:[],
				baseEarnings: '',
				lcqx: '',
				fxfs: '',
				jiangLiEarnings: '',
				annualEarnings: '',
				productId: '',
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
				this.productId = this.$route.query.productId;
				_this.$http.post('/Product/getProductById', {
						parameters: '{"productId":"'+ _this.productId +'"}'
					})
					.then(function(res) {
						if(res.data.end == 'ok'){
							_this.items = res.data.obj.newInfo;
							_this.baseEarnings = res.data.obj.baseEarnings;
						 // 修改 t+0  t+1
						    _this.calcInterestWay = res.data.obj.calcInterestWay;
							_this.lcqx = res.data.obj.lcqx;
						  // 修改 t+0  t+1
 							_this.fxfs = res.data.obj.fxfs;
							_this.jiangLiEarnings = res.data.obj.jiangLiEarnings;
							_this.annualEarnings = res.data.obj.annualEarnings;
							_this.infoImgs = res.data.obj.infoImg;
							_this.title = res.data.obj.title
						}
					})
					.catch(function(err) {
						console.log(err)
				})
				
			}
        }
    }
</script>

<style lang="less" scoped>
	@import url("../../../assets/css/wechat/reset_rem.css");
	@import url("../../../assets/css/wechat/project_details.less");
</style>