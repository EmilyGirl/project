<template>
	<div class="go_invest">
		<div class="bang-mask" v-if="blance">
			<div class="bang-content">
				<p class="bang-title">提示</p>
				<p class="bang-common">余额不足</p>
				<div class="bangBtn clearfix">
					<span class="fl firstBtn" @click="blance = !blance">取消</span>
					<router-link class="fr secondBtn" :to="{path:'./wx_recharge',query:{productId:this.$route.query.productId}}">前往充值</router-link>
				</div>
			</div>
		</div>
		<div class="alert-mask" v-if="maskShow">
			<div class="alert-content">
				<ul class="alert-title clearfix">
					<li v-for="(ticket, j) in tickets" @click="changeFun(j)" :class="{classname: num==j}" class="fl">{{ ticket.title }}</li>
					<li class="closeImg"><img @click="maskShow = !maskShow" src="../../../assets/img/wechat/product/close.png" /></li>
				</ul>
				<ul class="red-ticket" v-if="num == 0">
					<li class="clearfix" v-for="(redlist, red) in redlists" :class="unRedIndex - 1 > red ? 'changeBg' : 'liBg'">
						<button @click="redFun(red,redlist,'redFun')" :disabled="unRedIndex - 1 > red ? redDis : true">
							<div class="ticket-left fl">
								<p><span>{{ parseInt(redlist.initMoney)/100 }}</span>元</p>
								<p class="man">{{ redlist.useNote }}</p>
							</div>
							<div class="ticket-middle fl">
								<span class="ticket-type" :class="unRedIndex - 1 > red ? 'red' : 'gray'"  >{{ redlist.title }}</span><span class="from" >来源:{{ redlist.from }}</span>
								<p class="userange">{{ redlist.useRange }}</p>
								<p class="usedate">到期时间：{{ redlist.overTime | formatDate }}</p>
							</div>
							<div class="ticket-right fl" :class="{lockBg: r==red}"></div>
						</button>
					</li>
					<li class="lastli" v-if="redlists.length == 0">
						<img src="../../../assets/img/wechat/product/noquan.png" />
						<p>暂无可用券包</p>
					</li>
				</ul>
				<ul class="yellow-ticket" v-if="num == 1">
					<li class="clearfix" v-for="(coplist, cop) in coplists" :class="unCopIndex - 1 > cop ? 'changeBg' : 'liBg'">
						<button @click="copFun(cop,coplist,'copFun')" :disabled="unCopIndex - 1 > cop ? copDis : true">
							<div class="ticket-left fl">
								<p><span>{{ parseInt(coplist.initMoney)/100 }}</span>元</p>
								<p class="man">{{ coplist.useNote }}</p>
							</div>
							<div class="ticket-middle fl">
								<span class="ticket-type" :class="unCopIndex - 1 > cop ? 'yellow' : 'gray'">{{ coplist.title }}</span><span class="from">来源:{{ coplist.from }}</span>
								<p class="userange">{{ coplist.useRange }}</p>
								<p class="usedate">使用时间：{{ coplist.overTime | formatDate }}</p>
							</div>
							<div class="ticket-right fl" :class="{lockBg: c == cop}"></div>
						</button>
					</li>
					<li class="lastli" v-if="coplists.length == 0">
						<img src="../../../assets/img/wechat/product/noquan.png" />
						<p>暂无可用券包</p>
					</li>
				</ul>
				<ul class="blue-ticket" v-if="num == 2">
					<li class="clearfix" v-for="(ratelist, rate) in ratelists" :class="unRateIndex - 1 > rate ? 'changeBg' : 'liBg'">
						<button @click="rateFun(rate,ratelist,'rateFun')" :disabled="unRateIndex - 1 > rate ? rateDis : true">
							<div class="ticket-left fl">
								<p><span>{{ ratelist.initMoney }}</span>%</p>
								<p class="man">{{ ratelist.useNote }}</p>
							</div>
							<div class="ticket-middle fl">
								<span class="ticket-type" :class="unRateIndex - 1 > rate ? 'blue' : 'gray'">{{ ratelist.title }}</span><span class="from">来源:{{ ratelist.from }}</span>
								<p class="userange">{{ ratelist.useRange }}</p>
								<p class="usedate">使用时间：{{ ratelist.overTime | formatDate }}</p>
							</div>
							<div class="ticket-right fl" :class="{lockBg: ra==rate}"></div>
						</button>
					</li>
					<li class="lastli" v-if="ratelists.length == 0">
						<img src="../../../assets/img/wechat/product/noquan.png" />
						<p>暂无可用券包</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="fu-mask" v-if="fuclose">
			<div class="fu-content">
				<div class="fu-title"><span>选择付款方式</span><img @click="fuclose = !fuclose" src="../../../assets/img/wechat/product/close.png" /></div>
				<ul class="mode">
					<li class="clearfix" v-if="isHistory == '0'" @click="balanceFun()">
						<img class="fl balance" src="../../../assets/img/wechat/product/balance.png" />
						<div class="fl fu-middle">
							<p class="yu-common">账户余额</p>
							<p class="money-common">可用余额{{ leftMoney/100 }}元</p>
						</div>
						<div class="fr fu-right" :class="{ lockBg: bg }"></div>
						<!--<img class="fr lock" src="../../../assets/img/wechat/product/unlock.png"/>-->
					</li>
					<li v-for="(banklist, bank) in banklists" @click="bankFun(bank,banklist)">
						<img class="fl balance" :src="banklist.bankURI" />
						<div class="fl fu-middle">
							<p class="yu-common">{{ banklist.bankName }}</p>
							<p class="money-common">{{ banklist.bankNote }}</p>
						</div>
						<div class="fr fu-right" :class="{lockBg: b == bank}"></div>
					</li>
				</ul>
			</div>
		</div>
		<!--项目信息-->
		<div class="preject">
			<ul class="qixian">
				<li class="clearfix">
					<span class="fl left-com">出借金额</span>
					<span class="fl right-com"><input @input="keyupFun()" onkeyup="value=value.replace(/[^\d]/g,'')" class="width-common" type="number" name="" v-model="message" id="" value="" :placeholder="parseInt(atleastMoney/100) + '元起投，且需为' + parseInt(atleastMoney/100) + '的整倍数'" oninput="if(value.length>10)value=value.slice(0,10)" />元</span>
				</li>
				<li class="clearfix">
					<span class="fl left-com">预计收益</span>
					<span class="fl right-com"><var class="width-common">{{ message*(baseEarnings + Number(jiangLiEarnings))*tzqx/(365*100) | fixNum }}</var>元</span>
				</li>
			</ul>
			<ul class="qixian">
				<li class="clearfix" @click="ticketFun()">
					<span class="fl left-com">我的券包</span>
					<span class="fl right-com">
						<span class="width-common" v-if=" state == 'noData' || jialitype == '' || parseInt(message)/100 < 1 || message == ''">你有<var>{{ couponcount }}</var>张优惠券</span>
						<!--<span class="width-common">您有 <var>{{ couponcount }}</var> 张优惠券</span>-->
					<!--<span class="width-common" v-if="couponcount == 0 && noLogin != 'noLogin' && noLogin != 'error'">您当前没有券包</span>-->
					<span class="width-common" v-if="(this.c != null ? 1 : ((this.r != null || this.ra != null)? 0: (jialitype == '0' || jialitype == '1'))) && state == 'ok' && parseInt(message)/100 >= 1">您已选择{{ parseInt(money)/100 }}元理财券</span>
					<span class="width-common" v-if="(this.r != null ? 1 : ((this.c != null || this.ra != null)? 0: (jialitype == '2' || jialitype == '3'))) && state == 'ok' && parseInt(message)/100 >= 1">您已选择{{ parseInt(money)/100 }}元现金卡</span>
					<span class="width-common" v-if="(this.ra != null ? 1 : ((this.c != null || this.r != null)? 0: (jialitype == '4'))) && state == 'ok' && parseInt(message)/100 >= 1">您已选择{{ money }}%加息券</span>
					<img src="../../../assets/img/wechat/product/right.png" />
					</span>
				</li>
				<!--<li class="clearfix">
					<span class="fl left-com">还需支付</span>
					<span class="fl right-com">{{ (new Date()).valueOf() + (1+lcqx)*24*60*60*1000 | formatDate }}</span>
				</li>-->
				<li class="clearfix" @click="modeFun()">
					<span class="fl left-com">付款方式</span>
					<span class="fl right-com">
					<span class="width-common color-hui" v-if="this.b == null">账户余额（{{ leftMoney/100 }}元）</span>
					<span class="width-common color-hui" v-if="this.b != null">{{ firstBank }}</span>
					<img src="../../../assets/img/wechat/product/right.png" /></span>
				</li>
			</ul>
			<div class="cozy">
				<p><img src="../../../assets/img/wechat/product/tip.png" /> 温馨提示：</p>
				<p>如遇到问题，请联系客服
					<a :href="'tel:' + tel">{{ tel }}</a>
				</p>
			</div>
			<div class="ment"><img v-if="lock" @click="lock=!lock,unlock=!unlock" src="../../../assets/img/wechat/product/lock.png" /><img v-if="unlock" @click="unlock=!unlock,lock=!lock" src="../../../assets/img/wechat/product/unlock.png" />我已阅读并同意
				<!-- <router-link to="/app_terminal/buy_back"></router-link> -->
				<a  :href="detailsUrl+'?auth='+auth">{{protocolName}}</a>
				  <transition name="fade">
			<img  v-if="close&&unlock==true" style="width: 13.2rem;
    height: 2.9rem;
    position: absolute;
    top: -3rem;
    left: 0px;" src="../../../assets/img/wechat/mine/tip_agreement.png" alt="">
	    </transition>
			</div>
			<transition name="fade">
				<div v-if="close&&unlock==false"  style="width: 83%;" class="prompt">{{ info }}</div>
			</transition>
			<button class="btnBottom" @click="payShow()">立即出借</button>
			<vue-pay-keyboard :isPay='isPay' @pas-end='pasEnd' @close='closeFun' ref="pay" :countDown='countDown' :payTitle='payTitle' @get-securit='getSecurit' :securityBtnCan='securityBtn'></vue-pay-keyboard>
		</div>
		</div>
