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
export const editptProfile =async (id,object) => {
    const response = await API.post(`/pt/editprofile`,{
        params:{
            "doctor_id":id,
            "object":object
        }
    }, options);
    return response.data;
    console.log("object")
    console.log(id)
};
export const getselectedpt =async (id) => {
    // console.log(id)
    const response = await API.get(`/admin/selected_pediatricianList`,{
        params:{
            "id":id,
        }
    }, options);
    console.log(response.data)
    return response.data;
};
export const addQulifications =async (id,object) => {
    const response = await API.post(`/pt/addQulifications`,{
        params:{
            "id":id,
            "object":object
        }
    }, options);
    return response.data;
    console.log("object")
};
export const load_line_chart_for_pd = async (u_id) => {

    const response = await API.get('/pt/req_chart_pt',{

    },options)


    let data1=response.data
    //console.log(data1)
    return data1;
};
export const getallPostList = async () => {
    const response = await API.get(`/pt/view_all_articles`, options);
    // console.log("res out "+response.data)
    return response.data;
};

export const fullArticle = async (id,id1) => {
    const response = await API.get(`/pt/view_single_articles`,{
        params:{
            "article_id":id,
            "doctor_id":id1
        }
    }, options);
    return response.data;
};
export const publishArticle = async (a) => {
    const response = await API.post(`/pt/Insert_Pediatrician_Articles`,{
        params:{
            "article":a
        }
    }, options);
    // console.log("res out "+response.data)
    return response.data;
};

export const getCommentCount = async (id) => {

    const response = await API.get(`/pt/no_of_article_comments`,{
        params:{
            "article_id":id
        }
    }, options);
    return response.data;
};
export const getMostLiked = async (id) => {

    const response = await API.get(`/pt/Trending_article`,{
        params:{
            "doctor_id":id
        }
    }, options);
    return response.data;
};
export const Imageupload = async (image) => {

    const response = await API.post(`/pt/imageupload`,{
        params:{
            "image":image
        }
    }, options);
    return response;
};

export const getCommentList = async (id) => {

    const response = await API.get(`/pt/view_article_comments`,{
        params:{
            "article_id":id
        }
    }, options);
    return response.data;
};
export const blockComments = async (id) => {

    const response = await API.post(`/pt/block_article_comments`,{
        params:{
            "comment_id":id
        }
    }, options);
    return response.data;
};

export const unblockComments = async (id) => {

    const response = await API.post(`pt/unblock_article_comments`,{
        params:{
            "comment_id":id
        }
    }, options);
    return response.data;
};

export const today_article_comments = async (today) => {

    const response = await API.get(`/pt/get_today_comments`,{
        params:{
            "today":today
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
export const get_article_categories = async() => {
    const response = await API.get(`/pt/get_article_categories`, options);
    return response.data;
};