import React, { useEffect, useState } from 'react';
import {Link } from 'react-router-dom'
import PostDetails from '../PostDetails/PostDetails'
const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(data=>setPosts(data))
  },[])
  return (
    <div>
      
      {
        posts.map (posts=> <PostDetails posts = {posts}> </PostDetails> )
      }
    </div>
  );
};

export default Home;