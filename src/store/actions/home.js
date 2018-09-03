import * as Types from './../types';
import { getSliders, getHomelessons } from './../../api/home';

let actions = {
    // 选择当前课程
    updateCurrentLesson(currentLesson) {
        // return {type: Types.SET_CURRENT_LESSON, currentLesson}
        return function(dispatch, getState) {
            dispatch({type: Types.SET_CURRENT_LESSON, currentLesson});
            actions.refreshAPI()(dispatch, getState)
        }
    },
    // 获取轮播图
    getSlidersAPI() {
        // redux-thunk
        return function(dispatch, getState) {
            // redux-promise 可以将payload的promise执行并将执行后的结果放到action.payload中进行派发
            // dispatch({type: 'xxx', payload: [{}, {}]})
            dispatch({type: Types.SET_SLIDERS, payload: getSliders()})
        }
    },
    getHomeLessonsAPI() {
        return function(dispatch, getState) {
            // 获取当前状态并判断是否加载
            let { currentLesson, lessons: {hasMore, offset, limit, isLoading}} = getState().home;
            if(!hasMore || isLoading) {
                return;
            }
            // 修改加载状态的值
            dispatch({type: Types.CHANGE_LOADING_STATUS, status: true});
            // offet 数据偏移量   limit 每次取多少条     type 课程类型 
            let initParams = {
                offset,
                limit,
                type: currentLesson.type
            }
            dispatch({type: Types.SET_HOME_LISTS, payload: getHomelessons(initParams)})
        }
    },
    refreshAPI() {
        return function(dispatch, getState) {
            dispatch({type: Types.CLEAR_LESSONS});
            actions.getHomeLessonsAPI()(dispatch, getState);
        }
    }
}

export default actions;