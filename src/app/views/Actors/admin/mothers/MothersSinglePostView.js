import {Grid, styled, useTheme} from '@mui/material';
import {Fragment, useEffect, useState} from 'react';

import {useParams,} from 'react-router-dom';
import {getNameProviders} from "../../../../services/admin_service";

const ContentBox = styled('div')(({theme}) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {margin: '16px'},
}));

const Title = styled('span')(() => ({
    fontSize: '1rem',
    fontWeight: '500',
    marginRight: '.5rem',
    textTransform: 'capitalize',
}));

const SubTitle = styled('span')(({ theme }) => ({
    fontSize: '0.875rem',
    color: theme.palette.text.secondary,
}));

const H4 = styled('h4')(({ theme }) => ({
    fontSize: '1rem',
    fontWeight: '500',
    marginBottom: '16px',
    textTransform: 'capitalize',
    color: theme.palette.text.secondary,
}));

const MothersList = () => {
    const {palette} = useTheme();
    const {id} = useParams();
    const [motherList, setMotherList] = useState(null);

    console.log("location")
    console.log(id)
    const Container = styled('div')(({theme}) => ({
        margin: '30px',
        [theme.breakpoints.down('sm')]: {
            margin: '16px',
        },
        '& .breadcrumb': {
            marginBottom: '30px',
            [theme.breakpoints.down('sm')]: {
                marginBottom: '16px',
            },
        },
    }));

    useEffect(() => {
        getNameProviders().then(data => {
            setMotherList(data);
        }).catch(err => {
            console.log(err.error)
        })
    }, []);

    useEffect(async () => {
        console.log(motherList);
    }, [motherList]);
    return (
        <Fragment>
            <ContentBox className="analytics">
                {
                    motherList ? motherList.map((mother, index) => {
                        return (
                            <>
                                <h1 key={index}> {mother.title}</h1>
                                <img key={"2" + index} src={mother.url} width={"100px"}/>
                            </>)

                    }) : <h1> Data Loading</h1>
                }
                <Grid container spacing={3}>
                    {/*<Grid item lg={6} md={1} sm={12} xs={12}>*/}
                    {/*    <MotherPostblockcard/>*/}
                    {/*</Grid>*/}

                    {/*<Grid item lg={6} md={4} sm={12} xs={12}>*/}

                    {/*    <MotherPostDescription/>*/}

                    {/*</Grid>*/}
                    {/*<Grid item lg={12} md={4} sm={12} xs={12}>*/}
                    {/*    <AdminPostCommentMother/>*/}
                    {/*</Grid>*/}

                </Grid>
            </ContentBox>
        </Fragment>
    );
};

export default MothersList;
