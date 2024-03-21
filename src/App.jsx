import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserList from './UserList'

function App() {
//   const [count, setCount] = useState(0)
//   const [error, SetError] = useState(0)
//   console.log(data)
//   useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(res => res.json())
//       .then(res => setData(res))
//       .catch(err => SetError(err))

//   }, [])
  return (
    <>
      <UserList/>
    </>
  )
  }

export default App
