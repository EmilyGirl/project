<template>
	<div class="evaluate">
		<img src="../../../assets/img/xp/fxpc/bg.png"/>
		<div class="evaluate-cont" v-for="(obj,index) in objs">
			<div class="title"><var>{{obj.content}}<span></span></var></div>
			<ul>
				<li v-for="(answer,i) in obj.answer" @click='lockFunc(index,i,obj.id)'><span>{{answer}}</span><img src="../../../assets/img/xp/fxpc/icon_xuanze.png" class="lock" v-if="select[index] === i"/></li>
			</ul>
		</div>
		<div class="btna">
			<button class="btn" @click="btnSub();">提交评估</button>
		</div>
		<div class="invit-close" v-if="close">{{ message }}</div>
	</div>
</template>

<script>
	import reset_rem from "../../../assets/js/wechat/reset_rem.js";
	export default {
		name: 'evaluate',
		data: function() {
			return {
				message: '',
				close: false,
				objs:{},
				select:[],
				answer:[],
				answerChild:{},
			}
		},
		created(){
			this.getQuestion();
		},
		methods: {
			getQuestion(){
				var _this = this;
				var auth = this.$route.query.auth;
				_this.$http.post('/Product/User/findResult', {
						parameters: '{"authorization":"'+ auth + '"}'
					})
					.then(function(res) {
						if(res.data.end == 'ok') {
							_this.objs=res.data.obj;
						} else {
							_this.message = res.data.message;
							_this.close = true;
							setTimeout(function() {
								_this.close = false;
							}, 1200);
						}
					})
					.catch(function(err) {
						console.log(err)
					});
			},
			lockFunc(index,i,id){
				var _this=this;
				this.$set(this.select,index,i);
				this.$set(this.answerChild,id,i);
//				this.$set(this.answer,index,this.answerChild);
////				this.answerChild={};
//				
//				console.log(this.answerChild);
////				console.log(this.answerChild[1]);
////				console.log(this.answer);
//				console.log(JSON.stringify(this.answerChild));
		
				
				
				
				
			},
			btnSub(){
				var _this=this;
				var auth = this.$route.query.auth;
				for(var n=0;n<this.select.length;n++){
					console.log(this.select[n]);
					if(this.select[n]==undefined||this.select[n]==null||this.select[n]==''){
						this.close=true;
						this.message="请先答完再提交";
						setTimeout(function () {
							_this.close=false;
						},1200);
						return;
					}
				}
				
					this.answerChild=JSON.stringify(this.answerChild);
					_this.$http.post('/usersAppraisal/saveUsersAppraisal', {
						parameters: JSON.stringify({authorization: auth,answers:this.answerChild})
					})
					.then(function(res) {
						if(res.data.end == 'ok') {
							_this.$router.push({
								path: 'evaluate_result',
								name: 'evaluate_result',
								query: {
									auth: auth
								}
							});
						} else {
							this.close=true;
							this.message=res.data.message;
							setTimeout(function () {
								_this.close=false;
							},1200);
						}
					})
					.catch(function(err) {
						console.log(err)
					});
				
			},
			
		}
	}
</script>

<style scoped lang="less">
	@import url("../../../assets/css/wechat/reset_rem.css");
	@import url("../../../assets/css/xp/xp.less");
</style>