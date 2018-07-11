<template>
  <div class="system">
   <scroller :on-infinite="infinite" ref="myscroller" v-if="showscroller">
  <div style="height: 4rem;"></div>
	<div class="systemnotice"  v-for="(item, index) in moveList" >
    <div class="times">
        <span class="time">{{getDate(item.insertTime)}}</span>
    </div>
    <div class="notice">
        <div class="notice1">
            <div class="notice_title">
                <span class="title_line"></span>{{item.title}}
            </div>
            <div class="notice_text" style="">
              {{item.titleUrl}}
              </div>
            <div class="notice_line1"></div>
            <div class="notice_detail" @click="todetail(item.noticeId)">
                <span class="notice_detail1">查看详情</span>
                 <span class="notice_detail2"></span>
                 <div class="clear"></div>
            </div>
        </div>
    </div>
    </div>
</scroller>
  </div>
</template>

<script>
import reset_rem from "../../../../assets/js/wechat/reset_rem.js";
export default {
  name: "personal_msg",
  data: function() {
    return {
      offset: 0,
      noData: false,
      moveList: [],
      showscroller:true
    };
  },
  created() {},
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
      return (
        y +
        "-" +
        this.add0(m) +
        "-" +
        this.add0(d) +
        "  " +
        this.add0(h) +
        ":" +
        this.add0(mm)
      );
    },
    infinite(done) {
      if (this.noData) {
        setTimeout(() => {
          this.$refs.myscroller.finishInfinite(2);
        });
        return;
      }
      let self = this; //this指向问题
      let start = this.moveList.length;
      setTimeout(() => {
        self.$refs.myscroller.resize();
        done();
      }, 1500);

      this.offset++;
      this.loadData();
    },
    loadData() {
      var _this = this;
      _this.$http
        .post("/Product/showNotice", {
          parameters:
            '{"currentPage":"' +
            _this.offset +
            '","pageSize":"' +
            10 +
            '","type":"3"}'
        })
        .then(function(res) {
          if (res.data.end == "ok") {
            _this.moveList = _this.moveList.concat(res.data.list);
            _this.end = res.data.end;
            console.log(_this.moveList);
          }
          if(res.data.end == "noData"&&_this.offset==1){
           _this.showscroller=false;
          }
          else if (res.data.end == "noData") {
            _this.noData = true;
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    todetail(index) {
      let _this = this;
      _this.$router.push({
        name: "announcement",
        query: {
          noticeId: index
        }
      });
    }
  }
};
</script>

<style scoped>
@import url("../../../../assets/css/wechat/reset_rem.css");

.systemnotice {
  width: 100%;
  height: auto;
  margin: 1rem 0;
}
.systemnotice .times {
  text-align: center;
  margin: 1rem 0;
}
.systemnotice .time {
  width: 14.1rem;
  height: 2.05rem;
  background: #cccccc;
  border-radius: 100px;
  font-size: 1.2rem;
  color: #ffffff;
  text-align: center;
  line-height: 2.05rem;
  padding: 0.2rem 2rem;
}
.systemnotice .notice {
  width: 90%;
  height: auto;
  background: #ffffff;
  margin: 0 auto;
  padding: 0.8rem 1.8rem;
}
.systemnotice .notice1 {
  width: 96%;
}
.systemnotice .notice_title {
  vertical-align: middle;
  color: #444444;
  font-size: 1.4rem;
  margin-bottom: 1.2rem;
}
.systemnotice .title_line {
  width: 0.3rem;
  height: 1.2rem;
  background: url(../../img/msg_list/blue_box.png) no-repeat center;
  background-size: cover;
  display: inline-block;
  margin-right: 0.8rem;
}
.systemnotice .notice_text {
  width: 100%;
  height: 11.6rem;
  color: #999999;
  font-size: 1.2rem;
  line-height: 2.2rem;
  margin-bottom: 1.4rem;
}
.notice_line1 {
  width: 100%;
  height: 1px;
  background: #d8d8d8;
}
.notice_detail {
  width: 100%;
  height: 3.4rem;
  line-height: 3.4rem;
  font-size: 1.3rem;
  color: #333333;
  vertical-align: middle;
}
.notice_detail1 {
  float: left;
}
.notice_detail2 {
  float: right;
  width: 0.9rem;
  height: 1.4rem;
  background: url(../../img/msg_list/arrow_right.png) no-repeat center;
  background-size: cover;
  margin-top: 0.8rem;
}
.clear {
  clear: both;
}
</style>
<style>
	.loading-layer{
		margin: 2rem 0;
		height: 3rem !important;
	}
	._v-container>._v-content>.loading-layer .spinner-holder .spinner, ._v-container>._v-content>.pull-to-refresh-layer .spinner-holder .spinner{
		width: 2rem !important;
		height: 2rem !important;
	}
	.no-data-text{
		font-size: 1.5rem;
	}
</style>
