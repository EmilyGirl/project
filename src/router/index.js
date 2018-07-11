import Vue from 'vue'
import Router from 'vue-router'
import router from '../router'
import VueWechatTitle from 'vue-wechat-title'
//import question from '@/components/question'
//import account from '@/common/account'
//import matters from '@/common/matters'
//import recharge from '@/common/recharge'
//import explain from '@/common/explain'
//import about from '@/components/about'
//import safety from '@/components/safety'
//import sign from '@/components/sign'
//import integral_detail from '@/components/integral_detail'
//import invitation from '@/components/invitation'
//import reward_detail from '@/components/reward_detail'
//import prompt from '@/components/prompt'
//import protocol_service from '@/components/protocol_service'
//import service from '@/components/service'
//import usagerules from '@/components/usagerules'
//import syqxt from '@/components/syqxt'
//import goods_agreement from '@/components/goods_agreement'
//import car_agreement from '@/components/car_agreement'
//import share from '@/components/share'
//import set_loose from '@/components/set_loose'
//import what_loose from '@/components/what_loose'
//import about_loose from '@/components/about_loose'
//import generalize from '@/components/generalize'
//import blankLogin from '@/components/blankLogin'
//import newpeople from '@/components/newpeople'
//import bank from '@/components/bank'
//import generalize_jrtt from '@/components/generalize_jrtt'
//import activity from '@/components/activity'
//import help from '@/components/help'
//import double_eleven from '@/components/double_eleven'
//import welfare from '@/components/welfare'
//import newsign from '@/components/newsign'
//import rule from '@/components/rule'
//import birthday from '@/components/birthday'
//import branch1 from '@/components/branch1'
//import branch2 from '@/components/branch2'
//import bank_list from '@/components/bank_list'
//import server_agreement from '@/components/server_agreement'
//import day_day from '@/components/day_day'
//import rule_details from '@/components/rule_details'
//import fengye_day from '@/components/fengye_day'
//import generalize_pinzhong1 from '@/components/generalize_pinzhong1'
//import generalize_pinzhong2 from '@/components/generalize_pinzhong2'
//import generalize_wdsm from '@/components/generalize_wdsm'
//import newRegister from '@/components/newRegister'
//import newInvitation from '@/components/newInvitation'
//import erwei from '@/components/erwei'
//import new_reward from '@/components/new_reward'
//import touqianji from '@/components/touqianji'
//import experience_home from '@/components/experience_home'
//import experience_into from '@/components/experience_into'
//import experience_del from '@/components/experience_del'
//import what_expire from '@/components/what_expire'
//import default_page from '@/components/default_page'
//import experience_invest from '@/components/experience_invest'
//import newRegister_ta from '@/components/newRegister_ta'
//import double_egg from '@/components/double_egg'
//import year_gifes from '@/components/year_gifes'
//import appraisal from '@/components/appraisal'
//import appraisal_result from '@/components/appraisal_result'
//import free_packet from '@/components/free_packet'
//import mobileChannel from '@/components/mobileChannel'
//import breakthrough from '@/components/breakthrough'
//import operation_success from '@/components/operation_success'
//import activate_bank from '@/components/activate_bank'
//import deposit_agreement from '@/components/deposit_agreement'
//import year_end from '@/components/year_end'
//import pay_success from '@/components/pay_success'
//import fake_appraisal from '@/components/fake_appraisal'
//import fake_result from '@/components/fake_result'
//import year_report from '@/components/year_report'
//import month_report from '@/components/month_report'
//import lantern_festival from '@/components/lantern_festival'
//import legend_deification from '@/components/legend_deification'

