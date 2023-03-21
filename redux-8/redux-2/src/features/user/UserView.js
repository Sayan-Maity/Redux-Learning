import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './userSlice'

const UserView = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  return (
    <div>
      <h1>List of Users</h1>
      {user.loading ?
      (<>
      <p>Loading the users, wait !</p>
      </>) :
      (<>{user.users.length ?
         (<>
         <ul>
          {user.users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
         </ul>
         </>) : 
         (<>
         <p>Null users</p>
         </>)
         }</>)
      }
    </div>
  )
}

export default UserView


/*

https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false


*/

