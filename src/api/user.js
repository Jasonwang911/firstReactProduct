import axios from './index';

// 注册接口 
export function toRegist(username, password) {
    return axios.post('/regist', {username, password});
}

// 登录接口
export function toLogin(username, password) {
    return axios.post('/login', {username, password});
}

// 校验用户是否登录
export function toValidate() {
    return axios.get('/validate')
}