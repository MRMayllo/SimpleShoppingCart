import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import defaultImg from '.././ProductListPage/default-thumbnail.jpg'
import { DataContext } from '../DataContext/DataContextProvider'

const useStyles = makeStyles((theme) => ({
    card: {
        width: 220,
        margin: theme.spacing(1)
    },
    media: {
        height: 140,
    },
    button: {
        display: 'flex',
        justifyContent: 'center'

    }
}));


const SingleCard = (props) => {
    const classes = useStyles()
    /* getting values from context provider*/
    const { onAddCartItem, cartItems, removeCartItem } = useContext(DataContext)

    /*getting specific values from props(products) */
    const { image, name, price, id } = props
    /* adding quantity to products because there was not any (need the quantity to make calculations )*/
    const updatedProducts = { ...props, quantity: 1 }

    /*checking if the card is added to cartItemlist */
    const isAddedToCard = cartItems.find((cartItem) => cartItem.id === id)

    return (
        <Card className={classes.card} key={id}>
            <CardActionArea component={NavLink} to={`/product/${id}`}>
                <CardMedia
                    className={classes.media}
                    image={image ? image : defaultImg}
                />
                <CardContent>
                    <Grid container justify="space-between" alignItems="center">
                        <Typography gutterBottom variant="h5" component="h2" noWrap>
                            {name}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            {price}
                        </Typography>
                    </Grid>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.button}>
                {!isAddedToCard ? <Button size="small" color="primary" variant="contained" onClick={() => onAddCartItem(updatedProducts)}>
                    add to card
                 </Button> :
                    <Button size="small" color="secondary" variant="contained" onClick={() => removeCartItem(updatedProducts)}>
                        remove from card
                 </Button>
                }
            </CardActions>
        </Card>
    )
}

export default SingleCard
