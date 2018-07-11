<!-- /activity/invite
	邀请
 -->

<template>
	<div class="invite">
	<!-- 活动头部 -->
	<div class="head">
		<div>
			<img src="./../../../assets/img/invite/bg_1.png">
		</div>
		<div class="rewardIncome"> 
			<p class="title">上一个月奖励收益</p>
			<p class="mTotal"><span><b>{{(obj.monthProfitCount/100).toFixed(2)}}</b></span> <span class="yuan"> 元</span></p>
			<div class="myReward">
				<div>
					<p><span>{{obj.inviteCount}}</span> <span class="company"> 人</span></p>
					<p>累计邀请好友</p>
				</div>
        <div style="width:1px;height:3rem;background-color:#FFCC9C">
          
        </div>
				<div>
					<p><span>{{(obj.ProfitCount/100).toFixed(2)}}</span>  <span class="company"> 元</span></p>
					<p>累计总收益</p>
				</div>
			<!-- 	<div>
					<p><span>{{obj.cashCardCount}} </span><span class="company"> 张</span></p>
					<p>获得现金卡</p>
				</div> -->
			</div>
			<div class="recordBtn" @click='goRe()'>查看我的战绩 <p class="arrow-right"></p></div>

		</div>
	</div>

	<!-- 活动福利 -->
	<div class="welfare">
		<img class="titleImg" src="./../../../assets/img/invite/tittle_huodongfuli.png">
		<p class="step">1:邀请好友注册并绑卡认证奖励：</p>
		<div class="imgWrap">
			<img src="./../../../assets/img/invite/icon_yaoqingren.png">
			<img src="./../../../assets/img/invite/icon_beiyaoqingren.png">
		</div>
		<p class="step">2:邀请好友出借得奖励</p>
		<div class="rule">
			<p>①出借金额＜10000元</p>
			<p>获得好友单笔投资金额万3（0.03%）的现金奖励</p>
		</div>
		<div  class="rule">
			<p>②10000≤出借金额＜50000元</p>
			<p>获得好友单笔投资金额万5（0.05%）的现金奖励</p>
		</div>

 <!-- <div  class="rule">
			<p>②30000元<出借金额≤50000元</p>
			<p>获得好友单笔投资金额万3（0.03%）的现金奖励</p>
		</div> -->
		<div  class="rule">
			<p>③出借金额≥50000元</p>
			<p>获得好友单笔投资金额万10（0.1%）的现金奖励</p>
		</div>
		<div  class="rule">
			<p>适用范围：所有产品</p>
			<p>规则：现金奖励不设上限，笔数奖励不设上限</p>
		</div>
	</div>
	<img src="./../../../assets/img/invite/middlebg.png">
	<div class="welfare">
		<img class="titleImg" src="./../../../assets/img/invite/tittle_yaoqingfangshi.png">
		<p class="modeExplain">通过以下任意一种方式，邀请好友完成实名认证，即可获得奖励。</p>
		<div class="invateMode">
			<div class="modeOne">
				<p class="ModeName">邀请方式1</p>
				<p class="ModeLine"></p>
				<p class="ModeExplain">直接分享链接</p>
				<p class="ModeBtn"  @click="invocationNative">立即分享</p>
			</div>
			<div class="modeTwo">
				<p class="ModeName">邀请方式2</p>
				<p class="ModeLine"></p>
				<p class="ModeExplain">下载APP，注册时填写邀请码</p>
				<p class="ModeBtn" @click= "copyLink('copyInviteId')">复制邀请码</p>
			</div>

		</div>
	</div>
		<img src="./../../../assets/img/invite/middlebg.png">
	<div class="welfare">
		<img class="titleImg" src="./../../../assets/img/invite/tittle_huodongguize.png">
		<div class="aRule">
			<p>1、佣金奖励实时统计，次月5号将统一兑付上个月佣金到邀请人账户上，如遇节假日则顺延至下个工作日；</p>
			<p>2、以上好友仅统计一级好友，即由用户直接邀请的好友；被邀请人注册成功后，邀请人即可获得18元现金卡一张</p>
			<p>3、有任何疑问可致电客服：400-005-3300；</p>
			<p>4、活动最终解释权归浙江集财互联网金融有限公司所有。</p>
		</div>
	</div>
	<img class="bottomImg" src="./../../../assets/img/invite/bg_bg.png">
   <p class=" bottomImg inviteBtn" @click="invocationNative">立即分享</p>
   <input style="opacity :0;position:absolute;bottom:0;z-index:-20;background-color:red" type="text" id="copyInviteId" :value="obj.inviteId">

    <div v-if='toShare' class="thirdPage">
        <img src="./../../../assets/img/dldapp/icon.png">
          <p class="tobrowserClose" @click= 'toShare=false'>我知道了</p>
      </div>
     <!--  <div  v-if ='alert' class="alert" style="font-size:1.5rem">
          <p style="text-align:center;height:70%;display:flex;justify-content:center; align-items:center;"> 复制成功</p>
          <p style="height:1px;background-color:#ddd" ></p>
          <p @click="alert=false" style="text-align:center;color:lightblue;height:30%; display:flex;justify-content:center; align-items:center;">确定</p>
      </div> -->
      
      <!-- <div  v-if ='alert'  class="alertwap"></div> -->
	</div>
