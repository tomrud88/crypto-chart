import React from 'react'
import './Coin.css'

const Coin = ({name,symbol,image,marketcap,volume,price,priceChange}) => {
    return (
        <div className='coin-container'>
            <div className='coin-row'>
            <div className='coin'>
            <img src={image}/>
            <h1>{name}</h1>
            <p className='coin-symbol'>{symbol.toUpperCase()}</p>
            </div>
        <div className='coin-data'>
            <p className='coin-price'>{price}</p>
            <p className='coin-volume'>{volume.toLocaleString()}</p>
            {priceChange > 0 
            ? (<p className='percent-change green'>{priceChange.toFixed(2)}</p>)
            : (<p className='percent-change red'>{priceChange.toFixed(2)}</p>)}
            <p className='marketcap'>{marketcap.toLocaleString()}</p>
        </div>
        </div>
        </div>
    )
}

export default Coin

