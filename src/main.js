import Vue from 'vue'
import App from './App.vue'
// import { baseUrl } from './config.js';
// Vue.prototype.$baseUrl = baseUrl;
Vue.config.productionTip = false

import router from './routers';
import './assets/css/base.css';

//把 axios 写入Vue的原型，成为Vue的属性 在任何地方都可以使用了
import axios from 'axios';
Vue.prototype.$axios = axios;
const myAxios = axios.create()
import 'amfe-flexible/index.js'

// import { DropdownMenu, DropdownItem } from 'vant';
// Vue.use(DropdownMenu).use(DropdownItem);
import store from './store/index';

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')