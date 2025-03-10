import React from 'react'
import Header from '../component/Header'
import { useState, useEffect } from 'react'
import axios from 'axios'
import "../style/Access.css"
import fun from '../assets/fun.png'
import end from '../assets/end.png'
import accessimg from '../assets/img6.png'
import { useNavigate } from 'react-router-dom'


export default function Accessories() {
    const [watchs, setWatchs] = useState([])

    useEffect(() => {
        const fetchAllWatchs = async () => {
            try {
                const res = await axios.get("http://localhost:8800/accessories")
                setWatchs(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllWatchs()
    }, [])
    return (
        <div className="AccessBox">
            <div className="location">
                <p> Select a location to check product availability</p>
            </div>

            <div className='HW'>
                <p>Home 🡲 Accessories</p>
            </div>

            <div className="watchimg">
                <img src={accessimg} alt="" />
            </div>

            <div className="HR">
                <hr />
                <p>17 items found for  "Accessories"</p>
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
