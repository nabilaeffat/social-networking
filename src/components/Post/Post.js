import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { Link, useHistory } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        flexGrow: 1,

    },
    media: {
        height: 140,
    },
});

const Post = (props) => {

    const classes = useStyles();
    const { id, title, body } = props.post;
    const history = useHistory();
    let imageURL ='https://source.unsplash.com/collection/'+id;

    const handleClick = (id,imageURL) => {
        const url = `/PostDetails/${id}`;
        history.push(url);
    }
    

    return (

        <>

            <Card className={classes.root}>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image= {imageURL}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        User Name: ID{id}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        Title: {title}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {body}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={() => handleClick(id)} size="small" color="primary">
                        <Link to={`/Details/${id}`}>Learn More</Link>

                    </Button>
                </CardActions>
            </Card>


        </>

    );
}


export default Post;