import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Post = (props) => {
    const history = useHistory();
    const {title, id} = props.post;
    const handelClick = () =>{
        history.push(`/post/${id}`);
    }
    return (
        <div>
            <h1>This is our post</h1>
            <h1>{title}</h1>
            <Link to={`/post/${id}`}>post details</Link>
            <br />
            <Link to={`/post/${id}`}>
                <button>Click For Post</button>
            </Link>
            <br />
            <button onClick={handelClick}>click for details</button>
        </div>
    );
};

export default Post;