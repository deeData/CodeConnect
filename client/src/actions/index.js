﻿import axios from 'axios';
import { FETCH_USER, SUBMIT_PROFILE, FETCH_PROFILE, FETCH_USER_PROJECTS, SEARCH_PROJECTS, FETCH_OPEN_PROJECTS } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user')
    dispatch({ type: FETCH_USER, payload: res.data });
};

////uses redux-thunk
//export const fetchUser = () => {
//    //return a function, and access to dispatch function
//    //dispatches action after request is completed
//    return function (dispatch) {
//        axios.get('/api/current_user')
//            .then(res => dispatch({ type: FETCH_USER, payload: res.data }))
//    }

//};


export function submitProfile(values, id, callback) {
    const result = axios.post(`/api/profile/${id}`, values)
        .then(callback());
    //send to reducer
    return {
        type: SUBMIT_PROFILE,
        payload: result
    };
};

export function fetchProfile(id) {
    const result = axios.get(`/api/profile/${id}`);

    return {
        type: FETCH_PROFILE,
        payload: result
    };

};

export function fetchUserProjects(id) {
    const result = axios.get(`/api/userprojects/${id}`);

    return {
        type: FETCH_USER_PROJECTS,
        payload: result
    };

};

export function searchProjects(keyword, startDate, endDate) {
    const result = axios.post("/api/search");

    return {
        type: SEARCH_PROJECTS,
        payload: result
    };

};

export function fetchOpenProjects() {
    const result = axios.get('/api/projects');

    return {
        type: FETCH_OPEN_PROJECTS,
        payload: result
    };

};