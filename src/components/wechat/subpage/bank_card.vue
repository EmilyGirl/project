<template>
	<div class="login">
		<form @submit.prevent="submit">
             <div class="icommon1">
					<label>绑定银行卡</label>
					<label>限额说明</label>
				</div>
			<div class="input-list">
               
				<div class="icommon">
					<label>持卡人</label>
					<input class="password" type="password" v-model="user.oldpwd" maxlength="6" name="" value="" placeholder="请输入持卡人姓名" @keyup="unNull" />
				</div>
				<div class="icommon"><label>身份证号</label><input class="password" type="password" v-model="user.password" maxlength="6" name="" value="" placeholder="请输入身份证号" @keyup="unNull" /></div>
			    <div class="icommon"><label>银行</label><input class="password" type="password" v-model="user.password" maxlength="6" name="" value="" placeholder="请选择银行" @keyup="unNull" /></div>
                <div class="icommon">
					<label>卡号</label>
					<input class="password" type="password" v-model="user.oldpwd" maxlength="6" name="" value="" placeholder="用于出借的银行卡号" @keyup="unNull" />
				</div>
            </div>
                <div class="icommon1">
					<label>绑卡验证</label>
				</div>
			<div class="input-list">
				<div class="icommon"><label>手机号</label><input class="password" type="password" v-model="user.pwd" maxlength="6" name="" value="" placeholder="请输入银行预留手机号" @keyup="unNull" /></div>
				<div class="icommon">
					<label>验证码</label>
					<input class="password" type="password" v-model="user.oldpwd" maxlength="6" name="" value="" placeholder="输入原交易密码" @keyup="unNull" />
					<button class="getMa" @click.prevent="getYzm()" :disabled="findYzm">{{ codeTitle }}</button>
				</div>
			</div>
			<div class="normal">
				*交易密码由6位数字组成
			</div>
			<button :class="{loginBtn:loginBtn}" class="boolBtn" type="submit" :disabled="!loginBtn">确认绑定</button>
		</form>

		<transition name="fade">
			<div class="welfare-close" v-if="close">{{ message }} </div>
		</transition>
	</div>
</template>

<script>
import reset_rem from "../../../assets/js/wechat/reset_rem.js";
export default {
  name: "revise_login_pwd",
  data() {
    return {
      user: {
        oldpwd: "",
        password: "",
        pwd: "",
        phoneId: "",
        username: "",
        type: "0"
      },
      message: "",
      close: false,
      loginBtn: false,
      //tips: false,
      codeTitle: "获取验证码",
      findYzm: false
    };
  },
  created: function() {},
  methods: {
    submit: function() {
      var _this = this;
      var formData = JSON.stringify(_this.user); // 这里是你的表单数据
      //alert(formData);
      if (!/^\d{6}$/.test(_this.user.oldpwd)) {
        _this.close = true;
        _this.message = "密码必须为6位数字";
        _this.loginBtn = false;
        setTimeout(function() {
          _this.close = false;
          _this.loginBtn = true;
        }, 1000);
        return;
      }
      if (!/^\d{6}$/.test(_this.user.password)) {
        _this.close = true;
        _this.message = "密码必须为6位数字";
        _this.loginBtn = false;
        setTimeout(function() {
          _this.close = false;
          _this.loginBtn = true;
        }, 1000);
        return;
      }
      if (_this.user.password != _this.user.pwd) {
        _this.close = true;
        _this.message = "两次密码输入不一致";
        _this.loginBtn = false;
        setTimeout(function() {
          _this.close = false;
          _this.loginBtn = true;
        }, 1000);
        return;
      }
      _this.$http
        .post("Product/User/updatePwd", {
          parameters: formData
        })
        .then(function(res) {
          if (res.data.end == "ok") {
            var auth = res.data.obj.authorization;
            var username = res.data.obj.username;
            _this.$router.push({
              path: "myPage",
              name: "myPage",
              params: {
                auth: auth,
                username: username
              }
            });
          } else {
            _this.close = true;
            _this.message = res.data.message;
            setTimeout(function() {
              _this.close = false;
            }, 1000);
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    unNull: function() {
      if (
        this.user.oldpwd.length == 6 &&
        this.user.password.length == 6 &&
        this.user.pwd.length == 6
      ) {
        this.loginBtn = true;
      } else {
        this.loginBtn = false;
      }
    },
    getYzm: function() {
      var _this = this;
      var username = _this.username;
      /*if(!(/^[1][345789][0-9]{9}$/.test(this.username))) {
					_this.close = true;
					_this.message = '用户名格式有误';
					_this.findYzm = true;
					setTimeout(function() {
						_this.close = false;
						_this.findYzm = false;
					}, 1000);
					return;
				}*/
      _this.$http
        .post("/Product/findPwdSendYzm", {
          parameters:
            '{"username":"' +
            username +
            '","type":"2","apiVersion":"","phoneId":"wx23a7bffb625dc3de"}'
        })
        .then(function(res) {
          if (res.data.end == "ok") {
            var wait = 120;

            function time() {
              if (wait == 0) {
                _this.findYzm = false;
                _this.codeTitle = "获取验证码";
                wait = 120;
              } else {
                _this.findYzm = true;
                _this.codeTitle = wait + "s后获取";
                wait--;
                setTimeout(function() {
                  time();
                }, 1000);
              }
            }
            time();
          } else {
            _this.close = true;
            _this.message = res.data.message;
            setTimeout(function() {
              _this.close = false;
            }, 1000);
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    }
    //			zhuFun: function() {
    //				this.$router.push({
    //					path: 'register',
    //					name: 'register',
    //				});
    //			},
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("../../../assets/css/wechat/jc_reset.css");
@import url("../../../assets/css/wechat/layout.css");
@import url("../../../assets/css/wechat/reset_rem.css");
@import url("../../../assets/css/wechat/bank_card.css");
</style>