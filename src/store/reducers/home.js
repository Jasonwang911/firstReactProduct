import * as Types from './../types';

let initHomeState = {
    currentLesson: {id: 1, name: 'vue课程', path: '/vue'},
}

export default function home(state = initHomeState, action ) {
    switch(action.type) {
        case 'SET_CURRENT_LESSON':
            return {...state, currentLesson: action.currentLesson };
        default:
            return state;
    }
}