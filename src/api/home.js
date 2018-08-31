import axios from './index'

// 每一个接口返回的都是promise 获取轮播图数据
export function getSliders() {
    return axios.get('/sliders');
}

// 获取列表数据
export function getHomeLists(url) {
    return axios.get(url)
}