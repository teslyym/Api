import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function UserList() {
  const [listofUsers, setListofUsers] = useState([])
  const [error, SetError] = useState(0)
  console.log(listofUsers)
  const data=[1,2,3,4,5,6]

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => setListofUsers(res))
      .catch(err => SetError(err))

  }, [])

  return (
    <div>
     {error && <p>Error: {error}</p>}
            <div>
                {listofUsers.map(user => (
                  <div id='use'>
                  <h1>{user.id}</h1>
                  <h2>{user.name}</h2>
                  <h3> {user.email} </h3> 
                  </div>
                ))}
            </div>
    </div>
  )
}
export default UserList

