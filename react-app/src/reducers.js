import { combineReducers } from 'redux';
import { handleAction, handleActions } from 'redux-actions';

import { ACTIONS } from "./actions";

const current_page = handleAction(
    ACTIONS.SET_CURRENT_PAGE,
    (state, action) => (action.payload.current_page),
    '1'
);

const reducer = combineReducers({
    current_page,
});

export default reducer