//my
//import safety1 from '@/components/app_terminal/safety1'
//import jc_about from '@/components/app_terminal/jc_about'
const question = resolve => require(['@/components/question'], resolve)
const account = resolve => require(['@/common/account'], resolve)
const matters = resolve => require(['@/common/matters'], resolve)
const recharge = resolve => require(['@/common/recharge'], resolve)
const explain = resolve => require(['@/common/explain'], resolve)
const about = resolve => require(['@/components/about'], resolve)
const safety = resolve => require(['@/components/safety'], resolve)
const sign = resolve => require(['@/components/sign'], resolve)
const integral_detail = resolve => require(['@/components/integral_detail'], resolve)
const invitation = resolve => require(['@/components/invitation'], resolve)
const reward_detail = resolve => require(['@/components/reward_detail'], resolve)
const prompt = resolve => require(['@/components/prompt'], resolve)
const protocol_service = resolve => require(['@/components/protocol_service'], resolve)
const service = resolve => require(['@/components/service'], resolve)
const usagerules = resolve => require(['@/components/usagerules'], resolve)
const syqxt = resolve => require(['@/components/syqxt'], resolve)
const goods_agreement = resolve => require(['@/components/goods_agreement'], resolve)
const car_agreement = resolve => require(['@/components/car_agreement'], resolve)
const share = resolve => require(['@/components/share'], resolve)
const set_loose = resolve => require(['@/components/set_loose'], resolve)
const what_loose = resolve => require(['@/components/what_loose'], resolve)
const about_loose = resolve => require(['@/components/about_loose'], resolve)
const generalize = resolve => require(['@/components/generalize'], resolve)
const blankLogin = resolve => require(['@/components/blankLogin'], resolve)
const newpeople = resolve => require(['@/components/newpeople'], resolve)
const bank = resolve => require(['@/components/bank'], resolve)
const generalize_jrtt = resolve => require(['@/components/generalize_jrtt'], resolve)
const activity = resolve => require(['@/components/activity'], resolve)
const help = resolve => require(['@/components/help'], resolve)
const double_eleven = resolve => require(['@/components/double_eleven'], resolve)
const welfare = resolve => require(['@/components/welfare'], resolve)
const newsign = resolve => require(['@/components/newsign'], resolve)
const rule = resolve => require(['@/components/rule'], resolve)
const birthday = resolve => require(['@/components/birthday'], resolve)
const branch1 = resolve => require(['@/components/branch1'], resolve)
const branch2 = resolve => require(['@/components/branch2'], resolve)
const bank_list = resolve => require(['@/components/bank_list'], resolve)
const server_agreement = resolve => require(['@/components/server_agreement'], resolve)
const day_day = resolve => require(['@/components/day_day'], resolve)
const rule_details = resolve => require(['@/components/rule_details'], resolve)
const fengye_day = resolve => require(['@/components/fengye_day'], resolve)
const generalize_pinzhong1 = resolve => require(['@/components/generalize_pinzhong1'], resolve)
const generalize_pinzhong2 = resolve => require(['@/components/generalize_pinzhong2'], resolve)
const generalize_wdsm = resolve => require(['@/components/generalize_wdsm'], resolve)
const newRegister = resolve => require(['@/components/newRegister'], resolve)
const newInvitation = resolve => require(['@/components/newInvitation'], resolve)
const erwei = resolve => require(['@/components/erwei'], resolve)
const new_reward = resolve => require(['@/components/new_reward'], resolve)
const touqianji = resolve => require(['@/components/touqianji'], resolve)
const experience_home = resolve => require(['@/components/experience_home'], resolve)
const experience_into = resolve => require(['@/components/experience_into'], resolve)
const experience_del = resolve => require(['@/components/experience_del'], resolve)
const what_expire = resolve => require(['@/components/what_expire'], resolve)
const default_page = resolve => require(['@/components/default_page'], resolve)
const experience_invest = resolve => require(['@/components/experience_invest'], resolve)
const newRegister_ta = resolve => require(['@/components/newRegister_ta'], resolve)
const double_egg = resolve => require(['@/components/double_egg'], resolve)
const year_gifes = resolve => require(['@/components/year_gifes'], resolve)
const appraisal = resolve => require(['@/components/appraisal'], resolve)
const appraisal_result = resolve => require(['@/components/appraisal_result'], resolve)
const free_packet = resolve => require(['@/components/free_packet'], resolve)
const mobileChannel = resolve => require(['@/components/mobileChannel'], resolve)
const breakthrough = resolve => require(['@/components/breakthrough'], resolve)
const operation_success = resolve => require(['@/components/operation_success'], resolve)
const activate_bank = resolve => require(['@/components/activate_bank'], resolve)
const deposit_agreement = resolve => require(['@/components/deposit_agreement'], resolve)
const year_end = resolve => require(['@/components/year_end'], resolve)
const pay_success = resolve => require(['@/components/pay_success'], resolve)
const fake_appraisal = resolve => require(['@/components/fake_appraisal'], resolve)
const fake_result = resolve => require(['@/components/fake_result'], resolve)
const year_report = resolve => require(['@/components/year_report'], resolve)
const month_report = resolve => require(['@/components/month_report'], resolve)
const lantern_festival = resolve => require(['@/components/lantern_festival'], resolve)
const legend_deification = resolve => require(['@/components/legend_deification'], resolve)
    //new
    //app_terminal
const safety1 = resolve => require(['@/components/app_terminal/safety1'], resolve)
const jc_about = resolve => require(['@/components/app_terminal/jc_about'], resolve)

const home = resolve => require(['@/components/wechat/home'], resolve)
const mine = resolve => require(['@/components/wechat/homepage/mine'], resolve)
const product = resolve => require(['@/components/wechat/subpage/product'], resolve)
const payInput = resolve => require(['@/components/wechat/subpage/payInput'], resolve)
const product_detail = resolve => require(['@/components/wechat/subpage/product_detail'], resolve)
const project_details = resolve => require(['@/components/wechat/subpage/project_details'], resolve)
const go_invest = resolve => require(['@/components/wechat/subpage/go_invest'], resolve)
const personal_data = resolve => require(['@/components/wechat/subpage/personal_data'], resolve)
const revise_traders_pwd = resolve => require(['@/components/wechat/subpage/revise_traders_pwd'], resolve)
const reset_traders_pwd = resolve => require(['@/components/wechat/subpage/reset_traders_pwd'], resolve)
const revise_login_pwd = resolve => require(['@/components/wechat/subpage/revise_login_pwd'], resolve)
const reset_login_pwd = resolve => require(['@/components/wechat/subpage/reset_login_pwd'], resolve)
const wx_recharge = resolve => require(['@/components/wechat/subpage/recharge'], resolve)
const withdraw = resolve => require(['@/components/wechat/subpage/withdraw'], resolve)
const success = resolve => require(['@/components/wechat/subpage/success'], resolve)
const success_balance = resolve => require(['@/components/wechat/subpage/success_balance'], resolve)
const bind_bank = resolve => require(['@/components/wechat/subpage/bind_bank'], resolve)
const login = resolve => require(['@/components/wechat/homepage/login'], resolve)
const register = resolve => require(['@/components/wechat/homepage/register'], resolve)
const forget_password = resolve => require(['@/components/wechat/homepage/forget_password'], resolve)
const asset_details = resolve => require(['@/components/wechat/subpage/asset_details'], resolve)

