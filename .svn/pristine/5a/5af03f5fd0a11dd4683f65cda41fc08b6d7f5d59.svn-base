<template>
	<div class="invite">
		<img class="header" src="../../assets/img/wechat/mine/invite_qrcode_bg.png" alt="">
		<img class="header1" src="../../assets/img/wechat/mine/invite_frame_bg.png" alt="">
        <!-- <div class="share"></div> -->
        <img class="share" src="../../assets/img/wechat/mine/invite_logo.png" alt="">
        <div class="text">集财理财</div>
        <div class="text1">您的分享邀请码是：{{inviteId}}</div>
        <img class="line_invite" src="../../assets/img/wechat/mine/invite_line.png" alt="">
        <div id="cont1" ref="cont1">
        </div>
        <div class="text_invite">扫描即可下载集财理财APP</div>
	</div>
</template>

<script>
import reset_rem from "../../assets/js/wechat/reset_rem.js";
import jquery from "../../assets/js/jquery-1.11.2.min.js";
export default {
  name: "invite_friend1",
  data: function() {
    return {
      inviteId: "",
      inviteURL: ""
    };
  },
  created() {},
  methods: {
    qrcode: function() {
    	var _this=this;
      this.inviteURL = this.$route.query.inviteURL;
      this.inviteId = this.$route.query.inviteId;
      var w = 24;
      var wpx = w + "rem";
      $("#cont1").height(wpx);

      $("#cont1").qrcode({
        text: _this.inviteURL,//this.inviteURL//'https://www.baidu.com/'
        width:24,
        height: 24,
        render: "table"
      });
    }
  },
  mounted: function() {
    //钩子函数，等于vue1.0中的ready
    this.$nextTick(function() {
      require("../../assets/js/jquery.qrcode.min.js");
      this.qrcode(); //此函是必须在引入qrcode之后调用
    });
  }
};
</script>

<style scoped>
@import url("../../assets/css/wechat/reset_rem.css");
.invite {
  position: relative;
}
.invite .header {
  width: 37.5rem;
  height: 66.7rem;
  position: relative;
}
.header1 {
  position: absolute;
  width: 36.1rem;
  height: 46.7rem;
  position: absolute;
  left: 1rem;
  top: 6rem;
}
.share {
  position: absolute;
  width: 4rem;
  height: 3.4rem;
  left: 6rem;
  top: 11rem;
  z-index: 1111;
}
.text {
  position: absolute;
  left: 12rem;
  top: 11rem;
  z-index: 1111;
  font-size: 1.7rem;
  font-weight: bold;
}
.text1 {
  left: 12rem;
  top: 13.5rem;
  position: absolute;
  z-index: 1111;
  color: #999999;
  font-size: 1.1rem;
}
.line_invite {
  width: 25.5rem;
  height: 0.15rem;
  left: 6rem;
  top: 17rem;
  position: absolute;
}
#cont1 {
  width: 24.2rem !important;
  height: 24.2rem !important;
  position: absolute;
  left: 6rem;
  top: 20rem;
  text-align: center;
  /* background: #666; */
}
#cont1 table {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#cont1 table *{
   margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.text_invite {
  font-size: 1.3rem;
  color: #999999;
  position: absolute;
  left: 7rem;
  top: 47rem;
  letter-spacing: 0.5rem;
}
</style>