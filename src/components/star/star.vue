<template>
  <div class="star">
  	<span v-for="itemClass in itemClasses" class="itemStar" :class="itemClass"></span>
  </div>
</template>
<script type="text/ecmascript-6">
	const STAR_ON = 'on';
	const STAR_OFF = 'off';
	const STAR_HALF = 'half';
	export default {
		props:['score','starNum'],
		computed: {
			itemClasses () {
				let result = [];
				let STAR_LENGTH = this.starNum;
				let score = Math.floor(this.score*2) / 2;
				let hasDecimal = score % 1 !== 0;
				let intlen = Math.floor(score);
				for(let i = 0;i<intlen;i++){
					result.push(STAR_ON);
				}
				if(hasDecimal){
					result.push(STAR_HALF);
				}
				while(result.length<STAR_LENGTH){
					result.push(STAR_OFF);
				}
				return result;
			}
			
		}
	};
</script>
<style lang="stylus" rel="stylesheet/stylus">
	.itemStar
		display:inline-block;
		width:15px
		height:15px
		background-size:15px
		margin-right:5px
		background-repeat:no-repeat
	.on
		background-image:url('star24_on@3x.png')
	.off
		background-image:url('star24_off@3x.png')
	.half
		background-image:url('star24_half@3x.png')
</style>
