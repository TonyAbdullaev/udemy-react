import React from 'react';
import Tour from "./Tour.jsx";

const Tours = ({data, removeTour, resetTours}) => {

    if (!data) {
        return(
            <div>
                No Tour left
                <button className="btn" onClick={() => resetTours()}>reset</button>
            </div>
        )
    }

    return (
        <div className="tours">
            {
               data.map((tour) => <Tour key={tour.id} {...tour} removeTour={removeTour} />)
            }
        </div>
    );
};

export default Tours;