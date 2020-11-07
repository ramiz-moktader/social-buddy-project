import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
  Link
} from "react-router-dom"
const PostDetails = (porps) => {
  console.log(porps.posts)
  const {title,body,id} = porps.posts
  const useStyles = makeStyles({
    root: {
      minWidth: 275,
      margin: '50px',

    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  const classes = useStyles();
  
  return (
    <div className= 'posts'>
      <div> 
        
      <Card className={classes.root}>
      <CardContent>
        
        <Typography variant="h5" component="h2">
         {title}
        </Typography>
        
        <Typography variant="body2" component="p">
        <br />
           {body}          
        </Typography>
      </CardContent>
      <CardActions>
        
        <Link to = {`/post/${id}`} >  <Button onClick = {porps.handleSeeDetails} variant = 'contained' size="small" color = 'primary'> See details </Button>  </Link>
      </CardActions>
    </Card>
      </div>
    </div>
  );
};

export default PostDetails;