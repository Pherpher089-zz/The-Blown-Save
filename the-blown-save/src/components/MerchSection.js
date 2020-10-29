import React, { useState, useEffect } from 'react';
import MerchItem from './MerchItem.js'
import merchData from '../data/merch_data.js'
import LeftArrow from '../imgs/left_arrow.png'
import RightArrow from '../imgs/right_arrow.png'

function MerchSection() {
    const merch = merchData
    const [x, setX] = useState(0)
    //number of seconds before the carousel starts cycling it's self again.
    const noUserInputInterval = 5;
    /*This will be set to TRUE when the user has manually cycled the carousel to prevent it from moving when the user is actively cycling through merch. It will be set to false on a timer*/
    const [userCycle, setUserCycle] = useState(false)
    let counter = 0;


    let GoLeft = () => {
        if (x < 0) {
            setX(x + 100)
        } else {
            setX(200 + (-100 * (merchData.length - 1)))
        }
        setUserCycle(true)
    }
    let GoRight = () => {
        if (x > 200 + (-100 * (merchData.length - 1))) {
            setX(x - 100)
        } else {
            setX(0)
        }
        setUserCycle(true)
    }
    return (
        <div className='merch-container'>
            <div className='title-section'>
                <h1>Get your hands on exclusive Blown Save merch</h1>
            </div>
            <div className="carousel">
                {merch.map((item, index) => (
                    <div className='item-container' style={{ transform: `translateX(${x}%)` }}>
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