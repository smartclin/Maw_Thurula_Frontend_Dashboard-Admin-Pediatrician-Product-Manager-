import React from 'react';

import API from '../../baseURL';
import options from '../../option';

export const getPediatricianListForAdmin = async event => {
    const response = await API.get(`/admin/mother_list`, options);
    return response.data;
};
export const getPListForAdmin = async event => {
    const response = await API.get(`/admin/paediatricianlist`, options);
    // console.log("res out "+response.data)
    return response.data;
};
export const getArticleCountForAdmin = async event => {
    const response = await API.get(`/admin/getArticleCountForAdmin`, options);
    // console.log("res out "+response.data)
    return response.data;
};
export const getPListForAdmin_without_pending = async event => {
    const response = await API.get(`/admin/paediatricianlist_without_pending`, options);
    // console.log("res out "+response.data)
    return response.data;
};

export const View_Target_Pediatrician = async (uid) => {
    const response = await API.get(`/admin/View_Target_Pediatrician`,{
        params:{
            "uid":uid
        }
    }, options);
    // console.log("res out "+response.data)
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

export const UnBlockPediatrician = async (uid) => {
    const response = await API.get(`/admin/unblock_paediatrician`,{
        params:{
            "uid":uid
        }
    }, options);
    // console.log("res out "+response.data)
    return response.data;
};
export const BlockPediatrician = async (uid,mg) => {
    const response = await API.get(`/admin/block_paediatrician`,{
        params:{
            "uid":uid,
            "mg":mg
        }
    }, options);
    // console.log("res out "+response.data)
    return response.data;
};
export const Pediatrician_Request_Data = async event => {
    const response = await API.get(`/admin/view_paediatrician_requests`, options);
    return response.data;
};

export const AcceptPediatrician = async (uid) => {
    const response = await API.get(`/admin/accept_pediatrician`,{
        params:{
            "uid":uid
        }
    }, options);
    // console.log("res out "+response.data)
    return response.data;
};
export const RejectPediatrician = async (uid) => {
    const response = await API.get(`/admin/reject_pediatrician`,{
        params:{
            "uid":uid
        }
    }, options);
    // console.log("res out "+response.data)
    return response.data;
};
