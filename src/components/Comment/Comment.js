import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    text: {
        padding: theme.spacing(2, 2, 0),
    },
    paper: {
        paddingBottom: 50,
    },
    list: {
        marginBottom: theme.spacing(2),
    },
    subheader: {
        backgroundColor: theme.palette.background.paper,
    },
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    grow: {
        flexGrow: 1,
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
}));

const Comment = (props) => {
    const classes = useStyles();

    const [comment, setComment] = useState([]);

    const { id, title, body } = props.post;
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setComment(data));

    }, [id])





    return (
        <React.Fragment>
            <CssBaseline />
            <Paper square className={classes.paper}>
                <Typography className={classes.text} variant="h5" gutterBottom>
                    Comments
                </Typography>
                <List className={classes.list}>
                    {comment.map(({ id, email, body }) => (
                        <React.Fragment key={id}>
                            <ListItem button>
                                <ListItemAvatar>
                                    <Avatar alt="Profile Picture" src={'https://source.unsplash.com/collection/' + id} />
                                </ListItemAvatar>
                                <ListItemText primary={email} secondary={body} />
                            </ListItem>
                        </React.Fragment>
                    ))}
                </List>
            </Paper>
        </React.Fragment>
    );
};

export default Comment;