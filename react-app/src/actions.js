import { createAction, createActions } from 'redux-actions';

export const ACTIONS = {
    SET_CURRENT_PAGE: "SET_CURRENT_PAGE",
};

export const set_current_page = createAction(ACTIONS.SET_CURRENT_PAGE, (current_page) => ({current_page}));
