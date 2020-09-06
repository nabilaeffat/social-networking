import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        backgroundColor: '#000000',
        color:'#00b3b3',

    },
    paperHead: {
        padding: theme.spacing(1),
        textAlign: 'center',
        backgroundColor: '#000000',
        color:'#00b3b3',
        border: '1px groove lightgray',
    },
}));

const Header = () => {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paperHead}>
                        <h3>muFFin ~ Blog.cOM</h3>
                    </Paper>
                    <Paper className={classes.paper}>
                        <Button href="/Home" color="primary">Home</Button>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}




export default Header;