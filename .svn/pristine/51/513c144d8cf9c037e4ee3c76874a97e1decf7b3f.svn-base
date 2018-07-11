<template>
	<div class="product-detail">
		<div class="bang-mask" v-if="bang">
			<div class="bang-content">
				<p class="bang-title">提示</p>
				<p class="bang-common">您尚未绑定银行卡</p>
				<p class="bang-common">绑定完成后即可充值出借哦~</p>
				<div class="bangBtn clearfix">
					<span class="fl firstBtn" @click="bang = !bang">取消</span>
					<router-link class="fr secondBtn" :to="{path:'./bind_bank',query:{productId:this.$route.query.productId}}">前往绑卡</router-link>
				</div>
			</div>
		</div>
		<div class="bang-mask" v-if="set">
			<div class="bang-content">
				<p class="bang-title">提示</p>
				<p class="bang-common">您尚未设置交易密码</p>
				<p class="bang-common">设置完成后即可充值出借哦~</p>
				<div class="bangBtn clearfix">
					<span class="fl firstBtn" @click="set = !set">取消</span>
					<router-link class="fr secondBtn" :to="{path:'./personal_data'}">前往设置</router-link>
				</div>
			</div>
		</div>
		<div class="product-header">
			<div class="title">{{ title }}</div>
			<p class="title-top">预计年化收益率</p>
			<p class="interest">
				<span class="yuan">{{ baseEarnings | fixNum }}</span><var class="yuan-mum">%</var>
				<span class="jiali" v-if="isJiangLi == '1'">+{{ Number(jiangLiEarnings) | fixNum }}<var class="jiali-num">%</var></span>
			</p>

			<div v-if="qxType == 4" class="info-title">
				<span>新手专享</span>
				<span>仅此一次</span>
			</div>
      <div v-else class="info-title">
        <span>多重保障</span>
        <span>名企背景</span>
      </div>


			<router-link class="detail" :to="{path: './project_details',query:{productId:this.$route.query.productId}}">项目详情 ></router-link>
		</div>
		<div class="progress">
			<span class="schedule schedule1" v-if="qxType != 99"><span class="progress-width"><var class="jindu-bg" :style="'width:'+parseInt(wcjd*100)+'%'"></var></span></span>
			<div class="progress-info clearfix">
				<div class="fl">
					已投{{ parseInt(wcjd*100) }}%
				</div>
				<div class="fr">
					剩余可投{{ parseInt(leftCopies/100) }}元
				</div>
			</div>
		</div>
		<div class="calculator">
			<div class="calculator-content">
				<div class="calculator-common border clearfix">
					<span class="fl">金额</span>
					<input class="fr" type="number" name="" v-model="message" id="" value="" oninput="if(value.length>10)value=value.slice(0,10)" :placeholder="parseInt(atleastMoney/100) + '元起投'" />
				</div>
				<div class="calculator-common clearfix">
					<var class="fl">预期收益</var>
					<p class="fr">{{ message*(baseEarnings + Number(jiangLiEarnings))*tzqx/(365*100) | fixNum }}元</p>
				</div>
			</div>
		</div>
		<div class="algorithm">
			<p>起息时间：{{daytime}}开始计息</p>
			<p>项目期限：{{ lcqx }}天 </p>
			<p>回款方式：到期还本付息</p>
		</div>
		<div class="ment">
			<img v-if="lock" @click="lock=!lock,unlock=!unlock" src="../../../assets/img/wechat/product/lock.png" /><img v-if="unlock" @click="unlock=!unlock,lock=!lock" src="../../../assets/img/wechat/product/unlock.png" />购买即同意
			<router-link :to="{path: '/app_terminal/use_agreement',query:{productId:this.$route.query.productId}}">服务协议</router-link> 与
			<router-link :to="{path: './project_details',query:{productId:this.$route.query.productId}}">项目详情</router-link>
		    <transition name="fade">
			<img  v-if="close" style="width: 13.2rem;
    height: 2.9rem;
    position: absolute;
    top: -3rem;
    left: 0px;" src="../../../assets/img/wechat/mine/tip_agreement.png" alt="">
	    </transition>
		</div>
		<transition name="fade">
			<div v-if="close2" style="width: 83%" class="prompt">{{content}}</div>
		</transition>
		<button class="btnBottom" v-if="parseInt(leftCopies/100) > 0" @click="buyFun()">立即出借</button>
		<button class="btnBottom finish" v-if="parseInt(leftCopies/100) == 0" disabled>已结束</button>
		<!--<vue-public-alert></vue-public-alert>-->
	</div>
