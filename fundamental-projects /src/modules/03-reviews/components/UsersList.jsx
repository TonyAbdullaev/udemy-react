import React, {useCallback, useState} from 'react';
import reviews from "../data.js";
import User from "./User.jsx";

const UsersList = () => {
    const [index, setIndex] = useState(0)
    // block with extra check num func
    //
    // const checkNumber = useCallback((number) => {
    //     if (number > reviews.length - 1) {
    //         return 0;
    //     }
    //     if (number < 0) {
    //         return reviews.length - 1;
    //     }
    //     return number
    // }, [])
    //
    // const nextHandler = () => {
    //     setIndex((currIndex) => {
    //         const newIndex = currIndex + 1;
    //         return checkNumber(newIndex)
    //     })
    // }
    // const previousHandler = () => {
    //     setIndex((currIndex) => {
    //         const newIndex = currIndex - 1;
    //         return checkNumber(newIndex)
    //     })
    // }


    // block with simplified version of checking num by "%" operator
    const nextHandler = () => {
        setIndex(prevState => (prevState + 1) % reviews.length)
    }
    const previousHandler = () => {
        setIndex(prevState => (prevState - 1 + reviews.length) % reviews.length)
    }

    const randomPerson = () => {
        let randomNum = Math.floor(Math.random() * reviews.length);
        if (randomNum === index) {
            randomNum = index + 1;
        }
        // return setIndex(checkNumber(randomNum));
        return setIndex(randomNum % reviews.length);
    }

    return (
        <div>
            <User
                {...reviews[index]}
                nextHandler={nextHandler}
                previousHandler={previousHandler}
                randomPerson={randomPerson}
            />
        </div>
    );
};

export default UsersList;