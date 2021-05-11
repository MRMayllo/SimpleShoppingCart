import React, { useContext } from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import { DataContext } from '../DataContext/DataContextProvider'
import SingleCard from '../SingleCard/SingleCard'
import Loader from '../LoadingAnimation/LoadingAnimation'

const useStyles = makeStyles((theme) => ({
    grid: {
        width: "1000px",
        margin: "auto",
        display: 'flex'
    },
    
}));

const ProductListPage = () => {

    const classes = useStyles();

    /*getting all products from context and loading flag*/ 
    const { products = [], isLoading = false } = useContext(DataContext)
    /*mapping to render all products inthis component and passing  products above as props to his childs*/ 
    const listOfProducts = products.map((product) => <SingleCard key={product.id} {...product} />)


    return (
        <Grid container
            className={classes.grid}
        >
            {!isLoading ? listOfProducts : <Loader />}

        </Grid>
    )
}

export default ProductListPage
