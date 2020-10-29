import React from 'react'

function MerchItem(props) {
    return (
        <div className="item">
            <a target="_blank" href={props.item.link}>
                <img src={props.item.img} alt={props.name} />
                <div className='lable'>
                    <div className='item-price'>
                        <h1>{props.item.name}</h1>
                        <p>{props.item.type}</p>
                    </div>
                    <p>{"$" + props.item.price}</p>
                </div>
            </a>
        </div>
    )
}

export default MerchItem