<template>
	<div class="shopcart-content">
		<div class="content-left" @click.stop="toggelshow">
			<div class="logo-wrap">
				<div class="logo" :class="{'highlight':totalCount>0}">
					<span class="totalCount" v-show="totalCount > 0">{{totalCount}}</span>
					<span class="txt">购物车</span>
				</div>
			</div>
			<div class="totalPrice">￥{{totalMoney}}</div>
			<div class="extra">另需配送费{{seller.deliveryPrice}}元</div>
		</div>
		<div class="content-right" :class="{'highlight':this.totalMoney >= this.seller.minPrice}">
			{{minPrice}}
		</div>
		<div class="shopLists" v-show="listshow" ref="listcontent">
			<div>
				<div class="list-title">
					<span class="list-left">购物车</span>
					<span class="list-right">清空</span>
				</div>
				<div v-for="good in selectArr">
					<div class="lists-content" >
						<div>{{good.name}}</div>
						<div>￥{{good.count*good.price}}</div>
						<controlcart :food="good"></controlcart>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import controlcart from 'components/controlcart/controlcart'
	import BScroll from 'better-scroll';
	export default {
		props:['seller','select-arr'],
		data(){
			return {
				showen:false
			}
		},
		computed:{
			totalMoney(){
				let totalCash = 0;
				let selectArr = this.selectArr
				for(let i=0;i<selectArr.length;i++){
					totalCash += selectArr[i].count * selectArr[i].price;
				}
				return totalCash;
			},
			totalCount(){
				let totalNum = 0;
				let selectArr = this.selectArr
				for(let i=0;i<selectArr.length;i++){
					totalNum  += selectArr[i].count;
				}
				return totalNum;
			},
			minPrice(){
				let minprice = this.seller.minPrice;
				let totalMoney = this.totalMoney;
				if(this.totalMoney ===0){
					return`${minprice}元起送`;
				}else if(totalMoney>=minprice){
					return '配送';
				}else{
					let diff = minprice - totalMoney
					return `还差${diff}元配送`;
				}
			},
			listshow(){
				let show1 = (this.totalCount > 0);
				return (show1 && this.showen);
			}
		},
		created(){
				this.$nextTick(()=>{
					this.scroll = new BScroll(this.$refs.listcontent,{click:true});
				})
		},
		components:{
			controlcart
		},
		methods:{
			toggelshow(){
				this.showen = !this.showen;
			}
		}
	}
</script>

<style red="stylesheet/stylus" lang="stylus">
	.shopcart-content
		height:50px
		display:flex
		.content-right
			flex:0 0 105px
			width:105px
			height:100%
			background:#2b333b
			font-size:14px
			color:#979a9c
			line-height:50px
			text-align:center
			font-weight:700
			&.highlight
				background:#00b43c
				color:#fff
		.content-left
			flex:1
			height:100%
			.logo-wrap
				display:inline-block
				vertical-align:top
				width:40px
				height:40px
				border-radius:50%
				background:#131d26
				position:relative
				top:-10px
				margin-left:20px
				padding:10px
				font-size:12px
				.logo
					width:100%
					height:100%
					border-radius:50%
					background:#2b343c
					display:table
					position:relative
					.txt
						display:table-cell
						color:#fff
						vertical-align:middle
						font-size:10px
						text-align:center
					.totalCount
						position:absolute
						color:#fff
						display:block
						padding:0px 10px
						border-radius:10px
						background:red
						right:-5px
						top:-4px
				.highlight
					background:#00a0dc
			.totalPrice
				display:inline-block
				color:#979a9c
				height:100%
				line-height:50px
				font-weight:700
			.extra
				display:inline-block
				color:#979a9c
				height:100%
				line-height:50px
				font-size:13px
				margin-left:25px
	.shopLists
		position:absolute
		bottom:100%
		background:#fff
		width:100%
		max-height:200px
		font-size:12px
		z-index:-1
		overflow:auto
		.list-title
			width:100%
			padding:10px 0
			background-color:#ccc
			overflow:hidden
			.list-left
				float:left
				margin-left:15px
			.list-right
				float:right
				margin-right:15px
				color:blue
		.lists-content
			display:flex
			div
				flex:1
				height:40px
				line-height:40px
</style>