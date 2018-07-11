<template>
	<div class="safeannouncement">
		<h3 style="text-align:center;font-weight:bold;font-size:1.4rem">
            <span style="width:4rem;height:1.8rem;color:#2772FF;padding:0.2rem 1rem;border:1px solid #2772FF;border-radius: 5rem;font-size:1.4rem;">公告</span>
			{{noticecontent.title}}
		</h3>
		<div class="time">{{noticecontent.insertTime}}</div>
		<div class="line"></div>
		<div class="safe1" v-html="noticecontent.content">
		<!-- {{noticecontent.content}} -->

		</div>
		<div class="footer">集财理财<br/>{{noticecontent.insertTime}}</div>
	</div>
</template> 

<script>
import reset_rem from "../../../../assets/js/wechat/reset_rem.js";
export default {
  name: "announcement",
  data() {
    return {
      noticecontent:{
        insertTime:'',
        content:'',
      }
    };
  },
  created:function(){
     var _this = this;
     var noticeId ;
     if (_this.$route.query.noticeId.indexOf("?") > 0 ) {
        
         noticeId = _this.$route.query.noticeId.split('?')[0]
     }else{
         noticeId = _this.$route.query.noticeId
     }
      _this.$http
        .post("/Product/showContent", {
          parameters:
            '{"noticeId":"' + noticeId + '"}'
        })
        .then(function(res) {
          if (res.data.end == "ok") {
              _this.noticecontent=res.data.data.notice;
          }
         
        })
        .catch(function(err) {
          console.log(err);
        });
  },
  method:{

  }
};
</script>

<style >
@import url("../../../../assets/css/wechat/reset_rem.css");
html{
    background: #f5f5f5!important;
}
body{
    margin: 0;
    padding: 0;
    box-sizing: border-box
}
.safeannouncement {
  padding: 2rem 1rem 5rem 1rem;;
  margin-top: 1rem;
  background: #fff;
}

.safeannouncement .time {
  font-size: 1rem;
  color: #999;
  text-align: center;
  margin-top: 2rem;
}

.safeannouncement .safe1 {
  padding: 2rem;
  font-size: 1.2rem;
  line-height: 3rem;
  word-wrap:break-word ;
 
}

.safeannouncement .line {
  width: 80%;
  height: 1px;
  padding: 0 2rem;
  background: #ccc;
  margin: 0 auto;
  margin-top: 1.5rem;
}

.safeannouncement .footer {
  font-size: 1.6rem;
  float: right;
  text-align: center;
  margin-right: 3.5rem;
  line-height: 2rem;
  margin-bottom: 3rem;
}
</style>