</template>

<script>
import reset_rem from "../../../assets/js/wechat/reset_rem.js";
// import vuePublicAlert from "../../../assets/js/wechat/public-alert.js";
export default {
  name: "hello",
  data: function() {
    return {
      showimg: false,
      daytime: "",
      qxType: "",
      wcjd: "",
      baseEarnings: 0,
      jiangLiEarnings: "",
      leftCopies: "",
      title: "",
      atleastMoney: "",
      message: "",
      lcqx: "",
      lock: false,
      unlock: true,
      close: false,
      close2: false,
      bang: false,
      isBindBank: "",
      isPayPwd: "",
      productId: "",
      noLogin: "",
      set: false,
      isJiangLi: "",
      tzqx: "",
      isHistory: ""
    };
  },
  filters: {
    fixNum(value) {
      var num2 = value.toFixed(3);
      return num2.substring(0, num2.lastIndexOf(".") + 3);
    }
  },
  created: function() {
    this.loadData();
  },
  methods: {
    loadData: function() {
      this.productId = this.$route.query.productId;
      var _this = this;
      _this.$http
        .post("/Product/getProductById", {
          parameters: '{"productId":"' + _this.productId + '"}'
        })
        .then(function(res) {
          if (res.data.end == "ok") {
            _this.daytime = Number(res.data.obj.calcInterestWay)
              ? "次日"
              : "今日";
            _this.qxType = res.data.obj.qxType;
            _this.wcjd = res.data.obj.wcjd;
            _this.baseEarnings = res.data.obj.baseEarnings;
            _this.jiangLiEarnings = res.data.obj.jiangLiEarnings;
            _this.leftCopies = res.data.obj.leftCopies;
            _this.title = res.data.obj.title;
            _this.atleastMoney = res.data.obj.atleastMoney;
            _this.lcqx = res.data.obj.lcqx;
            _this.isJiangLi = res.data.obj.isJiangLi;
            _this.tzqx = res.data.obj.tzqx;
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    buyFun: function() {
      var _this = this;
      if (_this.unlock == true) {
        _this.close = true;
        setTimeout(function() {
          _this.close = false;
        }, 2000);
      } else if(_this.message == ''){
          _this.content = '请输入出借金额'
           _this.close2 = true;
        setTimeout(function() {
          _this.close2 = false;
        }, 2000);


      } else if(_this.message%parseInt(_this.atleastMoney/100)>0){
          _this.content = '出借金额必须是'+parseInt(_this.atleastMoney/100)+'的整数倍'
        _this.close2 = true;
        setTimeout(function() {
          _this.close2 = false;
        }, 2000);
      } else {
        _this.$http
          .post("/Product/User/showMyAccountNew", {
            parameters: "{}" //'+ auth +'
          })
          .then(function(res) {
            if (res.data.end == "ok") {
              _this.isBindBank = res.data.obj.isBindBank;
              _this.isPayPwd = res.data.obj.isPayPwd;
              _this.isHistory = res.data.obj.isHistory;
              if (_this.isBindBank == "0") {
                _this.bang = true;
              } else if (_this.isPayPwd == "no" && _this.isHistory == "0") {
                _this.set = true;
              } else if (_this.isBindBank == "1") {
                _this.$router.push({
                  name: "go_invest",
                  query: {
                    productId: _this.productId,
                    moneyData: _this.message
                  }
                });
              }
            }
          })
          .catch(function(err) {
            console.log(err);
          });
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../../../assets/css/wechat/reset_rem.css");
@import url("../../../assets/css/wechat/product_detail.less");
</style>