<template>
	<div class="message_list">
		<div class="banner">
			<div class="center">
                <img src="../../../assets/img/invite/coin.png" alt="">
                <p style="margin-top:1.4rem">可用积分</p>
				<p class="all_money">{{totalPoint}}</p>
				
			</div>
		</div>
		<ul class="wrapped_title">
			<li v-for="(wrap,index) in wrapped" :class="{'wrap_li':selected==index}" @click="switchover(index)">{{wrap.title}}</li>
			<!--<li class="clear"></li>-->
		</ul>
		<div class="wrapped_box">
			<div v-if="selected == 0">
				<myFriend :auth='auth'></myFriend>
			</div>
			<div v-if="selected == 1">
				 <rewardRecord  :auth='auth'> </rewardRecord>
			</div>
		</div>
	</div>
</template>

<script>
import myFriend from "../../activity/intergate/my_friend";
import rewardRecord from "../../activity/intergate/reward_record";
import reset_rem from "../../../assets/js/wechat/reset_rem.js";
export default {
  name: "message_list",
  components: {
    myFriend,
    rewardRecord
  },
  data() {
    return {
      selected: 0,
      totalPoint: "",
      auth: "",
      wrapped: [
        {
          title: "积分明细"
        },
        {
          title: "兑换记录"
        }
      ],
      data: ""
    };
  },
  created() {
    // if (!this.$route.query.auth && /jicai/i.test(window.navigator.userAgent)) {
    //   // 在 APP内
    //   this.start();
    // }
    this.auth = this.$route.query.auth ? this.$route.query.auth : "";
    this.loadData();
  },
  methods: {
    switchover: function(index) {
      this.selected = index;
    },
    loadData() {
      var _this = this;
      _this.$http
        .post("/Product/User/findMCoinRecordList", {
          parameters: '{"authorization":"' + _this.auth + '"}'
        })
        .then(function(res) {
        //  console.log(res);
          // if (res.data.totalPoint) {
          _this.totalPoint = res.data.totalPoint;
          //							console.log(_this.data);
          // } else {
          //   _this.$Toast(res.data.message);
          // }
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped lang="less">
@import url("../../../assets/css/wechat/reset_rem.css");
.message_list {
  overflow: hidden;
  .banner {
    width: 100%;
    height: 17rem;
    // background-image: linear-gradient(0deg, #FF815A 0%, #FF6767 100%);
    font-size: 1.2rem;
    background: #fff;
    line-height: normal;
    color: #000;
    padding-top: 1.8rem;
    .center {
      width: 100%;
      // height: 11.3rem;
      display: flex;
      justify-content: center;
      align-content: center;
      flex-wrap: wrap;
      align-items: center;
      p {
        width: 100%;
        text-align: center;
        color: #333333;
        font-size: 1.6rem;
      }
      .all_money {
        font-size: 1.8rem;
        color: #ff7500;
        margin-top: 0.4rem;
      }
      img {
        width: 8rem;
      }
    }
    .bot {
      display: flex;
      justify-content: space-around;
      div {
        text-align: center;
        margin: 0 4rem;
      }
      .interval {
        font-size: 2rem;
        opacity: 0.2;
        margin: 0;
      }
      .momey {
        font-size: 1.6rem;
      }
    }
  }
  .wrapped_title {
    width: 100%;
    height: 2.9rem;
    background: #ffffff;
    // border-top: 1px solid #ebebeb;
    border-bottom: 1px solid #e2dede;
    z-index: 11;
    li {
      float: left;
      width: 31%;
      margin: 0 9%;
      height: 2.9rem;
      text-align: center;
      line-height: 2.9rem;
      font-size: 1.5rem;
      color: #333333;
      font-weight: bold;
    }
    .wrap_li {
      color: #ffffff;
      background: #ff7300;
      border-radius: 26px 26px 0 0;
    }
  }
  .wrapped_box {
  }
}
</style>
<style>
._v-container {
  position: relative !important;
  height: 67.6vh !important;
}
.loading-layer {
  margin: 2rem 0;
  height: 3rem !important;
}
._v-container > ._v-content > .loading-layer .spinner-holder .spinner,
._v-container > ._v-content > .pull-to-refresh-layer .spinner-holder .spinner {
  width: 2rem !important;
  height: 2rem !important;
}
.no-data-text {
  font-size: 1.5rem;
}
</style>