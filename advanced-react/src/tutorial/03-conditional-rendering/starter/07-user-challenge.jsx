import {useState} from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);


  return (
      <>
        <h2>user challenge</h2>
        {
          user
            ?
              <>
                <h4>Hello there, {user.name}</h4>
                <button className="btn" type="button" onClick={() => setUser(null)}>Logout</button>
              </>
            :
              <>
                <h4>Please, login!</h4>
                <button className="btn" type="button" onClick={() => setUser({name: 'Tony'})}>Login</button>
              </>
        }
      </>
  );
};

export default UserChallenge;
