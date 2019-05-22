import 'lib-flexible/flexible.js'

import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'


//导入vant ui库
// import Vant from 'vant'

//全局使用vant组件
//导入vant 组件
// import { Button, Switch } from 'vant'

//使用Button组件 //使用Switch组件
// Vue.use(Button).use(Switch)




import {
    Row,
    Col,
    Button,
    Toast,
    Swipe,
    SwipeItem,
    Lazyload,
    List,
    Tabbar,
    TabbarItem,
    Tab,
    Tabs,
    Icon,
    Cell,
    CellGroup,
    Checkbox,
    CheckboxGroup,
    Card,
    SubmitBar,
    GoodsAction,
    GoodsActionBigBtn,
    GoodsActionMiniBtn
} from 'vant'
Vue.use(Row).use(Col).use(Button).use(Swipe).use(SwipeItem).use(Lazyload).use(List)
    .use(Tabbar).use(TabbarItem).use(Tab).use(Tabs).use(Icon).use(Cell).use(CellGroup)
    .use(Checkbox).use(CheckboxGroup).use(Card).use(SubmitBar).use(Toast)
    .use(GoodsAction).use(GoodsActionBigBtn).use(GoodsActionMiniBtn).use(VueAxios, axios)

Vue.config.productionTip = false

//导入路由
import router from './router/index.js'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')