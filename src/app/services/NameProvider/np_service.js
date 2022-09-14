import React from 'react';

import API from '../baseURL';
import options from '../option';




export const load_req = async (u_id) => {

    const response = await API.get('/NP/new_request/'+u_id,options)
    console.log("request_list")

    let data1=response.data
    console.log(data1)
    return data1;
};