<template>

	<div class="my">
		<top-nav :title="user" :is-has-back="false"></top-nav>

		<van-row>
			<van-col span="24">
				<div class="avatar">
					<div>
						<img class="auto-img" src="../assets/avatar.jpg" />
					</div>
				</div>
			</van-col>

			<van-col class="cell-col" span="24">
				<van-list>
					 <van-cell :title="item.title" v-for="(item, index) in listData" :key="index" @click="goState(item.path)"><van-icon name="arrow" /></van-cell>
				</van-list>
			</van-col>

			<van-col class="logout" span="24">
				<van-button type="danger" size="large">退出</van-button>
			</van-col>
		</van-row>

	</div>

</template>
<script>

	import TopNav from '../components/TopNav'

	import { List, Cell, Button } from 'vant'

	export default {
		name: 'My',

		data() {
			return {
				user: '',

				listData: [
					{title: '我的订单', path: {name: 'Order'}},
					{title: '地址管理', path: {name: 'Address'}},
					{title: '个人信息', path: {name: 'Mylogin'}},
					{title: '设置', path: {name: 'SheZhiBox'}}
				]
			};
		},

		created() {

			var user = localStorage.getItem('userLogin');

			this.user = user == undefined ? '' : JSON.parse(user).userId

		},

		components: {
			'top-nav': TopNav,
			[List.name]: List,
			[Cell.name]: Cell,
			[Button.name]: Button
		},

		methods: {
			goState(path) {
				this.$router.push(path);
			}
		}
	}
</script>

<style lang="less" scoped>
	.avatar{
		width: 3.2rem;
		padding: 0.25rem;
		margin: 1rem auto 0;
		background-color: rgba(65, 184, 131, .3);
		border-radius: 50%;
		>div{
			background-color: #fff;
			border-radius: 50%;
			overflow: hidden;
		}
	}

	.cell-col{
		margin-top: 1rem;
	}

	.logout{
		padding: 2rem 0.4rem 0;
	}
</style>