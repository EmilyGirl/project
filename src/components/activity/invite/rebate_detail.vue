<template>
<div class="rebate_detail">
	<div class="head">
		<span> 时间</span>
		<span> 奖励</span>
	</div>
	 <scroller :on-infinite="infinite" ref="myscroller" v-if="showscroller">
		 <div style="height: 3rem;"></div>
	<ul>
		<li v-for="(list,index) of moveList">
			<span>{{dateFtt("yyyy-MM-dd&nbsp;hh:mm:ss",list.time)}}</span>
			<!-- <span>{{list.status}}</span> -->
			<span :class="(list.status == '0'  ? 'unissued' :' alreadyIssued')">{{list.earnMoney/100}}元{{list.status=='1'?'&nbsp;(已发放)':''}}</span>
		</li>
	</ul>
		</scroller>
	</div>
</template>



<style>
.loading-layer {
  margin: 2rem 0;
  height: 3rem !important;
}
/*._v-container {
    height: 100% !important; 
    position: absolute !important; 
}*/
._v-container > ._v-content > .loading-layer .spinner-holder .spinner,
._v-container > ._v-content > .pull-to-refresh-layer .spinner-holder .spinner {
  width: 2rem !important;
  height: 2rem !important;
}
.no-data-text {
  font-size: 1.5rem;
}
</style>





<script>
import reset_rem from "../../../assets/js/wechat/reset_rem.js";
export default {
  name: "personal_msg",
  data: function() {
    return {
      offset: 0,
      noData: false,
      moveList: [],
      showscroller: true,
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
        .post("/Product/User/findInviteEarnList", {
          parameters: JSON.stringify({
            currentPage:  _this.offset,
            // beInvitedId: 409863,
            beInvitedId: this.$route.query.id,
             authorization: this.$route.query.auth,
             pageSize:20
          })
        })
        .then(function(res) {
          if (res.data.end == "ok") {
            _this.moveList = _this.moveList.concat(res.data.data.list);
            _this.end = res.data.end;
         
          }
          if (res.data.end == "noData" && _this.offset == 1) {
            _this.showscroller = false;
          } else if (res.data.end == "noData") {
            _this.noData = true;
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    dateFtt: function(fmt, time) {
      //author: meizz
      var date = new Date(time);
      var o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        S: date.getMilliseconds() //毫秒
      };
      if (/(y+)/.test(fmt))
        fmt = fmt.replace(
          RegExp.$1,
          (date.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
      for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
          fmt = fmt.replace(
            RegExp.$1,
            RegExp.$1.length == 1
              ? o[k]
              : ("00" + o[k]).substr(("" + o[k]).length)
          );
      return fmt;
    },
  
  }
};
</script>

<style lang= 'less' scoped>
@import url("./../../../assets/css/wechat/reset_rem.css");
.rebate_detail {
  line-height: inherit;
  background-color: #fff;
      min-height: 81rem;
      /*padding-top: 4rem;*/
  .head {
  	position: fixed;
  	top: 0;
  	left: 0;
    width: 100%;
    background-color: #f5f5f5;
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
    font-size: 1.6rem;
    align-items: center;
    height: 4.8rem;
    box-sizing: border-box;
    z-index: 10;
  }
  ul {
  	
    padding: 1.7rem;
    background-color: #fff;
  }
  ul li {
    border-bottom: 1px solid #e0e0e0;
    display: flex;
    justify-content: space-between;
   
    align-items: center;
    height: 4.2rem;
    font-size: 1.4rem;
    letter-spacing: 2px;
  }
  .unissued {
    color: #ff5135;
  }
  .alreadyIssued {
    color: #7fd9a3;
  }
}
</style>