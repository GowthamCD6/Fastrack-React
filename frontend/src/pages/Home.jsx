import React from 'react'
import '../style/Home.css'
import Slider from '../component/Slider'
import Header from '../component/Header'
import image1 from '../assets/mod1.jpg'
import image2 from '../assets/mod2.webp'
import image3 from '../assets/mod3.jpg'
import image4 from '../assets/mod4.webp'
import image5 from '../assets/mod5.png'
import offimg from '../assets/offimg.png'
import image11 from '../assets/mod1.1.png'
import image22 from '../assets/mod1.2.png'
import image33 from '../assets/mod1.3.png'
import { useState, useEffect } from 'react'
import axios from 'axios'
import fun from '../assets/fun.png'
import end from '../assets/end.png'
import { Link } from 'react-router-dom'

export default function Home() {
    const [watchs, setWatchs] = useState([])

    useEffect(() => {
        const fetchAllWatchs = async () => {
            try {
                const res = await axios.get("http://localhost:8800/home")
                setWatchs(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllWatchs()
    }, [])

    return (
        <div>
            {/* <Header/> */}

            <div className="location">
                <p> Select a location to check product availability</p>
            </div>
            <Slider />
            <div className="modles">
                <div className="mod">
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                    <img src={image3} alt="" />
                    <img src={image4} alt="" />
                    <img src={image5} alt="" />
                </div>
            </div>

            <div className="off">
                <img src={offimg} />
            </div>

            <div className="titleH">
                <h1>TRENDING</h1>
            </div>

            <div className="watchs">
                {watchs.map(watch => (
                    <div className="watch" key={watch.id}>
                        {watch.cover && <img className="WI" src={watch.cover} />}
                        <h2>{watch.title}</h2>
                        <p>{watch.desc}</p>
                        <span>₹{watch.price}</span>
                    </div>
                ))}
            </div>

            <div className="titleH">
                <h1>SHOP YOUR VIBE</h1>
            </div>
            <div className="modles1">
                <div className="mod1">
                    <img src={image11} alt="" />
                    <img src={image22} alt="" />
                    <img src={image33} alt="" />
                </div>
            </div>

            <div className="function">
                <img src={fun} alt="" />
            </div>
            <div className="endpoint">
                <img src={end} alt="" />
            </div>


        </div >
    )

}
