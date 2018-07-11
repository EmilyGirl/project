
import CryptoJS from 'crypto-js';
import MobileDetect from 'mobile-detect'; //获取 手机西型号
import './weixinJsSdk.js'

// console.log('测试算法:'+decryptByDES(encryptByDES('dsd','sadhklfoigsfanez'),'sadhklfoigsfanez'))
// DES加密 Pkcs7填充方式  
// console.log('生成加密文:'+encryptByDES('f6698b14a7c04456bfc587195331cd83',getoriginal('abcdefga5565bcdefg12')))
	export function encryptByDES(word,key){
				var keyHex = CryptoJS.enc.Utf8.parse(key);
				var encrypted = CryptoJS.AES.encrypt(word, keyHex, {
					mode: CryptoJS.mode.ECB,
					padding: CryptoJS.pad.Pkcs7
				});
				return encrypted.toString();
			}

  
	//DES解密  
	export function decryptByDES(word, key){
				var keyHex = CryptoJS.enc.Utf8.parse(key);
				// direct decrypt ciphertext
				var decrypted = CryptoJS.AES.decrypt({
					ciphertext: CryptoJS.enc.Base64.parse(word)
				}, keyHex, {
					mode: CryptoJS.mode.ECB,
					padding: CryptoJS.pad.Pkcs7
				});
				return decrypted.toString(CryptoJS.enc.Utf8);
			} 

   // 获取keyx
	export function getoriginal(str){
			var str1 = '123dsmkml213',str2="12sdbhsd616",str3="415sdsrd6";
			 var leng = Math.floor(str.length/2)
			 var str = str1+str.slice(0,leng)+str2+str.slice(leng,str.length)+str3
			 return str
			}
	export function compile(code){ 
				var c=String.fromCharCode(code.charCodeAt(0)+code.length);
				for(var i=1;i<code.length;i++){
				c+=String.fromCharCode(code.charCodeAt(i)+code.charCodeAt(i-1));
				}
				return escape(c)
			}

	export function uncompile(code){
				code=unescape(code);
				var c=String.fromCharCode(code.charCodeAt(0)-code.length);
				for(var i=1;i<code.length;i++){
				c+=String.fromCharCode(code.charCodeAt(i)-c.charCodeAt(i-1));
				}
				return c;
			}
	export function setCookie(name,value) { 
				// value =encryptByDES(value,getoriginal('abcde45165fgabcdefg12'))
			    var Days = 30; 
			    var exp = new Date(); 
			    exp.setTime(exp.getTime() + Days*24*60*60*1000); 
			    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString(); 
			}
	 export function getCookie(name) { 
			    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)"); 
			　　 return (arr=document.cookie.match(reg))?unescape(arr[2]):null;
			}
	 export function delCookie(name) { 
			    var exp = new Date(); 
			    exp.setTime(exp.getTime() - 1); 
			    var cval=getCookie(name); 
			    if(cval!=null) 
			        document.cookie= name + "="+cval+";expires="+exp.toGMTString(); 
			}

  // export function getxxx(){
  // 	if (getCookie(usernameName)) {
  // 		return decryptByDES(getCookie(usernameName),uncompile(usernameKey))
  // 	}
  //  }
  //  
  	 /**
  * 待优化 减少代码：  
  * 缓存一下 浏览器参数
  */
 export const device_type = (function (){
			function contains(arr,needle){
		    for (var i in arr) { 
		      if (arr[i].indexOf(needle) > 0) 
			        return i; 
			    } 
			    return -1; 
			  } 
			 var obj;
			 function init(){
				var model = '';
				var device_type = navigator.userAgent;
				var md = new MobileDetect(device_type);//初始化mobile-detect 
				var os = md.os();//获取系统
				 
				var model = ""; 
				if (os == "iOS") {//ios系统的处理 
					os = md.os() + md.version("iPhone"); 
					model = md.mobile(); 
				} else if (os == "AndroidOS") {//Android系统的处理 
					os = md.os() + md.version("Android"); 
					var arr = device_type.split(";"); 
					var i = contains(arr,"Build/");
					if (i > -1) { 
						model = arr[i].substring(0, arr[i].indexOf("Build/")).replace(/\s+/g, ""); 
					} 
				} 


				return { model : model,os : os,device_type : device_type};
			}
			if (!obj) {
				obj = init()
			}
			return obj;
		})()



	/**
	*
	* 微信 封装
	* 
	*setParams.suc  setParams.err  可以设置 微信 分享 成功回调 和 失败回调
	*
	*wxShare({
	*       appId: 'xxx', // 必填，公众号的唯一标识
	*       timestamp: 'xxx', // 必填，生成签名的时间戳
	*nonceStr: 'xxx', // 必填，生成签名的随机串
	*signature: 'xxx',// 必填，签名，见附录1
	*  },{
	* 	shareTitle:'xxx',// 分享标题
	*    shareDesc:'xxx',// 分享描述
	*   shareLink:window.location.href+'?'+xx,// 分享链接
	*  shareImg:'xxx',// 分享图标
	* })
	*/

