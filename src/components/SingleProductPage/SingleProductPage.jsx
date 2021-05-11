import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import {DataContext} from '../DataContext/DataContextProvider'
import SingleCard from '../SingleCard/SingleCard'
import Loader from '../LoadingAnimation/LoadingAnimation'


const useStyles = makeStyles((theme) => ({
    grid: {
        width: "100%",
        margin: 'auto'
    },
}));


const SingleProductPage = () => {

    const {products=[], isLoading=false} = useContext(DataContext)

    const {id} = useParams()
   
    const classes = useStyles();

    const product =  products.find((product)=> product.id.toString() === id.toString())

    return (
        <Grid container
        direction="row"
        justify="center"
        className={classes.grid}
        >
        {!isLoading ? <SingleCard {...product}/> : <Loader/>}

        </Grid>
    )
}

export default SingleProductPage
