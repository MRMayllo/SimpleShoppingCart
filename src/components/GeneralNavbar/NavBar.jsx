import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { NavLink } from 'react-router-dom'
import { routes } from '../Routes.js'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    icon: {
        width: "50px",
        height: "50px",
    },
    list: {
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'center',

    },
    link: {
        outline: 'none',
        color: 'white',
        fontSize: '25px',
        "&:hover": {
            background: 'white',
            color: 'blue'
        }

    }
}));




const NavBar = () => {
    const classes = useStyles();

    /* getting all needed links to render them in navbar*/ 
    const listedLinks =
        routes.map(({ path, name, id, excludeFromNav=false}) =>
        !excludeFromNav &&
            <ListItem
                key={id}
                button
                component={NavLink}
                to={path}
                className={classes.link}>
                {name}
            </ListItem>
        );


    return (
        <AppBar position="static">
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
            >
                
                <IconButton size='medium' color="inherit" component={NavLink} to={'/'}>
                    <ShoppingBasketIcon className={classes.icon} />
                </IconButton>

                <List component="nav" className={classes.list}>
                    {listedLinks}
                </List>

            </Grid>
        </AppBar>
    )
}

export default NavBar
