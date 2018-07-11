<template>
    <div id="reserve_balance" class="reserve_balance">
        <div class="table" ref="myChart" :style="{ height: '20.8rem'  ,marginBottom:'0'}">
        </div>

        <div class="middle">
            <p>
                <span>{{(totalMoney/100).toFixed(2)}} </span>
                </br>资产总金额(元)</p>
        </div>

        <p class="legend">
            <span>
                <i style="background: #FF7627;"></i> 可用余额</span>
            <span>
                <i style="background: #FCE738;"></i>待收收益</span>
            <span>
                <i style="background: #F7C048;"></i>待收本金</span>
            <span>
                <i style="background: #72B6FF;"></i>可用礼金</span>
        </p>
        <section id="ml_block1" class="ml_block ml_block1">
            <ul>
                <li class="ml_block_list" v-if='!isHistory'>
                    <div class="name">
                        可用余额(元)
                    </div>
                    <div>
                        <span class="zichan">{{(phone/100).toFixed(2)}}</span>
                    </div>
                </li>
                <li class="ml_block_list">
                    <div class="name">
                        待收收益(元)
                    </div>
                    <div>
                        {{(log_pwd/100).toFixed(2)}}
                    </div>
                </li>
                <li class="ml_block_list">
                    <div class="name">
                        待收本金(元)
                    </div>
                    <div @click="goZeek_rewards">
                        {{(freezeMoney/100).toFixed(2)}}
                        <img src="../../../assets/img/wechat/mine/right.png" />
                    </div>
                </li>

            </ul>
        </section>
        <section id="ml_block2" class="ml_block ml_block2">
            <ul>
                <li class="ml_block_list" @click="redPacket2">
                    <div class="name">
                        可用礼金(元)
                    </div>
                    <div>
                        {{(parseFloat(lijin)/100).toFixed(2)}}
                        <img src="../../../assets/img/wechat/mine/right.png" />
                    </div>
                </li>
                <li class="ml_block_list" @click="redPacket">
                    <div class="name">
                        可用现金卡(元)
                    </div>
                    <div>
                        <img src="../../../assets/img/wechat/mine/right.png" />
                    </div>
                </li>
                <li class="ml_block_list" @click="redPacket1">
                    <div class="name">
                        可用理财券(元)
                    </div>
                    <div>
                        <img src="../../../assets/img/wechat/mine/right.png" />
                    </div>
                </li>

            </ul>
        </section>
        <vue-pay-keyboard :is-pay='isPay' @pas-end='pasEnd' :payTitle="payTitle" @close='isPay=false'></vue-pay-keyboard>
    </div>
</template>

