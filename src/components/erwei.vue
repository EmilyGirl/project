<template>
<div class="erwei">
	<div class="e-content">
		<div class="y-tiao"></div>
		<div class="ewm-content">
			<div class="e-logo clearfix">
				<img class="e-left fl" src="../assets/img/yao_logo.png"/>
				<div class="e-right fl">
					<p class="gongsi">集财理财</p>
					<p class="yaoma">您的分享邀请码：{{ inviteId }}</p>
				</div>
				<div class="fl xu-xian"></div>
			</div>
			<div class="ewm"></div>
			<p class="sao">扫描即可下载集财理财APP</p>
		</div>
	</div>
</div>
</template>

<script>
	import jquery from "../assets/js/jquery-1.11.2.min.js"
	
	export default {
		name: 'hello',
		data: function() {
			return {
				inviteId: ''
			}
		},
		created: function() {
			this.invitation(); //定义方法
		},
		mounted: function () {    //钩子函数，等于vue1.0中的ready
            this.$nextTick(function () {
                require ('../assets/js/jquery.qrcode.min.js');
            })
       	},
		methods: {
			invitation: function() {
				var auth = this.$route.query.auth;
				var username = this.$route.query.username;
				var _this = this;
				_this.$http.post('/Product/User/showMyInvitation', {
						parameters: '{"authorization":"'+ auth +'","username":"'+ username +'"}'
					})
					.then(function(res) {
						var w=$(".ewm-content .ewm").width();
			        	var wpx=w+"px";
						if(res.data.end == 'ok'){
							_this.inviteId = res.data.inviteId;
							$(".ewm-content .ewm").height(wpx);
			                $(".ewm").qrcode({
			                    text: res.data.inviteURL,
			                    width:w,
			                    height:w
			                });
						}else{
							_this.mask = true;
						}
					})
					.catch(function(err) {
						console.log(err)
				})
			}
		}
	}	
</script>

<style>
	@import '../assets/css/help_center.css';
</style>