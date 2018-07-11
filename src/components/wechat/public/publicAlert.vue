<template>
    <div class="public-alert" v-if="isAlert">
        <div class="vue-alerts">
            <img src="../../../assets/img/public/icon_notice@2x.png" class="bg" />
            <div class="title">授权提示</div>
            <div class="content">
                <header>尊敬的集财理财用户：</header>
                <section>
                    为符合国家金融管理规范的要求，集财理财积极拥抱监管，请同意并授权系统自动为您的账户实现安全合规升级。
                </section>
            </div>
            <div class="lock">
                <div @click="lock=!lock">
                    <img src="../../../assets/img/public/icon_weigouxuan@2x.png" alt="" class="lockImg" v-if="lock">
                    <img src="../../../assets/img/public/icon_gouxuan@2x.png" alt="" class="lockImg" v-if="!lock">
                </div>
                <p>本人已阅读并同意
				<router-link to='/agreement/authAgreement'>
                    <span style="color: #2772FF;">
                        《自动投标授权书》
                    </span>
				</router-link>
                </p>
				
            </div>
            <button @click="btnFunc" :disabled="lock" :class="{dis:lock}">同意授权</button>
            <div class="bot_text" @click="closeAlt">再考虑考虑</div>
        </div>
    </div>
</template>

<script>
    import {
        usernameKey,
        authKey,
        authName,
        usernameName
    } from "@/config/config.js";
    export default {
        name: "vue-public-alert",
        //         props: {
        //             isAlert: {
        //                 type: Boolean,
        //                 default: false
        //             },
        //             
        //         },
        data() {
            return {
                cunguanUrl: "",
                cunguanParam: "",
                lock: true,
                isAlert: false,
            };
        },
        computed: {},
        created() {
            if (this.getxxx() && !sessionStorage.getItem("isAlert")) {
                // alert(1111111)
                this.$http.post("/Product/User/findUsersAuth", {
                    parameters: "{}"
                }).then(res => {
                    if (res.data.end == "ok") {
                        // res.data.status = "0";
                        if (res.data.status == "0") {
                            this.isAlert = true;
                        } else if (res.data.status == "1") {
                            this.isAlert = false;
                        }
                    } else {
                        console.log(err);
                    }
                }).catch(function (err) {
                    console.log(err);
                });
            }
        },
        methods: {
            getxxx: function () {
                if (this.$getCookie(usernameName)) {
                    return this.$decryptByDES(
                        this.$getCookie(usernameName),
                        this.$uncompile(usernameKey)
                    );
                }
            },

            btnFunc() {
                //				this.$emit('alert-func');
                // alert(22222222);

                var _this = this;
                _this.$http
                    .post("/Product/User/updateUsersAuth", {
                        parameters: "{}"
                    })
                    .then(function (res) {
                        if (res.data.end == "ok") {
                            sessionStorage.setItem("isAlert", "value");
                            _this.isAlert = false;
                        } else {
                            _this.$Toast(res.data.message);
                        }
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            },
			closeAlt(){
				this.isAlert = false;
			},
        }
    };
</script>

<style lang="less" scoped>
    @import url("../../../assets/css/wechat/reset_rem.css");
    .public-alert {
        position: absolute;
        width: 100%;
        bottom: 0;
        top: 0;
        left: 0;
        overflow: hidden;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 10000;
        .vue-alerts {
            width: 30rem;
            margin: 40% auto;
            text-align: center;
            position: relative;
            background-color: #FFFFFF;
            border-radius: 1rem;
            box-sizing: border-box;
            padding: 1.5rem 2.4rem;

            .bg {
                width: 6.8rem;
            }
            .title {
                font-size: 1.8rem;
                font-weight: bold;
                margin: .7rem 0 1.85rem 0;
            }
            .content {
                text-align: left;
                font-size: 1.4rem;
                line-height: 2.2rem;
                color: #606060;
                header {
                    font-weight: bold;
                    color: #000000;
                }
            }
            .lock {
                text-align: left;
                margin: 2rem 0 1.2rem 0;
                line-height: 1.6rem;
                white-space: nowrap;
                >div {
                    display: inline;
                    .lockImg {
                        width: 1.2rem;
                        vertical-align: text-bottom;
                        margin-right: .35rem;
                        display: inline-block;
                    }
                }
                >p {
                    color: #A0A0A0;
                    display: inline-block;
                    font-size: 1.2rem;
                    white-space: normal;
                    width: 88%;
                }
            }
            button {
                width: 25.2rem;
                padding: 0.9rem;
                font-size: 1.6rem;
                background-color: #2772FF;
                color: #ffffff;
                border-radius: .6rem;
            }
            .dis {
                background-color: #D0D0D0;
                color: #808080;
            }
            .bot_text {
                color: #888888;
                font-size: 1.2rem;
                margin-top: 1.2rem;
            }
        }
    }
</style>
