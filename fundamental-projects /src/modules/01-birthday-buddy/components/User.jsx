import React from 'react';

const User = ({name, age, image}) => {
    return (
        <div className="person">
            <img src={image} alt=""/>
            <div>
                <h4>{name}</h4>
                <p>{age}</p>
            </div>
        </div>
    );
};

export default User;