</template>

<script>
import { formatDate } from "../../../assets/js/wechat/date.js";
import reset_rem from "../../../assets/js/wechat/reset_rem.js";
import {
  usernameKey,
  authKey,
  authName,
  usernameName
} from "@/config/config.js";
export default {
  data() {
    return {
      auth: "",
      detailsUrl: "",
      items: [],
      baseEarnings: "",
      lcqx: "",
      tzqx: "",
      jiangLiEarnings: "",
      baseEarnings: "",
      atleastMoney: "",
      message: "",
      maskShow: false,
      lock: false,
      unlock: true,
      close: false,
      num: 0,
      r: null,
      c: null,
      ra: null,
      info: "",
      tickets: [
        {
          title: "现金卡"
        },
        {
          title: "理财券"
        },
        {
          title: "加息券"
        }
      ],
      coplists: "",
      ratelists: "",
      redlists: "",
      couponcount: "",
      fuclose: false,
      banklists: [],
      tel: "",
      leftMoney: "",
      inMoney: 0,
      jialitype: "",
      money: "",
      state: "",
      row: 0,
      unCopIndex: null,
      unRateIndex: null,
      unRedIndex: null,
      redDis: false,
      copDis: false,
      rateDis: false,
      isHistory: "",
      firstBank: "",
      bg: false,
      b: null,
      noLogin: "",
      id: "",
      productId: "",
      cardId: "",
      isPay: false,
      countDown: "60s后重新获取",
      countBool: false,
      second: 60,
      preventTime: true,
      securityBtn: true,
      payTitle: "",
      payType: "",
      orderid: "",
      validatecode: "",
      blance: false,
      ph: "",
      leftCopies: "",
      financingAmount: "",
      buyFreshmanProduct: "",
      productType: "",
      protocolName: ""
    };
  },
  created: function() {
    this.auth = this.$decryptByDES(
      this.$getCookie(authName),
      this.$uncompile(authKey)
    );
    this.loadData();
    this.loadinfoFun();
    this.telFun();
    this.ph = this.getxxx();
    this.getMoneyData();
    this.keyupFun();
  },
  filters: {
    fixNum(value) {
      // return value.toFixed(2);
      var num2 = value.toFixed(3);
      return num2.substring(0, num2.lastIndexOf(".") + 3);
    },
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy-MM-dd");
    }
  },
  methods: {
    getMoneyData: function() {
      this.message = this.$route.query.moneyData;
    },
    getxxx: function() {
      if (this.$getCookie(usernameName)) {
        return this.$decryptByDES(
          this.$getCookie(usernameName),
          this.$uncompile(usernameKey)
        );
      }
    },
    loadData: function() {
      this.productId = this.$route.query.productId;
      var _this = this;
      var auth = this.$route.query.auth;
      _this.$http
        .post("/Product/User/nowInvest", {
          parameters: '{"productId":"' + _this.productId + '"}'
        })
        .then(function(res) {
          if (res.data.end == "ok") {
            _this.detailsUrl = res.data.obj.detailsUrl;
            _this.protocolName = res.data.obj.protocolName;
            _this.baseEarnings = res.data.obj.baseEarnings;
            _this.tzqx = res.data.obj.tzqx;
            _this.jiangLiEarnings = res.data.obj.jiangLiEarnings;
            _this.baseEarnings = res.data.obj.baseEarnings;
            _this.atleastMoney = res.data.obj.atleastMoney;
            _this.leftCopies = res.data.obj.leftCopies;
            _this.financingAmount = res.data.obj.financingAmount;
            _this.productType = res.data.obj.productType;
          } else {
            _this.noLogin = res.data.end;
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    telFun: function() {
      var auth = this.$route.query.auth;
      var _this = this;
      _this.$http
        .post("/contactInformation/getContactInformation", {
          parameters: "{}"
        })
        .then(function(res) {
          if (res.data.end == "ok") {
            var tel = "";
            var tellist = res.data.data.list;
            for (var i = 0; i < tellist.length; i++) {
              if (tellist[i].type == "tel") {
                tel = tellist[i].subtitle;
              }
            }
            _this.tel = tel;
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    loadinfoFun: function() {
      var auth = this.$route.query.auth;
      var _this = this;
      _this.$http
        .post("/Product/User/showMyAccountNew", {
          parameters: "{}"
        })
        .then(function(res) {
          if (res.data.end == "ok") {
            _this.banklists = res.data.list;
            _this.leftMoney = res.data.obj.leftMoney;
            _this.couponcount = res.data.obj.couponcount;
            _this.isHistory = res.data.obj.isHistory;
            _this.firstBank = res.data.list[0].bankName;
            _this.buyFreshmanProduct = res.data.obj.buyFreshmanProduct;
            //console.log("buyFreshmanProduct:"+_this.buyFreshmanProduct);
            if (_this.isHistory == 1) {
              _this.cardId = res.data.list[0].cardId;
              _this.b = 0;
              _this.bg = false;
            } else {
              if (_this.leftMoney == 0) {
                _this.b = 0;
                _this.bg = false;
              } else {
                _this.bg = true;
              }
            }
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    keyupFun: function() {
      var _this = this;
      if (/^[1-9]\d*00$/.test(parseInt(_this.message))) {
        _this.inMoney = parseInt(_this.message) * 100;
        var params = {
          productId: _this.productId,
          inMoney: _this.inMoney
        };
        _this.$http
          .post("/Product/User/chooseCoupon", {
            //							parameters: '{"authorization":"83b728a1-06c2-4a66-89e1-a6fbf082f1b6",productId:"' + _this.productId + '","inMoney":"' + _this.inMoney + '"}'
            parameters: JSON.stringify(params)
          })
          .then(function(res) {
            if (res.data.end == "ok") {
              _this.jialitype = res.data.type;
              _this.money = res.data.money;
              _this.state = res.data.end;
              _this.row = res.data.row;
              _this.id = res.data.id;
              _this.c = null;
              _this.r = null;
              _this.ra = null;
            } else {
              _this.id = "";
              _this.state = res.data.end;
              _this.c = null;
              _this.r = null;
              _this.ra = null;
              _this.money = "";
            }
          })
          .catch(function(err) {
            console.log(err);
          });
      } else {
        _this.c = null;
        _this.r = null;
        _this.ra = null;
      }
    },
    ticketFun: function() {
      var _this = this;
      if (_this.message == "") {
        _this.info = "请输入金额";
        _this.close = true;
        setTimeout(function() {
          _this.close = false;
        }, 2000);
      } else if (parseInt(_this.message) % (_this.atleastMoney / 100)) {
        _this.info =
          "出借金额必须为起+" +
          parseInt(_this.atleastMoney / 100) +
          "+的整数倍";
        _this.close = true;
        setTimeout(function() {
          _this.close = false;
        }, 2000);
      } else {
        var auth = this.$route.query.auth;
        var productId = this.$route.query.productId;
        _this.maskShow = true;
        _this.$http
          .post("/Product/User/buyProductChooseCoupon", {
            parameters:
              '{"status":"0","currentPage":"1","productId":"' +
              _this.productId +
              '","inMoney":"' +
              _this.inMoney +
              '","pageSize":""}'
          })
          .then(function(res) {
            if (res.data.end == "ok") {
              _this.coplists = res.data.listCoupon; //理财卷集合
              _this.ratelists = res.data.listRate;
              _this.redlists = res.data.listHongbao; //现金卡集合
              _this.unRedIndex = res.data.unRedIndex;
              _this.unCopIndex = res.data.unCopIndex;
              _this.unRateIndex = res.data.unRateIndex;
              if (_this.c != null) {
                _this.num = 1;
              } else if (_this.r != null) {
                _this.num = 0;
              } else if (_this.ra != null) {
                _this.num = 2;
              } else {
                if (_this.state == "ok") {
                  if (_this.jialitype == "0" || _this.jialitype == "1") {
                    _this.num = 1;
                    _this.c = getidnex(res.data.listCoupon, _this.id);
                  }
                  if (_this.jialitype == "2" || _this.jialitype == "3") {
                    // hognbao
                    _this.num = 0;
                    _this.r = getidnex(res.data.listHongbao, _this.id);
                  }
                  if (_this.jialitype == "4") {
                    // jiaxi
                    _this.num = 2;
                    _this.ra = getidnex(res.data.listRate, _this.id);
                  }
                }
              }
            }
          })
          .catch(function(err) {
            console.log(err);
          });

        function getidnex(arr, id) {
          var traget = "";
          arr.forEach((e, i) => {
            if (e.id == id) {
              traget = i;
            }
          });
          return traget;
        }
      }
    },
    redFun: function(red, redlist) {
      var _this = this;
      _this.r = red;
      _this.c = null;
      _this.ra = null;
      _this.id = redlist.id;
      _this.money = parseInt(redlist.initMoney);

      setTimeout(function() {
        _this.maskShow = false;
      }, 100);
    },
    copFun: function(cop, coplist) {
      var _this = this;
      _this.c = cop;
      _this.r = null;
      _this.ra = null;
      _this.id = coplist.id;

      _this.money = parseInt(coplist.initMoney);
      setTimeout(function() {
        _this.maskShow = false;
      }, 100);
    },
    rateFun: function(rate, ratelist) {
      var _this = this;
      _this.ra = rate;
      _this.c = null;
      _this.r = null;
      _this.id = ratelist.id;

      _this.money = ratelist.initMoney;
      setTimeout(function() {
        _this.maskShow = false;
      }, 100);
    },
    changeFun: function(j) {
      this.num = j;
    },
    modeFun: function() {
      //付款方式
      var _this = this;
      _this.fuclose = true;
    },
    bankFun: function(bank, banklist) {
      //选择银行卡
      var _this = this;
      _this.b = bank;
      _this.bg = false;
      _this.cardId = banklist.cardId;
      _this.firstBank = banklist.bankName;
      setTimeout(function() {
        _this.fuclose = false;
      }, 100);
    },
    balanceFun: function() {
      var _this = this;
      _this.bg = true;
      _this.b = null;
      setTimeout(function() {
        _this.fuclose = false;
      }, 100);
    },
    buyFun: function(val) {
      var _this = this;
      if (_this.isHistory == "0" || (_this.message == "" && _this.b != null)) {
        //判断付款方式
        if (_this.b == null) {
          //余额
          //余额支付
          if (parseInt(_this.message) <= _this.leftMoney / 100) {
            if (_this.buyFreshmanProduct == "0" && _this.productType == "1") {
              _this.$http
                .post("/Product/User/buyFreshProject", {
                  parameters:
                    '{"platform":"0","coupon":"' +
                    _this.money +
                    '","productId":"' +
                    _this.productId +
                    '","bankMoney":"0","username":"' +
                    _this.ph +
                    '","inMoney":"' +
                    _this.inMoney +
                    '","payPassword":"' +
                    val +
                    '","couponId":"' +
                    _this.id +
                    '","type":"0","copies":"' +
                    _this.message +
                    '","apiVersion":"v4.0.0"' +
                    "}"
                })
                .then(function(res) {
                  if (res.data.end == "ok") {
                    //_this.$refs.pay.$payStatus(true);
                    _this.$router.push({
                      name: "success",
                      query: { productId: _this.productId }
                    });
                  } else {
                    //_this.$refs.pay.$payStatus(false);
                    _this.info = res.data.message;
                    _this.close = true;
                    setTimeout(function() {
                      _this.$refs.pay.$payStatus(false);
                      _this.close = false;
                    }, 800);
                  }
                })
                .catch(function(err) {
                  console.log(err);
                });
            } else {
              _this.$http
                .post("/Product/User/buyProject", {
                  parameters:
                    '{"platform":"0","coupon":"' +
                    _this.money +
                    '","productId":"' +
                    _this.productId +
                    '","username":"' +
                    _this.ph +
                    '","inMoney":"' +
                    _this.inMoney +
                    '","payPassword":"' +
                    val +
                    '","couponId":"' +
                    _this.id +
                    '","type":"0","copies":"' +
                    _this.message +
                    '"}'
                })
                .then(function(res) {
                  if (res.data.end == "ok") {
                    _this.$refs.pay.$payStatus(true);
                    _this.$router.push({
                      name: "success",
                      query: { productId: _this.productId }
                    });
                  } else {
                    //_this.$refs.pay.$payStatus(false);
                    _this.info = res.data.message;
                    _this.close = true;
                    setTimeout(function() {
                      _this.$refs.pay.$payStatus(false);
                      _this.close = false;
                    }, 800);
                  }
                })
                .catch(function(err) {
                  console.log(err);
                });
            }
          } else {
            //弹框
            _this.blance = true;
          }
        } else {
          //银行卡
          _this.$http
            .post("/Product/User/rechargeAndBuys/confirm", {
              parameters:
                '{"platform":"0","coupon":"' +
                _this.money +
                '","productId":"' +
                _this.productId +
                '","username":"' +
                _this.ph +
                '","inMoney":"' +
                _this.inMoney +
                '","couponId":"' +
                _this.id +
                '","copies":"' +
                _this.message +
                '","cardId":"' +
                _this.cardId +
                '","orderid":"' +
                this.orderid +
                '","validatecode":"' +
                val +
                '","type":"' +
                this.payType +
                '"}'
            })
            .then(function(res) {
              if (res.data.end == "ok") {
                _this.$refs.pay.$payStatus(true);
                if (res.data.state == "0") {
                  _this.$router.replace({ name: "success" });
                }
                if (res.data.state == "1") {
                  _this.$router.replace({ name: "success" });
                }
                if (res.data.state == "2") {
                  _this.info = res.data.message;
                  _this.close = true;
                  setTimeout(function() {
                    _this.close = false;
                  }, 2000);
                }
              } else {
                _this.$refs.pay.$payStatus(false);
              }
            })
            .catch(function(err) {
              console.log(err);
            });
        }
      } else if (_this.isHistory == "1") {
        _this.$http
          .post("/Product/User/rechargeAndBuys/confirm", {
            parameters:
              '{"platform":"0","coupon":"' +
              _this.money +
              '","productId":"' +
              _this.productId +
              '","username":"' +
              _this.ph +
              '","inMoney":"' +
              _this.inMoney +
              '","couponId":"' +
              _this.id +
              '","copies":"' +
              _this.message +
              '","cardId":"' +
              _this.cardId +
              '","orderid":"' +
              this.orderid +
              '","validatecode":"' +
              val +
              '","type":"' +
              this.payType +
              '"}'
          })
          .then(function(res) {
            if (res.data.end == "ok") {
              _this.$refs.pay.$payStatus(true);
              _this.$router.push({
                name: "success",
                query: { productId: _this.productId }
              });
            } else {
              _this.$refs.pay.$payStatus(false);
            }
          })
          .catch(function(err) {
            console.log(err);
          });
      }
    },
    payShow() {
      var _this = this;
      console.log(_this.leftCopies);
      console.log(_this.financingAmount);
      console.log("我的" + _this.message);
      if (parseInt(_this.message) > _this.leftCopies / 100) {
        _this.info = "当前项目最高可出借" + _this.leftCopies / 100 + "元哦";
        _this.close = true;
        setTimeout(function() {
          _this.close = false;
        }, 2000);
        return false;
      }
      if (parseInt(_this.message) > _this.financingAmount / 100) {
        _this.info =
          "单笔最高可出借金额为" + _this.financingAmount / 100 + "元哦~";
        _this.close = true;
        setTimeout(function() {
          _this.close = false;
        }, 2000);
        return false;
      }
      if (_this.message == "") {
        _this.info = "请输入金额";
        _this.close = true;
        setTimeout(function() {
          _this.close = false;
        }, 2000);

        return;
      }
      if (parseInt(_this.message) % (_this.atleastMoney / 100)) {
        _this.info =
          "出借金额必须为" + parseInt(_this.atleastMoney / 100) + "的整数倍";
        _this.close = true;
        setTimeout(function() {
          _this.close = false;
        }, 2000);
      } else if (_this.unlock == true) {
        // _this.info = "请勾选" + _this.protocolName;
        _this.close = true;
        setTimeout(function() {
          _this.close = false;
        }, 2000);
      } else if (parseInt(_this.message) < _this.atleastMoney / 100) {
        _this.info = "出借金额必须大于" + _this.atleastMoney / 100;
        _this.close = true;
        setTimeout(function() {
          _this.close = false;
        }, 2000);
      } else {
        if (_this.b == null) {
          if (parseInt(_this.message) > _this.leftMoney / 100) {
            _this.blance = true;
            _this.isPay = false;
          } else {
            _this.isPay = true;
            _this.$refs.pay.countBool = false;
            _this.payTitle = "请输入交易密码";
          }
        } else {
          _this.orderFun();
          _this.countBool = true;
          _this.payTitle = "请输入验证码";
          //						_this.isPay = true;
        }
      }

      //_this.times();
    },
    orderFun: function() {
      var _this = this;
      _this.$http
        .post("/Product/User/rechargeAndBuys", {
          parameters:
            '{"platform":"0","coupon":"' +
            _this.money +
            '","productId":"' +
            _this.productId +
            '","username":"' +
            _this.ph +
            '","inMoney":"' +
            _this.inMoney +
            '","couponId":"' +
            _this.id +
            '","copies":"' +
            _this.message +
            '","cardId":"' +
            _this.cardId +
            '"}'
        })
        .then(function(res) {
          if (res.data.end == "ok") {
            _this.isPay = true;
            _this.orderid = res.data.orderid;
            _this.payType = res.data.type;
            _this.times();
          } else {
            _this.isPay = false;
            _this.info = res.data.message;
            _this.close = true;
            setTimeout(function() {
              _this.close = false;
            }, 2000);
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    times: function() {
      var _this = this;
      var wait = _this.second;
      this.$refs.pay.countBool = _this.countBool;
      console.log("计时器开始");
      function time() {
        if (wait == 0) {
          clearInterval(window.countTime);
          _this.securityBtn = false;
          _this.countDown = "重新发送";
          wait = _this.second;
        } else {
          _this.securityBtn = true;
          wait--;
          _this.countDown = wait + "s后重新获取";
        }
      }
      window.countTime = setInterval(time, 1000);
    },
    pasEnd(val) {
      var _this = this;
      _this.buyFun(val);
      console.log(val); //得到密码 可能会进行一些加密动作
    },
    closeFun() {
      if (this.$refs.pay.val.length > 0) {
        this.$refs.pay.val = [];
      }
      var _this = this;
      //配合使用
      this.isPay = !_this.isPay;
      clearInterval(window.countTime);
      var second = (_this.second = 60);
      _this.countDown = second + "s后重新获取";
      //配合使用-end
    },
    getSecurit() {
      //this.times();

      this.orderFun();
    }
  }
};
</script>

<style lang="less" scoped>
.ticket-type {
  vertical-align: middle;
}
.from {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  vertical-align: middle;
  width: 12rem;
}

@import url("../../../assets/css/wechat/reset_rem.css");
@import url("../../../assets/css/wechat/go_invest.less");
</style>