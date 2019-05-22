// 导入文件时, 如果没有 ./, 默认从node_modules查找文件
import routesComponent from './routesComponent.js'

//路由配置
export default [

    {
        path: '/',
        name: 'Test',
        component: routesComponent.Test
    },

    {
        path: '/register',
        name: 'Register',
        component: routesComponent.Register
    },

    {
        path: '/login',
        name: 'Login',
        component: routesComponent.Login
    },

    {
        path: '/main',
        name: 'Main',
        component: routesComponent.Main,

        children: [{
                path: '/index',
                name: 'Index',
                component: routesComponent.Index
            },
            {
                path: '/shopping',
                name: 'Shopping',
                component: routesComponent.Shopping
            },
            {
                path: '/address',
                name: 'Address',
                component: routesComponent.Address
            },

            {
                path: '/shopcart',
                name: 'Shopcart',
                component: routesComponent.Shopcart
            },
            {
                path: '/order',
                name: 'Order',
                component: routesComponent.Order
            },

            {
                path: '/my',
                name: 'My',
                component: routesComponent.My
            },

            {
                path: '*',
                redirect: { name: 'Index' }
            }
        ]
    },

    {
        path: '/detail/:pid',
        name: 'Detail',
        component: routesComponent.Detail
    },
    {

        path: '/floorComponent',
        name: 'floorComponent',
        component: routesComponent.floorComponent
    },
    {
        path: '/goodsInfoComponent',
        name: 'goodsInfoComponent',
        component: routesComponent.goodsIinfoComponent
    },
    {
        path: '/shezhibox',
        name: 'SheZhiBox',
        component: routesComponent.SheZhiBox
    },
    {
        path: '/mylogin',
        name: 'Mylogin',
        component: routesComponent.Mylogin
    },
    {
        path: '/zhanhao',
        name: 'Zhanhao',
        component: routesComponent.Zhanhao
    },
    {
        path: '/xiaoxi',
        name: 'Xiaoxi',
        component: routesComponent.Xiaoxi
    }


]