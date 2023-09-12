import React from 'react';
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from "react-icons/fa";

const User = ({name, image, job, text, nextHandler, previousHandler, randomPerson}) => {
    return (
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name} className="person-img"/>
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="btn-container">
                <button className="prev-btn" onClick={previousHandler}>
                    <FaChevronLeft />
                </button>
                <button className="next-btn" onClick={nextHandler}>
                    <FaChevronRight />
                </button>
            </div>
            <button className="btn btn-hipster" onClick={randomPerson}>surprise me</button>
        </article>
    );
};

export default User;