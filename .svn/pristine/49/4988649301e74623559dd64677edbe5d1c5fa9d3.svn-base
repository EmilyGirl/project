<template>
	<div class="appraisal_result">
		<div class="type">您的风险测评类型为</div>
		<div class="type-title">{{ type }} <span>”</span></div>
		<div class="type-img"><img src="../assets/img/appraisal_result.png"/></div>
		<div class="type-cont">集财理财建议您最少每年或当您的状态有任何重大转变时，对您的风险评估进行检视，以确保您的出借决定与您对风险所持的态度一致。</div>
		<div class="type-invest" @click="investFun()">立即投资</div>
		<router-link :to="{ path:'./appraisal',query:{ auth:this.$route.query.auth }} ">
		   	<div class="again">重新测评 ></div>
		</router-link>
		<div class="type-bottom">期望回报并非平台承诺收益，市场有风险，投资需谨慎</div>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		data: function() {
			return{
				type: ''
			}
		},
		created: function () {
			var auth = this.$route.query.auth;
			var _this = this;
			_this.$http.post('/usersAppraisal/getUsersAppraisalScore', {
					parameters: '{"authorization":"'+ auth +'"}'
				})
				.then(function(res) {
					if(res.data.end == 'ok'){
						_this.type = res.data.data.appraisalResult;
					}
				})
				.catch(function(err) {
					console.log(err)
			});
		},
		methods: {
			investFun: function () {
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
		          	JSInterface.toInvest();
		          	return;
		        }
		      	if(isIOS){
		          	loadURL("fengyelicai://btnInvest");
		            return;
		      	}
			}
		}
	}
</script>

<style scoped>
	@import '../assets/css/help_center.css';
</style>