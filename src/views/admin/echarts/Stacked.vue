<template>
	<div class="list">
		<div id="myChart" :style="{width: '100%', height: '400px'}"></div>
	</div>
</template>

<script>
	export default {
		props:{
			articleData:{
				type:Array,
				default(){
					return []
				}
			},
			userData:{
				type:Array,
				default:[]
			}
		},
		data() {
			return {
				articleDataLength:0
			};
		},
		created(){
			this.articleDataLength =  this.articleData.length
		},
		mounted(){
			this.drawLine();
		},
		methods:{
			
			drawLine() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById('myChart'))
				myChart.setOption({
					backgroundColor: '#fff',
						tooltip : {
							trigger: 'axis',
							axisPointer: {
								type: 'cross',
								label: {
									backgroundColor: '#6a7985'
								}
							}
						},
						legend: {
							data:['用户量','博客数量','视频广告','直接访问','搜索引擎'],
							//标题字体颜色
							textStyle: {
								color: '#409EFF'
							}
						},
						toolbox: {
							feature: {
								saveAsImage: {}
							}
						},
						grid: {
							left: '3%',
							right: '4%',
							bottom: '3%',
							containLabel: true
						},
						xAxis : [
							{
								type : 'category',
								boundaryGap : false,
								data : ['6月','7月','8月','9月','10月','11月','12月'],
								axisLine: {
									//x轴坐标字体颜色
									lineStyle: {
										color: '#409EFF'
									}
								}
							}
						],
						yAxis : [
							{
								type : 'value',
								axisLine: {
									//y轴坐标字体颜色
									lineStyle: {
										color: '#409EFF'
									}
								}
							}
						],
						series : [
							{
								name:'用户量',
								type:'line',
								stack: '总量',
								areaStyle: {},
								data:[0, 9, 0, 0, 0, 0, 0],
							},
							{
								name:'博客数量',
								type:'line',
								stack: '总量',
								areaStyle: {},
								data:[0, this.articleDataLength , 0, 0, 0, 0, 0]
							},
/* 							{
								name:'视频广告',
								type:'line',
								stack: '总量',
								areaStyle: {},
								data:[150, 232, 201, 154, 190, 330, 410]
							}, */
							{
								name:'直接访问',
								type:'line',
								stack: '总量',
								areaStyle: {normal: {}},
								data:[0, 0, 0, 0, 0, 0, 0]
							},
/* 							{
								name:'搜索引擎',
								type:'line',
								stack: '总量',
								label: {
									normal: {
										show: true,
										position: 'top',								
									},
								},
								areaStyle: {normal: {}},
								data:[820, 932, 901, 934, 1290, 1330, 1320]
							} */
						]
				})
			}
		}
	}
</script>

<style>

</style>
