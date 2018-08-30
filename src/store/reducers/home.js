import * as Types from './../types';

let initHomeState = {
    currentLesson: {id: 1, name: 'vue课程', path: '/vue'},
    sliders: []
}

export default function home(state = initHomeState, action ) {
    switch(action.type) {
        case Types.SET_CURRENT_LESSON:
            return {...state, currentLesson: action.currentLesson };
        case Types.SET_SLIDERS:
            console.log('====>',action.payload)
            return {...state, sliders: action.payload}
        default:
            return state;
    }
}