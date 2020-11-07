import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
  Link
} from "react-router-dom"
import './Comment.css'

const Comment = (props) => {
  const {postId} = useParams();
  const [comment, setComment] = useState([]);
  const [getPost, setGetPost] = useState({});
  useEffect(()=>{
    const url = `https://jsonplaceholder.typicode.com/comments/?postId=${postId}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=> setComment(data) )
  },[])
  useEffect(()=>{
    const postUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(postUrl)
    .then(res=>res.json())
    .then(data=>setGetPost(data));
  })
  
  const{title,body,id} = getPost;


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
    <div>
      <div> 
        
      <Card className={classes.root}>
      <CardContent>
        
        <Typography variant="h3" component="h2"> Post title: 
          {title}
        </Typography>
        
        <Typography variant="body2" component="p">
        <br />
           {body}          
        </Typography>
        
          <h5 className = 'commentSectionHeadline'> comment section </h5>
          {
            comment.map( comment => {
             return <div className = 'commentSection'><h5> Name: {comment.name} </h5> 
                         <h5> Email: {comment.email} </h5>
                         <h3> Comment: {comment.body} </h3>
             </div> 
            }  )
          }
      </CardContent>
      
    </Card>
      </div>

    </div>
  );
};

export default Comment;