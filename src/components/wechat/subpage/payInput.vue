<template>
    <div class="payInput">
        <button @click="payShow()">点击支付</button>
        <br />
        <br />
        <button @click="inputFoc">输入验证码</button>
        <vue-pay-keyboard :isPay='isPay' @pas-end='pasEnd' @close='close' ref="pay" :countDown='countDown' :payTitle='payTitle' @get-securit='getSecurit'
            :securityBtnCan='securityBtn'></vue-pay-keyboard>
        <div class="code_input" @click="inputFoc">
            <div class="center">
                <div class="con_bg">
                    <span class="border"></span>
					<span class="border"></span>
                    <span class="border"></span>
                    <span class="border"></span>
                    <span class="border"></span>
                    <span class="border"></span>
                </div>
				<div class="input_block">
					<input type="tel"  class="realInput" autofocus="autofocus" v-model="thcode" ref='inputs' maxlength="6" @keyup="Regs"/><!--:readonly="readonlys"-->
				</div>
				<div class="hideInput"></div>
				<div class="disClick"></div>
            </div>
			
        </div>
    </div>
</template>
<script>
    import reset_rem from "../../../assets/js/wechat/reset_rem.js";
    export default {
        name: 'SecurityCode',
        data() {
            return {
                isPay: false,
                countDown: '20s后重新获取',
                countBool: true,
                second: 20,
                preventTime: true,
                securityBtn: true,
                payTitle: '',
				thcode: '',
				readonlys: false,
            }
        },
		watch: {
			thcode(val) {
				//this.thcode=val.replace(/\D/g,'');
				if(val.length==6){
					this.readonlys=true;
					alert("Do anything");
					
				}
			}
			
		},
        methods: {
            payShow() {
                this.isPay = true;
                var _this = this;
                _this.times();
                _this.payTitle = '请输入交易密码'

            },
            times() {
                var _this = this;
                var wait = _this.second;
                this.$refs.pay.countBool = _this.countBool;

                function time() {
                    if (wait == 0) {
                        clearInterval(window.countTime);
                        _this.securityBtn = false;
                        _this.$refs.pay.securitBtnCan(_this.securityBtn);
                        _this.countDown = '重新发送'
                        wait = _this.second;
                    } else {
                        _this.securityBtn = true;
                        _this.$refs.pay.securitBtnCan(_this.securityBtn);
                        wait--;
                        _this.countDown = wait + "s后重新获取"

                    }
                };
                window.countTime = setInterval(time, 1000);
            },
            pasEnd(val) {
                var _this = this;
                console.log(val); //得到密码 可能会进行一些加密动作
                setTimeout(() => { // 模拟请求接口验证密码中 ..
                    if (val === '111111') { // 密码正确
                        this.$refs.pay.$payStatus(true) // 拿到子组件的事件
                        //this.$refs.pay.isPay=!this.isPay;
                        alert(111);
                    } else {
                        this.$refs.pay.$payStatus(false)
                    }
                }, 1000);

            },
            close() {
                var _this = this;
                //配合使用
                this.isPay = !_this.isPay;
                clearInterval(window.countTime);
                var second = _this.second = 20;
                _this.countDown = second + "s后重新获取"
                //_this.times();
                //配合使用-end
            },
            getSecurit() {

            },
			inputFoc(){
				var that=this;
				console.log(this.$refs.inputs.value);
				//当失去交点以后  让文本框内的文字获得焦点  并且光标移到最后一个字后面
				this.$refs.inputs.focus();// 获取焦点  
					
			},
			Regs(){
				this.thcode = this.thcode.replace(/\D/g,'')
			},

        }
    }
</script>
<style scoped lang="less">
    @import url("../../../assets/css/wechat/reset_rem.css");
    .payInput {
        font-size: 1.6rem;
        .code_input {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, .3);
            top: 0;
            left: 0;
            .center {
				box-sizing: border-box;
                position: absolute;
                width: 80%;
                height: 20rem;
                background-color: #FFFFFF;
                left: 50%;
                margin-left: -40%;
                top: 30%;
				padding: 4rem;
				border-radius: 1rem;
                .con_bg {
                    //background-color: #00A8F1;
					width: 18rem;
					margin: 0 auto;
					text-align: center;
					overflow: hidden;
					>span{
						box-sizing: border-box;
						float: left;
						width: 3rem;
						height: 3rem;
						border: 1px solid #000000;
						
					}
                }
				.input_block{
					width: 18rem;
					position: absolute;
					top: 4rem;
					left: 20%;
					//background-color: red;
					//opacity: .5;
					//overflow: hidden;
					text-overflow: clip;
					-webkit-user-select: none;
					.realInput{
						background-color: #4CB050;
						background-color: rgba(0,0,0,0);
						//opacity: .5;
						width: 20rem;
						font-size: 2rem;
						line-height: 3rem;
						text-indent: 1rem;
						letter-spacing: 1.8rem;
						text-overflow: clip;
						-webkit-user-select: none;
					}
					
				}
				.hideInput{
					width: 3rem;
					height: 3rem;
					background-color: #FFFFFF;
					position: absolute;
					right: 2.9rem;
					top: 4rem;
				}
				.disClick{
					width: 100%;
					position: absolute;
					height: 5rem;
					//background-color: red;
					left: 0;
					top: 3rem;
				}
            }
        }
    }
</style>
