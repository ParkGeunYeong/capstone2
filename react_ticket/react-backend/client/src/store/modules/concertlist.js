import { createAction, handleActions } from 'redux-actions';

//액션 타입 정의
const INCREMENT = 'pageNumber/INCREMENT';
const DECREMENT = 'pageNumber/DECREMENT';

//액션 생성 함수
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

// 모듈의 초기 상태 정의
const initialState = {
  page_number: 0
};

//handleActions의 첫번째 파라미터는 액션을 처리하는 함수, 두번째 파라미터는 초기상태
export default handleActions({
  [INCREMENT]: (state, action) => {
    return { page_number: state.page_number + 1 };
  },
  [DECREMENT]: ({page_number}) => ({ page_number: page_number - 1})
}, initialState);