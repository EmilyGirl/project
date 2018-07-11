<template>
	<div class="dldapp" >
		<div  class="firstpage" v-if = "seconedPage">
			<img src="../../assets/img/dldapp/bg.png" alt="" />
			<p class="downBtn" @click='downBth'> 立即下载</p>
		</div>

		<div v-else class="seconedPage">
			<div style="padding:1rem 0">
				<p class="_tips"><b>您可以通过以下方式下载</b></p>
				<p class="_tips"><b>最新版APP</b></p>
			</div>
			<div class="mode_A">
				<p class="title_l"><img src="../../assets/img/dldapp/title_1.png" alt="" /></p>
				<p  class="browser_input" ><input id="copy1"   type="text" :value='urlarr[0]'> </p>
				<p class="Upward"><img src="../../assets/img/dldapp/icon_jiantou.png" alt="" /></p>
				<p class="clcikbtn" @click='copyLink("copy1")'> 点击复制链接</p>
				<div>

					<transition-group tag="ul"  :name="transitionName"   >  
						<li v-for="(item,index) in arr1"  v-if = "index == mark1"  :key="index"
						 @touchstart = 'touchstartLi'
						  @touchmove = 'touchmoveLi("mark1",$event)' 
						  @touchend= 'touchendLi'
						 >
							<span class="left"  @click = 'left("mark1")'  v-if='index !== 0 '></span>
							<img :src="item">
							<span @click = 'right("mark1")' v-if='index !== 2 ' class="right"></span>
						</li>
					 </transition-group>  
				</div>

			</div>
			<p class="middle"></p>
			<div class="mode_B">
			
				<p  class="title_l"><img src="../../assets/img/dldapp/title_2.png" alt="" /></p>
				<p  class="browser_input" ><input id="copy2"   type="text" :value='urlarr[1]'></p>
				<p class="Upward"><img src="../../assets/img/dldapp/icon_jiantou.png" alt="" /></p>
				<p class="clcikbtn" style="background-color: #1DC85A;"  @click='copyLink("copy2")'> 点击复制“集财圈儿”</p>
				<div>

					<transition-group tag="ul"   :name="transitionName"   >  
						<li v-for="(item,index) in arr2"   style="position:absolute;top:0" v-if = "index == mark2"    :key="index"
						 @touchstart = 'touchstartLi'
						  @touchmove = 'touchmoveLi("mark2",$event)' 
						  @touchend= 'touchendLi'>
							<span class="left"  @click = 'left("mark2")'  v-if='index !== 0 '></span>
							<img :src="item">
							<span @click = 'right("mark2")' v-if='index !== 2 ' class="right"></span>
						</li>
					 </transition-group>  
				</div>

			</div>
			<p class="middle"></p>
			<div class="mode_C">
				<p  class="title_l"><img src="../../assets/img/dldapp/title_3.png" alt="" /></p>
				<!-- <p  class="browser_input" ><input id="copy3" type="text"  :value='urlarr[2]' ></p>
				<p class="Upward"><img src="../../assets/img/dldapp/icon_jiantou.png" alt="" /></p>
				<p class="clcikbtn" style="background-color: #569BFF;" @click='copyLink("copy3")'> 点击复制官网地址</p> -->
				<div>

					<transition-group tag="ul"    :name="transitionName"   >  
						<li v-for="(item,index) in arr3"  style="position:absolute;top:0"  v-if = "index == mark3"    :key="index"
						 @touchstart = 'touchstartLi'
						  @touchmove = 'touchmoveLi("mark3",$event)' 
						  @touchend= 'touchendLi'>
							<span class="left"  @click = 'left("mark3")'  v-if='index !== 0 '></span>
							<img :src="item">
							<span @click = 'right("mark3")' v-if='index !== 2 ' class="right"></span>
						</li>
					 </transition-group>  
				</div>

			</div>
			<p class="middle"></p>
			<div class="mode_D">
			
				<p  class="title_l"><img src="../../assets/img/dldapp/title_4.png" alt="" /></p>
				<p  class="browser_input" ><input id="copy4"   type="text"   :value='urlarr[3]' ></p>
				<p class="Upward"><img src="../../assets/img/dldapp/icon_jiantou.png" alt="" /></p>
				<p class="clcikbtn" style="background-color:#1DC85A" @click='copyLink("copy4")'> 点击复制微端公众号</p>
				<div>

					<transition-group tag="ul"   :name="transitionName"   >  
						<li v-for="(item,index) in arr4"   style="position:absolute;top:0" v-if = "index == mark4"    :key="index"
						 @touchstart = 'touchstartLi'
						  @touchmove = 'touchmoveLi("mark4",$event)' 
						  @touchend= 'touchendLi'>
							<span class="left"  @click = 'left("mark4")'  v-if='index !== 0 '></span>
							<img :src="item">
							<span @click = 'right("mark4")' v-if='index !== 2 ' class="right"></span>
						</li>
					 </transition-group>  
				</div>
				

			</div>
		</div>
			<div v-if='tobrowser' class="thirdPage">
				<img src="../../assets/img/dldapp/icon.png">

					<p class="tobrowserClose" @click= 'tobrowserClose'>我知道了</p>
			</div>
			<div  v-if ='alert' class="alert" style="font-size:1.5rem">
			
					<p style="text-align:center;height:70%;display:flex;justify-content:center; align-items:center;"> 复制成功</p>
					<p style="height:1px;background-color:#ddd" ></p>
					<p @click="alert=false" style="text-align:center;color:lightblue;height:30%; display:flex;justify-content:center; align-items:center;">确定</p>
		
			</div>
			<p   id = 'data' style="display:none">12123</p>
			<div  v-if ='alert'  class="alertwap"></div>
	</div>
