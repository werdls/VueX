<template>
	<div class="orders">
		<top-nav title="我的订单"></top-nav>

		<div class="not-order" v-if="orderCode.length == 0">没有订单数据！</div>
		<div class="order" v-for="(item, index) in orderCode" :key="index">
			<div class="clearfix top">
				<div class="fl t">订单编号: {{item}}</div>
				<div class="fr clearfix">
					<span class="fl t">{{orderTime[index]}}</span>
					<span class="fl icon-del" @click="removeOrder(index, item)"><van-icon name="delete" /></span>
				</div>
			</div>

			<div>
				<van-card
				  :num="item1.count"
				  :price="item1.price" 
				  :title="item1.name"
				  v-for="(item1, index1) in orderDatas[item]"
				  :key="index1"
				  :thumb="item1.thumbnail"
				  @click="goState(item1.id)"
				 />
			</div>
		</div>

	</div>
</template>

<script>
	import TopNav from '../components/TopNav'

	import { Card, Button } from 'vant'

	export default {
		name: 'Order',

		data() {

			return {
				//当前用户的订单信息
				orderDatas: {
					
				},

				//当前用户的订单编号
				orderCode: [
					
				],

				orderTime: []
			};
			
		},
		components: {
			'top-nav': TopNav,
			[Card.name]: Card,
			[Button.name]: Button
		},

		created() {

			//订单数据
			var orderData = localStorage.getItem('order');

			orderData = orderData == undefined ? [] : JSON.parse(orderData);

			if (orderData.length === 0) {
				return;
			}

			//筛选当前用户的订单, 再根据订单编号进行筛选
			/*
				{
					订单编号1: [{}, {}, {}],

					订单编号2: [{}, {}, {}]
				}
			*/ 
			//获取用户登录状态
			var userLogin = JSON.parse(localStorage.getItem('userLogin'));


			orderData.forEach(v => {
				if (v.userId == userLogin.userId) {
					var arr = [];
					if (this.orderCode.indexOf(v.orderId) === -1) {
						this.orderCode.push(v.orderId);
						this.orderTime.push(v.orderTime);

						//筛选订单编号的商品
						orderData.forEach(v1 => {
							if (v1.orderId == v.orderId) {
								arr.push(v1)
							}
						})

						this.orderDatas[v.orderId] = arr;

					}

				}

			})	


			console.log(this.orderDatas)

		},

		methods: {

			//跳转到详情
			goState(pid) {
				this.$router.push({name: 'Detail', params: {pid}});
			},

			//删除订单
			removeOrder(index, orderId) {

				//index: 下标
				//orderId: 订单id

				this.orderCode.splice(index, 1);

				this.orderTime.splice(index, 1);

				delete this.orderDatas[orderId];


				//在本地存储移除当前用户的订单
				var userId = JSON.parse(localStorage.getItem('userLogin')).userId;

				//获取本地存储订单数据
				var allOrderDatas = JSON.parse(localStorage.getItem('order'));

				for (var i = 0; i < allOrderDatas.length; i++) {
					if (orderId == allOrderDatas[i].orderId && userId == allOrderDatas[i].userId) {
						allOrderDatas.splice(i, 1);
						i--;
					}
				}

				localStorage.setItem('order', JSON.stringify(allOrderDatas));

			}


		}
	}
</script>

<style lang="less" scoped>
	.order .top{
		padding: 0.4rem;
	}

	.t{
		color: #aaa;
		font-size: 12PX;
	}

	.icon-del{
		margin-left: 0.4rem;
		font-size: 16PX;
		color: #e4393c;
	}

	.not-order{
		color: #aaa;
		font-size: 18PX;
		text-align: center;
		padding: 0.4rem 0;
	}
</style>