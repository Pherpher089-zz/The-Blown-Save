import React from 'react'

function MerchItem(props) {
    return(
        <div className="item">
            <img src={props.item.img} alt={props.name}/>
            <div className='lable'>
                <div>
                    <h1>{props.item.name}</h1>
                    <p>{props.item.type}</p>
                </div>
                <p>{"$"+props.item.price}</p>
            </div>
        </div>
    )
}

export default MerchItem