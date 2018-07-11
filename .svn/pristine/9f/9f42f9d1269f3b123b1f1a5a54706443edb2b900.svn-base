export default{
  install(Vue,options)
  {
    Vue.prototype.start = function () {
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
//				  if(isAndroid){
//		          	JSInterface.showInviteFriendDialog(usersId,URL);  
//		          	return;
//		        }
//		      if(isIOS){
//		          	loadURL("huoq://btnInvite");
//		            return;
//		      }
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
  	}
}


