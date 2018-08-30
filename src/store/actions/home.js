import * as Types from './../types';
import { getSliders } from './../../api/home';

let actions = {
    // 选择当前课程
    updateCurrentLesson(currentLesson) {
        return {type: Types.SET_CURRENT_LESSON, currentLesson}
    },
    // 获取轮播图
    getSlidersAPI() {
        // redux-thunk
        return function(dispatch, getState) {
            // redux-promise 可以将payload的promise执行并将执行后的结果放到action.payload中进行派发
            // dispatch({type: 'xxx', payload: [{}, {}]})
            dispatch({type: Types.SET_SLIDERS, payload: getSliders()})
        }
    }
}

export default actions;