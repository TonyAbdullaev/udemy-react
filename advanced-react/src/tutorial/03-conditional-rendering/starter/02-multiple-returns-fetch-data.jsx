import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [user, setUsers] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const [isError, setError] = useState(false)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const resp = await fetch('https://api.github.com/users/QuincyLarson');
        if (!resp.ok) {
          setError(true)
          setLoading(false)
          return;
        }
        const user = await resp.json()
        setUsers(user)
        setLoading(false)
      } catch (e) {
        setError(true)
        console.log("ERROR")
      }
    }
    fetchUsers()
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>Error occurred while fetching user...</h2>
  }

  return <>
    <h2>Fetch Data </h2>
    <img style={{width: '150px', borderRadius: "25px"}} src={user.avatar_url} alt="Logo"/>
    <h3>{user.login}</h3>
  </>;
};
export default MultipleReturnsFetchData;
