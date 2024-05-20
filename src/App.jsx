import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './assets/components/Header'
import Body from './assets/components/Body'
import Footer from './assets/components/Footer'
import Home from './assets/components/Home'
import { Outlet } from "react-router-dom"

function App() {
  

  return (
    <>
     <Header />
     <Outlet />
     <Footer />
    </>
  )
}

export default App
