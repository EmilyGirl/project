<template>
	<div class="active_register">
		<div class="down-app">
			<img src="../../assets/img/app/logo_jicai.png" />
			<span>下载APP领新人见面礼</span>
			<div class="down-btn" @click="down()">立即下载</div>
		</div>
		<div class="app_share-1">
			<img class="app-title" src="../../assets/img/app/jicai_huashengda.png" />
			<img class="app-new" src="../../assets/img/app/title_xinrenzhuce.png" />
		</div>
		<div class="app_share-2">
			<div class="app-content" v-if="show">
				<img class="laixi" src="../../assets/img/app/title_jicailicailibaolaixi.png" />
				<div class="invita"><span>{{ phone }}</span> 喊你领礼包 <span>邀请码{{ datas.inviteId }}</span></div>
				<div class="invita-input">
					<ul>
						<li>
							<img class="img-common" src="../../assets/img/app/icon_number.png" />
							<input type="" name="" v-model="datas.username" id="" maxlength="11" value="" placeholder="输入11位手机号" />
						</li>
						<li>
							<img class="img-common" src="../../assets/img/app/icon_xiaoxi.png" />
							<input class="duanyan" type="" name="" v-model="datas.smsValidateCode" maxlength="6" id="" value="" placeholder="短信验证码" />
							<button @click="codeFun()" :disabled="send">{{ codeMessage }}</button>
						</li>
						<li>
							<img class="img-common" src="../../assets/img/app/icon_Password.png" />
							<input :type="change" v-model="datas.password" name="" id="" maxlength="20" value="" placeholder="设置6-20位数字字母密码" />
							<div class="eye" :class="{changeEye: close}" @click="close=!close,changeEyeFun()"></div>
						</li>
					</ul>
				</div>
				<button class="register_btn" type="submit" @click="submit" :disabled="waitDis">注册领取福利</button>
				<div class="agree">
					<img src="../../assets/img/app/icon_check.png" />
					<span>我已经阅读并同意《集财用户使用协议》</span>
				</div>
			</div>
			<div class="app-content1" v-else>
				<img class="laixi" src="../../assets/img/app/title_zhucechenggong.png" />
				<div class="invita-input">
					<img src="../../assets/img/app/picture_libao.png" />
				</div>
				<div class="register_btn mt" @click="down()">请下载APP或关注下方公众号使用</div>
			</div>
		</div>
		<div class="app_share-3">
			<img class="gaunzhu" src="../../assets/img/app/title_gongzhonghao.png" />
			<div class="qrcode-title">出借项目 随时参与</div>
			<img class="qrcode" src="../../assets/img/app/qrcode.png" />
			<div class="gongz"><input id="copy1"   type="text"   :value='arr[0]' ></div>
			<img class="fuzhi" @click="copyFun('copy1')" src="../../assets/img/app/fuzhi.png" />
			<img class="safy" src="../../assets/img/app/safy.png" />
			<div class="app-bottom">- 市场有风险，出借需谨慎 -</div>
		</div>
		<transition name="fade">
			<div v-if="hidden" id="prompt">{{ message }}</div>
		</transition>
	</div>
</template>

<script>
import reset_rem from "../../assets/js/wechat/reset_rem.js";
export default {
  name: "hello",
  data: function() {
    return {
      phone: this.$route.query.username,
      change: "password",
      close: false,
      show: true,
      message: "",
      hidden: false,
      datas: {
        username: "",
        smsValidateCode: "",
        password: "",
        registChannel: "",
        inviteId: ""
	  },
	   arr:[
    	'集财圈儿',//集财圈
    	],
      codeMessage: "获取验证码",
      send: false,
      wait: 60,
      waitDis: false
    };
  },
  created: function() {
    this.datas.inviteId = this.$route.query.inviteId;
  },
  methods: {
    submit: function() {
      var _this = this;
      _this.waitDis = true;
      setTimeout(function() {
        _this.waitDis = false;
      }, 2000);
      var formData = JSON.stringify(this.datas);
      if (!/^[1][345789][0-9]{9}$/.test(_this.datas.username)) {
        this.message = "手机号码格式错误";
        this.common();
        return;
      }
      if (!/^[0-9]{6}$/.test(_this.datas.smsValidateCode)) {
        this.message = "验证码格式有误";
        this.common();
        return;
      }
      if (!/^\w{6,16}$/.test(_this.datas.password)) {
        this.message = "密码由6-16个字母、数字或下划线组成";
        this.common();
        return;
      }
      if (typeof _this.datas.inviteId == "undefined") {
        _this.datas.inviteId = "";
      }
      _this.$http
        .post("/Product/phoneRegister", {
          parameters: formData
        })
        .then(function(res) {
          if (res.data.end == "ok") {
            _this.show = false;
          } else {
            _this.message = res.data.message;
            _this.common();
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    copyFun: function(copy) {
	  var e = document.getElementById(copy);
      e.select(); // 选择对象
      e.setSelectionRange(0, e.value.length);
      document.execCommand("Copy");
      this.message = "复制成功";
	  this.common();
	    //   this.$refs.copy.select();
      // document.execCommand("Copy");
    },
    common: function() {
      var _this = this;
      _this.hidden = true;
      setTimeout(function() {
        _this.hidden = false;
      }, 2000);
    },
    changeEyeFun: function() {
      if (this.close == false) {
        this.change = "password";
      } else {
        this.change = "text";
      }
    },
    down: function() {
      //系统判断
      var ua = window.navigator.userAgent.toLowerCase();
      var u = navigator.userAgent;
      var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
      var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      if (isIOS) {
        //window.location.href = "fengyelicai://";
        window.location.href = "https://itunes.apple.com/app/id1024955696"; //https://itunes.apple.com/us/app/%E6%9E%AB%E5%8F%B6%E7%90%86%E8%B4%A2-%E9%AB%98%E6%94%B6%E7%9B%8A%E7%90%86%E8%B4%A2%E6%8A%95%E8%B5%84%E5%B9%B3%E5%8F%B0/id1252563418?mt=8
      }
      if (isAndroid) {
        this.downApp();
      }
    },
    codeFun: function() {
      var _this = this;
      if (!/^[1][345789][0-9]{9}$/.test(_this.datas.username)) {
        this.message = "手机号码格式错误";
        this.common();
        return;
      }
      _this.$http
        .post("/Product/sendSMSMessage", {
          parameters: '{"userName":"' + _this.datas.username + '"}'
        })
        .then(function(res) {
          if (res.data.end == "ok") {
            _this.message = res.data.message;
            _this.common();
            _this.time();
          } else {
            _this.send = true;
            setTimeout(function() {
              _this.send = false;
            }, 2000);
            _this.message = res.data.message;
            _this.common();
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    time: function() {
      var _this = this;
      if (_this.wait == 0) {
        _this.send = false;
        _this.codeMessage = "获取验证码";
        _this.wait = 60;
      } else {
        _this.send = true;
        _this.codeMessage = _this.wait + "s后重新发送";
        _this.wait--;
        setTimeout(function() {
          _this.time();
        }, 1000);
      }
    }
  }
};
</script>

<style scoped>
@import url("../../assets/css/wechat/reset_rem.css");
@import url("../../assets/css/wechat/active_register.css");
</style>