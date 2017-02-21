<template>
  <div class="control-content">
  	<div class="decrease" @click="decrease($event)" v-show="food.count > 0 "></div>
  	<div class="count" v-show="food.count > 0 ">{{food.count}}</div>
  	<div class="increase" @click.stop="increase($event)"></div>
  </div>
</template>
<script type="text/ecmascript-6">
	import Vue from 'vue';
	export default {
		props:{
			food:{
				type:Object
			}
		},
		methods:{
			decrease(event){
				if(!event._constructed){
					return ;
				}
				if(this.food.count){
					this.food.count --;
				}
			},
			increase(event){
				if(!event._constructed){
					return ;
				}
				if(!this.food.count){
					this.food.count ==1;
					Vue.set(this.food,'count',1);
				}else{
					this.food.count ++;
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