</template>

<script>

	import reset_rem from "../../../assets/js/wechat/reset_rem.js";
   import { wxShare } from '@/config/common.js';
   // import {appid} from '@/config/config.js'
   import { usernameKey, authKey, authName, usernameName ,appid } from '@/config/config.js';
	export default {
		data: function() {
			return {
           toShare:false,
            obj:{
               ProfitCount:0,
               cashCardCount:0,
               inviteCount:0,
               monthProfitCount:0
            }
			}
		},
		mounted(){
            if (!this.$route.query.auth &&  (/jicai/i.test(window.navigator.userAgent))) {
              // 在 APP内
                   this.start()
            }

            if(!this.isTencent() && !/jicai/i.test(window.navigator.userAgent)){
               // 不在APP内 不在腾讯内  ================  浏览器 
                 this.$router.push({path:'/app_terminal/dndBoot'})
                // 不在微信 qq 全部跳转到------- 下载链接
              }else{
                   this.$http.post('/Product/User/findInviteOverview', {
                        parameters: JSON.stringify({authorization:this.$route.query.auth})
                    }).then((res=>{
                       if(res.data.end == 'ok'){
                           this.obj = res.data.data
                        }else{
                          this.$Toast(res.data.message)
                        }
                    }))
              }
               // 接口返回
               // 分享
               // 参数名 必选  类型  说明
// authorization 是 string  用户标识码
// appId 是 string  微信标识
// url 否 string  请求url
// encodeURIComponent(location.href.split('#')[0])
               this.$http.post('/Product/wechat/sig', {
                  parameters:JSON.stringify({url:encodeURIComponent(location.href.split('#')[0]),appId:appid})
               }).then((res)=>{
                   var weixinInfo = {
                       appId: appid, // 必填，公众号的唯一标识
                       timestamp: res.data.data.timestamp, // 必填，生成签名的时间戳
                       nonceStr: res.data.data.nonceStr, // 必填，生成签名的随机串
                       signature: res.data.data.signature,// 必填，签名，见附录1
                   }
                   this.$http.post('/ShareMsg/getShareMsg', {
                        parameters: '{"username":"'+ this.getxxx() +'","model":"'+ 1 +'","target":"0"}'
                      })
                      .then(function(res) {
                        var url = res.data.shareMsgs.inviteURL;
                        var title = res.data.shareMsgs.title;
                        var description = res.data.shareMsgs.description;
                        var logoURL = res.data.shareMsgs.logoURL;

                          var shareObj = {
                           shareTitle:title,
                           shareDesc:description,
                           shareLink:url,
                           shareImg:logoURL,
                         }
                    wxShare(weixinInfo,shareObj)


                      })

              

               })
                  
            // }

            // 这个 接口需要登录

		},
		methods: {
      copyLink(copy){
            if (!this.$route.query.auth &&  (/jicai/i.test(window.navigator.userAgent))) {
                  this.$Toast('请先登录')
                  return;
            }
               var e = document.getElementById(copy);
                e.select(); // 选择对象
                e.setSelectionRange(0, e.value.length)
                document.execCommand('Copy');
                this.$Toast('复制成功')
           
      },
      getxxx() {
        if(this.$getCookie(usernameName)) {
          return this.$decryptByDES(this.$getCookie(usernameName), this.$uncompile(usernameKey))
        }
      },
      invocationNative(){
         var ua = window.navigator.userAgent;
         if (!this.$route.query.auth  &&  (/jicai/i.test(ua))) {
          // 没有登录情况
                this.start()
                return;
            }
 // 判断环境  app内  登录   微信 qq内  浏览器中 ----------- 
 //  微信qq 内 --------- 点击分享  右上角 三个点 
 //  浏览器 内 --------- 点击分享  请在微信中打开
 //  app 内 -----------  点击分享  调用app 分享  {
         // 在 ios 中 打开  点击分享  用微信打开
         // 在android  打开  点击分享  调用原生分享
 //  }

         // if (  (/jicai/i.test(ua)) && ( ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1 )) {
             // android  app 内 
            if (/jicai/i.test(ua)) {
               var model = 1;
               this.actShare(model); 
            }else if(this.isTencent()) {
               //   微信 
                // this.$Toast('请在点击右上角...')
                this.toShare = true;
            }else{
                 // ios   浏览器打开
                this.$Toast('请在微信中打开')
            }
      },
      isTencent(){
            var ua = navigator.userAgent.toLowerCase();
            if(ua.match(/MicroMessenger/i)=="micromessenger") {
            return "weixin";
            } else if (ua.match(/QQ/i) == "qq") {
            return "QQ";
                }
            return false;
         },
      goRe(){
         if (!this.$route.query.auth &&  (/jicai/i.test(window.navigator.userAgent))) {
                this.start()
                return;
            }
         this.$router.push({path:'/activity/record',query:{auth:this.$route.query.auth}})
      }
	
		}
	}
