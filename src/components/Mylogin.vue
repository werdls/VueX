<template>
	<div class="index">
					
		<van-nav-bar title="个人信息">
			<van-button size="small" icon="arrow-left" slot="left" to='My'>
				<van-icon name="arrow-left" size="0.433rem">返回</van-icon>
			</van-button>
			<van-icon name="photograph" slot="right" size="0.54333rem" />
		</van-nav-bar>

		<div class="box-name">
			<div class="box-img" >
				<!-- <van-icon name="manager" size="2rem" class="icon"/> -->
				<img src="../assets/images/category/timg.jpg" style="width:2.6666rem;border-radius: 50%;">
			</div>
			<ul class="box-pear">
				<li>用户名：<span>朱砂菌</span></li>
				<li>账号：<span>15300000000</span></li>				
			</ul>
			<li class="li-1"><van-icon name="qr" size="1rem" class="icon"/></li>
			<li class="li-2"><van-icon name="edit" size="0.75rem" class="icon"/></li>
		</div>
		<div class="zhifu">
			<van-cell title="支 付" icon="wechat" is-link />
		</div>
		<div>
			<van-cell title="收藏" icon="send-gift" is-link />
			<van-cell title="相册" icon="photo" is-link />
			<van-cell title="卡包" icon="card" is-link />
			<van-cell title="地址" icon="map-marked" is-link to="Address"/>
		</div>
		<div class="shezhi">
			<van-cell title="设置" icon="setting" is-link to="/SheZhiBox" />
		</div>
	</div>
</template>
<script>
	import { NavBar, Button } from 'vant'
	export default {
	
		name: 'Mylogin',
		data(){
			return{

			}
		},
		components: {
			[NavBar.name]: NavBar,
			[Button.name]: Button

			
			
		},
	}
</script>

<style lang="less" scoped>
	.index{
		margin: 0;
		padding: 0;
		height: 100%;
		background-color: rgb(218, 206, 206);	
	}
	.box-name{
		width: 100%;
		height: 6rem;
		background-color: aquamarine;
		position: relative;
	}
	.box-img{
		position: absolute;
		width: 2.666rem;
		height: 2.666rem;
		margin: 0.8rem 3.64rem;
	}
	.box-pear{
		position: absolute;
		top: 3.8rem;
		left: 1.33333rem;
		li{
			font-weight: 700;
			font-size: 0.42666rem;
			margin-top: 0.2666rem;
		}		
	}
	.li-1{
		position: absolute;
		right: 1.3333rem;
		top: 4.166rem;
		list-style: none;
	}
	.li-2{
		position: absolute;
		right: 0.4rem;
		top: 0.2666rem;
		list-style: none;
	 }
	 .zhifu{
		 margin: 0.266rem auto;
	 }
	 .shezhi{
		 margin: 0.2666rem auto;
		 padding-bottom: 2.443rem;
	 }

</style>