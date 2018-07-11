// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import config from './api/config'
import vueTap from 'v-tap';
import vuePayKeyboard from './components/wechat/public/keyboard' // 导入组件
Vue.component(vuePayKeyboard.name, vuePayKeyboard) // 支付公共组件// 类似通过 this.$xxx 方式调用插件的 ,是挂载到原型上
import vueChartjs from 'vue-chartjs'
Vue.use(vueChartjs)
import VueAwesomeSwiper from 'vue-awesome-swiper'
import {setCookie,getCookie,delCookie,getoriginal,encryptByDES,decryptByDES,uncompile} from '@/config/common.js'
import Request from '@/config/Request.js'
Vue.use(VueAwesomeSwiper)
Vue.use(vueTap);
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)
Vue.config.productionTip = false

import Toast from '@/components/wechat/public/toast'


// console.log(Toast)
// toast

Vue.prototype.$Toast = Toast;




Vue.prototype.start = function () {
	//判断操作系统
	var u = navigator.userAgent;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
	var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	 //to login
//  if(!source || source == ''){
//      window.location.href="${pageContext.request.contextPath}/Product/huoq/login.jsp";
//      return;
//  } 
    if(isIOS){
        loadURL("fengyelicai://btnLogin");
        return;
    }
    if(isAndroid){
	    JSInterface.toLogin();  
	    return;
    }
	function loadURL(url) {
	    var iFrame;
	    iFrame = document.createElement("iframe");
	    iFrame.setAttribute("src", url);
	    iFrame.setAttribute("style", "display:none;");
	    iFrame.setAttribute("height", "0px");
	    iFrame.setAttribute("width", "0px");
	    iFrame.setAttribute("frameborder", "0");
	    document.body.appendChild(iFrame);
	    iFrame.parentNode.removeChild(iFrame);
	    iFrame = null;
    }
}



//存管返回方法
Vue.prototype.investAlertFun = function () {
	//判断操作系统
	var u = navigator.userAgent;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
	var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	 //to login
//  if(!source || source == ''){
//      window.location.href="${pageContext.request.contextPath}/Product/huoq/login.jsp";
//      return;
//  } 
    if(isIOS){
        loadURL("fengyelicai://DepositpopViewController");
        return;
    }
    if(isAndroid){
	    webviewInstance.endPage();  
	    return;
    }
	function loadURL(url) {
	    var iFrame;
	    iFrame = document.createElement("iframe");
	    iFrame.setAttribute("src", url);
	    iFrame.setAttribute("style", "display:none;");
	    iFrame.setAttribute("height", "0px");
	    iFrame.setAttribute("width", "0px");
	    iFrame.setAttribute("frameborder", "0");
	    document.body.appendChild(iFrame);
	    iFrame.parentNode.removeChild(iFrame);
	    iFrame = null;
    }
}



//理财页
Vue.prototype.investPageFun = function () {
	//判断操作系统
	var u = navigator.userAgent;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
	var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	 //to login
//  if(!source || source == ''){
//      window.location.href="${pageContext.request.contextPath}/Product/huoq/login.jsp";
//      return;
//  } 
    if(isIOS){
        loadURL("fengyelicai://DepositPopToTabbarTwo");
        return;
    }
    if(isAndroid){
	    webviewInstance.toInvest();  
	    return;
    }
	function loadURL(url) {
	    var iFrame;
	    iFrame = document.createElement("iframe");
	    iFrame.setAttribute("src", url);
	    iFrame.setAttribute("style", "display:none;");
	    iFrame.setAttribute("height", "0px");
	    iFrame.setAttribute("width", "0px");
	    iFrame.setAttribute("frameborder", "0");
	    document.body.appendChild(iFrame);
	    iFrame.parentNode.removeChild(iFrame);
	    iFrame = null;
    }
}



Vue.prototype.$encryptByDES  = encryptByDES;
//定期产品
Vue.prototype.investPutFun = function () {
	//判断操作系统
	var u = navigator.userAgent;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
	var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	 //to login
//  if(!source || source == ''){
//      window.location.href="${pageContext.request.contextPath}/Product/huoq/login.jsp";
//      return;
//  } 
    if(isIOS){
        loadURL("fengyelicai://DepositPushToMyInvest");
        return;
    }
    if(isAndroid){
	    webviewInstance.toInvestProduct();  
	    return;
    }
	function loadURL(url) {
	    var iFrame;
	    iFrame = document.createElement("iframe");
	    iFrame.setAttribute("src", url);
	    iFrame.setAttribute("style", "display:none;");
	    iFrame.setAttribute("height", "0px");
	    iFrame.setAttribute("width", "0px");
	    iFrame.setAttribute("frameborder", "0");
	    document.body.appendChild(iFrame);
	    iFrame.parentNode.removeChild(iFrame);
	    iFrame = null;
    }
}

