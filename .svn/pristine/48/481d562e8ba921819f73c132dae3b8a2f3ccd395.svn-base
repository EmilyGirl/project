		<template>
	<div class="product">
		<div class="noData" v-if="firstData1==''&&lists==[]">
			<img src="../../../assets/img/wechat/product/no_product.png"/>
		</div>
		<scroller :on-refresh="refresh" ref="myscroller">
			<ul class="product-lists">
				<li @click="firstFun"  v-if="firstData1">

					<div class="product-content">
						<span class="product-name">{{ title }}</span><span class="product-date">{{ tzqx }}<span>天</span></span>
						<div class="clearfix">
							<div class="middleLeft fl">
								<span>{{ baseEarnings | fixNum }}<span>%</span><var v-if="isJiangLi == 1">+{{ parseFloat(jiangLiEarnings) | fixNum }}<span>%</span></var></span>
								<p>预期年化收益率</p>
							</div>
							<button class="middleRight fr" v-if="parseInt(leftCopies/100) > 0">立即出借</button>
							<button class="noMoney fr" v-if="parseInt(leftCopies/100) == 0">已结束</button>
						</div>
						<div class="clearfix">
							<div class="bottomLeft fl">
								<span class="schedule" v-if="qxType != 99" style="text-align: left;"><span><var class="jindu-bg" :style="'width:'+parseInt(wcjd*100)+'%'"></var></span>{{ parseInt(wcjd*100) }}%</span>
							</div>
							<div class="bottomRight fr">
								<span class="schedule" v-if="qxType == 99" style="text-align: left;">剩余可投:{{ parseInt(leftCopies/100) }}元</span>
								<span class="schedule bianyi" v-if="qxType != 99">剩余可投:{{ parseInt(leftCopies/100) }}元</span>
							</div>
						</div>
					</div>

					
				</li>
				<li v-for="(list,index) in lists" @click="listFun(list)" v-if="lists">
					<div class="product-content">
						<span class="product-name">{{ list.title }}</span><span class="product-date">{{ list.tzqx }}<span>天</span></span>
						<div class="clearfix">
							<div class="middleLeft fl">
								<span>{{ list.baseEarnings | fixNum }}<span>%</span><var v-if="list.isJiangLi == 1">+{{ parseFloat(list.jiangLiEarnings) | fixNum }}<span>%</span></var></span>
								<p>预期年化收益率</p>
							</div>
							<button class="middleRight fr" v-if="parseInt(list.leftCopies/100) > 0">立即出借</button>
							<button class="noMoney fr" v-if="parseInt(list.leftCopies/100) == 0">已结束</button>
						</div>
						<div class="clearfix clearfix2">
							<div class="bottomLeft fl">
								<span class="schedule" v-if="list.qxType != 99" style="text-align: left;"><span><var class="jindu-bg" :style="'width:'+parseInt(list.wcjd*100)+'%'"></var></span>{{ parseInt(list.wcjd*100) }}%</span>
							</div>
							<div class="bottomRight fr">
								<span class="schedule" v-if="list.qxType == 99" style="text-align: left;">剩余可投:{{ parseInt(list.leftCopies/100) }}元</span>
								<span class="schedule bianyi" v-if="list.qxType != 99">剩余可投:{{ parseInt(list.leftCopies/100) }}元</span>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</scroller>
		<ul class="tab clearfix">
			<li v-for="(item, index) in items" :class="[commonClass,item.active ? activeClass : '']" v-on:click="navClickEvent(items,index)">
				<a href="javascript:;"><span></span>{{item.text}}</a>
			</li>
		</ul>
		<vue-public-alert></vue-public-alert>
	</div>
</template>

<script>
	import vuePublicAlert from "../../../assets/js/wechat/public-alert.js";
	import reset_rem from "../../../assets/js/wechat/reset_rem.js";
	export default {
		name: 'hello',
		data: function() {
			return {
				isAlert: false,
				
				lists: [],
				firstData: "",
     		 	firstData1: "",
				title: '',
				lcqx: null,
				tzqx:null,
				baseEarnings: 0,
				leftCopies: '',
				qxType: null,
				wcjd: null,
				isJiangLi: 0,
				id: '',
				jiangLiEarnings: '',
				commonClass: 'nav-item',
				activeClass: 'active',
				items: [{
						text: '出借',
						active: true
					},
					{
						text: '我的',
						active: false
					},
				],
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
            refresh(done) {
            	this.loadData();
            	setTimeout(function () {
            		done();
            	},500)
            },
			loadData: function() {
				var _this = this;
				_this.$http.post('/Product/loadProductByTypeNew', {
					parameters: '{"currentPage":"1","type":"3"}'
				})
				.then(function(res) {
					if(res.data.end == 'ok') {
						_this.lists = res.data.data.list;
						_this.title = res.data.data.firstData.title;
						_this.lcqx = res.data.data.firstData.lcqx;
						_this.tzqx = res.data.data.firstData.tzqx;
						_this.title = res.data.data.firstData.title;
						_this.jiangLiEarnings = res.data.data.firstData.jiangLiEarnings;
						_this.baseEarnings = res.data.data.firstData.baseEarnings;
						_this.leftCopies = res.data.data.firstData.leftCopies;
						_this.qxType = res.data.data.firstData.qxType;
						_this.wcjd = res.data.data.firstData.wcjd;
						_this.isJiangLi = res.data.data.firstData.isJiangLi;
						_this.id = res.data.data.firstData.id;
						_this.firstData1 = res.data.data.firstData;
					} else if (res.data.end == "noData") {
			            _this.lists = "";
			            _this.firstData1 = "";
			        }
				})
				.catch(function(err) {
					console.log(err)
				})
			},
			firstFun: function () {
				this.$router.push({name:'product_detail',query:{ productId: this.id }});
			},
			listFun: function (list) {
				this.$router.push({name:'product_detail',query:{ productId: list.id }});
			},
			navClickEvent: function(items, index) {
				switch(index) {
					case 0:
						this.$router.push({
							path: '/wechat/subpage/product'
						})
						break;
					case 1:
						this.$router.push({
							path: '/wechat/homepage/mine'
						})
						break;
				}
			},
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../../assets/css/wechat/reset_rem.css");
	@import url("../../../assets/css/wechat/product.less");
</style>