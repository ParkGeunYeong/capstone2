import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { applyPenders } from 'redux-pender';

import * as api from 'lib/api';

// 액션 타입
const POST_TICKETS = 'users/GET_USERS';

// 액션 생성자
export const buyTickets = createAction(POST_TICKETS, api.createReservation);

// 초기 상태
const initialState = {
    ticket: null,
    newOwner: null
};

const reducer = handleActions({
}, initialState);

export default applyPenders(reducer, [{
    type: POST_TICKETS,
    onSuccess: (state, action) => {
        return produce(state, (draft) => {
            draft.ticket = action.payload.ticket;
            draft.newOwner = action.payload.newOwner;
        });
    }
}]);