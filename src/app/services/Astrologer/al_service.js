import React from 'react';

import API from '../baseURL';
import options from '../option';




export const load_req = async (u_id) => {

    const response = await API.get('/AL/new_request/'+u_id,options)
    console.log("stat card1")

    let data1=response.data
    console.log(data1)
    return data1;
};

export const load_today_req = async (u_id) => {
    console.log("today req")
    const response = await API.get('/AL/db/today_request/'+u_id,options)


    let data1=response.data
    //console.log(data1)
    return data1;
};

export const load_one_req = async (u_id) => {
    console.log("request data one");
    const response = await API.get('/AL/db/request_table_row/'+u_id,options)

    let data1=response.data
    console.log(data1)
    return data1;
};

export const load_one_res = async (u_id) => {
    console.log("request data one");
    const response = await API.get('/AL/db/request_table_row_res/'+u_id,options)
    let data1=response.data
    console.log(data1)
    return data1;
};