const customer_service = resolve => require(['@/components/wechat/subpage/customer_service'], resolve)
const money_wrapped = resolve => require(['@/components/wechat/subpage/money_wrapped'], resolve)
const zeek_rewards = resolve => require(['@/components/wechat/subpage/zeek_rewards'], resolve)
const bank_card = resolve => require(['@/components/wechat/subpage/bank_card'], resolve)
const reserve_balance = resolve => require(['@/components/wechat/subpage/reserve_balance'], resolve)
const dispose = resolve => require(['@/components/wechat/subpage/dispose'], resolve)
const my_bankcard = resolve => require(['@/components/wechat/subpage/my_bankcard'], resolve)
const recharge_dispose = resolve => require(['@/components/wechat/subpage/recharge_dispose'], resolve)
const sign_rules = resolve => require(['@/components/app_terminal/sign_rules'], resolve)
const help_center = resolve => require(['@/components/app_terminal/help_center'], resolve)
const buy_back = resolve => require(['@/components/app_terminal/buy_back'], resolve)
const companybuy_back = resolve => require(['@/components/app_terminal/companybuy_back'], resolve)


const bindwechat = resolve => require(['@/components/wechat/homepage/bindwechat'], resolve) // 绑定微信

const wrapped_user = resolve => require(['@/components/app_terminal/wrapped_user'], resolve)
const update_state = resolve => require(['@/components/app_terminal/update_state'], resolve)
const use_agreement = resolve => require(['@/components/app_terminal/use_agreement'], resolve)
const active_register = resolve => require(['@/components/app_terminal/active_register'], resolve)
const invite_friend = resolve => require(['@/components/app_terminal/invite_friend'], resolve)
const quota = resolve => require(['@/components/app_terminal/quota'], resolve)
const report = resolve => require(['@/components/app_terminal/report'], resolve)
const guide = resolve => require(['@/components/app_terminal/guide'], resolve)
const invite_friend1 = resolve => require(['@/components/app_terminal/invite_friend1'], resolve)

/**
 *  下载引导页
 */
const dndBoot = resolve => require(['@/components/app_terminal/dndBoot'], resolve)

const notice1 = resolve => require(['@/components/app_terminal/notice1'], resolve)
const notice2 = resolve => require(['@/components/app_terminal/notice2'], resolve)
const notice3 = resolve => require(['@/components/app_terminal/notice3'], resolve)
const notice4 = resolve => require(['@/components/app_terminal/notice4'], resolve)

//四个公告
const sevendays_buy = resolve => require(['@/components/app_terminal/sevendays_buy'], resolve)
const ninetydays_buy = resolve => require(['@/components/app_terminal/ninetydays_buy'], resolve)
const mothers_day = resolve => require(['@/components/app_terminal/mothers_day'], resolve)
const shopping_card = resolve => require(['@/components/app_terminal/shopping_card'], resolve)
const message = resolve => require(['@/components/app_terminal/message'], resolve)


// app优化说明
const optimize = resolve => require(['@/components/app_terminal/optimize'], resolve)

// 优化对比说明页
const opt_explanation = resolve => require(['@/components/app_terminal/opt_explanation'], resolve)



//消息列表模块
// 消息列表
const message_list =  resolve => require(['@/components/pub/comps/msg_list/message_list'], resolve)
// 公告详情
const announcement = resolve => require(['@/components/pub/comps/msg_list/announcement'], resolve)
const system_notice = resolve => require(['@/components/pub/comps/msg_list/system_notice'], resolve)
const personal_msg = resolve => require(['@/components/pub/comps/msg_list/personal_msg'], resolve)
const activity_center = resolve => require(['@/components/pub/comps/msg_list/activity_center'], resolve)


 // 邀请好友
const invite =  resolve => require(['@/components/activity/invite/index'], resolve)
const record =  resolve => require(['@/components/activity/invite/record'], resolve)
const rebate_detail =  resolve => require(['@/components/activity/invite/rebate_detail'], resolve)
const my_friend = resolve => require(['@/components/pub/comps/invited_record/my_friend.vue'], resolve)
const reward_record = resolve => require(['@/components/pub/comps/invited_record/reward_record'], resolve)
// 积分
const intergate =  resolve => require(['@/components/activity/intergate/index'], resolve)
const my_friend1 = resolve => require(['@/components/activity/intergate/my_friend.vue'], resolve)
const reward_record1 = resolve => require(['@/components/activity/intergate/reward_record'], resolve)
 // 信息披露
