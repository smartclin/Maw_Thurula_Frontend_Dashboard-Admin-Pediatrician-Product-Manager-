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
export const getAListForAdmin = async event => {
    const response = await API.get(`/admin/astrologerlist`, options);
    // console.log("res out "+response.data)
    return response.data;
};



export const getNameProviders = async event => {
    const response = await API.get(`albums`, options);
    console.log(response)
    return response.data;
};

export const Get_Astrologers_Month_Profit = async (uid) => {
    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    // console.log("sdate "+firstDay)
    // console.log("edate "+lastDay)
    const response = await API.get(`/admin/Astrologers_Month_Profit`,{
        params:{
            "sdate":firstDay,
            "edate":lastDay
        }
    }, options);
    // console.log("res out "+response.data)
    return response.data;
};
export const Astrologers_Data_with_profit = async event => {
    const response = await API.get(`/admin/Astrologers_Data_with_profit`, options);
    return response.data;
};

export const UnBlockAstrologer = async (uid) => {
    const response = await API.get(`/admin/unblock_astrologer`,{
        params:{
            "uid":uid
        }
    }, options);
    // console.log("res out "+response.data)
    return response.data;
};
export const BlockAstrologer = async (uid,mg) => {
    const response = await API.get(`/admin/block_astrologer`,{
        params:{
            "uid":uid,
            "mg":mg
        }
    }, options);
    // console.log("res out "+response.data)
    return response.data;
};
export const Astrologer_Request_Data = async event => {
    const response = await API.get(`/admin/view_astrologer_requests`, options);
    return response.data;
};
export const AcceptAstrologer = async (uid) => {
    const response = await API.get(`/admin/accept_astrologer`,{
        params:{
            "uid":uid
        }
    }, options);
    // console.log("res out "+response.data)
    return response.data;
};
export const RejectAstrologer = async (uid) => {
    const response = await API.get(`/admin/reject_astrologer`,{
        params:{
            "uid":uid
        }
    }, options);
    // console.log("res out "+response.data)
    return response.data;
};

