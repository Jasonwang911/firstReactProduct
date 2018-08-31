import * as Types from './../types';

let initHomeState = {
    currentLesson: {id: 1, name: 'vue课程', path: '/vue'},
    sliders: [],
    lists: []
}

export default function home(state = initHomeState, action ) {
    switch(action.type) {
        case Types.SET_CURRENT_LESSON:
            return {...state, currentLesson: action.currentLesson };
        case Types.SET_SLIDERS:
            return {...state, sliders: action.payload};
        case Types.SET_HOME_LISTS:
            console.log('===>', action.payload)
            return {...state, lists: action.payload.list};
        default:
            return state;
    }
}