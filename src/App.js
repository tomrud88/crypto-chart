
import './App.css';
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Coin from './Coin';


function App(){
  const [coins,setCoins] = useState([]);
  const [search,setSearch] = useState('');

  useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res =>{
      setCoins(res.data)
    }).catch(error=>console.log(error))
  },[])

  const handleChange = e =>{
  setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase()) 
  )

  return(
         <div className='app-container'>
           <div className='search-box'>
           <h1 className='coin-text'>Search cryptocurrency</h1>
           <form>
           <input type='text' className='search-input' placeholder='search'
           onChange={handleChange}/>
           </form>
           </div>
           <div className='panel'>
           <head className='bar'>
             <p className='coin-bar'>Coin</p>
             <p>Price</p>
             <p>24h Volume</p>
             <p>24h Change</p>
             <p>Mkt Cap</p>
           </head>
           <div className='coins'>
            {filteredCoins.map(coin=>{
             return <Coin
                      key={coin.id}
                      name={coin.name}
                      symbol={coin.symbol}
                      image={coin.image}
                      price={coin.current_price}
                      volume={coin.total_volume}
                      priceChange={coin.price_change_percentage_24h}
                      marketcap={coin.market_cap}
                    />           
            })}
            </div>
            </div>
         </div>
  )
}

export default App;
