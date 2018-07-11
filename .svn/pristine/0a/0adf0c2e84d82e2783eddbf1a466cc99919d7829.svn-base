<template>
	<div class="money_wrapped">
		<ul class="wrapped_title">
			<li v-for="(wrap,index) in wrapped" :class="{'wrap_li':selected==index}" @click="switchover(index)">{{wrap.title}}({{wrap.num}})</li>
			<li class="clear"></li>
		</ul>
		<div class="wrapped_box">
			<div class="wrapped_content" v-for="rate in ratess">
				<!-- 1 灰色   2 红色 3 黄色 4 蓝色 5 灰色-->
				<img class="content_img" v-if="selected==0" src="../../../assets/img/wechat/mine/purple_card.png" alt="">
				<img class="content_img" v-if="selected==3" src="../../../assets/img/wechat/mine/blue_card.png" alt="">
				<img class="content_img" v-if="selected==2" src="../../../assets/img/wechat/mine/yellow_card.png" alt="">
				<img class="content_img" v-if="selected==1" src="../../../assets/img/wechat/mine/red_card.png" alt="">
				<img class="content_img" v-if="rate.status=='3' || rate.status=='2'" src="../../../assets/img/wechat/mine/gray_card.png" alt="">
				<!--<img class="content_img" v-if='rate.timeover==5' src="../../../assets/img/wechat/mine/gray_card.png" alt="">-->
				<div class="content_left" :class="{'lijin':selected==0}">

		
					<span class="left_one" v-if="selected==0||selected==1||selected==2">{{ Number(rate.initMoney)/100 }}</span>
					
					<span class="left_one" v-if="selected==3">{{ Number(rate.initMoney) }}</span>
					
					<span class="left_one1">{{ unit }}</span><br><span  v-if="selected!=0"  class="left_one1">{{ rate.useNote }}</span>

				</div>
				<div class="content_right">
					<div class="content_source">
            <!-- coupon4: rate.type=='5'  礼金 -->
						<div class="coupon" :class="{coupon0: rate.status=='3' || rate.status=='2' ,coupon1: rate.type=='3'|| rate.type=='2',coupon2: rate.type=='0',coupon3: rate.type=='4', }" v-if="rate.type!=5">{{ rate.title }}</div>
						<div class="coupon_source" :class="{coupon_source1:rate.type!=5}">来源：{{rate.from}}</div>
						<div class="clear"></div>
					</div>
					<div class="content_noob">新手标不可用</div>
					<div class="content_time" v-if="rate.type!=5">获得时间：<span>{{ rate.overTime | formatDate}}</span></div>
					<div class="content_time" v-if="rate.type==5">获得时间：<span>{{ rate.useTime | formatDate}}</span></div>
					<img class="guoqi" v-if="rate.status=='3'" src="../../../assets/img/wechat/mine/state_past_due.png" alt="">
					<img class="guoqi" v-if="rate.status=='2'" src="../../../assets/img/wechat/mine/state_already.png" alt="">
				</div>
			</div>
			<div class="card-null" v-if="showAlert">
				<img src="../../../assets/img/wechat/mine/card_null.png" />
				<p>小主！想投哪儿就投哪儿！{{text11}}伺候！</p>

			</div>
		</div>
		<div class="rule" v-if="shoeRule"> <router-link :to="{path: '/app_terminal/wrapped_user',query:{}}">使用规则</router-link> </div>
		<router-link class="buy" :to="{path:'./product'}">立即出借</router-link>
	</div>
</template>

<script>
import { formatDate } from "../../../assets/js/wechat/date.js";
import reset_rem from "../../../assets/js/wechat/reset_rem.js";
export default {
  data() {
    return {
      selected: 0,
      wrapped: [
        {
          title: "礼金",
          num: 0
        },
        {
          title: "现金卡",
          num: 0
        },
        {
          title: "理财券",
          num: 0
        },
        {
          title: "加息券",
          num: 0
        }
      ],
      //  初次加载与第一个列表数据相同
      lijin: [],
      ratess: [],
      hongbao: [],
      coupon: [],
      rate: [],
      showAlert: false,
      shoeRule: false,
      unit: "",
      quancan: ""
    };
  },
  created: function() {
    var _this = this;
    _this.loadFun();
    // 初始为空的状态
    _this.showAlert = false;
  },
  filters: {
    fixNum(value) {
      return value.toFixed(2);
    },
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy-MM-dd");
    }
  },
  methods: {
    loadFun: function() {
      var _this = this;
      var auth = this.$route.query.auth;
      _this.$http
        .post("/Product/User/findCouponByStatus", {
          parameters: "{}"
        })
        .then(function(res) {
          if (res.data.end == "ok") {
            _this.unit = "元";
            _this.shoeRule = true;
            _this.wrapped[0].num = res.data.lijinNum ? res.data.lijinNum : 0;
            _this.wrapped[1].num = res.data.redBagNum;
            _this.wrapped[2].num = res.data.couponNum;
            _this.wrapped[3].num = res.data.rateNum;

            _this.lijin = res.data.listLijin ? res.data.listLijin : [];

            _this.ratess = res.data.listHongbao;
            _this.hongbao = res.data.listHongbao;
            _this.coupon = res.data.listCoupon;
            _this.rate = res.data.listRate;

            // 调取接口成功之后取对应的数据（资产明细跳转获取对应的数据）
            _this.quancan = _this.$route.query.selected
              ? _this.$route.query.selected
              : 0;
            _this.switchover(_this.quancan);

            if (_this.lijin.length == 0) {
              _this.showAlert = true;
              _this.shoeRule = false;
            }
            // **************************************************
          } else if (res.data.end == "noData") {
            _this.showAlert = true;
            _this.shoeRule = false;
            // 针对资产明细跳转页面携带参数处理（接口中没有数据）
            if (_this.$route.query.selected) {
              _this.quancan = _this.$route.query.selected;
              _this.switchover(_this.quancan);
            }else{
              _this.selected=0;
              _this.text11='礼金券';
            }
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    switchover: function(index) {
      var _this = this;
      _this.selected = index;
      if (_this.selected == 0) {
        _this.unit = "元";
        _this.ratess = _this.lijin;
        _this.shoeRule = true;
        if (_this.lijin.length == 0) {
          _this.showAlert = true;
          _this.shoeRule = false;
          _this.text11 = "礼金券";
        } else {
          _this.showAlert = false;
        }
      } else if (_this.selected == 1) {
        _this.unit = "元";
        _this.ratess = _this.hongbao;
        _this.shoeRule = true;
        if (_this.hongbao.length == 0) {
          _this.showAlert = true;
          _this.shoeRule = false;
          _this.text11 = "现金卡";
        } else {
          _this.showAlert = false;
        }
      } else if (_this.selected == 2) {
        _this.unit = "元";
        _this.ratess = _this.coupon;
        _this.shoeRule = true;
        if (_this.coupon.length == 0) {
          _this.showAlert = true;
          _this.shoeRule = false;
          _this.text11 = "理财券";
        } else {
          _this.showAlert = false;
        }
      } else if (_this.selected == 3) {
        _this.unit = "%";
        _this.ratess = _this.rate;
        _this.shoeRule = true;
        if (_this.rate.length == 0) {
          _this.showAlert = true;
          _this.shoeRule = false;
          _this.text11 = "加息券";
        } else {
          _this.showAlert = false;
        }
      }
    }
  }
};
</script>

<style scoped>
@import url("../../../assets/css/wechat/reset_rem.css");
@import url("../../../assets/css/wechat/money_wrapped.css");
</style>