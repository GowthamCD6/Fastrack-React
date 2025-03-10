import React, { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios'
import "../../style/Add.css"

const Add = () => {
  const [watch, setWatch] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  })

  // const navigate = useNavigate();
  // useEffect(() => {
  //   const role = localStorage.getItem("role");
  //   if (role !== "admin") {
  //     navigate("/login");
  //   }
  // }, [navigate]);

  const handleChange = (e) => {
    setWatch((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = async e => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:8800/watchs", watch)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='form'>
      <h1>Add new Watch</h1>
      <input type="text" placeholder='Title of the Watche' onChange={handleChange} name="title" />
      <input type="text" placeholder='desc' onChange={handleChange} name="desc" />
      <input type="number" placeholder='Price of the Watche' onChange={handleChange} name="price" />
      <input type="text" placeholder='Image link' onChange={handleChange} name="cover" />
      <input type="text" placeholder='Type to image UL' onChange={handleChange} name="type" />
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Add
