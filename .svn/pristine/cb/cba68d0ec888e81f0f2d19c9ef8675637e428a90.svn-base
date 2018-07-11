<template>
	<div class="my_bankcard">
		<ul class="tabs">
			<li v-for="(item,index) in items" :class="{active:item.active}" @click="hover(item)">
				<span>
					{{item.text}}
				</span>
			</li>
		</ul>
		<div class="cardarea">
			<div v-if="items[0].active" v-for="(list,index) in lists" :class="[card,!items[0].active ? card1 : '']">
				<div class="corner">已绑定银行卡</div>
				<div class="mian_msg">
					<div class="name"><img :src="list.bankURI" class="bankLogo" />{{list.bankName}}</div>
					<div class="cardNO">{{list.bankAccount}}</div>
				</div>
			</div>
			<div v-if="!items[0].active" :class="[card,!items[0].active ? card1 : '']">
				<div class="corner">已实名认证</div>
				<div class="mian_msg">
					<div class="name">{{lists[0].name}}</div>
					<div class="cardNO">{{lists[0].idcard}}</div>
				</div>
			</div>
		</div>
		<div class="smrz">
			<span><img src="../../../assets/img/wechat/mine/state.png"/>实名认证</span>
			<span><img src="../../../assets/img/wechat/mine/state.png"/>银行卡绑定</span>
		</div>
		<button class="bkBtn" @click="bkBtn" v-if="obj.isHistory==1">+添加银行卡</button>
		<div class="description" :class="{'desMar':obj.isHistory==0}">
			<p>银行卡说明</p>
			<ol class="circle">
				<li>
					目前暂不支持线上更换银行卡，如需紧急更换银行卡请联系客服
					<a :href="'tel:'+tel">{{tel}}</a>
				</li>
				<li v-if="obj.isHistory==0">
					为保证资金安全，仅支持绑定1张银行卡。
				</li>

				<li>
					各银行对银行卡限额有不同限定，可点击查看
					<router-link to='/app_terminal/quota' class="href">限额说明</router-link>。
				</li>
			</ol>
		</div>
		<!-- 提示弹框 -->
		<transition name="fade">
			<div class="welfare-close" v-if="close">{{ message }} </div>
		</transition>
	</div>

</template>

<script>
	import reset_rem from "../../../assets/js/wechat/reset_rem.js";
	export default {
		name: "my_bankcard",
		data() {
			return {
				close: false,
				selected: true,
				card: "card",
				card1: "card1",
				message: "为保证资金安全，仅支持绑定1张银行卡",
				items: [{
						text: "银行卡",
						active: true
					},
					{
						text: "身份证信息",
						active: false
					}
				],
				lists: [],
				obj: {}, //绑卡新老用户区分
				tel:'',
			};
		},
		created: function() {
			var _this=this;
			this.loadData();
			_this.$http.post('/contactInformation/getContactInformation', {
					parameters: '{}'
				})
				.then(function(res) {
					if(res.data.end == 'ok') {
						var tel = '';
						var tellist = res.data.data.list;
						for(var i = 0; i < tellist.length; i++) {
							if(tellist[i].type == 'tel') {
								tel = tellist[i].subtitle
							}
						}
						_this.tel = tel;
					}
				})
				.catch(function(err) {
					console.log(err)
				})
		},
		methods: {
			hover(item) {
				this.items.forEach(function(el) {
					el.active = false;
				});
				item.active = true;
			},
			loadData: function() {
				var _this = this;
				_this.$http
					.post("/Product/User/showMyAccountNew", {
						parameters: "{}"
					})
					.then(function(res) {
						if(res.data.end == "ok") {
							_this.lists = res.data.list;
							_this.obj = res.data.obj;
						}
					})
					.catch(function(err) {
						console.log(err);
					});
			},
			bkBtn: function() {
				var _this = this;
				//   0 新用户
				if(_this.obj.isHistory == 1) {
					this.$router.push({
						name: "bind_bank"
					});
				} else if(_this.obj.isHistory == 0) {
					_this.close = true;
					setTimeout(function() {
						_this.close = false;
					}, 1000);
				}
				if(_this.obj.isHistory == 1 && _this.lists.length > 5) {
					_this.close = true;
					setTimeout(function() {
						_this.close = false;
					}, 1000);
				}
			}
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url("../../../assets/css/wechat/reset_rem.css");
	@import url("../../../assets/css/wechat/my_bankcard.css");
</style>