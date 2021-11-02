import { useEffect, useState } from "react"

import React from 'react'

export default function Direct() {

    const [displayBuy, setDisplayBuy] = useState(false)
    const [displaySell, setDisplaySell] = useState(false)
    const [coins, setCoins] = useState(['BTC', 'BNB', 'XRP', 'LTC'])
    const [currentCoin, setCurrentCoin] = useState('')
    const [amount, setAmount] = useState('')


    useEffect(() => {
        //on mount 
    
        return () => {
            //on dismount
        }
        //depenencies
    }, [])


    const displayBuyComp = () => {
        setDisplayBuy(!displayBuy)
        setDisplaySell(false)
    }

    const displaySellComp = () => {
        setDisplaySell(!displaySell)
        setDisplayBuy(false)
    }

    const fetchBuy = () => {
        fetch('http://localhost:8080/api/directorder/buy', {
            method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
            body: JSON.stringify({
                coin: currentCoin,
                amount: amount
            })
        })
    }

    if (displayBuy) {
        return (
            <div>
                <div>
                    <button className="buttonsell" onClick={displayBuyComp}>Buy</button>
                    <button className="buttonbuy" onClick={displaySellComp}>Sell</button>
                </div>
                <div>
                    <h2>Buy</h2>
                    <div>
                        Coin:
                        <select onChange={(e) => setCurrentCoin(e.target.value)}>
                            <option disabled>select coin</option>
                            {coins.map(coin => (
                                <option value={coin}>{coin}</option>
                            ))}
                        </select>
                    </div>

                    <label for="fname">Amount </label>
                    <input type="text" onChange={(e) => setAmount(e.target.value)} />
                    <br />
                    <button onClick={fetchBuy}>Buy</button>
                </div>
            </div>
        );
    }

    if (displaySell) {
        return (
            <div>
                <div>
                    <button className="buttonsell" onClick={displayBuyComp}>Buy</button>
                    <button className="buttonbuy" onClick={displaySellComp}>Sell</button>
                </div>
                <div>
                    <h2>Sell</h2>
                </div>
            </div>
        );

    } else {
        return (
            <div>
                <div>
                    <button className="buttonsell" onClick={displayBuyComp}>Buy</button>
                    <button className="buttonbuy" onClick={displaySellComp}>Sell</button>
                </div>
            </div>
        );
    }
}




