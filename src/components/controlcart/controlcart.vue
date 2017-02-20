<template>
  <div class="control-content">
  	<div class="decrease" @click="decrease($event)" v-show="food.count > 0 "></div>
  	<div class="count" v-show="food.count > 0 ">{{food.count}}</div>
  	<div class="increase" @click="increase($event)"></div>
  </div>
</template>
<script type="text/ecmascript-6">
	import Vue from 'vue';
	export default {
		props:['food'],
		methods:{
			decrease(event){
				let food = this.food;
				if(!event._constructed){
					return ;
				}
				if(food.count){
					food.count --;
				}
			},
			increase(event){
				let food = this.food;
				alert(food.count)
				if(!event._constructed){
					return ;
				}
				if(!food.count){
					food.count ==1;
					Vue.set(food,'count',1);
				}else{
					food.count ++;
				}
			}
		}
	};
</script>
<style lang="stylus" rel="stylesheet/stylus">
	.decrease
		width:16px
		height:16px
		background:url('./decrease.png') no-repeat center center
		background-size:16px 16px
		display:inline-block
		vertical-align:top
	.count
		padding:0 4px
		display:inline-block
	.increase
		width:16px
		height:16px
		background:url('./increase.png') no-repeat center center
		background-size:16px 16px
		display:inline-block
		vertical-align:top
</style>
