import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { applyPenders } from 'redux-pender';

import * as api from 'lib/api';
// 액션 타입
const SET_LOGIN_INPUT = 'auth/SET_ID_INPUT';
// const SET_PW_INPUT = 'auth/SET_PW_INPUT';
const SEND_AUTH = 'auth/SEND_AUTH'

// 액션 생성자
export const setLoginInput = createAction(SET_LOGIN_INPUT);
// export const setPwInput = createAction(SET_PW_INPUT);
export const sendAuth = createAction(SEND_AUTH, api.sendAuth);

// 초기 상태
const initialState = {
    loginForm: {
        id:'',
        pw:'',
    },
    sentEmail: false
};

const reducer = handleActions({
    [SET_LOGIN_INPUT]: (state, action) => {
        const { payload: {name, value} } = action;
        return produce(state, (draft) => {
            draft.loginForm[name]=value;
        });
    },
    // [SET_PW_INPUT]: (state, action) => {
    //     return produce(state, (draft) => {
    //         draft.pw=action.payload;
    //     });
    // },
}, initialState);

export default applyPenders(reducer, [{
    type: SEND_AUTH,
    onSuccess: (state, action) => {
        return produce(state, (draft) => {
            draft.sentEmail = true;
        });
    }
}]);