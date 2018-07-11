<template>
	<div class="sign">
		<div class="new-mask" v-if="mask" @touchmove.prevent>
			<div class="newMask-content">
				<img src="../assets/img/weideng.png"/>
				<p v-on:click="nologin()">点击登录</p>
			</div>
		</div>
		<div class="gold">
			<img v-bind:class="{'addimg':showimg}" src="../assets/img/jin.png"/>
			<div class="fen" v-bind:class="{'add':active}">+{{addday}}</div>
		</div>
		<div class="day">
			本月您已签到<br /><span>{{day}}</span>天
		</div>
		<div class="integral">
			当前积分：<span>{{totalPoint}}</span>
		</div>
		<div class="qian_btn">
			<button v-bind:disabled="jin" @click="change()"><img  :src="imgsrc"/></button>
		</div>
		<div class="sign-close" v-if="close1">{{ message1 }}</div>
		<div class="rules">
			<img src="../assets/img/guize.png"/>
			<p class="p-1">每日签到获得<span>+{{ everyDay }}积分</span>;</p>
			<p class="p-2">每月累计签到{{ accu_One }}天，额外奖励<span>+{{ accu_One_Score }}积分</span>;</p>
			<p class="p-3">每月累计签到{{ accu_Two }}天，额外奖励<span>+{{ accu_Two_Score }}积分</span>;</p>
			<p class="p-4">每月累计签到{{ accu_Three }}天，额外奖励<span>+{{ accu_Three_Score }}积分</span>;</p>
			<router-link :to="{ path:'./integral_detail',query:{ source:this.$route.query.source,auth:this.$route.query.auth }}">
			    <div class="ji_btn">查看积分明细</div>
			</router-link>
		</div>
	</div>
</template>

<script>
import common from "../assets/js/common.js"
export default {
	data: function() {
		return {
			imgsrc: require('../assets/img/wei.png'),
			active: false,
			showimg: false,
			bol: true,
			day: '',
			totalPoint: '',
			addday: '',
			everyDay: '',
			accu_One: '',
			accu_Two: '',
			accu_Two_Score: '',
			accu_One_Score: '',
			accu_Three: '',
			accu_Three_Score: '',
			jin: false,
			mask: false,
			message1: '',
			close1: false
		}
	},
	created: function(){
        this.mSignInfomation();//定义方法
    },
	methods: {
		mSignInfomation: function () {
			var _this = this;
			var auth = _this.$route.query.auth;
			_this.$http.post('/Product/User/mSignInfomation',{
	        	parameters://'{}'
	        	'{"authorization":"'+ auth +'"}'
	        	
	        })
	          .then(function (res) {
	          	if(res.data.end == 'ok'){
	          		_this.mask = false;
	          		if(res.data.isSign == 'yes'){
		          		_this.imgsrc = require('../assets/img/yi.png');
		          		_this.jin = true;
		          	}else{
		          		_this.imgsrc = require('../assets/img/wei.png');
		          		_this.jin = false;
		          	}
		          	_this.accu_One = res.data.accumulate.accu_One;
		          	_this.accu_One_Score = res.data.accumulate.accu_One_Score;
		          	_this.accu_Two = res.data.accumulate.accu_Two;
		          	_this.accu_Two_Score = res.data.accumulate.accu_Two_Score;
		          	_this.accu_Three = res.data.accumulate.accu_Three;
		          	_this.accu_Three_Score = res.data.accumulate.accu_Three_Score;
		          	_this.everyDay = res.data.accumulate.everyDay;
		        	_this.day = res.data.signDays;
		        	_this.totalPoint = res.data.totalPoint;
	          	}else{
	          		_this.mask = true;
	          	}
	        })
	          .catch(function(err){
				console.log(err);
			})
		},
		nologin: function () {
//			var source = this.$route.query.source;
			this.start();
		},
		change: function() {
			var _this = this;
			var auth = _this.$route.query.auth;
//	        if (this.bol) {
	        	
	        	_this.$http.post('/Product/User/saveMSignIn',{
		        	parameters:'{"authorization":"'+ auth +'"}'
		        })
		          .then(function (res) {
		          	if(res.data.end == 'ok'){
		          		_this.imgsrc = require('../assets/img/yi.png');
			          	_this.active = true;
			          	_this.showimg = true;
			          	_this.totalPoint = res.data.totalPoint;
			          	_this.day = res.data.signDays;
			          	_this.addday = res.data.point;
		          	} else {
		          		_this.message1 = res.data.message;
						_this.close1 = true;
						_this.jin = true;
						setTimeout(function () {
							_this.close1 = false;
							_this.jin = false;
						},3000);
		          	}
		        })
		          .catch(function(err){
					console.log(err);
				})
//		        this.bol = false;
//	        } else{
//	        	return false;
//	        }
		}
	}
}
</script>

<style>
	@import '../assets/css/help_center.css';
</style>