import Vue from 'vue';
// import axios from 'axios';

// 1. 引入vue-router
import VueRouter from "vue-router";

// 2. 使用vue-router（script标签引入方式自动完成）
Vue.use(VueRouter);

// 引入路由配置参数
import routers from './routers';

// 3. 实例化router并配置参数
let router = new VueRouter({
    //mode: 'hash' 
    // 配置参数:不同的 URL 显示不同的内容  
    routes: routers
});

const OPEN_LOGIN = 'openLogin'

// router.beforeEach((to, from, next) => {
//     const Authorization = sessionStorage.getItem('Authorization');
//     if (to.name === OPEN_LOGIN) {
//         next()
//     } else if (!Authorization && to.name !== OPEN_LOGIN) {
//         // 未登录且要跳转的页面不是登录页
//         next({
//             name: OPEN_LOGIN // 跳转到登录页
//         })
//     } else if (!Authorization && to.name === OPEN_LOGIN) {
//         // 未登陆且要跳转的页面是登录页
//         next() // 跳转
//     } else if (Authorization && to.name === OPEN_LOGIN) {
//         // 已登录且要跳转的页面是登录页
//         next({
//             name: 'home' // 跳转到home页
//         })
//     } else {
//         next()
//     }
// })


export default router;