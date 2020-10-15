import React from 'react';
import MerchItem from './MerchItem.js'
import merchData from '../data/merch_data.js'

function MerchSection() {
    const merch = merchData
    return(
        <div className='merch-container'>
            <div className='title-section'>
                <h1>Get your hands on exclusive Blown Save merch</h1>
            </div>
            <div className="carousel">
                {merch.map(item => (
                    <MerchItem item={item} />
                ))}
            </div>
        </div>
    )
}

export default MerchSection;