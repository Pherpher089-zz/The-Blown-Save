import React, { useState, useEffect } from 'react';
import MerchItem from './MerchItem.js'
import merchData from '../data/merch_data.js'
import LeftArrow from '../imgs/left_arrow.png'
import RightArrow from '../imgs/right_arrow.png'

function MerchSection() {
    const merch = merchData
    const [x, setX] = useState(0)

    let GoLeft = () => {
        if (x < 0) {
            setX(x + 100)
        } else {
            setX(200 + (-100 * (merchData.length - 1)))
        }
    }
    let GoRight = () => {
        if (x > 200 + (-100 * (merchData.length - 1))) {
            setX(x - 100)
        } else {
            setX(0)
        }
    }

    useEffect(() => {
        // const interval = setInterval(() => {
        //     console.log('This will run every second!');
        //     GoRight()
        // }, 1000);
        // //return () => clearInterval(interval);
    }, []);

    return (
        <div className='merch-container'>
            <div className='title-section'>
                <h1>Get your hands on exclusive Blown Save merch</h1>
            </div>
            <div className="carousel">
                {merch.map((item, index) => (
                    <div className='item-container' style={{ transform: `translateX(${x}%)`/*if we need to adjust transition time, this is where it goes*/ }}>
                        <MerchItem item={item} />
                    </div>
                ))}
            </div>
            <div className='bottom-banner'>
                <h1>See more The Blown Save merch <a target="_blank" href='https://teespring.com/stores/the-blown-save'>here</a></h1>
            </div>
            <button className='goLeft' onClick={GoLeft}> <img src={LeftArrow} alt="Left" /> </button>
            <button className='goRight' onClick={GoRight}> <img src={RightArrow} alt="right" /> </button>

        </div>
    )
}

export default MerchSection;