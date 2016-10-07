import { combineReducers } from 'redux'

import {
    FETCH_POSTS_PROGRESS, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR,
    CREATE_POST_PROGRESS, CREATE_POST_SUCCESS, CREATE_POST_ERROR
} from './constants';

function posts(state={
    entries: [],
    fetching: false,
    error: null,
}, action) {
    switch(action.type) {
        case FETCH_POSTS_SUCCESS:
            return { ...state,
                entries: action.posts,
                fetching: false
            };
        case FETCH_POSTS_PROGRESS:
            return { ...state,
                fetching: true
            };
        case FETCH_POSTS_ERROR:
            return { ...state,
                error: action.error
            };
        default:
            return state
    }
};

export default combineReducers({
    posts,
})
