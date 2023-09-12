import React from 'react';
import reviews from "./data.js";
import User from "./components/User.jsx";
import './assets/index.css'
import UsersList from "./components/UsersList.jsx";
const Reviews = () => {
    return (
        <>
            <div className='title' style={{marginTop: "5rem"}}>
                <h2>Reviews</h2>
                <div className='title-underline'></div>
            </div>
            <UsersList />
        </>
    );
};

export default Reviews;