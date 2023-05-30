import { BrowserRouter, Routes, Route, Router, Link } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <Navbar isAuthenticated={false} />
      <Footer />
    </>
  )
}

export default App