Vue.use(require('vue-wechat-title'))

Vue.prototype.$decryptByDES  = decryptByDES;

  // 最后编译出来就是  cache   getTimestamps 在对象上  get post 在原型上  好处 避免变量污染
Vue.prototype.$http = new Request();
// 解决： 默认值NAN问题 全局注册一个自定义指令 `v-defaultZero` 用法  如果需要  money  加个参数 v-defaultZero:money
Vue.directive('defaultZero', function (el,binding) {
      var html = ''
      if (isNaN(binding.value)) {
        if (binding.arg) {
          html =  '0.00';  
        }else{
          html =  '0'
        }
     }else{
       html = binding.value;
     }
    el.innerHTML = html; 
}) 
/**
 *  作用是：当前进入路由  判断 meta中    noRequireAuth（不需要登录）
 *	在判断 本地有没有auth        去登陆页面  
 */

/*

 router.beforeEach((to, from, next) => {
   if (!to.matched[0].meta.noRequireAuth) {// 判断是否需要登录权限
     if (getCookie(authName)&&getCookie(usernameName)) {// 判断是否登录
       next()
     } else {// 没登录则跳转到登录界面
     		next({
	         path: '/wechat/homepage/login',
	         query: {redirect: window.btoa(location.href)}
	       })
     }
   } else {
     next()
   }
 })

 */




Vue.prototype.$uncompile  = uncompile;

//邀请（需要验证登陆）

Vue.prototype.actShare = function (model) {
	var auth = this.$route.query.auth;
	var username = this.$route.query.username;
	var _this = this;
	_this.dis = true;
	var t1 = setTimeout(function () {
		_this.dis = false;
	},500);
	_this.$http.post('/ShareMsg/getShareMsg', {
			parameters: '{"authorization":"'+ auth +'","username":"'+ username +'","model":"'+ model +'","target":"0"}'
		})
		.then(function(res) {
			if ( res.data.end == 'ok' ) {
				//var source = this.$route.query.source;
				var url = res.data.shareMsgs.inviteURL;
				var inviteId = _this.invit;
				var title = res.data.shareMsgs.title;
				var description = res.data.shareMsgs.description;
				var logoURL = res.data.shareMsgs.logoURL;
		        var u = navigator.userAgent;
				var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
				var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
				
				function loadURL(url) {
				    var iFrame;
				    iFrame = document.createElement("iframe");
				    iFrame.setAttribute("src", url);
				    iFrame.setAttribute("style", "display:none;");
				    iFrame.setAttribute("height", "0px");
				    iFrame.setAttribute("width", "0px");
				    iFrame.setAttribute("frameborder", "0");
				    document.body.appendChild(iFrame);
				    iFrame.parentNode.removeChild(iFrame);
				    iFrame = null;
			    }
				if(isAndroid){
		          	JSInterface.showInviteFriendDialog(inviteId,url,logoURL,title,description);  
		          	return;
		        }
		      	if(isIOS){
					passValue(inviteId,url,title,description,logoURL);
		          	loadURL("fengyelicai://btnInvite");
		            return;
		      	}
			} else {
				if ( res.data.end == 'error' || res.data.end == 'paramError' ) {
					_this.message = res.data.message;
					_this.close = true;
				} else {
					_this.mask = true;
				}
				_this.dis = true;
				window.clearTimeout(t1);
				var t2 = setTimeout(function () {
					_this.dis = false;
					_this.close = false;
				},3000);
			}
		})
		.catch(function(err) {
			console.log(err)
	})
}
Vue.prototype.$setCookie = setCookie;

Vue.prototype.downApp = function () {
	var ua = window.navigator.userAgent.toLowerCase();
	var registChannel = this.$route.query.registChannel;
	if (typeof(registChannel) == 'undefined' || registChannel == "") {
		registChannel = 0;
	}
	window.location.href = "data.sharetest://open";
	this.$http.post('/versionUpdate/versionUpdate',{
		parameters: '{"type":"1","channel":"'+ registChannel +'"}'
		})
		.then(function(res) {
			if(ua.match(/MicroMessenger/i) == 'micromessenger' || ua.match(/QQ/i) == "qq"){
				window.location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.jc.jicai_android&channel=0002160650432d595942&fromcase=60001";/*http://a.app.qq.com/o/simple.jsp?pkgname=com.allyoubank.fengye*/
			 	return false;
			} else {
				window.location.href = "data.sharetest://open";
				if (res.data.end == "ok") {
					window.setTimeout(function() {
		                window.location.href= res.data.obj.path;
		            }, 2000);
				}
			}
		})
		.catch(function(err) {
			console.log(err)
	});
}
Vue.prototype.$getCookie = getCookie;

