import React, { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'
import '../../style/Watchs1.css'
import { Link } from "react-router-dom";

const Watchs1 = () => {
    const [watchs, setWatchs] = useState([])

    useEffect(() => {
        const fetchAllWatchs = async () => {
            try {
                const res = await axios.get("http://localhost:8800/watchs")
                setWatchs(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllWatchs()
    }, [])

    const handleDelete = async (id)=>{
        try{
            await axios.delete("http://localhost:8800/watchs/"+id)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className="Add">
            <h1>Fastrack Watch Shop</h1>
            <div className="watchs">
                {watchs.map(watch => (
                    <div className="watch" key={watch.id}>
                        {watch.cover && <img className="    WI" src={watch.cover} />}
                        <hr className="hr"/>
                        <h2>{watch.title}</h2>
                        <p>{watch.desc}</p>
                        <p>{watch.type}</p>
                        <span>${watch.price}</span>
                        <button className="delect" onClick={()=>handleDelete(watch.id)}>Delete</button>
                        <button className="update"><Link to={`/updates/${watch.id}`}>Update</Link></button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Watchs1