<script>
    import reset_rem from "../../../assets/js/wechat/reset_rem.js";
    var echarts = require('echarts/lib/echarts');
    // 引入柱状图
    require('echarts/lib/chart/pie');

    export default {
        name: 'personal',
        data() {
            return {
                chartsData: [],
                totalMoney: '0.00',
                phone: '0.00',
                freezeMoney: '0.00',
                username: '',
                ID_NO: '',
                trad_pwd: '未设置',
                log_pwd: '0.00',
                renzheng: '',
                isPay: false,
                payTitle: '设置6位交易密码',
                lijin: '',
                isHistory: false
            }
        },
        created: function () {
            var isBindBank = this.$route.params.isBindBank;
            var isPayPwd = this.$route.params.isPayPwd;
            this.username = this.$route.params.username;
            // console.log(this.username);

            if (isBindBank != '1') {
                this.username = "未认证";
                this.ID_NO = "未认证";


            } else {
                this.phone = this.$route.params.phone;
                this.username = this.$route.params.username;
                this.ID_NO = this.$route.params.ID_NO;

            }

            if (isPayPwd != "yes") {
                this.trad_pwd = "未设置";
            } else {
                this.trad_pwd = "修改";
            }
        },
        mounted() {
            this.chartsW = document.body.offsetWidth;
            var auth = this.$route.query.auth;
            this.$http.post('/Product/User/showMyAccountNew', {
                parameters: '{}'
            }).then((data) => {
                this.chartsData = [{
                        value: data.data.obj.leftMoney,
                        name: '可用余额'
                    },
                    {
                        value: data.data.obj.wfsy,
                        name: '待收收益'
                    },
                    {
                        value: data.data.obj.freezeMoney,
                        name: '待收本金'
                    },
                    {
                        value: data.data.obj.awardAllMoney,
                        name: '可用礼金'
                    }
                ]
                this.totalMoney = data.data.obj.totalMoney;
                this.phone = data.data.obj.leftMoney;
                this.log_pwd = data.data.obj.wfsy;
                this.freezeMoney = data.data.obj.freezeMoney;
                this.lijin = data.data.obj.awardAllMoney;
                this.initChart()
            })


        },
        methods: {
            initChart() {
                this.$refs.myChart.style.width = document.body.offsetWidth + 'px'
                let myEchart = echarts.init(this.$refs.myChart);

                myEchart.setOption({
                    color: ['#ff7627', '#fce738', '#f7c048', '#72B6FF'], //手动设置每个图例的颜色
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    series: [{
                        name: '访问来源',
                        type: 'pie',
                        radius: ['40%', '80%'],
                        avoidLabelOverlap: false,
                        hoverAnimation: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            // emphasis: {
                            //     show: false,
                            //     textStyle: {
                            //         fontSize: '10',
                            //         fontWeight: 'bold'
                            //     }
                            // }
                        },
                        data: this.chartsData
                    }]
                });
            },
            goZeek_rewards() {
                this.$router.push({
                    name: 'zeek_rewards'
                });
            },
            payShow() {
                if (this.trad_pwd = "未设置") {
                    this.isPay = true;
                } else {
                    this.$router.push({
                        path: 'aa',
                        name: '',
                    });
                }

            },
            pasEnd(val) {
                console.log(val); //得到密码 可能会进行一些加密动作
                //				setTimeout(() => { // 模拟请求接口验证密码中 ..
                //					if(val === '111111') { // 密码正确
                //						this.$refs.pay.$payStatus(true) // 拿到子组件的事件
                //					} else {
                //						this.$refs.pay.$payStatus(false)
                //					}
                //				}, 1000)
            },
            redPacket() {
                this.$router.push({
                    name: 'money_wrapped',
                    query: {
                        selected: 1
                    }
                });
            },
            redPacket1() {
                this.$router.push({
                    name: 'money_wrapped',
                    query: {
                        selected: 2
                    }
                });
            },
            redPacket2() {
                this.$router.push({
                    name: "money_wrapped",
                    query: {
                        selected: 0
                    }
                });
            },
        }
    }
</script>

<style scoped>
    .reserve_balance p.legend {
        background-color: #fff;
        display: flex;
        justify-content: space-around;
        margin-bottom: .6rem;
        vertical-align: middle;
        align-items: center;
        margin-bottom: 1.5rem;
    }

    .reserve_balance p.legend span {

        font-size: 1.5rem;
        display: flex;
        align-items: center;
        padding-bottom: 2rem;
    }

    .reserve_balance p.legend span i {
        margin-right: .38rem;
        display: inline-block;
        width: .9rem;
        height: .9rem;
        background-color: red;
        border-radius: 100%;
    }

    .reserve_balance .middle {
        font-size: 1.1rem;
        display: flex;
        align-items: center;
        width: 8rem;
        height: 8rem;
        position: absolute;
        top: 6.4rem;
        left: 50%;
        border-radius: 100%;
        transform: translate(-50%, 0);
    }

    .reserve_balance .middle p {
        text-align: center;
        width: 100%
    }

    .reserve_balance .middle p span {
        color: #ff975b
    }

    @import url("../../../assets/css/wechat/reset_rem.css");
    @import url("../../../assets/css/wechat/jc_reset.css");
    @import url("../../../assets/css/wechat/reserve_balance.css");
    @import url("../../../assets/css/wechat/mine.css");
</style>
