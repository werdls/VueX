<template>
	
	<div class="register">
		<div class="nav">
			<router-link :to="{name: 'Shopping'}" class="login-left">首页</router-link>
			<router-link :to="{name: 'Login'}" class="login-text">登录</router-link>
		</div>
		
		<div class="logo">
			<img class="auto-img" src="http://127.0.0.1:8081/images/login.png" />
		</div>
		<van-row>
			<van-col offset="2" span="20">
				<van-cell-group>
					<van-field label="手机号" v-model="userInfo.phone" placeholder="输入手机号" />
					<van-field type="password" label="密码" v-model="userInfo.pwd" placeholder="密码(8-16位)" />

					<van-field type="password" label="确认密码" v-model="userInfo.repwd" placeholder="确认密码" />

					<van-field label="短信验证码" v-model="userInfo.validcode">
						<van-button slot="button" size="small" type="primary" @click="sendValidCode" :disabled="isDisabled">{{validCodeText}}</van-button>
					</van-field>
					
				</van-cell-group>

				<van-button class="register-btn" size="large" type="info" @click="regitser">注册</van-button>

			</van-col>
		</van-row>

	</div>

</template>

<script>
	import Vue from 'vue'
	import { CellGroup, Field, Button} from 'vant'

	import validForm from '../utils/validForm.js'

	import tip from '../utils/tip.js'

	import tool from '../utils/tool.js'

	export default {

		name: 'Register',

		data() {
			return {

				//随机生成验证码
				validCode: '',

				validCodeText: '发送验证码',

				isDisabled: false,

				//用户列表
				users: null,

				//用户信息
				userInfo: {
					phone: '',
					pwd: '',
					repwd: '',
					validcode: ''
				}
			}
		},

		components: {
			[CellGroup.name]: CellGroup,
			[Field.name]: Field,
			[Button.name]: Button
		},

		methods: {
			//注册
			regitser() {

				//验证手机号
				if (!validForm.validPhone(this.userInfo.phone)) {

					tip.dialogTip('手机号码不正确', true, this.userInfo, 'phone');

				} else if (!validForm.validPwd(this.userInfo.pwd, 8, 16)) {
					//验证密码

					tip.dialogTip('密码只支持!@._字母数字组合', true, this.userInfo, 'pwd');


				} else if (!validForm.validEqual(this.userInfo.pwd, this.userInfo.repwd)) {
					//验证密码

					tip.dialogTip('两次密码不一致', true, this.userInfo, 'repwd');

				} else if (!validForm.validEqual(this.userInfo.validcode, this.validCode) || this.userInfo.validcode.length < 6) {

					//验证密码
					tip.dialogTip('验证码不正确', true, this.userInfo, 'validcode');

				} else {
					//存储之前需要验是否存在该用户
					for (var i = 0; i < this.users.length; i++) {

						if (this.users[i].phone == this.userInfo.phone) {
							tip.dialogTip('该手机号已被注册');
							return;
						}

					}

					//如果不存在该用户, 添加一个用户到用户列表users
					//生成用户id
					var time = new Date();
					var uid = 'vue' + time.getTime();
					var phone = this.userInfo.phone;
					var pwd = this.userInfo.pwd;
					var registerTime = tool.format(time, 'yyyy-MM-dd hh:mm:ss');

					var user = {
						uid,
						phone,
						pwd,
						registerTime
					};

					this.users.push(user);
					var usersData = JSON.stringify(this.users);

					//写入本地存储users
					localStorage.setItem('users', usersData);

					//跳转到登录组件
					this.$router.push({name: 'Login'});


				}

			},

			//发送验证码
			sendValidCode() {

				if (!validForm.validPhone(this.userInfo.phone)) {
					// Dialog.alert({
					// 	title: '手机号码不正确'
					// }).then(() => {
					// 	this.userInfo.phone = '';
					// })

					tip.dialogTip('手机号码不正确', true, this.userInfo, 'phone');
				} else {

					this.isDisabled = true;

					//60秒后自动恢复
					var time = 5;

					this.validCodeText = time + 's后重新发送';

					var timer = setInterval(() => {

						if (time <= 0) {

							this.isDisabled = false;

							this.validCodeText = '发送验证码';

							//清除定时器
							clearInterval(timer);
							time = null;

						} else {

							this.validCodeText = --time + 's后重新发送';

						}

					}, 1000)

					//发送验证码
					this.validCode = validForm.generateValidCode();
					this.$toast('验证码是：' + this.validCode);
				}

				
			}

		},

		created() {

			var userData = localStorage.getItem('users');

			this.users = userData == undefined ? [] : JSON.parse(userData);

		}

	}
</script>

<style lang="less" scoped>
	.register-btn{
		margin-top: 1.3333rem;
	}
	.logo{
		width: 10rem;
		margin-bottom:0.733rem;
	}
	.nav{
		height: 1.3333rem;
		background-image: linear-gradient(to right, #62AAF5 0%, #1989FA 100%);
		margin-bottom:  1.3333rem;
		.login-text{
			float: right;
			font-size: 14PX;
			color: #fff;
			line-height: 1.3333rem;
			margin-right: 0.5333rem;
		}
		.login-left{
			float: left;
			font-size: 14PX;
			color: #fff;
			line-height: 1.3333rem;
			margin-left: 0.5333rem;
		}
	}
</style>