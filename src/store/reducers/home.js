import * as Types from './../types';

let initHomeState = {
    currentLesson: {id: 1, name: 'vue课程', path: '/vue'},
    sliders: [],
    lessons: {
        hasMore: true,
        lists: [],
        offset: 0,          // 从第0条开始加载
        limit: 10,          // 一次加载10条
        isLoading: false,   // 加载状态
    }
}

export default function home(state = initHomeState, action ) {
    switch(action.type) {
        case Types.SET_CURRENT_LESSON:
            return {...state, currentLesson: action.currentLesson };
        case Types.SET_SLIDERS:
            return {...state, sliders: action.payload};
        case Types.SET_HOME_LISTS:
            return {
                ...state, 
                lessons: {
                    ...state.lessons, 
                    hasMore: action.payload.hasMore, 
                    offset: state.lessons.offset + action.payload.lists.length, 
                    isLoading: false, 
                    lists: [...state.lessons.lists, ...action.payload.lists]
                }
            };
        case Types.CHANGE_LOADING_STATUS: 
            return {...state, lessons: {...state.lessons, isLoading: action.status}};
        case Types.CLEAR_LESSONS:
            return {
                ...state,
                lessons: {
                    ...state.lessons,
                    isLoading: false,
                    hasMore: true,
                    lists: [],
                    offset: 0,
                }
            }
        default:
            return state;
    }
}