<template>
	<div class="header">
		<div class="brand-content">
			<div class="brand-pic">
				<img :src="seller.avatar">
			</div>
			<div class="brand-txt">
				<div class="title">
					<span></span>
					<span>{{seller.name}}</span>
				</div>
				<div class="desc">{{seller.description}} / {{seller.deliveryTime}} 分钟送达</div>
				<div class="support-content" v-if="seller.supports">
					<span class="icon" :class="classArr[seller.supports[0].type]"></span>
					<span class="icon-text">{{seller.supports[0].description}}</span>
					<span class="tips-txt">{{seller.supports.length}} 个</span>
				</div>
			</div>
		</div>
		<div class="brand-tips"></div>
	</div>	
</template>

<script type="text/ecmascript-6">
	export default{
		props:['seller'],
		data () {
			return {
				classArr:['decrease','discount','special','invoice','guarantee']
			}
		}

	}
</script>

<style rel="stylesheet/stylus" lang="stylus">
	@import "../../assets/style/common"
	*
		margin:0
		padding:0
	.brand-content
		padding:25px 15px 15px 22px
		position:relative
	.brand-pic
		display:inline-block;
		img
			width:64px
			height:64px
			border-radius:4px;
	.brand-txt
		display:inline-block
		vertical-align:top
		.title
			margin:2px 0 8px 0
			span:first-child
				width:30px
				height:18px
				display:inline-block
				background-image:url('./brand@2x.png')
				background-size:30px 18px
				background-repeat:no-repeat
				vertical-align:top
			span:nth-child(2)
				margin-left:6px
				font-size:16px
				line-height:18px
	.desc
		font-size:13px
		font-weight:200px
		vertical-align:top
	.header
		background-color:rgba(0,0,0,0.7)
		color:#fff
		font-size:13px
	.icon
		width:12px
		height:12px
		margin-right:4px
		display:inline-block
		background-size:12px 12px
		background-repeat:no-repeat
		vertical-align:top
		&.decrease
			background-image:url('decrease_2@2x.png')
		&.discount
			background-image:url('discount_2@2x.png')
		&.invoice
			background-image:url('invoice_2@2x.png')
		&.special
			background-image:url('special_2@2x.png')
		&.guarantee
			background-image:url('guarantee_2@2x.png')
	.icon-text
		vertical-align:top
	.tips-txt
		position:absolute
		right:25px
		bottom:18px
</style>