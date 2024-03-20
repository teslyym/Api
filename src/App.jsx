import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [error, SetError] = useState(0)
  console.log(data)
  useEffect(()=>{
    fetch('https://hn.algonia.com/api/v1/search/?query=redux')
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => SetError(err))

  }, [])

  return (
    <>
      
    </>
  )
}

export default App
