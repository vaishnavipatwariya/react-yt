//feature-based vs Atomic Design Folder Structure
import React from 'react'
import Card from './components/Card'
// import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <div className='parent'>
      <Card user = 'John Doe' age={25} img="https://images.unsplash.com/photo-1779399152423-244344a0f7df?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"/>
      <Card user = 'Jane Smith' age={30} img="https://plus.unsplash.com/premium_photo-1773904570272-583f12c2bc04?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user = 'Bob Johnson' age={35} img="https://images.unsplash.com/photo-1779040267964-60724bdd10a9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D"/>
      <Card user = 'Alice Williams' age={40} img="https://plus.unsplash.com/premium_photo-1747851576768-55729e07beaf?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D"/>
      </div>
    </div>
  )
}

export default App