//邀请（不需要验证登陆）
Vue.prototype.noShare = function (activityId,model,source) {
	var _this = this;
	_this.dis = true;
	var t1 = setTimeout(function () {
		_this.dis = false;
	},500);
	_this.$http.post('/activity/validActivityIsBegain', {
			parameters: '{"activityId":"'+ activityId +'"}'
		})
		.then(function(res) {
			if(res.data.end == 'ok'){
				if (source) {
					_this.$http.post('/ShareMsg/activityShareMsg', {
						parameters: '{"model":"'+ model +'"}'
					})
					.then(function(res) {
						if ( res.data.end == 'ok' ) {
							//var source = this.$route.query.source;
							var url = res.data.shareMsgs.inviteURL;
							var inviteId = 0;
							var title = res.data.shareMsgs.title;
							var description = res.data.shareMsgs.description;
							var logoURL = res.data.shareMsgs.logoURL;
					        var u = navigator.userAgent;
							var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
							var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
							
							function loadURL(url) {
							    var iFrame;
							    iFrame = document.createElement("iframe");
							    iFrame.setAttribute("src", url);
							    iFrame.setAttribute("style", "display:none;");
							    iFrame.setAttribute("height", "0px");
							    iFrame.setAttribute("width", "0px");
							    iFrame.setAttribute("frameborder", "0");
							    document.body.appendChild(iFrame);
							    iFrame.parentNode.removeChild(iFrame);
							    iFrame = null;
						    }
							if(isAndroid){
					          	JSInterface.showInviteFriendDialog2(url,logoURL,title,description);  
					          	return;
					        }
					      	if(isIOS){
								passValue(inviteId,url,title,description,logoURL);
					          	loadURL("fengyelicai://btnInvite2");
					            return;
					      	}
						} else {
							if ( res.data.end == 'error' || res.data.end == 'paramError' ) {
								_this.message = res.data.message;
								_this.close = true;
							} else {
								_this.mask = true;
							}
							_this.dis = true;
							window.clearTimeout(t1);
							var t2 = setTimeout(function () {
								_this.dis = false;
								_this.close = false;
							},3000);
						}
					})
					.catch(function(err) {
						console.log(err)
					})
				} else {
					var ua = window.navigator.userAgent.toLowerCase();
					var u = navigator.userAgent;
					var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
					var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
					var registChannel = _this.$route.query.registChannel;
					if (typeof(registChannel) == 'undefined' || registChannel == "") {
						registChannel = 0;
					}
					if (isIOS) {
						window.location.href = "fengyelicai://";
						window.setTimeout(function() {
			                window.location.href = "https://itunes.apple.com/us/app/%E6%9E%AB%E5%8F%B6%E7%90%86%E8%B4%A2-%E9%AB%98%E6%94%B6%E7%9B%8A%E7%90%86%E8%B4%A2%E6%8A%95%E8%B5%84%E5%B9%B3%E5%8F%B0/id1252563418?mt=8";
			            }, 2000);
					}
					if (isAndroid) {
						window.location.href = "data.sharetest://open";
						_this.$http.post('/versionUpdate/versionUpdate',{
							parameters: '{"type":"1","channel":"'+ registChannel +'"}'
							})
							.then(function(res) {
								if(ua.match(/MicroMessenger/i) == 'micromessenger' || ua.match(/QQ/i) == "qq"){
									window.location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.allyoubank.fengye";
								 	return false;
								} else {
									window.location.href = "data.sharetest://open";
									if (res.data.end == "ok") {
										window.setTimeout(function() {
							                window.location.href= res.data.obj.path;
							            }, 2000);
									}
								}
							})
							.catch(function(err) {
								console.log(err)
						});
					}
				}
			} else if (res.data.end == 'error') { 
				_this.message = res.data.message;
				_this.close = true;
				setTimeout(function () {
					_this.close = false;
				},1000);
			}
		})
		.catch(function(err) {
			console.log(err)
	})	
}
Vue.prototype.$delCookie = delCookie;
Vue.prototype.$getoriginal = getoriginal;
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
