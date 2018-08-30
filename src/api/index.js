import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3009';
// 设置请求返回数据，只返回请求体
axios.interceptors.response.use(function (res) {
    return res.data;
})

export default axios;