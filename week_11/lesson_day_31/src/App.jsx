import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/header'
import Profile from './components/profile'


function App() {
 let name = "Amina"
let element =(<h1 className='text-pink-800 '>Hello,{name}</h1>)
  return (
    <>
    <Header />
     <h1 className='text-center text-5xl font-semibold text-red-800'>hello react</h1>
     {element} 
     <div>
      <Profile img={"images/bunny.webp"} name={"bunny"} age={"34"} gender={"female"} email={"bunny@gmail.com"}/>
      <Profile img={"images/edd.webp"} name={"edd"} age={"24"} gender={"male"} email={"edd@gmail.com"}/>
      <Profile img={"images/flash.webp"} name={"flash"} age={"54"} gender={"male"} email={"flash@gmail.com"}/>
     </div>
    </>
  )
}

export default App
