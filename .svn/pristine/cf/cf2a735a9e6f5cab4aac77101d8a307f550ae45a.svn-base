<template>
	<div class="revise_traders_pwd">
		<form @submit.prevent="submit">
	<!-- 		<div class="normal">
				<p class="bkTitle">提现到</p>
			</div> -->
		
			<!-- 新 用户 -->
			<div class="input-list"  v-if='isHistory=="0"'>
				<div class="icommon bank">
					<label class="bankImg"><img :src="list.bankURI"/></label>
					<div class="bankText">
						<p>{{list.bankName}}）</p>
						<p>尾号 {{(list.bankAccount?list.bankAccount:'').slice(-4,22)}} </p>
					</div>
				</div>
			</div>
			<!-- 老用户 -->
		<div class="input-list"  v-else>
				<div class="icommon bank" @click="showSelectFn">
					<label class="bankImg"><img :src="list.bankURI"/></label>
					<div class="bankText">
						<p>{{list.bankName}}</p>
						<p>尾号 {{(list.bankAccount?list.bankAccount:'').slice(-4,22)}} </p>
					</div>
					<div class="imgwap">
						<!-- <img src="./../../../assets/img/wechat/Product/right.png"> -->
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAbCAYAAAHpBIQ3AAAAAXNSR0IArs4c6QAAAu9JREFUSA2FlU1rU0EUhm9uUk1EsCC08RPFZQVFxUqFLvwHokm6SEJbMYKK2B9Q6Mad6CIbLSgShKQNfvwBhQoVigiiWwVBY1s/IKt82SQ+Z3pnvDe9txkYzjnvec87M2cmN5bVOxKJxGovZlmgsa2oIMlk8p4tTrfbnZGoJYEaFHXn5uYiOg5pRyzMcUqWDCZsE6RSqRMmcBw7FApFPSw3o29CbVIqWHka0xRfgQB1/HC5XI4KKKf9vxWFWFYIUFpQY1ZgHnTwLcackoIdZNU62DMUvXezDdENspdHtGWas35dXFw8KjlfoiTS6fS+ZrP5Q3zUQ6bTAshAbQm18VartSyETdSyFDGbze6t1+u/BbRt+0CpVFJKmmQsKrMmCHImJyejLGWW8OPZtVptHbUOrTnrRxDM5th7sBXmCsS8gL3DLAPhIckc/fpG4WE30ZAEnJiYGGu328sOIUI72uKbZyEBLXgbj8c3X4FlbaB+UnCPkgB6QFjHH2L5WY+SJjj2i1jac8pXCZUG+Z3MKfb1xEPKZDJDjUZDlrEikUi8WCwq35CozpArMFtUi4oZak8QXoEIYaWXIEwbwnfsBU5xE8I5AXuHPJlrzA90Wa7Gd6g9ccGfOOpx1Jaxl1Fc82X3AdXeEbkDr4nQeeyqtIqPw1Sf2i1p0y3JIBLHPGOOSeyMJWyC3f7SQJD1iLlJCOeI5cnKT99i93KxV+nZU4n9RqCYJvNy9/NynxOPagz7OhaLJQuFwh8XFvxQ3STtc1E38O/T2wEHq/EhuLKwsFCSuO/OnCKP4XKOdTqdj4C7nMQGNqpu08PcJuDIo+yugtBnaEqIXuZHRkZiXFC7785yudxAtVqVo8kR9ahwvIsc750GxAaKcZunWfUFIod0AfGDwcHBW/Pz83815rYeMQTCFNxF4LaLtBYOhy/Jp8aF+bpKTP4KEXjJPKJZiD4eHh6+ns/n9d+LTgVa+QPbTVbeizzOn4gkeJhvAiu2SfwDhk0O5/fZyCsAAAAASUVORK5CYII=">
					</div>
				</div>
			</div>

		<!--<div class="input-list" v-for="list in lists">
				<div class="icommon bank">
					<label class="bankImg"><img :src="list.bankURI"/></label>
					<div class="bankText">
						<p>{{list.bankName}}（{{(obj.leftMoney/100).toFixed(2)}}）</p>
						<p>单笔限额：{{list.oneTimes}}元 单日最高：{{list.dayTimes}}元</p>
					</div>
				</div>
			</div>-->





			<div class="normal">
				<p>可用余额<span class="light"> {{(obj.leftMoney/100).toFixed(2)}} </span>元</p>
			</div>
			<div class="input-list">
				<div class="icommon">
					<label>提现金额</label>
					<input class="recharge_input" type="text" v-model="rMoney" maxlength="15" name="" value="" placeholder="请输入1元以上的提现金额" @keyup="unNull" /><span>元</span>
				</div>
			</div>
			<button :class="{loginBtn:loginBtn}" class="boolBtn"  :style="{backgroundColor:loginBtn?'#2772FF':'#ccc'}" type="submit" :disabled="!loginBtn">下一步</button>
				<div class="wtips">
					<!-- <p><img src="./../../../assets/img/wechat/Product/tip.png">温馨提示</p> -->
					<p style=" line-height: 3rem;"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAFMandsAAAAAXNSR0IArs4c6QAAAchJREFUOBGdkzFLA0EQhW9XE1QQSWOTVmz9C4pgEQRRLOw1CSiWNmKnpY2IgSTE1k5FDAER/A9WWgkBIYKNQgoh5vzeJpscuSDowt68eTPzdnYnCQJWqVT6ku2BYrH44QgPTKVSmUwkEu3RVqv1yQ5sKpWaSCaT4y4kNp/PG/JDBaxypVAulzOyzWYzlA3IuOe8O2GXLuCX9cDbGOECaNyyb+QYfRA8CMPw0BHG5MClLt7L5XLHOugeYlGklu+147lv1RpjXM+eRHXWY1ni3xa5JcCeD3DUs8fYXeIrrieRKOySsA8MKToiWBDvEuip8yRB8A6XYE+RFJJk1fAbxDRb59ZQGQMuyGe96mFc0LnxT3r4y0USRyM4QH6GY5LYHi2FhvcIGoK9m8HXncMV2wMB1bR54RHXg7sOM0Hgpbs3FVRWVE6PtYHSCfxvN2tYa3ey2eylBLR8Gyq+6FD9LyfW6CCD+APx+X7EvStUuEY317Y7qphAtEDZUV8YSg1cMbAti6NZ/3vR7b4eLXbKXxTVpeE629izvxRGc+lkU7/1AmCdHesI7pFJzFH0FC3sYv2Rlqk/HxzxKl2dEkwPKfJUHbDNVKqe+AF+n84qT8wJAwAAAABJRU5ErkJggg==">温馨提示</p>
					<p v-html = "list.txRule?list.txRule.replace(/。/g, '；</br>'):''"></p>
				</div>


		</form>

			 <transition name="slide-fade">
					<div class="selectbank" v-show="showSelect" >
					<div class="selectBankTitle">请选择银行卡</div>
						<div class="bankitem"  v-for="(list,i) in lists">
							<div class="icommon " @click= "selectItem(i,list)">
								<label class="bankImg"><img class="bankIcon" :src="list.bankURI"/></label>
								<div class="bankText">
									<p>{{list.bankName}}</p>
									<p>尾号 {{ (list.bankAccount?list.bankAccount:'') .slice(-4,22)}} </p>
								</div>
							</div>
							<div class="selectIcon" v-if = " i==index">
								<!-- <img src="./../../../assets/img/wechat/Product/lock.png"> -->
								<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAjCAYAAAGGHOjxAAAAAXNSR0IArs4c6QAABX5JREFUWAm1V11oXEUUPnN3N0mb5FptjMZqiaEl2S7Gnyi1oLZKBS0EjFitD/og/hFBpJs0Rn3Yhxpjm0RQqg9WfBCkKgRRaQtSKVIhVeJPmpgsSpK2iUUJNWyjJu7mjt+53Rln7+7e3aTthWTOnPOdM9+cmTkzS5T+Ii/KdUoWLNTvlFIp4n1CZCnZaCmEaoMBqlGyGyLcJndrhSkIcwA26FhBm0ozFKkELWhXdlOuLie2KIVGQWDS3M9JnA11tVQ2PknzEA/qwdnAnhUhWsVyGsDiNhckSuh67vGQc0maZVl9akjVd9ubO+WVpsLlE35J1jjz9JvHkBzrEyV5CafB01mpM6OwnDEbZSy1qE7JGuAqBTmilKoWHBr/H2DRO9xhJdDPyAWaUUZufUlyHtwhWMAq/GB6qiS5EUwDyw07ZT+2XYtXz33LoidHe8R7pk0HaeiUq70cTWAuOYMJb1THoZdzAQvpeLO48y02QOPtFAwKipiBeTNZsZjUa+MaBR3Ceag0gRU2lVOQ1gwNUColacS0sZx3aXjrjnWLyfpdspJSlPA6qj5W7KhObK6jpYA+7SySe7kOwsANHTKymKRhHydtGuslCxvHLUAZQTQiLdwUk6sWztFtoJyorqDBozGR8mIK9jf1yRWRDnmjlNJ3sCxjuF2udxYpjhGybNBNP2rT2lhMOCaDDCC2+3eY5K0mIKds0RPxHvG+sukg9VE5TvJ8RVJGv9YS9Nxor3ibMe5Gq2+T7UsJwI6OpH2cMx2EHNrDnaV+f07RFPtY4ai8q2hnQftRXZ5WeOTvCjcI7qvXldK3FfRRvFc8BXyXiWtol5stLOQtpjKnjEOJADuQ/NPIXVUGZpGaOLEZpzhdBr9QQOzWrxFgG5b/FwS4VulVixoQsGD4USm4BfjkWK9ohvPz+BuEvBm6Icxf39wmPuDQ9yLSLu9LLdIh0wBnDlTLuoaoHEAeNrKc63OZsyFXGcAunMSJmQLTO3I5sw6Yv3Gplat8ZK0Q6Nf6BeAgZTatSQfjxqU9A9qrz/cK/8fV8SqujlcYqZgQclDFUyjsDidBu1UAxsMv80NNvRs19atMre79g4J9VXyPOKc1ELKCmEYulzJF6wOSBof7xGnTZsq+QUwgy2B5jbVIDyDpLcgf1x33laNwCJYErUm0B6Hrf6SSjnkLmMJ6W18iXC5mp+k1DNqKwUNe56L7goaCFrWO7BXf5PPJSSQSlRtwMxzGVrsun+Ny9ThQXdhMWU+HDCLbP5aBE8fpMDKwdbkDFeOHQZMBQfeM9IpjCq+JNHXIy/5K0jiWwK2ZCnBJW4t24e7ay2O4Z48zcalIYKZzeSeDWwol+1lN5MS31H3RMyHoA1z7AdS8Spyk7XnJEL3R2CbTddGhh32ASzMJ+rTGphDul8cPJGgdKvwZbPpP8gaRVJYkarY2xqSNbKzNCyTi59G72O3DPhgua0dAYAUItMwkqAZ31ATixrHxr/b1g1E61Ggdjwl+mk7nA4PEH6ES6saRu4Ef0iD0lomFfQDl1gaBrWfnyMaaj2KGp0Ci1sT5ybgwfkYcVMyo3If0tfqBATxVYtGWoR4xwTi8Zu61KmlwJCbO8gN1PkFHMHjhd4VnEEwsFQpRtUvk/jdl6cQkzSBQhQeX1YXjSdTYLfzYb4rJlXMJFD6iO7OARSpAIIoN3ecSYR/++Srn6VeQWVlkjAuGYVK85J0cSN/ho13iTLlN/AP7pwseoXAAKQL0kCLBcJ0R05dfs3gjfw6dbeovhowBP9xh02PeWzknETUgCk31v5L24wg2K91yWgzyO57eL+AldCCfvy8R04l/bYWjtAmL2YJz/yBsdaZdy4LmEfRLnML+gE2f8anSNh/hP8a11wTqelBgAAAAAElFTkSuQmCC">
							</div>
						</div>
						<p @click="cancelBtn" class="cancelBtn">取消</p>
						
				</div>	
		 </transition>
	<div class="mask"  v-show="showSelect">
					
						</div>
		<vue-pay-keyboard :isPay='isPay' @pas-end='pasEnd' @close='closes' ref="pay" :countDown='countDown' @get-securit='getSecurit' :securityBtnCan='securityBtn' :payTitle='payTitle'></vue-pay-keyboard>
		<transition name="fade">
			<div class="welfare-close" v-if="close">{{ message }} </div>
		</transition>

	</div>
