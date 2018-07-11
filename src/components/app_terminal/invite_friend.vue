<template>
	<div class="invite">
		<img class="header" src="../../assets/img/wechat/mine/invite_bg_top.png" alt="">
		<img class="header1" src="../../assets/img/wechat/mine/invite_bg_bot.png" alt="">
		<img class="reward" src="../../assets/img/wechat/mine/invite_number.png" alt="">

		<div class="reward1">
			<div class="reward_left">
				<div class="reward_text">{{friend}}</div>
				<div class="reward_doc">已邀请好友数(人)</div>
			</div>
			<div class="line"></div>
			<div class="reward_right">
				<div class="reward_text">{{money}}</div>
				<div class="reward_doc">累计奖励(元)</div>
			</div>
			<div class="total" @click="total">查看奖励明细 >></div>
		</div>

		<div class="reward2">
			<div class="lift_title">积分好礼</div>
			<div class="lift_text">邀请人邀请好友注册实名认证成功可获得2000积分奖励<br>被邀请人可获得3000积分奖励</div>
			<div class="reward11">
				<div class="reward_left">
					<img class="reward_img" src="../../assets/img/wechat/mine/2000.png" alt="">
					<div class="reward_doc">邀请人奖励</div>
				</div>
				<div class="reward_right">
					<img class="reward_img" src="../../assets/img/wechat/mine/3000.png" alt="">
					<div class="reward_doc">被邀请人奖励</div>
				</div>
				<div class="liji"  @click="invita">立即邀请</div>
			</div>
		</div>

		<div class="reward3">
			<div class="lift_title">出借任务奖</div>
			<div class="lift_text">根据好友出借项目的金额邀请人可获得对应的奖励<br> <span style="font-size:0.9rem">(现金奖励将在下月10号统一发放邀请奖励关系将在好友注册30天后自动解除)</span></div>
			<div class="reward22">
				<img class="renwu" src="../../assets/img/wechat/mine/invite_integration_rule.png" alt="">
				<div class="liji1"  @click="invita">立即邀请</div>
			</div>
		</div>

		<div class="reward4">
			<div class="lift_title">两种邀请方式</div>
			<div class="reward44">
				<div class="reward_left">
					<img @click="imgclick" class="reward_img1" src="../../assets/img/wechat/mine/invite_qrcode.png" alt="">
					<div class="reward_doc1">让好友扫描您的二维码<br> 进行出借
					</div>
				</div>
				<div class="reward_right">
					<img  @click="invita" class="reward_img1" src="../../assets/img/wechat/mine/invite-share.png" alt="">
					<div class="reward_doc1">将邀请页面分享并发送给<br> 好友注册并出借
					</div>
				</div>
			</div>
		</div>

		<div class="reward5">活 动 最 终 解 释 权 归 集 财 理 财 所 有<br>市 场 有 风 险 出 借 需 谨 慎</div>

		<div class="reward6" @click="invita">立即分享</div>
	</div>
</template>

<script>
import reset_rem from "../../assets/js/wechat/reset_rem.js";
export default {
  name: "safety1",
  data: function() {
    return {
      invit: "",
      money: "",
      qrcode: "",
      friend: ""
    };
  },
  created() {
       var auth = this.$route.query.auth;
       var username = this.$route.query.username;
     // var username = "17326020136";
    var _this = this;
    _this.$http
      .post("/Product/User/showMyInvitation", {
        parameters:
             '{"authorization":"' + auth + '","username":"' + username + '"}'
           //'{"username":"' + username + '"}'
      })
      .then(function(res) {
        if (res.data.end == "ok") {
          _this.invit = res.data.inviteId;
          _this.money = res.data.inviteEarn;
          _this.friend = res.data.inviteNum;
          _this.qrcode = res.data.inviteURL;
          _this.newUser = res.data.coefficient.newUser;
          _this.month = res.data.coefficient.month;
          _this.half_quarter = res.data.coefficient.half_quarter;
          _this.double_month = res.data.coefficient.double_month;
          _this.quarter = res.data.coefficient.quarter;
          _this.double_quarter = res.data.coefficient.double_quarter;
        } else {
          _this.mask = true;
        }
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  mounted: function() {
    //钩子函数，等于vue1.0中的ready
    //			this.$nextTick(function() {
    //				require('../../assets/js/jquery.qrcode.min.js');
    //			})
  },
  methods: {
    invita: function() {
      var model = 1;
      this.actShare(model);
    },
    total: function() {
      //   this.$router.push({name:'reward_detail',query:{source:this.$route.query.source,username:this.$route.query.username}});
      this.$router.push({
        name: "reward_detail",
        query: {
          source: this.$route.query.source,
          auth: this.$route.query.auth,
          username: this.$route.query.username
        }
      });
    },
    imgclick: function() {
      this.$router.push({
        name: "invite_friend1",
        query: { inviteURL: this.qrcode, inviteId: this.invit }
      });
    }
  }
};
</script>

<style scoped>
@import url("../../assets/css/wechat/reset_rem.css");
@import url("../../assets/css/wechat/invite_friend.css");
</style>