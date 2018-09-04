import * as Types from '../types';
import { toRegist, toLogin } from '../../api/user';

let actions = {
    toRegistAPI(username, password, history) {
        return function(dispatch, getState) {
            toRegist(username, password)
            .then(res => {
                dispatch({type: Types.SET_USER_INFO, user: res});
                if(res.error === 0) {
                    // 注册成功
                    setTimeout( () => {
                        history.push('/login');
                    }, 2000)
                }
            })
        }
    },
    clearMessage() {
        return {type: Types.CLEAE_MESSAGE, info: {msg: '', success: '', error: 0 }}
    },
    toLoginAPI(username, password) {
        
    }
};

export default actions;