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
                <Grid container spacing={3} >
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <MotherPostblockcard/>
                    </Grid>

                    <Grid item lg={6} md={6} sm={12} xs={12}>

                        <MotherPostDescription/>

                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <AdminPostCommentMother/>
                    </Grid>

                </Grid>
            </ContentBox>
        </Fragment>
    );
};

export default MothersList;
