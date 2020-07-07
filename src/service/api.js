import request from '@/utils/request';
export function intercept(url, params) {
    return request({
        url: url,
        method: 'POST',
        data: params
    })
}
export function interceptGet(url, params) {
    return request({
        url: url,
        method: 'GET',
        data: params
    })
}