import { useEffect, useState } from "react";

function Wallet() {

  useEffect(() =>{
    fetchWallet();
  },[]);

  const [coins, setCoins] = useState([]);

  const fetchWallet = async() =>{
      const data = await fetch('http://localhost:8080/api/user/wallet');
      const coins = await data.json();
      setCoins(coins);
  }

    return (
      <div>
          <h1>Wallet</h1>
          {coins.map(coin =>(
            <div>
              <div>
              <h3>{coin.asset} </h3>
              </div>
              <div>
              free: {coin.free} locked: {coin.locked}
              </div>
            </div>
          ))}
      </div>
    );
  }
  
  export default Wallet