import React from 'react';

import API from '../baseURL';
import options from '../option';




export const load_req = async (u_id) => {

    const response = await API.get('/NP/new_request/'+u_id,options)
    //console.log("request_list")

    let data1=response.data
   // console.log(data1)
    return data1;
};

export const load_one_req = async (u_id) => {
    //console.log("request data one");
    const response = await API.get('/NP/db/request_table_row/'+u_id,options)

    let data1=response.data
   // console.log(data1)
    return data1;
};

export const load_one_res = async (u_id) => {
   // console.log("response data one");
    const response = await API.get('/NP/db/request_table_row_res/'+u_id,options)

    let data1=response.data
    //console.log(data1)
    return data1;
};

export const insert_response= async (r_id,msg,names) => {
   // console.log("response");
    const response = await API.get('/NP/db/insert_res/'+r_id+'/'+msg+'/'+names,options)
    let data1=response.data
   // console.log(data1)
    return data1;
};