import React from 'react';

import API from './baseURL';
import options from './option';

export const getMotherList = async event => {
    const response = await API.get(`mother_list`, options);
    // console.log(response.data[students])
    return response.data;
};


export const getNameProviders = async event => {
    const response = await API.get(`albums`, options);
    console.log(response)
    return response.data;
};