const xp = resolve => require(['@/components/wechat/disclosure/xp'], resolve)
const cgsm = resolve => require(['@/components/wechat/disclosure/cgsm'], resolve)
const yybg = resolve => require(['@/components/wechat/disclosure/yybg'], resolve)
const yybg_active = resolve => require(['@/components/wechat/disclosure/yybg_active'], resolve)
const zzxx = resolve => require(['@/components/wechat/disclosure/zzxx'], resolve)
const baxx = resolve => require(['@/components/wechat/disclosure/baxx'], resolve)
const jyxx = resolve => require(['@/components/wechat/disclosure/jyxx'], resolve)
const jgfg = resolve => require(['@/components/wechat/disclosure/jgfg'], resolve)
const jgfg_active = resolve => require(['@/components/wechat/disclosure/jgfg_active'], resolve)
const ptgg = resolve => require(['@/components/wechat/disclosure/ptgg'], resolve)
const ptgg_active = resolve => require(['@/components/wechat/disclosure/ptgg_active'], resolve)
const lxwm = resolve => require(['@/components/wechat/disclosure/lxwm'], resolve)
const frqz = resolve => require(['@/components/wechat/disclosure/frqz'], resolve)


 // 各种 协议
 // 
 // 
  const authAgreement  = resolve => require(['@/components/app_terminal/authAgreement'], resolve)

