import React from 'react'
import PNF from './404.png'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import { useHistory } from "react-router-dom";



const useStyles = makeStyles((theme) => ({
    bg: {
        backgroundImage: `url(${PNF})`,
        backgroundPosition: 'center',
        height: '90vh',
        width: '100%',
    },
    root: {
        height: '100%',
    },
    button: {
        marginBottom: "40px"
    }

}));


const PageNotFound = () => {

    const classes = useStyles();
    /*using history to add alternative go back button from 404 page*/
    const history = useHistory();


    return (
        <div className={classes.bg} >
            <Grid container
                direction="column"
                justify="flex-end"
                alignItems="center"
                className={classes.root}>

                <Button
                    size="large"
                    variant="contained"
                    color="primary"
                    onClick={() => history.goBack()}
                    className={classes.button}
                >
                    Go Back
            </Button>
            </Grid>

        </div>
    )
}

export default PageNotFound