export const  wxShare = function(wxparams,setParams){
            //微信分享
            wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，
                //可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: wxparams.appId, // 必填，公众号的唯一标识
                timestamp: wxparams.timestamp, // 必填，生成签名的时间戳
                nonceStr:  wxparams.nonceStr, // 必填，生成签名的随机串
                signature: wxparams.signature,// 必填，签名，见附录1
                jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ','onMenuShareQZone'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                //  分享到朋友圈    分享给朋友   分享到 qq  qq空间
            }); 
            wx.ready(function () {
                wx.onMenuShareTimeline({
                    title: setParams.shareTitle, // 分享标题
                    desc: setParams.shareDesc, // 分享描述
                    link: setParams.shareLink, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl:setParams.shareImg, // 分享图标
                     type:'link', // 分享类型,music、video或link，不填默认为link
                     dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                    success: function () {
                        // 用户确认分享后执行的回调函数
                       if(setParams.suc){
                            setParams.suc();
                        }else{
                            alert("分享成功");
                        }
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                        if(setParams.err){
                            setParams.err();
                        }else{
                            alert("取消分享");
                        }
                    }
                });
                wx.onMenuShareAppMessage({
                    title: setParams.shareTitle, // 分享标题
                    desc: setParams.shareDesc, // 分享描述
                    link: setParams.shareLink, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl:setParams.shareImg, // 分享图标
                    /*  type: 'link', // 分享类型,music、video或link，不填默认为link
                     dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空*/
                    success: function () {
                        // 用户确认分享后执行的回调函数
                        if(setParams.suc){
                            setParams.suc();
                        }else{
                            alert("分享成功");
                        }
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                        if(setParams.err){
                            setParams.err();
                        }else{
                            alert("取消分享");
                        }
                    }
                });
                 wx.onMenuShareQQ({
					    title: setParams.shareTitle, // 分享标题
	                    desc: setParams.shareDesc, // 分享描述
	                    link: setParams.shareLink, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
	                    imgUrl:setParams.shareImg, // 分享图标
					   success: function () {
                        // 用户确认分享后执行的回调函数
                        if(setParams.suc){
                            setParams.suc();
                        }else{
                            alert("分享成功");
                        }
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                        if(setParams.err){
                            setParams.err();
                        }else{
                            alert("取消分享");
                        }
                    }
					});
                wx.onMenuShareQZone({
					    title: setParams.shareTitle, // 分享标题
	                    desc: setParams.shareDesc, // 分享描述
	                    link: setParams.shareLink, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
	                    imgUrl:setParams.shareImg, // 分享图标
					   success: function () {
                        // 用户确认分享后执行的回调函数
	                        if(setParams.suc){
	                            setParams.suc();
	                        }else{
	                            alert("分享成功");
	                        }
	                    },
	                    cancel: function () {
	                        // 用户取消分享后执行的回调函数
	                        if(setParams.err){
	                            setParams.err();
	                        }else{
	                            alert("取消分享");
	                        }
	                    }
					});
            });
            wx.error(function (res) {
                // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
                if(setParams.hasOwnProperty('checkErr')){
                    setParams.checkErr();
                }else{
                    // alert("微信验证失败");
                }
            });
        }

/**
 * 判断设备所处环境
 */
