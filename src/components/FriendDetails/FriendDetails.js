import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './FriendDetails.css';
const FriendDetails = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
        .then(res => res.json())
        .then(data => setFriend(data))
    },[]);
    return (
        <div className='single-friend-container'>
            <h1>ID:{friend.id}</h1>
            <h1>{friend.name}</h1>
            <h1>{friend.phone}</h1>
            <h4>{friend.website}</h4>
            <p>Works at {friend.company?.name}</p>
        </div>
    );
};

export default FriendDetails;