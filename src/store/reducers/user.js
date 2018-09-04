import * as Types from '../types';

let initUser = {
    user: null,
    msg: '',
    success: '',
    err: 0
}

export default function user(state = initUser, action) {
    switch(action.type) {
        case Types.SET_USER_INFO:
            return {...action.user};
        case Types.CLEAE_MESSAGE:
            return {...state, ...action.info};
        default:
            return state;
    }
}