
import axios from 'axios'
import CryptoJS from 'crypto-js'  
import {usernameKey,authKey,authName,usernameName} from '@/config/config.js'
import {setCookie,getCookie,delCookie,getoriginal,encryptByDES,decryptByDES,uncompile,device_type} from '@/config/common.js'
const qs = require('querystring')
const http = axios.create({
	baseURL: process.env.API_ROOT,
  timeout: 30000,
  transformRequest: [function(data) {
    // Do whatever you want to transform the data
    return qs.stringify(data)
  }],
  withCredentials: true,
	responseType: 'json',
  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
});


/**
 * 请求拦截
 */

  // 最后编译出来就是  cache   getTimestamps 在对象上  get post 在原型上  好处 避免变量污染
export default class Request {
 	constructor(){
 		this.cache = {localtime : null,servertime : null} 
		this.getTimestamps = function  (url,data,method){
				if (this.cache.servertime) {
						return http[method](url,{...data,cache:this.cache})
				}
				return axios.post(process.env.API_ROOT+	'/Product/getServerTimestamps').then((response)=>{
					if (response.data.end === 'ok') {
						this.cache.servertime = response.data.data.timestamps
						this.cache.localtime  = new Date().getTime();
				 		return http[method](url,{...data,cache:this.cache})
					}else{
						return Promise.reject(response.data);
					}
				}, function (error) {
					return Promise.reject(error);
				})
			}
	}
 	get(url,data){
		return this.getTimestamps(url,data,'get')
	}
	post(url,data){
		return this.getTimestamps(url,data,'post')
	}
 }
 http.interceptors.request.use(function (config) {
// console.log(decryptByDES(getCookie(usernameName),uncompile(usernameKey)))
		var data = JSON.parse(config.data.parameters)
			    var times = config.data.cache
			    delete config.data.cache

				// if (!data.authorization) { //判断判断是否在  APP内
				if (!/jicai/i.test(device_type.device_type)) { //判断判断是否在  APP内
				      var auth = getCookie(authName)
				      if (auth) {
				      	data.authorization = decryptByDES(auth,uncompile(authKey))
				      }
				 }
				
		      var publicparams = {
					verNum :  '4.0.4',   //【版本值】????
					sysVersion :device_type.os, 
					appVersion : '4.0.4',
					phoneSys : device_type.model,    
					apiVersion : '1.0',    //【版本】
					appPackageName : '集财理财',  
					appPlatform : '3',    //【平台】
					channel : 'wechat',      //【渠道】
					phoneId : 'wechat',      //【手机串号】
		      	}
				data = {...data,...publicparams}
				var sortStr = '', time = Number(times.servertime) +(Number(new Date().getTime()) - Number(times.localtime)) ;
				Object.keys(data).sort().forEach((item)=>{
					sortStr+=`"${item}":"${data[item]}"|`
				})
				sortStr+=`"mark":"${decryptByDES('FZFKKTGL0fFjsSr8snjBKI1YnUtwLlwCIiI56q30EucICmkpSPUIZUGxAKI05o/Y',getoriginal('abcdefga5565bcdefg12'))}"|"t":"${time}"`
				config.headers.common['sign'] = CryptoJS.MD5(sortStr).toString(CryptoJS.enc.Hex).toUpperCase();
				config.headers.common['p'] = 'jicai_html';
				config.headers.common['t'] = time ;
				config.data.parameters =JSON.stringify(data)
		    	return config
		  }, function (error) {
		    // 对请求错误做些什么
		    return Promise.reject(error);
		  });

//Q返回拦截
http.interceptors.response.use(function (response) {
    // 对响应数据做点什么
	 if(!(/jicai/i.test(device_type.device_type)) && response.data.end == 'noLogin'){
		   	delCookie(authName)
		   	delCookie(usernameName)
	   		var href =window.btoa(location.href) 	
	   		// location.href = `/#/wechat/homepage/login?redirect=${href}`
	   		location.replace(`/#/wechat/homepage/login?redirect=${href}`)
	 }
	    return response;
	 }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
