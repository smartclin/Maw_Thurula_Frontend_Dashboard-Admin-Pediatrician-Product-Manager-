import React from 'react';

import API from '../baseURL';
import options from '../option';

export const getPostList = async (id) => {
    const response = await API.get(`/pt/view_all_articles`,{
        params:{
            "doctor_id":id
        }
    }, options);
    return response.data;
};

export const getCommentCount = async event => {

    const response = await API.get(`/pt/no_of_article_comments`,{
        params:{
            "article_id":1
        }
    }, options);
    return response.data;
};


export const getFollowerListForPediatrician = async(id) => {
    const response = await API.get(`/pt/view_followers`,{
        params:{
            "doctor_id":id
        }
    }, options);
    return response.data;
};