<template>
	<div class="zeek" id="zeek">
		<ul class="wrapped_title">
			<li v-for="(wrap,index) in wrapped" :class="{'wrap_li':selected==index}" @click="switchover(index)">{{wrap.title}}</li>
			<li class="clear"></li>
		</ul>
		<div class="wrapped_box">
			<div class="zeek_rewards" v-if="selected == 0" v-for="rate in rates">
				<div class="zeek_neirong">
					<div class="zeek_title">
						<div class="zeek_title1">{{rate.title}}</div>
						<div class="zeek_title2" v-if="rate.payInterestWay==0">按月付息到期还本</div>
						<div class="zeek_title2" v-if="rate.payInterestWay==1">到期还本付息</div>
					</div>
					<div class="zeek_three">
						<div class="zeek_line"></div>
						<div class="zeek_content clearfloat" v-for="(zeeklist,item) in 3">
							<img class="green_down" v-if="item==0" src="../../../assets/img/wechat/mine/copy.png" alt="">
							<img class="green_up" v-if="item==1" src="../../../assets/img/wechat/mine/gray_up.png" alt="">
							<img class="green_up" v-if="item==2" src="../../../assets/img/wechat/mine/gray_up.png" alt="">
							<div class="zeek_list">
								<span class="time" v-if="item==0">{{getDate(rate.payTime)}}</span>
								<!--  加来 减去的原因  后台给的全部 t+1的数据  我们自己算一下 t0 的数据    - (!rate.calcInterestWay?(24*60*60*1000):0)   四处加入  -->
								<span class="time" v-if="item==1">{{getDate(rate.finishTime - (!rate.calcInterestWay?(24*60*60*1000):0))  }}</span>
								<span class="time" v-if="item==2">{{getDate(rate.returnTime - (!rate.calcInterestWay?(24*60*60*1000):0))  }}</span>
								<span class="state" v-if="item==0">出借了</span><span class="state" v-if="item==1">到期</span><span class="state" v-if="item==2">收益&nbsp;&nbsp;&nbsp;</span>
								<span class="zeek_money" v-if="item==0">
               <span class="benjin">本金&nbsp;:&nbsp;</span><span class="money">{{(rate.inMoney/100).toFixed(2)}}</span>元<br>

								<span class="red_pack" v-if="rate.couponType==-1"></span>
								<span class="red_pack" v-if="rate.couponType==0||rate.couponType==1">{{rate.coupon/100}}元理财券</span><br>
								<span class="red_pack" v-if="rate.lijin">{{rate.lijin}}元礼金</span>
								<span class="red_pack" v-if="rate.couponType==4">{{rate.coupon}}%加息券</span>
								<span class="red_pack" v-if="rate.couponType==2||rate.couponType==3">{{rate.hongbao/100}}元现金卡</span>
								</span>
								<span class="zeek_money" v-if="item==1">
                <span style="color:#ffffff">收益</span>
								</span>
								<span class="zeek_money" v-if="item==2">
              <span class="money">+{{(rate.shouyi/100).toFixed(2)}}</span> <span class="benjin">元</span>
								</span>
								<span class="clear"></span>
							</div>
							<!-- <div class="clear"></div> -->
						</div>
					</div>
				</div>
				<div class="line"></div>
				<div class="contract">
					<div class="contract1" @click="toDetail(rate)">
						<img class="contractImg" src="../../../assets/img/wechat/mine/particulars.png" alt="">
						<span>项目详情</span>

					</div>
					<div class="contract1 contractLeft">
						<img class="contractImg" src="../../../assets/img/wechat/mine/bargain.png" alt="">
						<span @click="topact(rate)">电子合同</span>
					</div>
				</div>
			</div>
			<div class="null_go" v-if="selected == 0&&rates.length==0&&nolength==true">
				<img class="null_zeek" src="../../../assets/img/wechat/mine/null_value.png" alt="">
				<h3>出借找集财，简单又轻松</h3>
				<button class="null_go1" @click="toPro">去出借</button>
			</div>
			<div class="zeek_rewards" v-if="selected == 1" v-for="rate in rates1">
				<div class="zeek_neirong">
					<div class="zeek_title">
						<div class="zeek_title1">{{rate.title}}</div>
						<div class="zeek_title2" v-if="rate.payInterestWay==0">按月付息到期还本</div>
						<div class="zeek_title2" v-if="rate.payInterestWay==1">到期还本付息</div>
					</div>
					<div class="zeek_three">
						<div class="zeek_line"></div>
						<div class="zeek_content clearfloat" v-for="(zeeklist,item) in 3">
							<img class="green_down" v-if="item==0" src="../../../assets/img/wechat/mine/copy.png" alt="">
							<img class="green_up" v-if="item==1" src="../../../assets/img/wechat/mine/green_up.png" alt="">
							<img class="green_up" v-if="item==2" src="../../../assets/img/wechat/mine/green_up.png" alt="">
							<div class="zeek_list">
								<span class="time" v-if="item==0">{{getDate(rate.payTime)}}</span>
								<span class="time" v-if="item==1">{{getDate(rate.finishTime - (!rate.calcInterestWay?(24*60*60*1000):0))}}</span>
								<span class="time" v-if="item==2">{{getDate(rate.returnTime - (!rate.calcInterestWay?(24*60*60*1000):0))}}</span>
								<span class="state" v-if="item==0">出借了</span><span class="state" v-if="item==1">到期</span><span class="state" v-if="item==2">收益</span>
								<span class="zeek_money" v-if="item==0">
               <span class="benjin">本金&nbsp;:&nbsp;</span>
								<span class="money">{{(rate.inMoney/100).toFixed(2)}}元</span><br>

								<span class="red_pack" v-if="rate.couponType==-1"></span>
								<span class="red_pack" v-if="rate.couponType==0||rate.couponType==1">{{rate.coupon/100}}元理财券</span><br>
								<span class="red_pack" v-if="rate.lijin">{{(rate.lijin/100).toFixed(2)}}元礼金</span>
								<span class="red_pack" v-if="rate.couponType==4">{{rate.coupon}}%加息券</span>
								<span class="red_pack" v-if="rate.couponType==2||rate.couponType==3">{{rate.hongbao/100}}元现金卡</span>

								</span>
								<span class="zeek_money" v-if="item==1">
                             <span style="color:#ffffff">收益收</span>
								</span>
								<span class="zeek_money" v-if="item==2">
              <span class="money">+{{(rate.shouyi/100).toFixed(2)}}</span> <span class="benjin">元</span>
								</span>
								<span class="clear"></span>
							</div>
							<!-- <div class="clear"></div> -->
						</div>
					</div>
				</div>
				<div class="line"></div>
				<div class="contract">
					<div class="contract1" @click="toDetail(rate)">
						<img class="contractImg" src="../../../assets/img/wechat/mine/particulars.png" alt="">
						<span>项目详情</span>

					</div>
					<div class="contract1 contractLeft">
						<img class="contractImg" src="../../../assets/img/wechat/mine/bargain.png" alt="">
						<span @click="topact(rate)">电子合同</span>
					</div>
				</div>
			</div>
			<div class="null_go" v-if="selected == 1&&rates1.length==0&&nolength==true">
				<img class="null_zeek" src="../../../assets/img/wechat/mine/null_value.png" alt="">
				<h3>出借找集财，简单又轻松</h3>
				<button class="null_go1" @click="toPro">去出借</button>
			</div>
		</div>
		<div class="invit-close" v-if="close">{{ message }}</div>
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
  data() {
    return {
      nolength: false,
      lock: true,
      locks: true,
      selected: 0,
      wrapped: [
        {
          title: "出借中"
        },
        {
          title: "已还款"
        }
      ],

      //   第一个tab对应的数据
      rates: [],
      rates1: [],
      currentPage: 1,
      currentPages: 1,
      close: ""
    };
  },
  created: function() {
    //require("../../../assets/js/wechat/screenTouch.js");
    this.loadData();
  },
  mounted() {
    this.screenTouch();
  },
  methods: {
    //   时间转换**************************
    add0(m) {
      return m < 10 ? "0" + m : m;
    },
    getDate(shijianchuo) {
      //shijianchuo是整数，否则要parseInt转换
      var time = new Date(shijianchuo);
      var y = time.getFullYear();
      var m = time.getMonth() + 1;
      var d = time.getDate();
      var h = time.getHours();
      var mm = time.getMinutes();
      var s = time.getSeconds();
      return y + "-" + this.add0(m) + "-" + this.add0(d);
    },
    // ****************************************
    switchover: function(index) {
      this.selected = index;
      if (
        (this.rates.length == 0 && index == 0 && this.lock) ||
        (this.rates1.length == 0 && index == 1 && this.locks)
      ) {
        this.loadData();
      }
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
      var _this = this;
      if (_this.selected == 0) {
        _this.lock = false;
        _this.$http
          .post("/Product/User/loadInvestorsRecord", {
            parameters: '{"currentPage":"' + _this.currentPage + '","type":"0"}'
          })
          .then(function(res) {
            if (res.data.end == "ok") {
              _this.lock = true;
              _this.message = res.data.message;
              _this.close = true;
              setTimeout(function() {
                _this.close = false;
              }, 1000);
              _this.rates = _this.rates.concat(res.data.list);
            } else if (res.data.end == "noData") {
              _this.message = "没有更多数据了";
              _this.close = true;
              _this.nolength = true;
              setTimeout(function() {
                _this.close = false;
              }, 1000);
            }
          })
          .catch(function(err) {
            console.log(err);
            _this.nolength = true;
          });
      } else if (_this.selected == 1) {
        _this.locks = false;
        _this.$http
          .post("/Product/User/loadInvestorsRecord", {
            parameters:
              '{"currentPage":"' + _this.currentPages + '","type":"1"}'
          })
          .then(function(res) {
            if (res.data.end == "ok") {
              _this.locks = true;
              _this.message = res.data.message;
              _this.close = true;
              setTimeout(function() {
                _this.close = false;
              }, 1000);
              _this.rates1 = _this.rates1.concat(res.data.list);
            } else if (res.data.end == "noData") {
              _this.message = "没有更多数据了";
              _this.close = true;
              _this.nolength = true;
              setTimeout(function() {
                _this.close = false;
              }, 1000);
            }
          })
          .catch(function(err) {
            console.log(err);
            _this.nolength = true;
          });
      }
    },
    toDetail: function(rate) {
      this.$router.push({
        name: "product_detail",
        query: {
          productId: rate.productId
        }
      });
    },
    toPro: function() {
      this.$router.push({
        name: "home"
      });
    },
    topact: function(rate) {
      var _this = this;
      console.log(rate.hkly);
      this.auth = _this.$decryptByDES(
        _this.$getCookie(authName),
        _this.$uncompile(authKey)
      );
      window.location.href = rate.hkly + "&auth=" + this.auth;
    },
    screenTouch() {
      //滚动条在Y轴上的滚动距离
      var _this = this;

      function getScrollTop() {
        var scrollTop = 0,
          bodyScrollTop = 0,
          documentScrollTop = 0;
        if (document.body) {
          bodyScrollTop = document.body.scrollTop;
        }
        if (document.documentElement) {
          documentScrollTop = document.documentElement.scrollTop;
        }
        scrollTop =
          bodyScrollTop - documentScrollTop > 0
            ? bodyScrollTop
            : documentScrollTop;
        return scrollTop;
      }

      //文档的总高度

      function getScrollHeight() {
        var scrollHeight = 0,
          bodyScrollHeight = 0,
          documentScrollHeight = 0;
        if (document.body) {
          bodyScrollHeight = document.body.scrollHeight;
        }
        if (document.documentElement) {
          documentScrollHeight = document.documentElement.scrollHeight;
        }
        scrollHeight =
          bodyScrollHeight - documentScrollHeight > 0
            ? bodyScrollHeight
            : documentScrollHeight;
        return scrollHeight;
      }

      //浏览器视口的高度

      function getWindowHeight() {
        var windowHeight = 0;
        if (document.compatMode == "CSS1Compat") {
          windowHeight = document.documentElement.clientHeight;
        } else {
          windowHeight = document.body.clientHeight;
        }
        return windowHeight;
      }

      function GetSlideDirection(startX, startY, endX, endY) {
        var dy = startY - endY;
        console.log(dy);
        //var dx = endX - startX;
        var result = 0;
        if (dy > 0) {
          //向上滑动
          result = 1;
        } else if (dy < 0) {
          //向下滑动
          result = 2;
        } else {
          result = 0;
        }
        return result;
      }

      var startX, startY;
      var zeek = document.getElementById("zeek");
      zeek.addEventListener(
        "touchstart",
        function(ev) {
          if (getScrollTop() + getWindowHeight() >= getScrollHeight() - 10) {
            //alert("已经到最底部了！!");
            startX = ev.touches[0].pageX;
            startY = ev.touches[0].pageY;
          }
        },
        false
      );
      zeek.addEventListener(
        "touchend",
        function(ev) {
          var endX, endY;
          endX = ev.changedTouches[0].pageX;
          endY = ev.changedTouches[0].pageY;
          var direction = GetSlideDirection(startX, startY, endX, endY);
          if (getScrollTop() + getWindowHeight() >= getScrollHeight() - 10) {
            console.log("已经到最底部了！!");
            //alert("已经到最底部了");
            console.log("direction:" + direction);
            switch (direction) {
              case 0:
                //alert("无操作");
                console.log("误操作");
                break;
              case 1:
                console.log("up");
                console.log("222222222");
                if (_this.lock && _this.selected == 0) {
                  console.log("11111111111111");
                  _this.currentPage++;
                  _this.loadData();
                }
                if (_this.locks && _this.selected == 1) {
                  _this.currentPages++;
                  _this.loadData();
                }

                break;
              case 2:
                // 向下
                //								alert("down");
                console.log("down");
                break;

              default:
            }
          }
          /*}*/
        },
        false
      );
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../../../assets/css/wechat/reset_rem.css");
@import url("../../../assets/css/wechat/zeek_rewards.less");
</style>