import React from 'react'
import Header from '../component/Header'
import { useState, useEffect } from 'react'
import axios from 'axios'
import "../style/SmartWatch.css"
import watchimg from '../assets/img1.png'
import fun from '../assets/fun.png'
import end from '../assets/end.png'

export default function SmartWatch() {
    const [watchs, setWatchs] = useState([])

    useEffect(() => {
        const fetchAllWatchs = async () => {
            try {
                const res = await axios.get("http://localhost:8800/smartwatchs")
                setWatchs(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllWatchs()
    }, [])

    return (

        <div className="smartwatchBox">


            <div className="location">
                <p> Select a location to check product availability</p>
            </div>

            <div className='HW'>
                <p>Home 🡲 SmartWatch</p>
            </div>

            <div className="watchimg">
                <img src={watchimg} alt="" />
            </div>

            <div className="HR">
                <hr />
                <p>34 items found for  "SmartWatchs"</p>
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