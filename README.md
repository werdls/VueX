## 用户列表 users = [user1, user2, ...]
```javascript
user1 : {
	uid: '用户id',
	phone: '手机号用户登录账号',
	pwd: '用户密码',
	registerTime: '注册时间 2019-03-10 12:10:19'
}
```
运行方式：
	npm run serve

需要同时运行
	https：//werdls.github.io/Axios  中的文件夹
## vue-axios
```txt
官方 https://www.npmjs.com/package/vue-axios

安装 axios vue-axios
npm i axios vue-axios -S

在main.js使用 vue-axios
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

以上配置完成后可以在其他组件使用axios
this.axios(options)
this.$http(options)

vue-axios: ajax请求, 返回一盒promise

axios({
	methods: 请求类型, //(get 或者 post)

	data: 参数字符串或者对象 //name=kevin&age=10,

	url: 请求路径
}).then(result => {
		//请求成功后, 响应数据保存在回调函数第一个参数中

	})
	.catch((err) => {
			//请求失败
		})

```

### 多个点击事件
```txt
原生点击
@click.native

```

```txt
保存用户登录状态
loginInfo: {
	userid: 手机号,
	loginStatus: true
}
```

```txt
购物车
{
id: 商品id
type: 商品类型
name: 商品名称
price: 商品价格
count: 商品数量
color: 商品规格
time: 添加时间
thumbnail: 商品缩图片
userId: 用户id
}

```

```
window.onload = function () {
	//调用时this才会指向
}

window.onload = () => {

	//箭头函数的this在定义时已经指向

}
```

```txt
逻辑删除: 假删
物理删除: 真删
```
