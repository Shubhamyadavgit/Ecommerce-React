import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Header />
    <Hero />
    </BrowserRouter>
    </>
  )
}

export default App
