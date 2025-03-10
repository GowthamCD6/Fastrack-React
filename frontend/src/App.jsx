import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Watchs from './pages/Watchs'
import SmartWatch from './pages/SmartWatch'
import ReflexTunes from './pages/ReflexTunes'
import Header from '../src/component/Header'
import Sale from './pages/Sale'
import Accessories from './pages/Accessories'
import Watchs1 from '../src/component/AdminPages/Watchs1'
import Add from '../src/component/AdminPages/Add'
import Login from './pages/Login'
import Register from './pages/Register'

export default function App() {
  const role = localStorage.getItem("role");
  return (
    <div>
      <Header />


      <Routes>
        <Route path="/" element={<Home />} />
        {role === 'user' && <Route path="/" element={<Home />} />}
        {role === 'user' && <Route path="/watchs" element={<Watchs />} />}
        {role === 'user' && <Route path="/smartwatch" element={<SmartWatch />} />}|
        {role === 'user' && <Route path="/reflextunes" element={<ReflexTunes />} />}|
        {role === 'user' && <Route path="/sale" element={<Sale />} />}|
        {role === 'user' && <Route path="/accessories" element={<Accessories />} />}|
        {role === 'admin' && <Route path="/Watchs1" element={<Watchs1 />} />}
        {role === 'admin' && <Route path="/add" element={<Add />} />}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

    </div>
  )
}
