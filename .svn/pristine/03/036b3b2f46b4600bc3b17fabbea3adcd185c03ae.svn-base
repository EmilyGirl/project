<template>
	<!--<div class="slide-show" @mouseover="clearInv" @mouseout="runInv">-->
	<div class="slide-show">
		
		<div class="slide-img">
			<!--<a :href="slides[nowIndex].href">-->
				
				<transition name="slide-trans">
					<img   :src="slides[nowIndex].src">
				</transition>
				
				<!--<transition name="slide-trans-old">
					<img v-if="!isShow" :src="slides[nowIndex].src">
				</transition>-->
				
			<!--</a>-->
			<h5>{{ slides[nowIndex].title }}</h5>
		</div>
		
		<span class="left" @click="goto(1)"></span>
		<span class="right" @click="goto(2)"></span>
		
		<!--<h2>{{ slides[nowIndex].title }}</h2>-->
		<!--<ul class="slide-pages">

			<li v-for="(item, index) in slides" @click="goto(index)">
				<a :class="{on: index === nowIndex}">{{ index + 1 }}</a>
			</li>

		</ul>-->
	</div>
</template>

<script>
	export default {
		props: {
			slides: {
				type: Array,
				default: []
			},
			inv: {
				type: Number,
				default: 2000
			},
			end:{
				type: Function
			},
		},
		
		data() {
			return {
				nowIndex: 0,
				isShow: true
			}
		},
//		computed: {
//			prevIndex() {
//				
//				if(this.nowIndex==this.slides.length-1){
//					this.end(2)
//				}
//				if(this.nowIndex === 0) {
//					return this.slides.length - 1
//				} else {
//					return this.nowIndex - 1
//				}
//			},
//			nextIndex() {
//				if(this.nowIndex == this.slides.length-1){
//					this.end(1)
//					this.nowIndex = 0
//				} 
//				else {
//						return this.nowIndex + 1
//
//					
//				}
//			}
//		},
		methods: {
			goto(number) {
			if(number == 2){
				if(this.nowIndex == this.slides.length-1){
					this.end(2)
					this.nowIndex = 0
				}else{
					this.nowIndex++;
				}
			}else{
				if(this.nowIndex == this.slides.length-1){
					this.nowIndex = this.slides.length-1;
					this.end(1)			
				}else{
					this.nowIndex = 0;
				}
			}












//				console.log(this.slides[index])
//				this.isShow = false
////				setTimeout(() => {
////					this.isShow = true
////					this.nowIndex = index
////				}, 10)
//				this.nowIndex = index
//				console.log("???nowIndex"+this.nowIndex)





			},
			
		},
		mounted() {
			//  this.runInv();
		}
	}
</script>

<style scoped>
	.slide-trans-enter-active {
		transition: all .5s;
	}
	
	.slide-trans-enter {
		transform: translateX(500px);
	}
	
	.slide-trans-old-leave-active {
		transition: all .5s;
		transform:translateX(-500px);
	}
	
	.slide-show {

		text-align:center;
		/*border: 3px solid #333;*/
	}
	
	.slide-show h2 {
		color: #000;
		height:1.65rem;
		width: 100%;
		font-size: 1.4rem;
		color: #000000;
		    margin-top: 2rem;
	
	}
	
	.slide-img {
		width: 22.6rem;
		height: 40rem;
	   overflow: hidden;
	   text-align:center;
	   position: relative;
	   top: 2rem;
	   left: 0;
	   right: 0;
	   margin: 0 auto;
	}
	
	.slide-img img {
		width: 22.6rem;
		height: 40rem;
		position: absolute;
		/*top: 0;*/
		    bottom: 3.2rem;
    left: 0;
    right: 0;
    margin: 0 auto;
	}
	
	.slide-pages {
		background: red;
		position: absolute;
		bottom: 0;
		margin: -2.5rem auto;
		width: 100%;
		/*right: 15px;*/
	}
	
	
	.slide-show span{
		font-size: 1.4rem;
		position: absolute;
		width: 1.2rem;
		height: 2.6rem;		
		top:50%;
		
	}
	.slide-show .left{
		left:2rem;
		background: url("../assets/img/new_flip_left.png") no-repeat;
		background-size:100%;
	}
	.slide-show .right{
		/*position: absolute;*/
		right: 2rem;
		background: url("../assets/img/new_flip_right.png") no-repeat;
		background-size:100%;
		
		
	}
</style>