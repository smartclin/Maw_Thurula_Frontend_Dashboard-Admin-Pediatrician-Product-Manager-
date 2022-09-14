import React from 'react';

import API from '../baseURL';
import options from '../option';




export const load_stat_card1 = async (u_id) => {

    const response = await API.get('/AL/db/stat_card1/'+u_id,options)
    console.log("stat card1")

    let data1=response.data['students'][0]['waiting']
    console.log(data1)
    return data1;
};

export const load_stat_card2 = async (u_id) => {

    const response = await API.get('/AL/db/stat_card2/'+u_id,options)
    console.log("stat card2")

    let data1=response.data['students'][0]['replied']
    console.log(data1)
    return data1;
};

export const load_profile_card = async (u_id) => {

    const response = await API.get('/AL/db/profile_card/'+u_id,options)
    console.log("stat card2")

    let data1=response.data['user'][0]
    console.log(data1)
    return data1;
};

export const load_line_chart1 = async (u_id) => {

    const response = await API.get('/AL/db/req_chart/'+u_id,options)
    console.log("request line chart")

    let data1=response.data
    //console.log(data1)
    return data1;
};

export const load_line_chart2 = async (u_id) => {

    const response = await API.get('/AL/db/profit_chart/'+u_id,options)
    console.log("request line chart2")

    let data1=response.data
   // console.log(data1)
    return data1;
};

export const load_today_req = async (u_id) => {

    const response = await API.get('/AL/db/today_request/'+u_id,options)
    console.log("request today")

    let data1=response.data
    // console.log(data1)
    return data1;
};

