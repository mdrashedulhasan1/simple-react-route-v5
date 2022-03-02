import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const {postId} = useParams();
    const [post, setPost] = useState({});
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => setPost(data))
    },[])
    return (
        <div>
            <h1>Post Detail:{postId}</h1>
            <h3>Post Title:{post.title}</h3>
            <h5>Post Body:{post.body}</h5>
        </div>
    );
};

export default PostDetails;