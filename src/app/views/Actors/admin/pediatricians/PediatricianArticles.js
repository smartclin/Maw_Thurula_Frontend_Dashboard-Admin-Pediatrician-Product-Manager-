import {Fragment, useEffect, useState} from 'react';
import ArticleCard from '../shared/pediatrician/ArticleCard';
import TextField from '@mui/material/TextField';
import {getallPostList, getPostList} from "../../../../services/Pediatrician/pt_service";
import * as React from "react";

const AdminDashboard = () => {
    const [AdminArticlePosts, setAdminArticlePosts] = useState([]);
    const [AllAdminArticlePosts, setAllAdminArticlePosts] = useState([]);

    useEffect(() => {
        getallPostList().then(data => {
            setAdminArticlePosts(data.article)
            setAllAdminArticlePosts(data.article)
        }).catch(err => {
            console.log(err.error)
        })
    }, []);

    const filterCards = event => {
        const value = event.target.value.toLowerCase();
        console.log(value)
        console.log(AdminArticlePosts)
        const filteredUsers = AllAdminArticlePosts.filter(user => (`${user.title} ${user.title}`.toLowerCase().includes(value)));
        setAdminArticlePosts(filteredUsers);
        console.log(filteredUsers)
    }

    return (
        <div className="App">
            {/*<h1>Social Cards</h1>*/}
            {/*<input className="search-box" onInput={filterCards} placeholder="Search..."/>*/}
            <div style={{margin:'25px'}}>
                <TextField
                    id="standard-search"
                    label="Search field"
                    type="search"
                    onInput={filterCards}
                    variant="standard"
                    style={{width:'35%',marginRight:'70px'}}
                />
                <TextField
                    id="standard-search"
                    label="Search field"
                    type="search"
                    onInput={filterCards}
                    variant="standard"
                    style={{width:'35%'}}
                />
                <TextField
                    id="standard-search"
                    label="Search field"
                    type="search"
                    onInput={filterCards}
                    variant="standard"
                    style={{width:'35%'}}
                />
            </div>
            <div className="cards-container" style={{display:'flex',flexWrap: 'wrap'}}>

                {AdminArticlePosts.map((user, index) => (
                    <ArticleCard key={index} userData={user}/>
                ))}
            </div>
        </div>
    );
};

export default AdminDashboard;
