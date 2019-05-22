<template>
	<div class="index">
					
		<van-nav-bar title="账号与安全">
			<van-button size="small" icon="arrow-left" slot="left" to='SheZhiBox'>
				<van-icon name="arrow-left" size="0.433rem">返回</van-icon>
			</van-button>
		</van-nav-bar>

		<div class="zhifu">
			<van-cell title="用户号" value="Stx88520" is-link />
            <van-cell title="手机号" icon="phone-o" value="15300000000" is-link />
		</div>
		<div>	
			<van-cell title="用户密码" is-link />
			<van-cell title="声音锁" is-link />			
		</div>
		<div class="shezhi">
            <van-cell title="应急联系人"  is-link />
			<van-cell title="登录设备管理"  is-link />
			<van-cell title="更多安全设置"  is-link />
		
            <van-panel title="微信安全中心" desc="如果你遇到微信被盗，无法登录等问题，可以前往安全中心"> 
                <van-icon name="arrow" slot="rigth"></van-icon>   
            </van-panel>
        </div>
	</div>
</template>
<script>
	import { NavBar, Button ,Panel } from 'vant'
	export default {
	
		name: 'Zhanhao',
		data(){
			return{

			}
		},
		components: {
			[NavBar.name]: NavBar,
			[Button.name]: Button,
			[Panel.name]: Panel,

			
			
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
				
    }
	
	 .zhifu{
		 margin: 0.266rem auto;
	 }
	 .shezhi{
		 margin: 0.2666rem auto;
		 padding-bottom: 5.543rem;
	 }

</style>