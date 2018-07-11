<template>
	<div class="appraisal">
		<!--第一题-->
		<div class="appraisal-cont" v-for="(questionList,index) in questionLists" :class="{ 'hideChange': index-1 === selected,'showChange': index+1 === selected1 }">
			<p class="ti-point"><span>{{ questionList.tiPoint }}</span>/10</p>
			<p class="title-cont">{{ questionList.titleCont }}</p>
			<ul>
				<li v-for="(list,i) in questionList.lists" @click.stop.prevent="alertFun(index,i,list.letter,list.point,'alertFun')">
					<span :class="{blueColor: selectedBlock[index] === i}" class="selectColor">{{ list.letter }}. {{ list.change }}</span>
				</li>
			</ul>
			<div class="bottomBtn">
				<div v-if="index != 0" class="lastBtn" @click.stop.prevent="lastFun(index,'lastFun')">上一题</div>
				<button class="tiBtn" :class="{ cBule: isActive }" v-if="index == 9" :disabled="forbid" @click="forbidBtn()">提交测评</button>
			</div>
		</div>
		<div class="invit-close" v-if="close">{{ message }}</div>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		data: function() {
			return {
				questionLists: [{
					tiPoint: 1,
					titleCont: "您的年龄？",
					lists: [{
							change: "18-30岁",
							point: 10,
							letter: "A"
						},
						{
							change: "31-50岁",
							point: 8,
							letter: "B"
						},
						{
							change: "51-65岁",
							point: 5,
							letter: "C"
						},
						{
							change: "高于65岁",
							point: 3,
							letter: "D"
						}
					]
				}, {
					tiPoint: 2,
					titleCont: "您目前的身体状况？",
					lists: [{
							change: "非常好",
							point: 10,
							letter: "A"
						},
						{
							change: "好",
							point: 8,
							letter: "B"
						},
						{
							change: "一般",
							point: 5,
							letter: "C"
						},
						{
							change: "差",
							point: 3,
							letter: "D"
						}
					]
				}, {
					tiPoint: 3,
					titleCont: "您的家庭年收入为（折合人民币）？",
					lists: [{
							change: "5万元以下",
							point: 1,
							letter: "A"
						},
						{
							change: "5-20万元",
							point: 3,
							letter: "B"
						},
						{
							change: "20-50万元",
							point: 5,
							letter: "C"
						},
						{
							change: "50-100万元",
							point: 8,
							letter: "D"
						},
						{
							change: "100万元以上",
							point: 10,
							letter: "E"
						}
					]
				}, {
					tiPoint: 4,
					titleCont: "在您每年的家庭收入中，可用于投资的比例为？",
					lists: [{
							change: "小于10%",
							point: 3,
							letter: "A"
						},
						{
							change: "10%-25%",
							point: 5,
							letter: "B"
						},
						{
							change: "26%-50%",
							point: 8,
							letter: "C"
						},
						{
							change: "大于50%",
							point: 10,
							letter: "D"
						}
					]
				}, {
					tiPoint: 5,
					titleCont: "您有多少年投资经验（股票、基金、外汇、金融衍生产品等）？",
					lists: [{
							change: "没有经验",
							point: 1,
							letter: "A"
						},
						{
							change: "少于2年",
							point: 3,
							letter: "B"
						},
						{
							change: "2至五年",
							point: 5,
							letter: "C"
						},
						{
							change: "5至8年",
							point: 8,
							letter: "D"
						},
						{
							change: "8年以上",
							point: 10,
							letter: "E"
						}
					]
				}, {
					tiPoint: 6,
					titleCont: "您的投资目的是？",
					lists: [{
							change: "资产保值，同时获得固定收益",
							point: 5,
							letter: "A"
						},
						{
							change: "资产稳健增长，同时获得波动适度的年回报",
							point: 8,
							letter: "B"
						},
						{
							change: "资产高回报，能接受短期的资产价值波动",
							point: 10,
							letter: "C"
						}
					]
				}, {
					tiPoint: 7,
					titleCont: "您计划的投资期限是多久？",
					lists: [{
							change: "一年以下",
							point: 3,
							letter: "A"
						},
						{
							change: "1-3年",
							point: 5,
							letter: "B"
						},
						{
							change: "3-5年",
							point: 8,
							letter: "C"
						},
						{
							change: "5年以上",
							point: 10,
							letter: "D"
						}
					]
				}, {
					tiPoint: 8,
					titleCont: "您期望的投资年收益率？",
					lists: [{
							change: "高于同期定期存款",
							point: 3,
							letter: "A"
						},
						{
							change: "5%左右，要求相对风险低",
							point: 5,
							letter: "B"
						},
						{
							change: "5%-15%，可承受中等风险",
							point: 8,
							letter: "C"
						},
						{
							change: "15%以上，可承担较高风险",
							point: 10,
							letter: "D"
						}
					]
				}, {
					tiPoint: 9,
					titleCont: "以下哪项描述最符合您的投资态度？",
					lists: [{
							change: "厌恶风险，不希望本金损失，希望获得稳定回报 ",
							point: 3,
							letter: "A"
						},
						{
							change: "保守投资，不希望本金损失，愿意承担一定幅度的收益波动",
							point: 5,
							letter: "B"
						},
						{
							change: "寻求资金的较高收益和成长性，愿意为此承担有限本金损失",
							point: 8,
							letter: "C"
						},
						{
							change: "希望赚取高回报，愿意为此承担较大本金损失",
							point: 10,
							letter: "D"
						}
					]
				}, {
					tiPoint: 10,
					titleCont: "您的投资出现何种程度的波动时，您会呈现明显的焦虑？",
					lists: [{
							change: "本金无损失，但收益未达预期",
							point: 1,
							letter: "A"
						},
						{
							change: "出现轻微本金损失",
							point: 3,
							letter: "B"
						},
						{
							change: "本金10％以内的损失",
							point: 5,
							letter: "C"
						},
						{
							change: "本金20-50％的损失",
							point: 8,
							letter: "D"
						},
						{
							change: "本金50％以上损失",
							point: 10,
							letter: "E"
						}
					]
				}],
				arr: [],
				arr1: [],
				forbid: true,
				selected: -1,
				selected1: 0,
				selected2: null,
				isActive: false,
				selectedBlock: {},
				message: '',
				close: false
			}
		},
		methods: {
			alertFun: function(index, i, letter, point) {
				this.$set(this.selectedBlock, index, i);
				this.arr[index] = letter;
				this.arr1[index] = point;
				if(this.arr.length == 10) {
					this.forbid = false;
					this.isActive = true;
				}
				if(this.selected == 8) {
					return;
				}
				this.selected1 = null;
				this.selected = index;
				this.selected2 = i;
			},
			forbidBtn: function() {
				var _this = this;
				var sum = 0;
				var answers = this.arr.join(',');
				var auth = this.$route.query.auth;
				for(var j = 0; j < this.arr1.length; j++) {
					sum += this.arr1[j];
				};
				_this.$router.push({
					path: 'fake_result',
					name: 'fake_result',
					query: {
						sum: sum
					}
				});
			},
			lastFun: function(index) {
				this.selected = null;
				this.selected1 = index;
			},
		}
	}
</script>

<style scoped>
	@import '../assets/css/help_center.css';
</style>