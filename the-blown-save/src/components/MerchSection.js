import React, {useState} from 'react';
import MerchItem from './MerchItem.js'
import merchData from '../data/merch_data.js'
import LeftArrow from '../imgs/left_arrow.png'
import RightArrow from '../imgs/right_arrow.png'

function MerchSection() {
    const merch = merchData
    const [x, setX] = useState(0)
    let GoLeft =()=>{
        if(x < 0){
            setX(x+100)
        } else {
            setX(200 + (-100 * (merchData.length - 1)))
        }
        console.log(x)
    }
    let GoRight = ()=>{

        if(x > 200 + (-100 * (merchData.length - 1))) {
            setX(x-100)
        } else {
            setX(0)
        }
        console.log(x)

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
            <button className='goLeft' onClick={GoLeft}> <img src={LeftArrow} alt="Left"/> </button>
            <button className='goRight' onClick={GoRight}> <img src={RightArrow} alt="right"/> </button>
        
        </div>
    )
}

export default MerchSection;