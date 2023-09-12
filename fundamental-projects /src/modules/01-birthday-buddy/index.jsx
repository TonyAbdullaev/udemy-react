import React, {useState} from 'react';
import data from "./data.js";
import User from "./components/User.jsx";
import ('./assets/index.css')
const BirthdayBuddy = () => {
    const [users, setUsers] = useState(data);

    return (
        <section className="section" style={{margin: "10px auto"}}>
            <div className="container" >
                <h2 style={{marginBottom: "1rem"}}>{users.length} Birthdays today</h2>
                {
                    users.map((user) => <User key={user.name} {...user} />)
                }
                {
                    users.length > 0
                        ? <button className="btn" style={{width: "100%"}} onClick={() => setUsers([])}>Clear All</button>
                        : <button className="btn" style={{width: "100%"}} onClick={() => setUsers(data)}>Reset</button>
                }
            </div>
        </section>
    );
};

export default BirthdayBuddy;