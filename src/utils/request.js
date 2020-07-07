import axios from "axios";
import qs from "qs";
import config from './config';
import Vue from 'vue';
import { Notify } from 'vant';
Vue.use(Notify);
const request = axios.create({
        baseURL: config.apiUrl, //api的base_url
        timeout: 50000
    })
    // let Authorization = sessionStorage.getItem("Authorization");
axios.defaults.headers = {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    }
    // axios.defaults.withCredentials = true;	// 让ajax携带cookie

request.interceptors.request.use((config) => {
    config.method === 'post' ?
        config.body = qs.stringify({...config.data }) :
        config.params = {...config.data };
    // config.headers.Authorization = Authorization;
    if (sessionStorage.getItem('Authorization')) {
        config.headers['Authorization'] = sessionStorage.getItem('Authorization')
    }
    return config
}, error => {
    Notify({ type: 'success', message: error });
    Promise.reject(error);
})

request.interceptors.response.use(
    response => {
        const res = response.data;
        if (res.status === 200000 && res.status === 400000) {
            console.log(1)
            return response.data;
        } else {
            // Notify({ type: 'success', message: res.msg });
            return response.data;
        }
    },
    error => {
        console.log('err' + error) // for debug
        Notify({ type: 'danger', message: '请求服务器失败，请检查服务是否正常！' });
        return Promise.reject(error)
    }
)

export default request;