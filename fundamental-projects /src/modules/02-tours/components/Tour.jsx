import React, {useState} from 'react';

const Tour = ({id, image, name, info, price, removeTour}) => {
    const [readMore, setReadMore] = useState(false);

    return (
        <div className="single-tour">
            <p className="tour-price">{price}</p>
            <img className="img" src={image} alt="City image"/>
            <div className="tour-info">
                <h5>{name}</h5>
                <p>
                    {
                        readMore ? info : `${info.substring(0, 200)}...`
                    }
                </p>
                <button
                    type="buttons"
                    className="info-btn"
                    onClick={() => setReadMore(prevState => !prevState)}>
                    {readMore ? "Read Less" : "Read More"}
                </button>
            </div>
            <button className="btn btn-block delete-btn" onClick={() => removeTour(id)}>Not interested</button>
        </div>
    );
};

export default Tour;