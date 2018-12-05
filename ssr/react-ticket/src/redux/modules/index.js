import { combineReducers } from 'redux';
import users from './users';
import paginate from './paginate';
import ticket from './ticket';
import { penderReducer } from 'redux-pender';

export default combineReducers({
    users,
    paginate,
    ticket,
    pender: penderReducer
});