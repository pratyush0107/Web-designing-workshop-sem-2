import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Index from './components/Index'

function App() {
 

  return (
    <>
    <Index  name={'Rahul sharma'} course={'computer science and engineering'} marks={19}/>
     <Index  name={'vikaram'} course={'computer science and engineering'} marks={56}/>
     <Index  name={'rishabh'} course={'computer science and engineering'} marks={67}/>
    </>
  )
}

export default App
