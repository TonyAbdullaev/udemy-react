import { useState } from 'react';
import {userOList} from "../../../data.js";

const UseStateObject = () => {
    const [users, setUsers] = useState(userOList);
    console.log("user:", users)
    const [indexOfCurrUser, setIndex] = useState(1);
    const handleNextUser = (id) => {
        if (id >= users.length) {
            return setIndex(1)
        }
        return setIndex(indexOfCurrUser + 1)
    }

    if(users.length === 0) {
        return <>There is no users!</>
    }

    if(indexOfCurrUser > users.length) {
        setIndex(1)
    }

    return(
      <>
          {
              users.filter((user) => user.id === indexOfCurrUser)
                  .map((user) =>
                      <div key={user.name}>
                          <h4>{user.name}</h4>
                          <h5>{user.age}</h5>
                          <p>{user.favorite}</p>
                          <button onClick={() => handleNextUser(user.id)}>See {user.id === users.length ? users[0].name : users[indexOfCurrUser].name}</button>
                      </div>
                  )
          }
          <button onClick={() => setUsers([])}>clear all</button>
      </>
    );
};

export default UseStateObject;
