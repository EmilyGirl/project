<template>
	<div id="qxt" style="height: 200px;"></div>
</template>

<script>
	import jquery from "../assets/js/jquery-1.11.2.min.js"
//	import ichart from "../assets/js/ichart.1.2.min.js"
	import highcharts from "../assets/js/highcharts.js"
	export default {
		name: 'hello',
		data: function() {
			return {
			}
		},
		created: function() {
			this.loadQxt(); //定义方法
		},
		mounted: function () {    //钩子函数，等于vue1.0中的ready
            this.$nextTick(function () {
//              require ('../assets/js/ichart.1.2.min.js');
                require ('../assets/js/highcharts.js');
            })
       	},
		methods: {
			loadQxt: function() {
				var profits;
				var dates;
				var source = this.$route.query.source;
				var authorization = this.$route.query.authorization;
				this.$http.post('/Product/statistics/queryUserProfit.action',{
					parameters: '{"authorization":"'+ authorization +'"}'
				})
					.then(function(res) {
					if(res.data.status=="ok"){
						profits = res.data.profit;
						dates = res.data.date;
						$('#qxt').highcharts({
					        title: {
					            text: '收益曲线图',
					            x: 0
					        },
					        xAxis: {
					            categories: dates
					        },
					        yAxis: {
					            title: {
					                text: '收益'
					            },
					            plotLines: [{
					                value: 0,
					                width: 1,
					                color: '#808080'
					            }],
					            min:0
					        },
					        tooltip: {
					            valueSuffix: '元'
					        },
					        legend: {
					            layout: 'vertical',
					            align: 'right',
					            verticalAlign: 'middle',
					            borderWidth: 0
					        },
					        series: [{
					            name: '',
					           	data: profits
					        }]
					    });
					}
//					else if(res.data.status=="noLogin"){
//						alert(res.data.json);
//					}else {
//						alert("系统繁忙，请稍后重试");
//					}
					})
					.catch(function(err) {
						console.log(err)
				})
			}
		}
	}
</script>

<style>
</style>