</template>

<script>
import reset_rem from "../../assets/js/wechat/reset_rem.js";
import title_1_step1 from '../../assets/img/dldapp/title_1_step1.png'
import title_1_step2 from '../../assets/img/dldapp/title_1_step2.png'
import title_1_step3 from './../../assets/img/dldapp/title_1_step3.png'

import title_2_step1 from './../../assets/img/dldapp/title_2_step1.png'
import title_2_step2 from './../../assets/img/dldapp/title_2_step2.png'
import title_2_step3 from './../../assets/img/dldapp/title_2_step3.png'

import title_3_step1 from './../../assets/img/dldapp/title_3_step1.png'
import title_3_step2 from './../../assets/img/dldapp/title_3_step2.png'
import title_3_step3 from './../../assets/img/dldapp/title_3_step3.png'

import title_4_step1 from './../../assets/img/dldapp/title_4_step1.png'
import title_4_step2 from './../../assets/img/dldapp/title_4_step2.png'
import title_4_step3 from './../../assets/img/dldapp/title_4_step3.png'
export default {
  name: "safety1",
  data() {
    return {
    	urlarr:[
    	'http://t.cn/R3ljk7U',//官网链接
    	'集财圈儿',//集采圈儿
    	'https://www.jicai.com/',//官网地址
    	'集财圈儿'//微信公总号 

    	],
    	alert:false,
    	tobrowser:false,
    	lock:true,
    	transitionName:'image22',
    	seconedPage:true,
    	mark1:0,
    	mark2:0,
    	mark3:0,
    	mark4:0,
    	startX:0,
    	startY:0,
    	arr1:[title_1_step1,title_1_step2,title_1_step3],

    	arr2:[title_2_step1,title_2_step2,title_2_step3],

    	arr3:[title_3_step1,title_3_step2,title_3_step3],

    	arr4:[title_4_step1,title_4_step2,title_4_step3],

    };
  },
  created() {},
  methods:{
  	downBth:function () {
  		if (this.$route.query.app == 'old') {
  			this.seconedPage = false;
  			return;	
  		}
  		

  		 var ua = navigator.userAgent;
  		 if(!!ua.match(/MicroMessenger/i)|| !!ua.match(/QQ/i)) {
  		 		this.tobrowser = true;
			}else{
				if(!!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)){
					// ios
						window.location.href =	'https://itunes.apple.com/cn/app/ji-cai-li-cai-hua-sheng-da/id1024955696?mt=8'
				}else{
					// android   根据url 渠道 去下载不同包
					if (this.$route.query && this.$route.query.channel == 'xy') {
					 	window.location.href =	'https://nimg.jicai.com/download/android/apk/4.0.6/xy/jicai_4.0.6_product_xy.apk'
					}else{
					 	window.location.href =	'https://nimg.jicai.com/download/android/apk/4.0.2/360/jclc_cn360_4.0.2.apk'
					}
				}
			}
  	},
  	copyLink:function(copy){
	        var e = document.getElementById(copy);
			e.select(); // 选择对象
            e.setSelectionRange(0, e.value.length)
            document.execCommand('Copy');
		this.alert = true;
		},
	right(mark){
		this.transitionName = 'image22'
		this[mark] = this[mark]+1;
	},
	left(mark){
		this.transitionName = 'image11'
		this[mark] = this[mark]-1;
	},
	tobrowserClose(){
		this.tobrowser = false;
	},
	touchstartLi(e){
	
		this.startX = e.changedTouches[0].pageX
		// alert(this.startX)
    	this.startY = e.changedTouches[0].pageY;

	},
	touchendLi(e){

    	this.lock = true
    	// console.log(this.lock)

	},
	touchmoveLi(mark,e){
		// console.log(this.lock)
		
	
		if (!this.lock) {return}
			// if (true) {}
		// console.log(mark)
	var  endX = e.changedTouches[0].pageX,
	    endY = e.changedTouches[0].pageY;


    //判断滑动方向

        var direction = this.GetSlideDirection(this.startX, this.startY, endX, endY);
        switch (direction){

          case 0:

            // alert("没滑动");

            break;

          case 1:

            // alert("向上");
            // console.log('向上')

            break;

          case 2:

            // console.log("向下");

            break;

          case 3:

            // console.log("向左");
            this.lock = false
            	e.preventDefault()
             if (this[mark]!=2) {

            	 this.right(mark)
            }
            break;

          case 4:
		this.lock = false
			e.preventDefault()
            // console.log("向右");
             if (this[mark]!=0) {
            	 this.left(mark)
            }

            break;

          default:          

        }

	},
GetSlideDirection(startX,startY, endX, endY) {


		        function GetSlideAngle(dx,dy) {
         		 return Math.atan2(dy,dx) * 180 / Math.PI;
       			 }

          var dy = startY - endY;

          var dx = endX - startX;
          // console.log(dy+'...'+dx)

          var result = 0;

 

          //如果滑动距离太短

          if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {

             return result;

          }

          var angle = GetSlideAngle(dx, dy);
          // console.log(angle)

          if (angle >= -45 && angle < 45) {

             result = 4;

          }else if (angle >= 45 && angle < 135) {

             result = 1;

          }else if (angle >= -135 && angle < -45) {

             result = 2;

          }else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {

             result = 3;

          }

          return result;

        
  }
}
};
</script>

