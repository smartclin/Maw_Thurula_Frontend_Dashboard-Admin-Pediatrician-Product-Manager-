import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
import Select from "react-select";
import { useState, useEffect } from "react";
import {get_article_categories, getPostList} from "../../../../services/Pediatrician/pt_service";
export default function BasicSelect({Handleclick1}) {
    const [age, setAge] = React.useState('');
    let age1
    const [events1,setevents1] = useState()
    const options = [
        {value:'jdjd' , label:'select event'},
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    useEffect(() => {
        get_article_categories(1).then(res => {
            console.log(res)
                setevents1(res.catogery?res.catogery.map((item) => {
                        return {
                            'value' : item.id,
                            'label' : <p>{item.category_name}</p>
                        }

                    }
                ):console.log("sjjsj"))
                console.log("Your new array of modified objects here")

            // setevents(data)
            // setAllArticlePosts(data.article)
        }).catch(err => {
            console.log(err.error)
        })
    }, []);
    // const [events,setevents] = useState()
    useEffect(async () => {
        console.log("A",events1);
        // console.log(motherList);
    }, [events1]);

    console.log(events1)
    // console.log(events)
    const handleChange = (event) => {
        // alert("hi")
        console.log("event",event.value)
        setAge(event.value);
        age1=event.value
        Handleclick1(age1)
    };

    return (
        <Box sx={{ minWidth: 120 }}>

            <FormControl fullWidth>
                {/*<InputLabel id="demo-simple-select-label">Article category</InputLabel>*/}
                {/*<Select options={events1}*/}
                {/*    labelId="demo-simple-select-label"*/}
                {/*    id="demo-simple-select"*/}
                {/*    value={age}*/}
                {/*    label="Age"*/}
                {/*    onChange={handleChange}*/}
                {/*>*/}
                {/*    <Select></Select>*/}
                {/*    /!*{*!/*/}
                {/*    /!*    events.map((item,index)=>{*!/*/}
                {/*    /!*       return(*!/*/}
                {/*    /!*           <MenuItem value={item.id}>{item.value}</MenuItem>*!/*/}
                {/*    /!*       )*!/*/}
                {/*    /!*    })*!/*/}
                {/*    /!*}*!/*/}

                {/*    <MenuItem value={1}>Ten</MenuItem>*/}
                {/*    /!*<MenuItem value={2}>Twenty</MenuItem>*!/*/}
                {/*    /!*<MenuItem value={3}>Thirty</MenuItem>*!/*/}
                {/*</Select>*/}
                <Select onChange={handleChange} options={events1}></Select>
                {/*{*/}
                {/*    // console.log("events",events1)*/}
                {/*    events1.map((item,index)=>{*/}
                {/*        console.log("item",item)*/}
                {/*})*/}
                {/*}*/}
            </FormControl>
        </Box>
    );
}