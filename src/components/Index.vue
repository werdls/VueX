<template>
	<div class="index">

		<!-- 搜索 -->
			<van-search class="search" ref="search" icon="scan" background="#1494e9" placeholder="输入商品名称关键字" />	

		<!-- 广告 -->
		  <div class="banner">
       		 <img v-lazy="adBanner" width="100%">
     	 </div>

		<!-- 商品类型标签 -->
		<van-tabs ref="vtabs" class="vtabs" v-model="active" title-active-color="#1989FA" color="#1989FA" :line-height="2" :swipeable="true" :animated="true">
		  <van-tab title="珠宝" span="3">
		  	<van-row>
		  		<van-col @click.native="goState({name: 'Detail', params: {pid: item.id}})" span="12" class="col-box" v-for="(item, index) in products['zhubao']">
		  			<div><img class="auto-img" :src="item.images.small" /></div>
		  			<div class="product-info">
		  				<p class="title">{{item.name}}</p>
		  				<p class="price">{{item.price}}元</p>
		  			</div>
		  		</van-col>
		  	</van-row>
		  </van-tab>
		  <van-tab title="手机" v-for="(value, index) in types" span="3">
		  	<van-row>
		  		<van-col @click.native="goState({name: 'Detail', params: {pid: item.id}})" span="12" class="col-box" v-for="(item, index) in products['shouji']">
		  			<div><img class="auto-img" :src="item.images.small" /></div>
		  			<div class="product-info">
		  				<p class="title">{{item.name}}</p>
		  				<p class="price">{{item.price}}元</p>
		  			</div>
		  		</van-col>
		  	</van-row>
		  </van-tab>
		  <van-tab title="机器人" v-for="(value, index) in types" span="3">
		  	<van-row>
		  		<van-col @click.native="goState({name: 'Detail', params: {pid: item.id}})" span="12" class="col-box" v-for="(item, index) in products['jiqiren']">
		  			<div><img class="auto-img" :src="item.images.small" /></div>
		  			<div class="product-info">
		  				<p class="title">{{item.name}}</p>
		  				<p class="price">{{item.price}}元</p>
		  			</div>
		  		</van-col>
		  	</van-row>
		  </van-tab>
		  <van-tab title="保温壶" v-for="(value, index) in types" span="3">
		  	<van-row>
		  		<van-col @click.native="goState({name: 'Detail', params: {pid: item.id}})" span="12" class="col-box" v-for="(item, index) in products['baowenhu']">
		  			<div><img class="auto-img" :src="item.images.small" /></div>
		  			<div class="product-info">
		  				<p class="title">{{item.name}}</p>
		  				<p class="price">{{item.price}}元</p>
		  			</div>
		  		</van-col>
		  	</van-row>
		  </van-tab>
		  <van-tab title="体育用品" v-for="(value, index) in types" span="3">
		  	<van-row>
		  		<van-col @click.native="goState({name: 'Detail', params: {pid: item.id}})" span="12" class="col-box" v-for="(item, index) in products['tiyu']">
		  			<div><img class="auto-img" :src="item.images.small" /></div>
		  			<div class="product-info">
		  				<p class="title">{{item.name}}</p>
		  				<p class="price">{{item.price}}元</p>
		  			</div>
		  		</van-col>
		  	</van-row>
		  </van-tab>
		  <van-tab title="汽车" v-for="(value, index) in types" span="3">
		  	<van-row>
		  		<van-col @click.native="goState({name: 'Detail', params: {pid: item.id}})" span="12" class="col-box" v-for="(item, index) in products['qiche']">
		  			<div><img class="auto-img" :src="item.images.small" /></div>
		  			<div class="product-info">
		  				<p class="title">{{item.name}}</p>
		  				<p class="price">{{item.price}}元</p>
		  			</div>
		  		</van-col>
		  	</van-row>
		  </van-tab>
		  <van-tab title="家具" v-for="(value, index) in types" span="3">
		  	<van-row>
		  		<van-col @click.native="goState({name: 'Detail', params: {pid: item.id}})" span="12" class="col-box" v-for="(item, index) in products['jiaju']">
		  			<div><img class="auto-img" :src="item.images.small" /></div>
		  			<div class="product-info">
		  				<p class="title">{{item.name}}</p>
		  				<p class="price">{{item.price}}元</p>
		  			</div>
		  		</van-col>
		  	</van-row>
		  </van-tab>
		  <van-tab title="电脑" v-for="(value, index) in types" span="3">
		  	<van-row>
		  		<van-col @click.native="goState({name: 'Detail', params: {pid: item.id}})" span="12" class="col-box" v-for="(item, index) in products['diannao']">
		  			<div><img class="auto-img" :src="item.images.small" /></div>
		  			<div class="product-info">
		  				<p class="title">{{item.name}}</p>
		  				<p class="price">{{item.price}}元</p>
		  			</div>
		  		</van-col>
		  	</van-row>
		  </van-tab>
		</van-tabs>
	</div>
</template>

<script>

	import { Search, Tab, Tabs, Icon } from 'vant'

	export default {
		name: 'Index',

		data() {
			return {
				adBanner:require("../assets/images/ad/ad.gif"),

				active: 0,

				//商品所有类型
				types: [],

				//所有类型商品 { 类型: [{当前类型商品1}, {当前类型商品2}])
				products: {
					
				}

			};
		},

		components: {
			[Search.name]: Search,
			[Tab.name]: Tab,
			[Tabs.name]: Tabs,
			[Icon.name]: Icon
		},

		//初始化数据
		created() {

			//获取本地存储商品类型
			this.types = JSON.parse(localStorage.getItem('types'));

			//获取本地存储商品信息
			var products = JSON.parse(localStorage.getItem('products'));

			//通过类型查找商品
			//遍历类型
			this.types.types.forEach(v1 => {

				this.products[v1.type] = [];

				//遍历商品
				products.products.forEach(v2 => {
					//如果类型一致, 则将该类型添加到当前类型数组中
					if (v1.type == v2.type) {
						this.products[v1.type].push(v2);
					}

				})

			})

		},

		//节点渲染完成后
		mounted() {

			var search = this.$refs.search;
			var searchHeight = getComputedStyle(search).height;

			this.offsetTop = parseFloat(searchHeight)
			
			var vtabs = this.$refs.vtabs.$el.firstChild;
			vtabs.style.position = 'sticky';
			vtabs.style.top = searchHeight;
		},


		methods: {

			goState(path) {
				this.$router.push(path);
			}

		}

	}
</script>

<style lang="less" scoped>

	.body{
		margin: 0;
		padding: 0;
	}
	.search{
		position: sticky;
		z-index: 100;
		top: 0;
		height:1.4333rem;
	}
	.banner img{
		padding-top: 0.433rem;
		padding-bottom: 0.433rem;

	}
	.vtabs {
		position: relative;
	}
	.van-tabs--line{
		padding-top: 0;
	}
	

	.col-box{
		padding: 0.2133rem;

		.product-info{
			text-align: center;
			.title{
				color: rgb(65, 62, 62);
				margin-top: 0.2666rem;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}
			.price{
				color: #1494e9;
				margin-top: 0.2666rem;
			}
		}
	}
</style>