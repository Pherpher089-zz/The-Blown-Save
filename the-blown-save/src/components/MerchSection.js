import React, {useState} from 'react';
import MerchItem from './MerchItem.js'
import merchData from '../data/merch_data.js'
import LeftArrow from '../imgs/left_arrow.png'
import RightArrow from '../imgs/right_arrow.png'

function MerchSection() {
    const merch = merchData
    const [x, setX] = useState(0)
    let GoLeft =()=>{
        setX(x+100)
    }
    let GoRight = ()=>{
        console.log(x)
        setX(x-100)
    }
    return(
        <div className='merch-container'>
            <div className='title-section'>
                <h1>Get your hands on exclusive Blown Save merch</h1>
            </div>
            <div className="carousel">
                    {merch.map((item, index) => (
                        <div className='item-container' style={{transform: `translateX(${x}%)`}}>
                            <MerchItem item={item} />
                        </div>
                    ))}
            </div>
            <button id='goLeft' onClick={GoLeft}>Left</button>
            
            <button id='goRight' onClick={GoRight}>Right</button>
            {/* <img src={LeftArrow} alt="left" id='goLeft' onClick={GoLeft} />
            <img src={RightArrow} alt="right" id='goRight' onClick={GoRight}/> */}
        </div>
    )
}

export default MerchSection;