import React from 'react';

import API from '../../baseURL';
import options from '../../option';

export const getMotherListForAdmin = async event => {
    const response = await API.get(`/admin/mother_list`, options);
    return response.data;
};
export const getnofComments = async event => {
    console.log("call func")
    const params = { uid: 1 };
    const response = await API.get(`/admin/mother_nof_comments`,{
        params:{
            "uid":1
        }
    }, options);
    console.log("res out "+response.data)
    return response.data;
};



export const getNameProviders = async event => {
    const response = await API.get(`albums`, options);
    console.log(response)
    return response.data;
};

export const getNPListForAdmin = async event => {
    const response = await API.get(`/admin/baby_name_providerlist`, options);
    // console.log("res out "+response.data)
    return response.data;
};
export const Get_NP_Month_Profit = async (uid) => {
    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    // console.log("sdate "+firstDay)
    // console.log("edate "+lastDay)
    const response = await API.get(`/admin/NP_Month_Profit`,{
        params:{
            "sdate":firstDay,
            "edate":lastDay
        }
    }, options);
    // console.log("res out "+response.data)
    return response.data;
};
export const NP_Data_with_profit = async event => {
    const response = await API.get(`/admin/NP_Data_with_profit`, options);
    return response.data;
};

export const UnBlockNP = async (uid) => {
    const response = await API.get(`/admin/unblock_baby_name_provider`,{
        params:{
            "uid":uid
        }
    }, options);
    // console.log("res out "+response.data)
    return response.data;
};
export const BlockNP = async (uid,mg) => {
    const response = await API.get(`/admin/block_baby_name_provider`,{
        params:{
            "uid":uid,
            "mg":mg
        }
    }, options);
    // console.log("res out "+response.data)
    return response.data;
};
