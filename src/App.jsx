
import './App.css'
import Home from './pages/Homepage'
import Menu from './pages/Menupage'
import Contact from './pages/Contactpage'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';


function App() {
  return (
    <>
    <Navbar/>
    <main>
       <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </main>
    </>
  )
}

export default App
