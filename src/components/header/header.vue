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
					<span class="tips-txt" @click="showDetail">{{seller.supports.length}} 个 ＞</span>
				</div>
			</div>
		</div>
		<div class="brand-tips"></div>
		<div class="bg-seller">
			<img :src="seller.avatar">
		</div>
		<transition name="fade">
		<div v-show="showFlag" class="detail">
			<div class="detail-wrapper">
				<div class="detail-main">
					<h1 class="name">{{seller.name}}</h1>
					<div class="star-warrap"></div>
					<v-star :score="seller.score" :starNum="5"></v-star>
				</div>
			</div>
			<div class="detail-fotter" @click="hideDetail">X</div>
		</div>
		</transition>
	</div>	
</template>

<script type="text/ecmascript-6">
import star from 'components/star/star'
	export default{
		props:['seller'],
		data () {
			return {
				classArr:['decrease','discount','special','invoice','guarantee'],
				showFlag:false
			}
		},
		methods:{
			showDetail:function(){
				this.showFlag = true;
			},
			hideDetail:function(){
				this.showFlag = false;
			}
		},
		components:{
			'v-star':star
		}

	}
</script>

<style rel="stylesheet/stylus" lang="stylus">
	@import "../../assets/style/common"
	*
		margin:0
		padding:0
	.header
		position:relative
	.brand-content
		padding:25px 15px 15px 22px
		position:relative
	.brand-pic
		display:inline-block
		img
			width:64px
			height:64px
			border-radius:4px
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
		background-color:rgba(0,0,0,0.3)
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
	.bg-seller
		position:absolute
		top:0
		left:0
		width:100%
		height:100%
		z-index:-1
		img
			width:100%
			height:100%
			filter:blur(4px)
	.detail
		position:fixed
		top:0
		left:0
		z-index:100
		width:100%
		height:100%
		background:rgba(7,17,27,0.8)
		overflow:auto
		&.fade-enter-active, .fade-leave-active {
		  transition: opacity .5s
		}
		&.fade-enter, .fade-leave{
		  opacity: 0
		}
	.detail-wrapper
		min-height:100%
		width:100%
		.detail-main
			overflow:auto
			padding-bottom:64px
			.name
				text-align:center
				font-size:16px
				margin-top:32px
	.detail-fotter
		margin-top:-32px
		position:relative
		color:#fff
		text-align:center
		clear:both
		height:32px
	.star
		text-align:center
		margin-top:15px
</style>