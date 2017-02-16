// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Goods from 'components/goods/goods';
import Ratings from 'components/ratings/ratings';
import Seller from 'components/seller/seller';

Vue.use(VueRouter);

const routers = [
	{
		path:'/goods',
		component:Goods
	},
	{
		path:'/ratings',
		component:Ratings

	},
	{
		path:'/seller',
		component:Seller
	}
]
let router = new VueRouter({
	routes:routers,
	linkActiveClass:'active'
});

new Vue({
	el:'#app',
	components:{
		App
	},
	router:router
});
router.push('/goods');

