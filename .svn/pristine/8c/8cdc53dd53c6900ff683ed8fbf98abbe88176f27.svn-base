<template>
	<div class="my_friend">
		<scroller :on-infinite="infinite" ref="myscroller" v-if="showscroller">
			<div style="height: 1px;"></div>
			<ul class="dataList">
				<li v-for="list in lists">
					<div style="float:left;width:80%;line-height:3rem">
						<span>{{list.note}}<br>
					   {{getDate(list.insertTime)}}</span>
					</div>
					<div style="float:left;width:16%;color: #FF7300;font-size:1.8rem;text-align: right;">
						<span>
							+{{list.coin}}
						</span></div>
						
					
				</li>
			</ul>
		</scroller>
		<div style='padding: 6rem;font-size: 1.5rem;line-height: normal; color: #888888;text-align:center' v-if="showscroller==false">
			<img class="noimg" src="../../../assets/img/invite/record_full.png" >
			<p style="font-size: 1.6rem;margin-top:1.8rem;color: #666666;">您还没有积分哦</p>
		</div>
	</div>
</template>

<script>
import reset_rem from "../../../assets/js/wechat/reset_rem.js";
export default {
  name: "my_friend1",
  props: {
			auth: {
				type: String
			},
		},
  data: function() {
    return {
      offset: 0,
      noData: false,
      lists: [],
      showscroller: true
    };
  },
  created() {
    console.log(this.auth);
  },
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
        this.add0(mm) +
        ":" +
        this.add0(s)
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
      setTimeout(() => {
        self.$refs.myscroller.resize();
        done();
      }, 1200);

      this.offset++;
      this.loadData();
    },
    loadData() {
      var _this = this;
      _this.$http
        .post("/Product/User/findMCoinRecordList", {
          parameters:
            // "authorization":"' + _this.auth + '",
            '{"authorization":"' +
            _this.auth +
            '","currentPage":"' +
            _this.offset +
            '","pageSize":"' +
            10 +
            '","coinType":"2"}'
        })
        .then(function(res) {
          if (res.data.end == "ok") {
            _this.lists = _this.lists.concat(res.data.list);
          }else if (res.data.end == "noData" && _this.offset == 1) {
            _this.showscroller = false;
          } else if (res.data.end == "noData") {
            _this.noData = true;
          }else{
              _this.showscroller = false;
          }
        })
        .catch(function(err) {
          console.log(err);
           _this.showscroller = false;
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

<style scoped lang="less">
@import url("../../../assets/css/wechat/reset_rem.css");
.my_friend {
  font-size: 2rem;
  overflow: hidden;
  .dataList {
    background: #ffffff;
    // padding-top: 2rem;
    padding-left: 2.4rem;
    padding-bottom: 2rem;
    font-size: 1.4rem;
    line-height: 6rem;
    color: #202020;
    padding-right: 2.4rem;
    li {
      border-bottom: 0.1rem solid #e0e0e0;
      overflow: hidden;
      padding-top: 1.4rem;
      padding-bottom: 1rem;
      > span:first-of-type {
        margin-right: 4.2rem;
      }
      a {
        float: right;
        .next {
          width: 1.4rem;
          margin-right: 2rem;
        }
      }
    }
  }
  .noimg {
    width: 100%;
  }
}
</style>