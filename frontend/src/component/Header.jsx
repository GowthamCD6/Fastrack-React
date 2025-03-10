import '../style/Header.css'
import logo from '../assets/logo.png'
import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Navlinl() {

  const navigate = useNavigate();
  const role = localStorage.getItem('role')

  return (
    <div className="navContainer">
      <img className="logo" src={logo} />
      <div className="bar">


        <ul>
          <li onClick={() => navigate('/')}>Home</li>
          {role !== 'admin' && <li onClick={() => navigate('/Watchs')}>Watchs</li>}
          {role !== 'admin' && <li onClick={() => navigate('/SmartWatch')}>SmartWatch</li>}
          {role !== 'admin' && <li onClick={() => navigate('/ReflexTunes')}>ReflexTunes</li>}
          {role !== 'admin' && <li onClick={() => navigate('/Sale')}>Sale</li>}
          {role !== 'admin' && <li onClick={() => navigate('/Accessories')}>Accessories</li>}
          {role === 'admin' ? <>
            <li onClick={() => navigate('/Watchs1')}>Watchs</li>
            <li onClick={() => navigate('/Add')}>Add</li></> : <></>}
          {role === null ? <button onClick={() => { navigate('/login') }}>Login </button> : <></>}
          {role !== null ? <button onClick={() => { localStorage.removeItem('role'); window.location.reload() }}>Logout </button> : <></>}
          <button onClick={() => { navigate('/register') }}>Register </button>
        </ul>
      </div>
    </div>
  )
}