<template>
  <div id="app-content">
   	<v-header :seller="seller"></v-header>
    <div class="tab">
    	<div>
    		<router-link to="/goods">商品</router-link>
    	</div>
    	<div>
    		<router-link to="/ratings">评论</router-link>
    	</div>
    	<div>
    		<router-link to="/seller">商家</router-link>
    	</div>
    </div>
    <router-view></router-view>
    <div class="content">content</div>
	</div>
</template>
<script type="text/ecmascript-6">
	import header from './components/header/header.vue';
	export default {
		components:{
			'v-header':header
		},
		data () {
			return {
				seller:{}
			}
		},
		created () {
			this.$http.get('/api/seller').then((res)=>{
				this.seller = res.body.data;
			})
		}
	};
</script>
<style lang="stylus" rel="stylesheet/stylus">
	@import "./assets/style/mixfix.styl"
	*
		margin:0
		padding:0
		font-family:'微软雅黑'
	.tab
		display:flex
		height:40px
		line-height:40px
		border-1px(#ccc)
		div
			flex:1
			text-align:center
			& > a
				display:block
				text-decoration:none
				font-size:14px
				color:rgb(77,85,93)
				&.active
					color:rgb(240,20,20)

</style>
