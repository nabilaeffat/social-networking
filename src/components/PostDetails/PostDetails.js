import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import Comment from '../Comment/Comment';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    avatar: {
        backgroundColor: red[500],
    },
}));



const PostDetails = () => {
    const classes = useStyles();

    const { id } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data));
    
    }, [id])


 
    let imageURL = 'https://source.unsplash.com/collection/' + id;

    return (
        <div>
            <Container maxWidth="md">
                <Grid container className={classes.root} spacing={3}>
                    <Grid container justify="center" spacing={2}>
                        <Grid key={post} item xs={8}>
                            <Card className={classes.root}>
                                <CardHeader
                                    avatar={
                                        <Avatar aria-label="post" className={classes.avatar}>
                                            {post.id}
                                        </Avatar>
                                    }
                                    title={post.title}
                                />
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image={imageURL}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {post.body}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={8}>
                            <CssBaseline />
                            <Comment post={post} />
                            
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default PostDetails;