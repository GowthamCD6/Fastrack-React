import React from 'react'
import '../style/Slider.css'
import sliderimg1 from '../assets/img1.png'
import sliderimg2 from '../assets/img2.png'
import sliderimg3 from '../assets/img3.png'
import sliderimg4 from '../assets/img4.png'
import sliderimg5 from '../assets/img5.png'
import sliderimg6 from '../assets/img6.png'

const Slider = () => {
    return (
        <div className="title1">
            <div className="slider">
                <div className='wrapper'>
                    <img src={sliderimg1} alt="" />
                    <img src={sliderimg2} alt="" />
                    <img src={sliderimg3} alt="" />
                    <img src={sliderimg4} alt="" />
                    <img src={sliderimg5} alt="" />
                    <img src={sliderimg6} alt="" />
                </div>
            </div>
        </div>

    )
}

export default Slider