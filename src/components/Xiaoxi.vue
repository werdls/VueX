<template>
	<div class="index">
		<van-nav-bar title="新消息提醒">
			<van-button size="small" icon="arrow-left" slot="left" to='SheZhiBox'>
				<van-icon name="arrow-left" size="0.433rem">返回</van-icon>
			</van-button>
		</van-nav-bar>		
		<div class="zhifu">
            <van-cell-group>
                <van-switch-cell v-model="checked" active-color="#00FF00" title="接收新消息通知" />
                <van-switch-cell v-model="checked" active-color="#00FF00" title="接收语音和视频通话邀请通知"/>
            </van-cell-group>
        </div>
        <div>
            <van-panel title="通知显示消息详情" desc="关闭后，当收到微信消息时，通知提示将不显示发信人和内容摘要。"> 
                
            </van-panel>
        </div>
        <div class="shezhi">
            <van-cell-group>
                <van-switch-cell v-model="checked" active-color="#00FF00" title="声音" />
                <van-cell title="新消息提示音" value="Whistle" is-link />
                <van-switch-cell v-model="checked" active-color="#00FF00" title="振动"/>
            </van-cell-group>
        </div>
	</div>
</template>
<script>
	import {SwitchCell,Button,NavBar,Panel,Switch} from 'vant'
	export default {
	
		name: 'Xiaoxi',
		data(){
			return{
                checked: true,
			}
		},
		components: {
			[SwitchCell.name]: SwitchCell,
            [Button.name]: Button,
			[NavBar.name]: NavBar,
            [Panel.name]: Panel,
            [Switch.name]: Switch,
            

			
			
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
		 padding-bottom: 6.833rem;
	 }

</style>