const url = 'https://api.github.com/users';
import {useState, useEffect} from "react";

const FetchData = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    try {
      fetch(url)
          .then(data => data.json())
          .then(json => setUsers(json))
    } catch (e) {
      alert("There is error in fetching data")
    }
  }, []);

  if (users.length <= 0) {
    return <p>There is no user</p>
  }
  return <>
    <h2>Fetching data</h2>
    <ul className="users">
      {
        users.map((user) =>
            user &&
            <li key={user.login}>
              <img src={user.avatar_url} alt="ava"/>
              <div>
                <p>{user.login}</p>
                <a href={user.html_url}>Profile</a>
              </div>
            </li>
        )
      }

    </ul>
  </>;
};
export default FetchData;
