import React, {useEffect, useState} from 'react';
import Loading from "./components/Loading.jsx";
import Tours from "./components/Tours.jsx";
import Error from "./components/Error.jsx";
import ('./assets/style.css')

const url = 'https://course-api.com/react-tours-project';

const Index = () => {
    const [isLoading, setLoading] = useState(false)
    const [isError, setError] = useState(false)
    const [tours, setTours] = useState([])
    let datas;
    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await fetch(url);
            const toursData = await response.json();
            setTours(toursData)
            datas = toursData;
        } catch (e) {
            setError(true)
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, []);

    const removeTour = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id)
        return setTours(newTours)
    }

    const resetTours = () => setTours(datas);



    if (isLoading) {
        return <Loading />
    }

    if (isError) {
        return <Error />
    }

    if (tours.length === 0) {
        return <main>
            <div className="title">
                <h2>no tours left</h2>
                <button
                    type="button"
                    style={{marginTop: "2rem"}}
                    className="btn"
                    onClick={() => fetchData()}
                >
                    Refresh
                </button>
            </div>
        </main>
    }

    return (
        <section className="main">
            <div className='title' style={{marginTop: "5rem"}}>
                <h2>our tours</h2>
                <div className='title-underline'></div>
            </div>
            <Tours data={tours} removeTour={removeTour} resetTours={resetTours}/>
        </section>
    );
};

export default Index;