</template>

<script>
	import reset_rem from "../../../assets/js/wechat/reset_rem.js";
	import {
		usernameKey,
		authKey,
		authName,
		usernameName
	} from "@/config/config.js";
	export default {
		name: "wx_recharge",
		data() {
			return {
				lists: [],
				withdraw: "withdraw",
				message: "",
				close: false,
				loginBtn: false,
				//tips: false,
				codeTitle: "获取验证码",
				findYzm: false,
				yzm: "",
				rMoney: "",
				list: [],
				obj: {},
				leftMoney: "0",
				username: "",
				isPay: false,
				countDown: "20s后重新获取",
				countBool: false,
				second: 20,
				preventTime: true,
				securityBtn: true,
				payTitle: "请输入交易密码",
				payType: "",
				orderid: "",
				cardId: "",
				realPwd: "",
				isHistory:'',
				showSelect:false,
				index:0
			};
		},
		created: function() {
			var _this = this;
			_this.leftMoney = parseFloat(_this.leftMoney).toFixed(2);
			//_this.username = _this.$decryptByDES(_this.$getCookie(usernameName), usernameKey);
			_this.username = this.$decryptByDES(
				this.$getCookie(usernameName),
				this.$uncompile(usernameKey)
			);
			_this.$http
				.post("/Product/User/showMyAccountNew", {
					parameters: "{}"
				})
				.then(function(res) {
					if(res.data.end == "ok") {
						_this.obj = res.data.obj;
						if(res.data.obj.isBindBank == "1") {
							_this.list = res.data.list[0];
						}
						_this.leftMoney = parseFloat(res.data.obj.leftMoney).toFixed(2);
						// 新老用户标识
						_this.isHistory = res.data.obj.isHistory

						_this.lists = res.data.list;
						// console.log(res.data.list);
					} else if(res.data.end == "noLogin") {
						_this.message = res.data.message;
						_this.close = true;
						setTimeout(function() {
							_this.close = false;
							_this.start();
						}, 1000);
					}
				})
				.catch(function(err) {
					console.log(err);
				});
		},
		methods: {
			submit() {
				this.payShow();
			},
			unNull() {
				if(this.rMoney.length != 0) {
					this.loginBtn = true;
				} else {
					this.loginBtn = false;
				}
			},
			payShow() {
				var _this = this;
				//   _this.times();

				//
				var formData = JSON.stringify({
					mark: _this.withdraw,
					baofooOrderId: "",
					money: _this.rMoney
				}); // 这里是你的表单数据
				//alert(formData);
				if(_this.rMoney < 1) {
					_this.close = true;
					_this.message = "请输入大于1的金额";
					_this.loginBtn = false;
					setTimeout(function() {
						_this.close = false;
						_this.loginBtn = true;
					}, 1000);
					return;
				}
				if( _this.rMoney > _this.leftMoney / 100) {
					_this.close = true;
					_this.message = "提现金额超限";
					_this.loginBtn = false;
					setTimeout(function() {
						_this.close = false;
						_this.loginBtn = true;
					}, 1000);
					return;
				}

					_this.isPay = true;

				//  提现
				// _this.$http
				// 	.post("/Product/User/rechargeOrWithdrawCoupons", {
				// 		parameters: formData
				// 	})
				// 	.then(function(res) {
				// 		console.log(res);
				// 		if(res.data.end == "ok") {
				// 			_this.isPay = true;
				// 			//   _this.times();
				// 			_this.payType = res.data.type;
				// 			_this.orderid = res.data.orderid;
				// 			//							if(_this.payType=="bf"){
				// 			//								_this.payTitle="宝付支付提供本次支付服务";
				// 			//							}else if(_this.payType=="yb"){
				// 			//								_this.payTitle="易宝支付提供本次支付服务";
				// 			//							}
				// 			if(res.data.message != "") {
				// 				_this.close = true;
				// 				_this.message = res.data.message;
				// 				setTimeout(function() {
				// 					_this.close = false;
				// 				}, 1000);
				// 			} else {}
				// 		} else {
				// 			_this.close = true;
				// 			_this.message = res.data.message;
				// 			setTimeout(function() {
				// 				_this.close = false;
				// 			}, 1000);
				// 		}
				// 	})
				// 	.catch(function(err) {
				// 		console.log(err);
				// 	});
			},

			pasEnd(val) {
				var _this = this;
				var money = _this.rMoney;
				_this.realPwd = val;
				//console.log(val); //得到密码 可能会进行一些加密动作
				setTimeout(() => {
					// 模拟请求接口验证密码中 ..
					this.$refs.pay.$payStatus(true); // 拿到子组件的事件
				}, 1000);

				var money = _this.rMoney;
				var params = {
					//   orderid: _this.orderid,
					username: _this.username,
					//   type: _this.payType,
					trans_money: money,
					 accountId: _this.list.cardId,
					payPassword: _this.realPwd
				};
				_this.$http
					.post("/Product/User/baofooWithdrawals", {
						/*parameters: '{"orderid":' + _this.orderid + ',"username":' + _this.username + ',"type":' + _this.payType + ',"amount":' + money + ',"accountId":' + _this.cardId + ',"validatecode":' + _this.realPwd' + '}'*/
						parameters: JSON.stringify(params)
					})
					.then(function(res) {
						if(res.data.end == "ok") {
							_this.close = true;
							_this.message = res.data.message;
							setTimeout(function() {
								_this.close = false;
								setTimeout(function() {
									_this.$router.push({
										name: "dispose"
									});
								}, 1000);
							}, 1000);
						} else {
							_this.close = true;
							_this.message = res.data.message;
							setTimeout(function() {
								_this.close = false;
								_this.$refs.pay.$payStatus(false);
							}, 1000);
						}
					})
					.catch(function(err) {
						console.log(err);
					});
			},
			closes() {
				if(this.$refs.pay.val.length > 0) {
					this.$refs.pay.val = [];
				}
				var _this = this; //配合使用
				//clearInterval(window.countTime);
				this.isPay = !_this.isPay;
				//_this.times();
				//配合使用-end
			},
			getSecurit() {
				//this.payShow();
			},
			tixian() {
				this.$router.push({
					name: "dispose"
				});
			},
			showSelectFn(){
				this.showSelect = true;
				this.loginBtn = false;
			},
			selectItem(i,list){
				this.list  = list;
				this.index = i;
				this.showSelect = false;
				if (this.rMoney.length != 0) {
					this.loginBtn = true;
				}

			},
			cancelBtn(){
				this.showSelect = false;
				if (this.rMoney.length != 0) {
					this.loginBtn = true;
				}
			}
			//			zhuFun: function() {
			//				this.$router.push({
			//					path: 'register',
			//					name: 'register',
			//				});
			//			},
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url("../../../assets/css/wechat/jc_reset.css");
	@import url("../../../assets/css/wechat/layout.css");
	@import url("../../../assets/css/wechat/reset_rem.css");
	@import url("../../../assets/css/wechat/revise_traders_pwd.css");

	.imgwap {
		 float:right;height:5.5rem;
		 width:5rem;font-size:2rem;
		 line-height: 5.5rem; 
		 vertical-align: middle;
		 text-align:center;color:#999999
	}
	.imgwap img{
		width: 1rem;
	}
	.selectBankTitle{
		text-align: center;
		background-color: #fff;
		font-size: 1.4rem;
		line-height:3rem;
	}
	.selectbank{
		background-color: #fff;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding-top: .5rem;
		z-index: 100;
		/*position: relative;*/
	}
	.revise_traders_pwd .icommon{
		border: none;
	}
	.selectbank .bankitem{
		border-top:1px solid #ccc; 
		padding: 1rem 0;
		position: relative;
	}
	.revise_traders_pwd .bankImg img.bankIcon{

		width: 4.5rem;
		height: 4.5rem;
	}
	.selectIcon{
		position: absolute;
		right: 0;
		top: 0;
		height: 100%;
		width: 17%;
		/*background-color: red;*/
		z-index: 100;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.selectIcon img{
		width: 2rem;
	}
	/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(5rem);
  opacity: 0;
}
.wtips{
	/*padding-top: 2rem;*/
	width: 92%;
    margin: 0 auto;
    font-size: 1.2rem;
    line-height: 1.6rem;
    color: #999999;
}
.wtips img{
	width: 1.7rem;
	padding: 0 .3rem;
}
.cancelBtn{
	text-align: center;
	font-size: 1.5rem;
	line-height: 3.5rem;
	border-top: 1px solid #999;
}
.mask{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,.5);
	/*z-index: 50;*/
}
.revise_traders_pwd .welfare-close{
	width: 92%;
}
</style>