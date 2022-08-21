import React from 'react';

import API from '../../baseURL';
import options from '../../option';
import axios from "axios";

export const getMotherListForAdmin = async event => {
    const response = await API.get(`/admin/mother_list`, options);
    // console.log("res out "+response.data)
    return response.data;
};
export const getTargetMotherListForAdmin = async event => {
    const response = await API.get(`/admin/target_motherDetails`,{
        params:{
            "uid":1
        }
    }, options);
    console.log("res out "+response.data)
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
    // console.log("res out "+response.data)
    return response.data;
};



export const getNameProviders = async event => {
    const response = await API.get(`albums`, options);
    console.log(response)
    return response.data;
};
