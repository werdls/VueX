<template>
	<div class="main">
		
		<div>

			<!-- 二级路由 -->
			<router-view></router-view>
			
		</div>

		<!-- 标签导航 -->
		<van-tabbar class="tabbar" v-model="active">
		  <van-tabbar-item :icon="item.icon" v-for="(item, index) in tabs" :key="index"
		   @click="goState(item.path)">{{item.title}}</van-tabbar-item>
		</van-tabbar>

	</div>
</template>

<script>

	//导入组件
	import { Tabbar, TabbarItem } from 'vant'

	export default {
		name: 'Main',

		data() {
			return {
				active: 0,

				tabs: [
					{title: '首页', icon: 'home-o', path: {name: 'Shopping'}},
					{title: '商品', icon: 'shop-collect-o', path: {name: 'Index'}},
					{title: '购物车', icon: 'shopping-cart-o', path:{name: 'Shopcart'}},	
					{title: '登录', icon: 'user-o', path: {name: 'Login'}},
					{title: '我的', icon: 'manager-o', path: {name: 'My'}}
				]
			};
		},

		components: {

			[Tabbar.name]: Tabbar,

			[TabbarItem.name]: TabbarItem

		},

		methods: {
			goState(path) {
				this.$router.push(path);
			}
		},

		created() {
			var active = this.$route.query.active
			this.active = active == undefined ? 0 : Number(active);
		}
	}
</script>

<style lang="less" scoped>
	.main{
		padding-bottom: 1.33333rem;
		.tabbar{
			max-width: 640PX;
			margin: 0 auto;
			right: 0;
			z-index: 9999;
		}
	}
</style>