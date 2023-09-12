import {userList} from '../../../data.js'
import {useState} from "react";
const UseStateArray = () => {
  const [users, setUsers] = useState(userList);

  const handleRemove = (us) => {
    setUsers(users.filter(({name}) => name !== us))
  }

  return(
      <>
        {
          users.map(({name}) =>
              <div key={name}>
                <h4>{name}</h4>
                <button className="btn" onClick={() => handleRemove(name)}>remove</button>
              </div>
          )
        }
        <button type="button" className="btn" onClick={() => setUsers([])}>Clear all</button>
      </>
  );
};

export default UseStateArray;
