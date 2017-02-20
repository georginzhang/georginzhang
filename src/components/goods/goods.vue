<template>
	<div class="goods">
		<div class="menu-content" ref="menucontent">
			<ul class="menu-lists">
				<li v-for="(item,index) in goods" class="menu-list" :class="{'current':currentIndex == index}" @click="choseMenu(index,$event)">
					<span class="text">{{item.name}}</span>
				</li>
			</ul>
		</div>
		<div class="foods-content" ref="foodscontent">
			<ul class="foods-lists">
				<li v-for="item in goods" class="good-list">
					<h1 class="title">{{item.name}}</h1>
					<ul>
						<li v-for="food in item.foods">
							<div class="goodsWrap">
								<div class="good-pic">
									<img :src="food.icon">
								</div>
								<div class="good-txt">
									<h1 class="name">{{food.name}}</h1>
									<p class="desc">{{food.description}}</p>
									<div class="extra">
										<span>月售 {{food.sellCount}}</span>
										<span>好评率 {{food.rating}} %</span>
									</div>
									<div class="prices">
										<span class="new-pics">￥ {{food.price}}</span>
										<span class="old-pics" v-show="food.oldPrice">￥ {{food.oldPrice}}</span>
									<div class="control">
										<controlcart :food="food"></controlcart>
									</div>
									</div>
								</div>
							</div>
							
						</li>
					</ul>
				</li>
			</ul>
		</div>
		<div  class="shopcart">
			<shopcart :select-arr="goodsArr" :seller="seller"></shopcart>
		</div>
	</div>	
</template>

<script type="text/ecmascript-6">
	import BScroll from 'better-scroll';
	import shopcart from 'components/shopcart/shopcart';
	import controlcart from 'components/controlcart/controlcart'
	export default{
		data () {
			return {
				goods:[],
				heights:[],
				scrollY:0
			}
		},
		props:['seller'],
		created(){
			this.$http.get('/api/goods').then((res) => {
				this.goods = res.body.data;
				this.$nextTick(()=>{
					this._initScroll();
					this._initHeight();
				});
			});
		},
		computed:{
			currentIndex(){
				for(let i=0;i<this.heights.length;i++){
					let height1 = this.heights[i];
					let height2 = this.heights[i+1];
					if(!height2 || this.scrollY >= height1 && this.scrollY < height2){
						return i
					}
				}
			},
			goodsArr(){
				let foods=[];
				this.goods.forEach((good)=>{
					good.foods.forEach((goodItem)=>{
						if(goodItem.count){
							foods.push(goodItem);
						}
					})
				});
				return foods;
			}
		},
		methods:{
			_initScroll(){
				this.menuScroll = new BScroll(this.$refs.menucontent,{
					click:true
				});
				this.foodsScroll = new BScroll(this.$refs.foodscontent,{
					probeType:3,
					click:true
				});
				this.foodsScroll.on('scroll',(pos)=>{
					this.scrollY = Math.abs(Math.round(pos.y));
				})
			},
			_initHeight(){
				let scrollLists = this.$refs.foodscontent.getElementsByClassName('good-list');
				let height = 0;
				this.heights.push(0);
				for(let i=0;i<scrollLists.length;i++){
					let item = scrollLists[i];
					height += item.clientHeight;
					this.heights.push(height);
				}
			},
			choseMenu(index,event){
				if(!event._constructed){
					return ;
				}
				let scrollLists = this.$refs.foodscontent.getElementsByClassName('good-list');
				let el = scrollLists[index];
				this.foodsScroll.scrollToElement(el,300);
			}
		},
		components:{
			shopcart,
			controlcart
		}
	}
</script>

<style red="stylesheet/stylus" lang="stylus">
	@import '../../assets/style/common'
	.goods
		display:flex
		position:absolute
		top:147px
		bottom:52px
		width:100%
		overflow:hidden;
		.menu-content
			flex:0 0 80px
			width:80px
			background:#f3f5f7
		.foods-content
			flex:1
		.menu-list
			display:table
			height:54px
			width:56px
			padding:0 12px
			.text
				display:table-cell
				vertical-align:middle
				width:56px
				font-size:12px
	.foods-lists
		.title
			font-size:14px
			color:#999;	
			padding:4px 0
			border-left:2px solid #ccc	
			text-indent:10px
			background-color:#f1f1f1	
		.goodsWrap
			margin:12px
			display:flex
			.good-pic
				img
					width:57px
					height:57px
					border-radius:4px
			.good-txt
				flex:1
				margin-left:6px
				.name
					font-size:12px
				.extra
					font-size:12px	
				.prices
					font-size:12px
					margin-top:5px
	.current
		background:#fff;
	.shopcart
		position:fixed
		bottom:0
		left:0
		height:50px
		background:#131d26
		width:100%
	.control
		display:inline-block
		margin-left:25px
</style>