<style scoped>
@import url("../../assets/css/wechat/reset_rem.css");

 .image22-enter-active {  
    transform: translateX(0);  
    transition: all 0.5s ease;  
  }  
  .image22-leave-active {  
    transform: translateX(-100%);  
    transition: all 0.5s ease;  
  }  
  .image22-enter {  
    transform: translateX(100%);  
  }  
  .image22-leave {  
    transform: translateX(0);  
  }
   .image11-enter-active {  
    transform: translateX(0);  
    transition: all  0.5s  ease;  
  }  
  .image11-leave-active {  
    transform: translateX(100%);  
    transition: all  0.5s  ease;  
  }  
  .image11-enter {  
    transform: translateX(-100%);  
  }  
  .image11-leave {  
    transform: translateX(0);  
  }
  .title_l{
  	margin-bottom:1rem; 
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

  .alert {
  	position: fixed;
  	z-index: 12;
  	top: 30%;
  	width: 70%;
  	left: 15%;
  	background-color: #fff;
  	height: 10rem;
  	border-radius: 20px;
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
.dldapp{
	width: 100%;
	overflow: hidden;
	background-color: #fff
}
.Upward img{
	margin-bottom:0;
	padding: .6rem 0;
}
.firstpage{
	position: fixed;
	top: 0;
	height: 100%;
	width: 100%;
	left: 0;
}
.firstpage img{
	height: 100%;
	width: 100%;
}
.downBtn{
	width: 72%;
	left: 14%;
	height:4rem;
	position: absolute;
	bottom: 9%;
	background-color: #fff;
	border-radius: 100px;
	text-align: center;
	color: #65BED2 ;
	font-size: 1.8rem;
	line-height: 4rem;

}
._tips{
    text-align: center;
    font-size: 2.4rem;
    width: 100%;
    line-height: 4rem;
    height: 3rem;
}
.browser_input{
	margin-left:13%; 
	width: 74%;
	height: 2.3rem;
}
.browser_input input{
	/*margin-top: 2rem; */
	width:100%;
	height: 2.3rem;
	line-height: 2.3rem;
	background-color: #D2D7DC;
	text-align: center;
	color: #B0B5BB;
	font-size: 1rem;
	background: #F7F7F8;
	border: 0 solid #E6E8EB;
	border-radius: 100px;
}
.Upward img{
	width: 1.2rem

}
.middle{
	height: 2.6rem;
	/*background-image: linear-gradient(-180deg, #FFFFFF 0%, #F2F3F8 100%);*/
	background: linear-gradient(to top , #FFFFFF, #F2F3F8);

}
.Upward{
	text-align: center;
}
.clcikbtn{
	margin-left:18%;
	width: 64%; 
	background-color: #569BFF ;
	border-radius: 100px;
	height: 4rem;
	line-height: 4rem;
	text-align: center;
	font-size: 1.8rem;
	color: #fff;
}
.mode_A,.mode_B,.mode_D{
	height: 50rem;
	padding-top: 1.2rem;
	/*position: relative;*/
}
.mode_C{
	height: 42rem;
}

.mode_A .left,
.mode_B  .left,
.mode_C .left,
.mode_D .left,
.mode_A .right,
.mode_B  .right,
.mode_C .right,
.mode_D .right{
	z-index: 10;
	width: 4rem;
	height: 6rem;
	position: absolute;
	/*background-color: red;*/
	display:inline-block;
	top:35%;
}
.left{
	left: 0
}
.right{
	right: 0;
}


.mode_A ul {
	position: relative;
	height: 30rem;
	width: 100%;
}
.mode_B ul {
	position: relative;
	height: 30rem;
	width: 100%;
}
.mode_C ul {
	position: relative;
	height: 30rem;
}
.mode_D ul{
	position: relative;
	height: 30rem;
	width: 100%;
}


.mode_C ul li{
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;

}
.mode_A ul li{
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
}

.mode_D ul li{
	position: absolute;
	width: 100%;
	top: 0
}

.mode_B ul li{
	position: absolute;
	width: 100%;
	top: 0
}


/*.mode_A ul li,
.mode_A ul li,
.mode_B ul li,
.mode_C ul li,
.mode_D ul li {
	width: 100%;
	display: none;
}*/
.mode_A ul li img{
	width: 100%;
}


</style>