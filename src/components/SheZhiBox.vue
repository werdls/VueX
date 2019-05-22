<template>
	<div class="index">
		
			<div class="nav">
				<router-link :to="{name: 'My'}" class="register-left">返回</router-link>
			</div>
			
		<div class="box-name">
			
		</div>
		<div class="box-1">
			<van-cell title="账号与安全" is-link to="Zhanhao"/>
		</div>
		<div class="box-2">
			<van-cell title="新信息提醒" is-link to="Xiaoxi" />
			<van-cell title="勿扰模式" is-link />
			<van-cell title="聊天" is-link />
			<van-cell title="隐私" is-link />
            <van-cell title="通用" is-link />
		</div>
		<div class="box-3">
			<van-cell title="关于微信" is-link />
			<van-cell title="帮助与反馈" is-link />
		</div>
        <div class="box-4">
			<van-cell title="插件" is-link icon="bulb-o"/>
		</div>
        <div class="box-5">
			<van-cell title="切换账号" is-link />
			<van-cell title="退出" is-link />
		</div>

	</div>
</template>
<script>
    import { NavBar } from 'vant'
    
	export default {
	
		name: 'SheZhiBox',
		data(){
			return{

			}
        },
		components: {
			[NavBar.name]: NavBar
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
    .box-1,.box-2, .box-3, .box-4, .box-5{
        margin-bottom: 0.3333rem;
    }
    .box-5{
        margin-bottom: 2.2933rem;
	}
	.nav{
		height: 1.3333rem;
		background-image: linear-gradient(to right, #62AAF5 0%, #1989FA 100%);

		.register-left{
			float: left;
			font-size: 14PX;
			color: #fff;
			line-height: 1.3333rem;
			margin-left: 0.5333rem;
		}
	}
</style>