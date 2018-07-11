<template>
	<div class="message_list">
     <ul class="wrapped_title">
			<li v-for="(wrap,index) in wrapped" :class="{'wrap_li':selected==index}" @click="switchover(index)">{{wrap.title}}</li>
			<li class="clear"></li>
		</ul>
    <div class="wrapped_box">
      <div v-if="selected == 0">
        <systemNotice/>
      </div>
      <div v-if="selected == 1">
       <!-- <activityCenter/> -->
        <personalMsg/>
      </div>
    </div>
	</div>
</template>

<script>
import systemNotice from "./system_notice";
import activityCenter from "./activity_center";
import personalMsg from "./personal_msg";
import reset_rem from "../../../../assets/js/wechat/reset_rem.js";
export default {
  name: "message_list",
  components: {
    systemNotice,
    activityCenter,
    personalMsg
  },
  data() {
    return {
      selected: 0,
      wrapped: [
        {
          title: "系统公告"
        },
        {
          title: "个人消息"
        }
      ]
    };
  },
  created() {},
  methods: {
    switchover: function(index) {
      this.selected = index;
    }
  }
};
</script>

<style scoped>
@import url("../../../../assets/css/wechat/reset_rem.css");
.wrapped_title {
  width: 100%;
  height: 4.5rem;
  background: #ffffff;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
}
.wrapped_title li {
  float: left;
  width: 50%;
  height: 4.5rem;
  text-align: center;
  line-height: 4.5rem;
  font-size: 1.5rem;
  color: #000000;
}
.wrap_li {
  color: #2772ff !important;
  border-bottom: 0.2rem solid #2772ff;
}
</style>