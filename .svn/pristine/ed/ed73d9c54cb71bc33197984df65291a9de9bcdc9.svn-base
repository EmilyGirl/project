<template>
<div class="dispose">
    <img class="dispose_img" src="../../../assets/img/wechat/mine/disposing.png" alt="">
    <div class="chuli">{{text}}</div>
    <div class="information">提现申请已提交成功，将会在下一工作日处理到账。</div>
    <div class="null_go1" @click="gomy">完成</div>
</div>
</template>

<script>
import reset_rem from "../../../assets/js/wechat/reset_rem.js";
export default {
  data() {
    return {
      text: "提现处理中"
    };
  },
  created: function() {},
  methods: {
    gomy: function() {
      var _this = this;
      _this.$router.push({ path: '/wechat/homepage/mine' });
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../../../assets/css/wechat/reset_rem.css");
@import url("../../../assets/css/wechat/dispose.less");
</style>