
import React from 'react';

import API from '../../baseURL';
import options from '../../option';




export const load_stat_card1 = async () => {

    const response = await API.get('/admin/np/report_stat_card1',options)
    console.log("report")

    let data1=response.data['al_count'][0]['COUNT(*)']
    console.log(data1)
     return data1;
};

export const load_stat_card2 = async () => {

    const response = await API.get('/admin/np/report_stat_card2',options)
    console.log("report2")

    let data1=response.data['al_count_month'][0]['COUNT(*)']
    console.log(data1)
    return data1;
};


export const load_tot_income = async (sDate,eDate) => {
    const response = await API.post('/admin/np/np_tot_income', {
        "sdate": sDate,
        "edate": eDate,
    })

    let data1=response.data['tot_income'][0]['SUM(amount)']
  //  console.log(data1)
    return data1;
};

export const load_pending_income = async (sDate,eDate) => {
    const response = await API.post('/admin/np/np_pending_tot_income', {
        "sdate": sDate,
        "edate": eDate,
    })

    let data1=response.data['pending_tot_income'][0]['SUM(amount)']
    //  console.log(data1)
    return data1;
};

export const load_reg_np = async (sDate,eDate) => {
    const response = await API.post('/admin/np/reg_np', {
        "sdate": sDate,
        "edate": eDate,
    })
    let data1=response.data;
    //let data1=response.data['reg_al'];
    console.log(data1)
    return data1;
};

export const load_profit_np = async (sDate,eDate) => {
    const response = await API.post('/admin/np/profit_np', {
        "sdate": sDate,
        "edate": eDate,
    })

    let data1=response.data;
    //  console.log(data1)
    return data1;
};
