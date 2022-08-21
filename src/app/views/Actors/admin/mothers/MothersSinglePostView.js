import {Grid, styled, useTheme} from '@mui/material';
import {Fragment, useEffect, useState} from 'react';

import {useParams,} from 'react-router-dom';
import {getMotherList, getNameProviders} from "../../../../services/admin_service";
import MotherPostblockcard from "./component/MotherPostTopBlock";
import MotherPostDescription from "./component/MotherPostDescription";
import AdminPostCommentMother from "./component/MotherPostCommentTable";
// import { useParams } from "react-router";

const ContentBox = styled('div')(({theme}) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {margin: '16px'},
}));



const MothersList = () => {
    const {palette} = useTheme();
    // const {id} = useParams();
    const [motherList, setMotherList] = useState(null);

    useEffect(() => {
        getMotherList().then(data => {
            setMotherList(data);
        }).catch(err => {
            console.log(err.error)
        })
    }, []);

    useEffect(async () => {
        // console.log("set");
        // console.log(motherList);
    }, [motherList]);
    return (
        <Fragment>
            <ContentBox className="analytics">
                {/*{*/}
                {/*    motherList ? motherList.students.map((mother, index) => {*/}
                {/*        return (*/}
                {/*            <>*/}
                {/*                /!*<h2>kkkkkkkk</h2>*!/*/}
                {/*                <h1 key={index}> {mother.first_name} - {}</h1>*/}
                {/*                /!*<img key={"2" + index} src={mother.url} width={"100px"}/>*!/*/}
                {/*            </>)*/}

                {/*    }) : <h1> Data 1 Loading</h1>*/}
                {/*}*/}
                <Grid container spacing={3}>
                    <Grid item lg={6} md={1} sm={12} xs={12}>
                        <MotherPostblockcard/>
                    </Grid>

                    <Grid item lg={6} md={4} sm={12} xs={12}>

                        <MotherPostDescription/>

                    </Grid>
                    <Grid item lg={12} md={4} sm={12} xs={12}>
                        <AdminPostCommentMother/>
                    </Grid>

                </Grid>
            </ContentBox>
        </Fragment>
    );
};

export default MothersList;
