<template>
	<div class="detail">
		
		<top-nav :title="title" :active="$route.query.active || -1"></top-nav>

		<van-row>
			<van-col span="24">
				<img class="auto-img" :src="currentProduct.images.large" />
			</van-col>
			<van-col span="24">
				<van-row class="detail-box">
					<van-col span="24">
						<div class="pname">{{currentProduct.name}}</div>
					</van-col>
					<van-col span="24">
						<div class="desc">{{currentProduct.desc}}</div>
					</van-col>
					<van-col span="24">
						<div class="price">{{currentProduct.price}}元</div>
					</van-col>
				</van-row>
			</van-col>
		</van-row>

		<van-goods-action>

		  <van-goods-action-big-btn @click="addOrBuy(0)" text="加入购物车" />

		  <van-goods-action-big-btn @click="addOrBuy(1)" primary text="立即购买" />

		</van-goods-action>


		<van-sku
          v-model="showBase"
          :sku="skuData.sku"
          :goods="skuData.goods_info"
          :hide-stock="skuData.sku.hide_stock"
          reset-stepper-on-hide
          reset-selected-sku-on-hide
          disable-stepper-input
          :show-add-cart-btn="false"
          :close-on-click-overlay="closeOnClickOverlay"
          @buy-clicked="onBuyClicked"
        >
        <!-- 自定义 sku actions -->
        <template slot="sku-actions" slot-scope="props">
          <div class="van-sku-actions">
            <!-- 直接触发 sku 内部事件，通过内部事件执行 onBuyClicked 回调 -->
            <van-button type="primary" bottom-action @click="props.skuEventBus.$emit('sku:buy')">{{text == 0 ? '加入购物车' : '立即购买'}}</van-button>
          </div>
        </template>
     </van-sku>
		
	</div>
</template>

<script>

	import { Button, GoodsAction, GoodsActionBigBtn, Sku } from 'vant'
	import TopNav from '../components/TopNav'
	import skuData from '../data/vdata.js'
	import tool from '../utils/tool.js'
	export default {
		name: 'Detail',

		data() {
			this.skuData = skuData;
			return {
				//用户登录状态	
				userLoginStatus: null,

				//0: 加入购物车, 1: 购买
	      text: 0,

	      title: '商品详情',

	      showBase: false,
	      closeOnClickOverlay: true,
			};
		},

		components: {

			[GoodsAction.name]: GoodsAction,
			[GoodsActionBigBtn.name]: GoodsActionBigBtn,
			[Sku.name]: Sku,
			[Button.name]: Button,
			'top-nav': TopNav

		},

		created() {

			var products = JSON.parse(localStorage.getItem('products'));

			for (var i = 0; i < products.products.length; i++) {
				if (this.$route.params.pid == products.products[i].id) {

					this.currentProduct = products.products[i]

					break;
				}
			}

			// console.log('this.skuData ==> ', this.skuData);
			// console.log('this.currentProduct ==> ', this.currentProduct);

			this.skuData.goods_info = {
				picture: this.currentProduct.images.large,
				title: this.currentProduct.name
			}

			this.skuData.sku.list[0].goods_id = this.currentProduct.id;
			this.skuData.sku.list[0].price = this.currentProduct.price * 100;

			this.skuData.sku.tree[0].v[0].name = this.currentProduct.color[0];

			//获取用户登录状态
			var userLogin = localStorage.getItem('userLogin');
			this.userLoginStatus = userLogin == undefined ? null : JSON.parse(userLogin);


		},

		methods: {

    	//添加购物车或者购买
    	addOrBuy(text) {

    		if (!this.userLoginStatus) {
    			//如果未登录, 提示用户登录
    			this.$toast('您尚未登录');
    		} else if (this.userLoginStatus.loginStatus) {

    			//text: 0, 1
    			this.text = text;

    			//显示sku面板
    			this.showBase = true;

    		}

    	},

    	onBuyClicked(data) {
	      console.log('data ==> ', data);
	      //逻辑...
	      var shopcartData = localStorage.getItem('shopcart'); //[{}, {}]

	      shopcartData = shopcartData == undefined ? [] : JSON.parse(shopcartData);

	      var currentProduct = {
	      	userId: this.userLoginStatus.userId,
	      	id: this.currentProduct.id,
	      	name: this.currentProduct.name,
	      	color: this.currentProduct.color[0],
	      	price: this.currentProduct.price,
	      	type: this.currentProduct.type,
	      	count: data.selectedNum,
	      	thumbnail: this.currentProduct.images.small,
	      	time: tool.format(new Date(), 'yyyy-MM-dd hh:mm:ss')
	      };

	      shopcartData.push(currentProduct);

	      localStorage.setItem('shopcart', JSON.stringify(shopcartData));

	      this.showBase = false;
    	}

		}
	}
</script>

<style lang="less" scoped>

	.detail-box{
		padding: 0 0.4rem;
		.desc{
			color: #aaa;
		}
		.pname{
			padding-top: 0.4rem;
			padding-bottom: 0.4rem;
			font-size: 0.64rem;
		}
		.price{
			padding-top: 0.4rem;
			color: #e4393c;
			font-size: 0.48rem;
		}
	}
	
</style>