import config from '../api/config'
Vue.use(Router)
export default new Router({
    routes: [{
            path: '/question',
            name: 'question',
            component: question,
            redirect: 'account',
            children: [{
                    path: '/question/account',
                    meta: {
                        title: '常见问题'
                    },
                    component: account
                },
                {
                    path: '/question/matters',
                    component: matters
                },
                {
                    path: '/question/recharge',
                    component: recharge
                },
                {
                    path: '/question/explain',
                    component: explain
                }
            ]
        }, {
            path: '/about',
            name: 'about',
            meta: {
                title: '关于集财'
            },
            component: about,
        }, {
            path: '/safety',
            name: 'safety',
            meta: {
                title: '安全保障'
            },
            component: safety,
        }, {
            path: '/sign',
            name: 'sign',
            meta: {
                title: '每日签到'
            },
            component: sign,
        }, {
            path: '/integral_detail',
            name: 'integral_detail',
            meta: {
                title: '积分明细'
            },
            component: integral_detail,
        }, {
            path: '/invitation',
            name: 'invitation',
            meta: {
                title: '邀请好友 '
            },
            component: invitation,
        }, {
            path: '/reward_detail',
            name: 'reward_detail',
            meta: {
                title: '奖励列表'
            },
            component: reward_detail,
        }, {
            path: '/prompt',
            name: 'prompt',
            meta: {
                title: '充值错误代码含义'
            },
            component: prompt,
        }, {
            path: '/protocol_service',
            name: 'protocol_service',
            meta: {
                title: '服务协议'
            },
            component: protocol_service,
        }, {
            path: '/service',
            name: 'service',
            meta: {
                title: '注册协议'
            },
            component: service,
        }, {
            path: '/usagerules',
            name: 'usagerules',
            meta: {
                title: '使用规则'
            },
            component: usagerules,
        }, {
            path: '/syqxt',
            name: 'syqxt',
            meta: {
                title: '收益曲线'
            },
            component: syqxt,
        }, {
            path: '/goods_agreement',
            name: 'goods_agreement',
            meta: {
                title: '电子合同'
            },
            component: goods_agreement,
        }, {
            path: '/car_agreement',
            name: 'car_agreement',
            meta: {
                title: '电子合同'
            },
            component: car_agreement,
        }, {
            path: '/share',
            name: 'share',
            meta: {
                title: '注册'
            },
            component: share,
        }, {
            path: '/set_loose',
            name: 'set_loose',
            meta: {
                title: '零钱罐设置'
            },
            component: set_loose,
        }, {
            path: '/what_loose',
            name: 'what_loose',
            meta: {
                title: '什么是零钱罐'
            },
            component: what_loose,
        }, {
            path: '/about_loose',
            name: 'about_loose',
            meta: {
                title: '关于零钱罐'
            },
            component: about_loose,
        }, {
            path: '/generalize',
            name: 'generalize',
            meta: {
                title: '新人注册'
            },
            component: generalize,
        }, {
            path: '/blankLogin',
            name: 'blankLogin',
            meta: {
                title: ''
            },
            component: blankLogin,
        }, {
            path: '/newpeople',
            name: 'newpeople',
            meta: {
                title: '新人注册'
            },
            component: newpeople,
        }, {
            path: '/bank',
            name: 'bank',
            meta: {
                title: '银行'
            },
            component: bank,
        }, {
            path: '/generalize_jrtt',
            name: 'generalize_jrtt',
            meta: {
                title: '新人注册'
            },
            component: generalize_jrtt,
        }, {
            path: '/activity',
            name: 'activity',
            meta: {
                title: '加息有礼'
            },
            component: activity,
        }, {
            path: '/help',
            name: 'help',
            meta: {
                title: '帮助'
            },
            component: help,
        }, {
            path: '/double_eleven',
            name: 'double_eleven',
            meta: {
                title: '玩转双十一'
            },
            component: double_eleven,
        }, {
            path: '/welfare',
            name: 'welfare',
            meta: {
                title: '福利任务'
            },
            component: welfare,
        }, {
            path: '/newsign',
            name: 'newsign',
            meta: {
                title: '签到'
            },
            component: newsign,
        }, {
            path: '/rule',
            name: 'rule',
            meta: {
                title: '签到规则'
            },
            component: rule,
        }, {
            path: '/birthday',
            name: 'birthday',
            meta: {
                title: '集财理财祝你生日快乐'
            },
            component: birthday,
        }, {
            path: '/branch1',
            name: 'branch1',
            meta: {
                title: '玩转双十一'
            },
            component: branch1,
        }, {
            path: '/branch2',
            name: 'branch2',
            meta: {
                title: '玩转双十一'
            },
            component: branch2,
        }, {
            path: '/bank_list',
            name: 'bank_list',
            meta: {
                title: '限额说明'
            },
            component: bank_list,
        }, {
            path: '/server_agreement',
            name: 'server_agreement',
            meta: {
                title: '集财理财日日盈投资协议'
            },
            component: server_agreement,
        }, {
            path: '/day_day',
            name: 'day_day',
            meta: {
                title: '日日盈'
            },
            component: day_day,
        }, {
            path: '/rule_details',
            name: 'rule_details',
            meta: {
                title: '项目详情'
            },
            component: rule_details,
        }, {
            path: '/fengye_day',
            name: 'fengye_day',
            meta: {
                title: '集财节'
            },
            component: fengye_day,
        }, {
            path: '/generalize_pinzhong1',
            name: 'generalize_pinzhong1',
            meta: {
                title: '新人注册'
            },
            component: generalize_pinzhong1,
        }, {
            path: '/generalize_pinzhong2',
            name: 'generalize_pinzhong2',
            meta: {
                title: '新人注册'
            },
            component: generalize_pinzhong2,
        }, {
            path: '/generalize_wdsm',
            name: 'generalize_wdsm',
            meta: {
                title: '新人注册'
            },
            component: generalize_wdsm,
        }, {
            path: '/newRegister',
            name: 'newRegister',
            meta: {
                title: '新人注册'
            },
            component: newRegister,
        }, {
            path: '/newInvitation',
            name: 'newInvitation',
            meta: {
                title: '邀请有奖'
            },
            component: newInvitation,
        }, {
            path: '/erwei',
            name: 'erwei',
            meta: {
                title: '集财理财二维码'
            },
            component: erwei,
        }, {
            path: '/new_reward',
            name: 'new_reward',
            meta: {
                title: '邀请有奖'
            },
            component: new_reward,
        }, {
            path: '/touqianji',
            name: 'touqianji',
            meta: {
                title: '年底投钱季'
            },
            component: touqianji,
        }, {
            path: '/experience_home',
            name: 'experience_home',
            meta: {
                title: ''
            },
            component: experience_home,
        }, {
            path: '/experience_into',
            name: 'experience_into',
            meta: {
                title: ''
            },
            component: experience_into,
        }, {
            path: '/experience_del',
            name: 'experience_del',
            meta: {
                title: '我的体验金'
            },
            component: experience_del,
        }, {
            path: '/what_expire',
            name: 'what_expire',
            meta: {
                title: '什么是体验金'
            },
            component: what_expire,
        }, {
            path: '/default_page',
            name: 'default_page',
            meta: {
                title: '我的体验金'
            },
            component: default_page,
        }, {
            path: '/experience_invest',
            name: 'experience_invest',
            meta: {
                title: ''
            },
            component: experience_invest,
        }, {
            path: '/newRegister_ta',
            name: 'newRegister_ta',
            meta: {
                title: '新人注册'
            },
            component: newRegister_ta,
        }, {
            path: '/double_egg',
            name: 'double_egg',
            meta: {
                title: '双蛋送礼'
            },
            component: double_egg,
        }, {
            path: '/year_gifes',
            name: 'year_gifes',
            meta: {
                title: '年货节'
            },
            component: year_gifes,
        }, {
            path: '/appraisal',
            name: 'appraisal',
            meta: {
                title: '风险测评'
            },
            component: appraisal,
        }, {
            path: '/appraisal_result',
            name: 'appraisal_result',
            meta: {
                title: '风险测评'
            },
            component: appraisal_result,
        }, {
            path: '/free_packet',
            name: 'free_packet',
            meta: {
                title: '现金卡随机送 集赞领好礼'
            },
            component: free_packet,
        }, {
            path: '/mobileChannel',
            name: 'mobileChannel',
            meta: {
                title: '新人注册'
            },
            component: mobileChannel,
        }, {
            path: '/breakthrough',
            name: 'breakthrough',
            meta: {
                title: '平台破亿 福利你定'
            },
            component: breakthrough,
        }, {
            path: '/operation_success',
            name: 'operation_success',
            meta: {
                title: '操作成功'
            },
            component: operation_success,
        }, {
            path: '/activate_bank',
            name: 'activate_bank',
            meta: {
                title: '激活成功'
            },
            component: activate_bank,
        }, {
            path: '/deposit_agreement',
            name: 'deposit_agreement',
            meta: {
                title: '存管协议'
            },
            component: deposit_agreement,
        }, {
            path: '/year_end',
            name: 'year_end',
            meta: {
                title: '年底活动'
            },
            component: year_end,
        }, {
            path: '/pay_success',
            name: 'pay_success',
            meta: {
                title: '支付成功'
            },
            component: pay_success,
        }, {
            path: '/fake_appraisal',
            name: 'fake_appraisal',
            meta: {
                title: '风险测评'
            },
            component: fake_appraisal,
        }, {
            path: '/fake_result',
            name: 'fake_result',
            meta: {
                title: '风险测评'
            },
            component: fake_result,
        }, {
            path: '/year_report',
            name: 'year_report',
            meta: {
                title: '集财理财2017年报'
            },
            component: year_report,
        }, {
            path: '/month_report',
            name: 'month_report',
            meta: {
                title: '集财理财2017月报'
            },
            component: month_report,
        }, {
            path: '/lantern_festival',
            name: 'lantern_festival',
            meta: {
                title: '集财邀你一起庆元宵'
            },
            component: lantern_festival,
        }, {
            path: '/legend_deification',
            name: 'legend_deification',
            meta: {
                title: '枫神榜'
            },
            component: legend_deification,
        }, {
            path: '/app_terminal/safety1',
            name: 'safety1',
            meta: {
                title: '安全保障'
            },
            component: safety1,
        }, {
            path: '/app_terminal/jc_about',
            name: 'jc_about',
            meta: {
                title: '关于集财'
            },
            component: jc_about,
        }, {
            path: '/wechat/home', //集财主页面
            meta: {
                title: '集财',
                noRequireAuth: true
            },

            name: 'home',
            component: home,
            redirect: '/wechat/subpage/product',
            /*children: [{
            		path: '/wechat/subpage/product', //产品列表
            		meta: {
            			title: '集财',
            		},
            		component: product
            	},
            	{
            		path: '/wechat/homepage/mine', //我的
            		meta: {
            			title: '集财'
            		},
            		component: mine
            	}

            ]*/
        },
        {
            path: '/wechat/homepage/mine', //我的
            name: 'mine',
            meta: {
                title: '集财'
            },
            component: mine,
        },
        {
            path: '/wechat/homepage/login', //登录
            name: 'login',
            meta: {
                title: '集财',
                noRequireAuth: true
            },
            component: login,
        }, {
            path: '/wechat/homepage/register', //注册
            name: 'register',
            meta: {
                title: '集财'
            },
            component: register,
        }, {
            path: '/wechat/homepage/forget_password', //忘记密码
            name: 'forget_password',
            meta: {
                title: '集财'
            },
            component: forget_password,
        }, {
            path: '/wechat/subpage/product', //产品列表（当前暂定主页）
            name: 'product',
            meta: {
                title: '全部产品'
            },
            component: product,
        }, {
            path: '/wechat/subpage/payInput', //支付-交易密码
            name: 'payInput',
            meta: {
                title: '集财'
            },
            component: payInput,
        }, {
            path: '/wechat/subpage/product_detail', //产品详情
            name: 'product_detail',
            meta: {
                title: '项目信息',
                noRequireAuth: true
            },
            component: product_detail,
        }, {
            path: '/wechat/subpage/project_details', //项目详情
            name: 'project_details',
            meta: {
                title: '项目详情'
            },
            component: project_details,
        }, {
            path: '/wechat/subpage/go_invest', //投资
            name: 'go_invest',
            meta: {
                title: '出借'
            },
            component: go_invest,
        }, {
            path: '/wechat/subpage/personal_data', //个人资料
            name: 'personal_data',
            meta: {
                title: '集财'
            },
            component: personal_data,
        }, {
            path: '/wechat/subpage/revise_traders_pwd', //修改交易密码
            name: 'revise_traders_pwd',
            meta: {
                title: '集财'
            },
            component: revise_traders_pwd,
        }, {
            path: '/wechat/subpage/reset_traders_pwd', //重置交易密码
            name: 'reset_traders_pwd',
            meta: {
                title: '集财'
            },
            component: reset_traders_pwd,
        }, {
            path: '/wechat/subpage/revise_login_pwd', //修改登录密码
            name: 'revise_login_pwd',
            meta: {
                title: '集财'
            },
            component: revise_login_pwd,
        }, {
            path: '/wechat/subpage/reset_login_pwd', //重置登录密码
            name: 'reset_login_pwd',
            meta: {
                title: '集财'
            },
            component: reset_login_pwd,
        }, {
            path: '/wechat/subpage/wx_recharge', //充值
            name: 'wx_recharge',
            meta: {
                title: '集财'
            },
            component: wx_recharge,
        }, {
            path: '/wechat/subpage/withdraw', //提现
            name: 'withdraw',
            meta: {
                title: '集财'
            },
            component: withdraw,
        }, {
            path: '/wechat/subpage/success', //购买成功
            name: 'success',
            meta: {
                title: '集财'
            },
            component: success,
        }, {
            path: '/wechat/subpage/success_balance', //购买成功
            name: 'success_balance',
            meta: {
                title: '集财'
            },
            component: success_balance,
        }, {
            path: '/wechat/subpage/bind_bank', //绑定银行卡
            name: 'bind_bank',
            meta: {
                title: '集财'
            },
            component: bind_bank,
        }, {
            path: '/wechat/subpage/asset_details',
            name: 'asset_details',
            meta: {
                title: '集财'
            },
            component: asset_details,
        }, {
            path: '/wechat/subpage/customer_service', //联系客服
            name: 'customer_service',
            meta: {
                title: '集财'
            },
            component: customer_service,
        }, {
            path: '/wechat/subpage/money_wrapped', //我的券包
            name: 'money_wrapped',
            meta: {
                title: '集财'
            },
            component: money_wrapped,
        }, {
            path: '/wechat/subpage/zeek_rewards', //我的投资
            name: 'zeek_rewards',
            meta: {
                title: '集财'
            },
            component: zeek_rewards,
        }, {
            path: '/wechat/subpage/bank_card', //绑定银行卡(重复)
            name: 'bank_card',
            meta: {
                title: '集财'
            },
            component: bank_card,
        }, {
            path: '/wechat/subpage/reserve_balance', //资产明细
            name: 'reserve_balance',
            meta: {
                title: '集财'
            },
            component: reserve_balance,
        }, {
            path: '/wechat/subpage/dispose', //处理中
            name: 'dispose',
            meta: {
                title: '集财'
            },
            component: dispose,
        }, {
            path: '/wechat/subpage/recharge_dispose', //充值处理中
            name: 'recharge_dispose',
            meta: {
                title: '集财'
            },
            component: recharge_dispose,
        }, {
            path: '/wechat/subpage/my_bankcard', //我的银行卡
            name: 'my_bankcard',
            meta: {
                title: '集财'
            },
            component: my_bankcard,

        }, {
            path: '/app_terminal/sign_rules',
            name: 'sign_rules',
            meta: {
                title: '签到规则'
            },
            component: sign_rules,
        }, {
            path: '/app_terminal/help_center',
            name: 'help_center',
            meta: {
                title: '帮助中心'
            },
            component: help_center,
        }, {
            path: '/app_terminal/buy_back', //个人版电子合同
            name: 'buy_back',
            meta: {
                title: '电子合同'
            },
            component: buy_back,
        }, {
            path: '/app_terminal/use_agreement', //集财用户使用协议
            name: 'use_agreement',
            meta: {
                title: '集财'
            },
            component: use_agreement,
        }, {
            path: '/app_terminal/update_state', //ios更新说明页面
            name: 'update_state',
            meta: {
                title: '集财'
            },
            component: update_state,
        }, {
            path: '/app_terminal/wrapped_user', //券包使用规则
            name: 'wrapped_user',
            meta: {
                title: '集财'
            },
            component: wrapped_user,

        }, {
            path: '/bindwechat', //绑定微信
            name: 'bindwechat',
            meta: {
                title: '微信'
            },
            component: bindwechat,

        }, {
            path: '/app_terminal/active_register', //绑定微信
            name: 'active_register',
            meta: {
                title: '新人注册'
            },
            component: active_register,

        }, {
            path: '/app_terminal/invite_friend', //邀请好友
            name: 'invite_friend',
            meta: {
                title: '集财'
            },
            component: invite_friend,
        }, {
            path: '/app_terminal/quota', //限额说明
            name: 'quota',
            meta: {
                title: '集财'
            },
            component: quota,
        }, {
            path: '/app_terminal/invite_friend1', //分享
            name: 'invite_friend1',
            meta: {
                title: '集财'
            },
            component: invite_friend1,
        }, {
            path: '/app_terminal/guide', //集财新人指引
            name: 'guide',
            meta: {
                title: '集财新人指引'
            },
            component: guide,
        }, {
            path: '/app_terminal/companybuy_back', //企业版电子合同
            name: 'companybuy_back',
            meta: {
                title: '电子合同'
            },
            component: companybuy_back,
        }, {
            path: '/app_terminal/notice1', //公告1
            name: 'notice1',
            meta: {
                title: '公告'
            },
            component: notice1,
        }, {
            path: '/app_terminal/notice2', //公告2
            name: 'notice2',
            meta: {
                title: '公告'
            },
            component: notice2,
        }, {
            path: '/app_terminal/notice3', //公告3
            name: 'notice3',
            meta: {
                title: '公告'
            },
            component: notice3,
        }, {
            path: '/app_terminal/notice4', //公告4
            name: 'notice4',
            meta: {
                title: '公告'
            },
            component: notice4,
        }, {
            path: '/app_terminal/message', //站内信
            name: 'message',
            meta: {
                title: '公告'
            },
            component: message,

        },



        // 新旧版本对比说明
        {
            path: '/app_terminal/opt_explanation',
            name: 'opt_explanation',
            meta: {
                title: '集财'
            },
            component: opt_explanation,
        },


        {
            path: '/app_terminal/dndBoot', //下载页
            name: 'dndBoot',
            meta: {
                title: '集财'
            },
            component: dndBoot,
        },

        //四个公告
        {
            path: '/app_terminal/sevendays_buy', //七天限时抢购活动
            name: 'sevendays_buy',
            meta: {
                title: '公告'
            },
            component: sevendays_buy,
        }, {
            path: '/app_terminal/ninetydays_buy', //90天产品抢购活动
            name: 'ninetydays_buy',
            meta: {
                title: '公告'
            },
            component: ninetydays_buy,
        }, {
            path: '/app_terminal/mothers_day', //2018母亲节活动
            name: 'mothers_day',
            meta: {
                title: '公告'
            },
            component: mothers_day,
        }, {
            path: '/app_terminal/shopping_card', //燃情五月投资送购物卡活动
            name: 'shopping_card',
            meta: {
                title: '公告'
            },
            component: shopping_card,
        }, {
            path: '/app_terminal/optimize', //优化说明
            name: 'optimize',
            meta: {
                title: '说明'
            },
            component: optimize,
        },
        
        //找不到的 路由全部重定向到 首页
        { path: '*', redirect: '/wechat/subpage/product' },
        // 
        
        
        //消息列表
        {
            path: '/app_terminal/message_list',//消息列表	//客户端用此路由，不要变。
            name: 'message_list',
            meta: {
                title: '我的消息'
            },
            component: message_list,
        },
        {
            path: '/pub/comps/msg_list/announcement', //消息公告详情
            name: 'announcement',
            meta: {
                title: '公告详情'
            },
            component: announcement,
        },{
            path: '/pub/comps/msg_list/system_notice', //公告
            name: 'system_notice',
            meta: {
                title: '消息'
            },
            component: system_notice,
        },{
            path: '/pub/comps/msg_list/activity_center', //活动中心
            name: 'activity_center',
            meta: {
                title: '消息'
            },
            component: activity_center,
        },
        {
            path: '/pub/comps/msg_list/personal_msg', //个人消息
            name: 'personal_msg',
            meta: {
                title: '我的消息'
            },
            component: personal_msg,
        },

        // 新建 活动路由   路由  activity 模块
        // 2018.6.21 邀请活动
        {
            path: '/activity/invite',
            name: 'invite',
            component: invite,
            meta: {
                title: '邀请好友'
            },
        },
        {
            path: '/activity/record',
            name: 'record',
            component: record,
            meta: {
                title: '我的战绩'
            },
        },
        {
            path: '/activity/rebate_detail',
            name: 'rebate_detail',
            component: rebate_detail,
            meta: {
                title: '返利明细'
            },
        },
        {
            path: '/pub/comps/invited_record/my_friend',
            name: 'my_friend',
            meta: {
                title: '我的好友'
            },
            component: my_friend,
        },
        {
            path: '/pub/comps/invited_record/reward_record',
            name: 'reward_record',
            meta: {
                title: '奖励记录'
            },
            component: reward_record,
        },
 // 新建 活动路由   路由  活动 模块  结束



// 各种 协议书 纯文案的 
// 
//投标  授权书
  		{
            path: '/agreement/authAgreement',
            name: 'authAgreement',
            meta: {
                title: '集财理财'
            },
            component: authAgreement,
        },
       



// 
// 各种 协议书 纯文案的 
        // 积分
        {
            path: '/activity/intergate',
            name: 'intergate',
            component: intergate,
            meta: {
                title: '我的积分'
            },
        }, {
            path: '/activity/intergate/my_friend', //个人消息
            name: 'my_friend1',
            meta: {
                title: '我的好友'
            },
            component: my_friend1,
        },
        {
            path: '/activity/intergate/reward_record', //个人消息
            name: 'reward_record1',
            meta: {
                title: '奖励记录'
            },
            component: reward_record1,
        },
        //信息披露
		{
			path: '/wechat/xp',
			meta: {
				title: '信息披露',
				noRequireAuth: true
			},
			name: 'xp',
			component: xp,
			redirect: '/wechat/disclosure/cgsm',
			children: [{
					path: '/wechat/disclosure/cgsm',
					meta: {
						title: '信息披露',
					},
					component: cgsm
				},
				{
					path: '/wechat/disclosure/yybg',
					component: yybg
				},
				{
					path: '/wechat/disclosure/yybg/yybg_active',
					component: yybg_active
				},
				{
					path: '/wechat/disclosure/zzxx',
					component: zzxx
				},
				{
					path: '/wechat/disclosure/baxx',
					component: baxx
				},
				{
					path: '/wechat/disclosure/jyxx',
					component: jyxx
				},
				{
					path: '/wechat/disclosure/jgfg',
					component: jgfg
				},
				{
					path: '/wechat/disclosure/jgfg/jgfg_active',
					component: jgfg_active
				},
				{
					path: '/wechat/disclosure/ptgg',
					component: ptgg
				},
				{
					path: '/wechat/disclosure/ptgg/ptgg_active',
					component: ptgg_active
				},
				{
					path: '/wechat/disclosure/lxwm',
					component: lxwm
				},
				{
					path: '/wechat/disclosure/frqz',
					component: frqz
				}]
		},



          
    ]
})