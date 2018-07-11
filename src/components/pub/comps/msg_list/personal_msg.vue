<template>
	<div class="personal_msg">
		
		<scroller :on-infinite="infinite" ref="myscroller" v-if="showscroller">
			<div style="height: 4rem;"></div>
			<div v-for="(item, index) in items" class="msg_block" :key="index">
				<div class="title"><span class="block"></span>{{item.title}}</div>
				<div class="time">{{item.insertTime | formatDate}}</div>
				<div class="main" :class="{close:index!==i}" v-html="item.content">
          <!-- {{item.content}} -->
          </div>
				<div class="foot" @click="switchs(index)">
					<img src="../../img/msg_list/arrow_down.png" v-if="index!==i"/>
					<img src="../../img/msg_list/arrow_up.png" v-if="index===i"/>
				</div>
			</div>
		</scroller>
		<div class="no_msg"  v-if="showscroller==false">
			<img src="../../img/msg_list/message_null.png"/>
			<p>您还没有收到个人消息</p>
		</div>
	</div>
</template>

<script>
import reset_rem from "../../../../assets/js/wechat/reset_rem.js";
export default {
  name: "personal_msg",
  data: function() {
    return {
      items: [],
      offset: 0,
      noData: false,
      i: "",
      no: 0,
      showscroller: true
    };
  },
  created() {
    //			this.offset++;
    //			this.loadData();
  },
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy-MM-dd");
      function formatDate(date, fmt) {
        if (/(y+)/.test(fmt)) {
          fmt = fmt.replace(
            RegExp.$1,
            (date.getFullYear() + "").substr(4 - RegExp.$1.length)
          );
        }
        let o = {
          "M+": date.getMonth() + 1,
          "d+": date.getDate(),
          "h+": date.getHours(),
          "m+": date.getMinutes(),
          "s+": date.getSeconds()
        };
        for (let k in o) {
          if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + "";
            fmt = fmt.replace(
              RegExp.$1,
              RegExp.$1.length === 1 ? str : padLeftZero(str)
            );
          }
        }
        return fmt;
      }

      function padLeftZero(str) {
        return ("00" + str).substr(str.length);
      }
    }
  },
  methods: {
    infinite(done) {
      var _this = this;
      if (this.noData) {
        setTimeout(() => {
          this.$refs.myscroller.finishInfinite(2);
        });
        return;
      }
      let self = this; //this指向问题
      //				let start = this.items.length;

      setTimeout(() => {
        console.log(111111111111111);
        //					for(let i = start + 1; i < start + 10; i++) {
        //						self.moveList.push(i)
        //					}
        //					if(start > 30) {
        //						self.noData = "没有更多数据"
        //					}

        self.$refs.myscroller.resize();

        done();
      }, 1200);
      _this.offset++;
      _this.loadData();
    },
    loadData() {
      var _this = this;
      var auth = this.$route.query.auth;
      _this.$http
        .post("/Product/showPersonsalMessage", {
          parameters:
            //'{"currentPage":"' + _this.offset + '","pageSize":"' + 10 + '"}' 
            '{"authorization":"'+ auth +'","currentPage":"'+ 1 +'","pageSize":"'+ 10 + '"}'//
        })
        .then(function(res) {
          if (res.data.end == "ok") {
            _this.items = _this.items.concat(
              res.data.data.personsalMessageList
            );
          }
          if (res.data.end == "noData" && _this.offset == 1) {
            _this.showscroller = false;
          } else if (res.data.end == "noData") {
            _this.noData = true;
          }else{
          	_this.noData = true;
//        	alert(res.data.message);
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    switchs(i) {
      if (this.no == 0) {
        this.i = i;
        this.no++;
      } else {
        this.i = false;
        this.no = 0;
        return;
      }
    }
  }
};
</script>

<style scoped lang="less">
@import url("../../../../assets/css/wechat/reset_rem.css");
.personal_msg {
  font-size: 1.2rem;
  .msg_block {
    margin-top: 1rem;
    background-color: #ffffff;
    padding: 0.8rem 1.8rem;
    .title {
      font-size: 1.4rem;
      line-height: 1.8rem;
      .block {
        width: 0.3rem;
        height: 1.2rem;
        background-color: #2772ff;
        display: inline-block;
        vertical-align: middle;
        margin-right: 0.8rem;
        border-radius: 0.2rem;
      }
    }
    .time {
      color: #999999;
      margin: 0.6rem 0 1rem 0;
    }
    .main {
      color: #999999;
      line-height: 1.8rem;
      width: 100%;
      height: 10;
      transition: all 1s ease-in;
    }
    .close {
      height: 1.8rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .foot {
      text-align: center;
      height: 2rem;
      line-height: 2rem;
      margin-top: 1.2rem;
      border-top: 0.1rem solid #d8d8d8;
      img {
        width: 1rem;
      }
    }
  }
  .no_msg {
    padding-top: 6rem;
    p {
      font-size: 1.5rem;
      color: #888888;
      margin-top: 1.8rem;
      text-align: center;
    }
  }
  
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