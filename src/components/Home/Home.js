import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Post from '../Post/Post';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const Home = () => {
    const [post, setPost] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

    return (
 
        <Container maxWidth="md">
        <Grid container className={classes.root} spacing={3}>
        <Grid container justify="center" spacing={2}>
          {post.map((post) => (
            <Grid key={post} item  xs={4}>
              <Post className={classes.paper}  post={post}></Post>
            </Grid>
          ))}
        </Grid>     
    </Grid>
    </Container>

    );
};

export default Home;