import { useEffect, useState } from "react"

import React from 'react'

export default function Direct() {

    const [displayBuy, setDisplayBuy] = useState(false)
    const [displaySell, setDisplaySell] = useState(false)
    const [transaction, setTransaction] = useState(false)
    const [coins, setCoins] = useState(['BTC', 'BNB', 'XRP', 'LTC'])
    const [currentCoin, setCurrentCoin] = useState('')
    const [amount, setAmount] = useState('')
    const [walletCoins, setWalletCoins] = useState([]);


    useEffect(() => {
        //on mount 
        fetchWallet();

        return () => {
            //on dismount
        }
        //depenencies
    }, [transaction])

    const fetchWallet = async () => {
        const data = await fetch('http://localhost:8080/api/user/wallet');
        const coins = await data.json();
        setWalletCoins(coins);
    }

    const displayBuyComp = () => {
        setDisplayBuy(!displayBuy)
        setDisplaySell(false)
    }

    const displaySellComp = () => {
        setDisplaySell(!displaySell)
        setDisplayBuy(false)
    }

    const onClickBuy = () => {
        fetchBuy()
        setTransaction(!transaction)
    }

    const onClickSell = () => {
        fetchSell()
        setTransaction(!transaction)
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

    const fetchSell = () => {
        fetch('http://localhost:8080/api/directorder/sell', {
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

                <div class="flex-container">
                    <div class="flex-child">
                        <h2>Buy</h2>
                        <div>
                            Coin:
                            <select onChange={(e) => setCurrentCoin(e.target.value)}>
                                <option>select coin</option>
                                {coins.map(coin => (
                                    <option value={coin}>{coin}</option>
                                ))}
                            </select>
                        </div>

                        <label for="fname">Amount </label>
                        <input type="text" onChange={(e) => setAmount(e.target.value)} />
                        <br />
                        <button onClick={onClickBuy}>Buy</button>
                    </div>
                    <div class="flex-child">
                        <h1>Wallet</h1>
                        {walletCoins.map(coin => (
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
                <div className="flex-container">
                    <div class="flex-child">
                        <h2>Sell</h2>
                        <div>
                            Coin:
                            <select onChange={(e) => setCurrentCoin(e.target.value)}>
                                <option>select coin</option>
                                {walletCoins.map(coin => (
                                    <option value={coin.asset}>{coin.asset}</option>
                                ))}
                            </select>
                        </div>

                        <label for="fname">Amount </label>
                        <input type="text" onChange={(e) => setAmount(e.target.value)} />
                        <br />
                        <button onClick={onClickSell}>Sell</button>
                    </div>
                    <div class="flex-child">
                        <h1>Wallet</h1>
                        {walletCoins.map(coin => (
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
                <div class="flex-container">
                    <div class="flex-child green">
                        <h1>Wallet</h1>
                        {walletCoins.map(coin => (
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
                </div>
            </div>
        );
    }
}




