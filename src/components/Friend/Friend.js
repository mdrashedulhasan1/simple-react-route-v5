import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friend.css';
const Friend = (props) => {
    const {id, name, phone, website, address} = props.friend;
    const history = useHistory();
    const handelClick = ()=>{
        history.push(`/more/${id}`);
    }
    return (
        <div className='friend-container'>
            <h1>Id:{id}</h1>
            <h1>Name:{name}</h1>
            <h2>Phone:{phone}</h2>
            <h2>Website:{website}</h2>
            <h5>Address:{address.city}</h5>
            <Link to={`/more/${id}`}>More Info</Link>
            <br />
            <Link to={`/more/${id}`}>
                <button>Click Me</button>
            </Link>
            <br />
            <button onClick={handelClick}>Click Me -02</button>
        </div>
    );
};

export default Friend;