import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './Greeting'
import UserCard from './UserCard'
import Counter from './Counter'

const App = () => {
  

  return (
    <>
      {/* <Greeting/> */}
      {/* <Render/> */}
      {/* <div>
      <UserCard name="Alice" age={25} location="New York" />
      <UserCard name="Bob" age={30} location="San Francisco" />
    </div> */}
    <Counter/>
    </>
  )
}

export default App
