import ENDPOINTS from '../../endpoints';
import applicationStore from '../../store';
import fetch from 'isomorphic-fetch';

import {
    FETCH_POSTS_PROGRESS, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR,
    CREATE_POST_PROGRESS, CREATE_POST_SUCCESS, CREATE_POST_ERROR
} from './constants';

function fetchProgress() {
    return {
        type: FETCH_POSTS_PROGRESS
    };
}

function fetchSuccess(result) {
    return {
        type: FETCH_POSTS_SUCCESS,
        posts: result.data,
    };
}

function fetchError(error) {
    return {
        type: FETCH_POSTS_ERROR,
        error: error
    };
}

export function fetchPosts(query) {
    return dispatch => {
        dispatch(fetchProgress())
        fetch(ENDPOINTS.POSTS.FETCH, {...query, credentials: 'same-origin'})
        .then(response => response.json())
        .then(posts => dispatch(fetchSuccess(posts)))
        .catch(error => dispatch(fetchError(error)));
    };
}


function createProgress() {
    return {
        type: CREATE_POST_PROGRESS
    };
}

function createSuccess(result) {
    return {
        type: CREATE_POST_SUCCESS,
        posts: result.data,
    };
}

function createError(error) {
    return {
        type: CREATE_POST_ERROR,
        error: error
    };
}

export function createPost(query) {
    return dispatch => {
        dispatch(createProgress())
        fetch(ENDPOINTS.POSTS.FETCH, {...query, credentials: 'same-origin', method: 'POST',})
        .then(response => response.json())
        .then(post => dispatch(createSuccess(post)))
        .catch(error => dispatch(createError(error)));
    };
}
