import React from 'react';

import API from './baseURL';
import options from './option';

export const getMotherList = async event => {
    const response = await API.get(`users`, options);
    return response.data;
};


export const getNameProviders = async event => {
    const response = await API.get(`albums`, options);
    return response.data;
};
