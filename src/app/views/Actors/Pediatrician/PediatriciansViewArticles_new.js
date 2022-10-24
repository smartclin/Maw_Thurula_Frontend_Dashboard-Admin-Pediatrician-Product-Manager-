import { useState, useEffect } from "react";
// import "./App.css";
import SocialCard from "./shared/Card";
import {Fragment} from 'react';
import {getCommentCount, getPostList} from "../../../services/Pediatrician/pt_service";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

import * as React from "react";



function App() {
    const [ArticlePosts, setArticlePosts] = useState([]);
    const [AllArticlePosts, setAllArticlePosts] = useState([]);

    useEffect(() => {
        getPostList(1).then(data => {
            setArticlePosts(data.article)
            setAllArticlePosts(data.article)
        }).catch(err => {
            console.log(err.error)
        })
    }, []);

    const filterCards = event => {
        const value = event.target.value.toLowerCase();
        console.log(value)
        console.log(ArticlePosts)
        const filteredUsers = AllArticlePosts.filter(user => (`${user.title} ${user.title}`.toLowerCase().includes(value)));
        setArticlePosts(filteredUsers);
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
            {/*<Autocomplete*/}
            {/*    disablePortal*/}
            {/*    // options={top100Films}*/}
            {/*    id="combo-box-demo"*/}
            {/*    sx={{ width: 300 }}*/}
            {/*    renderInput={(params) => <TextField {...params} label="Search with Date" />}*/}
            {/*/>*/}
            <div className="cards-container" style={{display:'flex',flexWrap: 'wrap'}}>

                {ArticlePosts.map((user, index) => (
                    <SocialCard key={index} userData={user}/>
                ))}
            </div>
        </div>
    );
}

export default App;