</script>
inviteBtn
<style lang = 'less' scoped >
	@import url("./../../../assets/css/wechat/reset_rem.css");
	.invite{
		line-height: inherit;
		background-color: #FF5D5D ;
		padding-bottom: 6rem;
		position: relative;

   .head img {
   		/*float: left;*/
   		width: 100%;
   		display: block;
   		font-size:0 ;
   		 padding:0;
   		  margin:0;
   		  line-height: 0;
   }
   .rewardIncome{
   		height: 22.45rem;
   		background: url('./../../../assets/img/invite/bg_2.png');
   		background-size:100% 100%;
   		background-repeat: no-repeat;
   		/*background-position:100% 100%;*/
   		.title {
   			text-align: center;
   			color: #9B4524;
   			font-size: 1.4rem;
   			padding: 4.5rem 0 .5rem 0;
   		}
   		.mTotal{
   			text-align: center;
   			font-size: 3rem;
   			color: #FF5135;
    		display: flex;
    		justify-content: center;
    		align-items: flex-end;
    		padding-bottom: .7rem;
   			span{
   				line-height: 4rem;
   			}
   			.yuan {
   				line-height: initial;
   				padding-bottom: .5rem;
   				font-size:1.3rem;
   			}
   		}
   		.myReward {
   				display: flex;
   				justify-content: space-between;
   				padding: 0 24%;
   				font-size: 1.7rem;
   				div {
   					display: flex;
   					flex-direction:column;
   					align-items: center; 
   					/*line-height: 1.8rem;*/
   					p:nth-child(1){
   						color: #FF5135;
   						display: flex;
			    		justify-content: center;
			    		align-items: flex-end;
   					}
   					span{
   						line-height: initial;

   					}
   					.company{
   						font-size: 1.2rem;
   						padding-bottom: .2rem;margin-left:.2rem; 
   					}
   					p:nth-child(2){
   						font-size: 1.2rem;
   						color: #9B4524 ;
   					}
   				}

   			}
   			.recordBtn{

   					background-color: #FF5D5D ;
   					width: 30%;
   					margin: 0 auto;
   					  margin-top: 2rem;
   					border-radius: 100px;
   	
   					color: #fff;
   					font-size: 1.2rem;
   					padding: .8rem 1rem;
                  display: flex;
                   align-items: center;
                   justify-content: center;
   				}

   }

   .welfare{
   	background-color: #fff;
   	margin: 0 .9rem;
   	padding: 0 2.3rem  1.8rem;
   	.titleImg {
   		padding: 2.6rem 0 1.4rem 0;
   	}
   	.step {
   		font-size: 1.4rem;
   		line-height: 3rem;
   		color: #9B4524;
   		/*line-height:4rem;*/
   		padding: 1rem 0;
   		line-height: 2.1rem;
   	}
   	.imgWrap {
   		display: flex;
   		justify-content: space-between;
   		height: 8rem;
   		img {
   			width: 46%;
   		}
   	}
   	.rule{
   		color: #9B4524 ;
   		font-size: .8rem;
   		height: 3rem;
   		font-size: 1.2rem;
   		line-height: 1.4rem;
   		/*line-height: 1.4rem;*/
   		padding: .5rem 0;
   		}
   	.aRule{
   		/*padding-top:2.2rem;*/
   		font-size: .9rem;
   		line-height: 2rem;
   		color: #9B4524;
   	}
   }
   .bottomImg{
   	position: absolute;
   	bottom: 2rem;	
       width: 100%;
      left: 0

   }
   .inviteBtn{
      height: 4.8rem;
      background-color: #fff;
      bottom: 0; 
      line-height: 4.8rem;
      text-align: center;
      font-size: 1.7rem;
      color: #FF6060; 
      position: fixed;
      box-shadow: 0px -1px 4px 0px #f9cfcf;

   }
   .invateMode{
   	display: flex;
   	justify-content: space-between;
   
   	&>div{
   		display: flex;
   		width: 48%;
   		height: 9rem;
   		align-items: center;
   		flex-direction: column;
   		padding: 1rem 0;
   		border-radius:10px; 
         color: #9B4524;
   	}
   	.modeOne{
   		background-color: rgba(246,247,255,.4);
   		border: 1px solid #C2D3FF;
         .ModeBtn{
            background: #FF6060;
         }

   	}
   	.modeTwo{
         background-color: rgba(255,250,250,.4);
         border: 1px solid #FFCACA;
         .ModeBtn{
           background: #6076FF;
         }
   		
   		
   	}
      .ModeName{
         padding-bottom: .8rem;
         font-size: 1.5rem;
      }
      .ModeLine{
         width: 2rem;
         height: 2px;
         background: #FFCACA;
      }
      .ModeExplain{
         font-size: .8rem;
         padding-top: .8rem;
      }
      .ModeBtn{
         font-size: 1.5rem;
         width: 80%;
         margin-top: 1rem ;
         text-align: center;
         border-radius: 100px;
         color: #fff;
         padding: 1rem 0;
     
      }
   
   }
   .modeExplain{
      font-size: 1.4rem;
      color: #9B4524;
      line-height: 1.5rem;
      padding: 1rem 0;
   }
   .arrow-right {
    width:0; 
    height:0; 
    border-top:.5rem solid transparent;
    border-bottom: .5rem solid transparent;
    border-left: .5rem solid #fff;
    display: inline-block;
    /*padding-left: 10p*/
    margin-left: .5rem; 
}
  .thirdPage{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    /*background-color: red;*/
    background:rgba(0,0,0,.7);

  }
  .alertwap{
  position: fixed;
    z-index: 11;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,.5);
}
  .tobrowserClose{
    position: absolute;
    left: 14%;
  height:4rem;
  bottom: 20%;
  color: #fff;
  border-radius: 100px;
  border:2px solid #fff;
  width: 72%;
  font-size: 1.8rem;
  text-align: center;
  line-height: 4rem;


  }


}	
</style>