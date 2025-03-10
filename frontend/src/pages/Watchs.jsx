import React from 'react'
import Header from '../component/Header'
import { useState, useEffect } from 'react'
import axios from 'axios'
import "../style/Watchs.css"
import smartimg from '../assets/img2.png'
import fun from '../assets/fun.png'
import end from '../assets/end.png'

export default function Watchs() {

  const [watchs, setWatchs] = useState([])

  useEffect(() => {
    const fetchAllWatchs = async () => {
      try {
        const res = await axios.get("http://localhost:8800/awatch")
        setWatchs(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchAllWatchs()
  }, [])



  return (

    <div className="watchBox">

      <div className="location">
        <p> Select a location to check product availability</p>
      </div>
      <div className='HW'>
        <p>Home 🡲 Watchs</p>
      </div>

      <div className="smartimg">
        <img src={smartimg} alt="" />
      </div>

      <div className="HR">
        <hr />
        <p>53 items found for  "Watchs"</p>
        <hr />
      </div>

      <div className="watchs">
        {watchs.map(watch => (
          <div className="watch" key={watch.id}>
            {watch.cover && <img className="    WI" src={watch.cover} />}
            <h2>{watch.title}</h2>
            <p>{watch.desc}</p>
            <span>${watch.price}</span>
          </div>
        ))}
      </div>

      <div className="function">
      <img src={fun} alt="" />
      </div>
      <div className="endpoint">
      <img src={end} alt="" />
      </div>
    </div>

  )

}



