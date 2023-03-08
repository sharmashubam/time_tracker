import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import Rightbar from './components/Rightbar'

function App() {
  return(
    <div>
      <Sidebar />
      <Rightbar />
    </div>
  )
}

export default App
